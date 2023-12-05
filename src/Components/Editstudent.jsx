// Editstudent.jsx
import { useEffect, useState } from 'react';
import { getStudentById, updateUser } from '../../Usercrud';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import styles from './Editstudent.module.css';

const Editstudent = () => {

    const location = useLocation();
const params = new URLSearchParams(location.search);
const studentId = params.get('id');

    // const { studentId } = useParams();
    console.log(studentId)
  const initialState = {
    Name: '',
    Gender: '',
    Age: '',
    Image: null,
  };


  const [formData, setFormData] = useState(initialState);
  const [imagePreview, setImagePreview] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const loadStudent = async () => {
      try {
        const response = await getStudentById(studentId);
        setFormData(response);
        if (response.Image) {
          const reader = new FileReader();
  
          // Ensure that response.Image is a Blob before reading it
          if (response.Image instanceof Blob) {
            reader.readAsDataURL(response.Image);
            
            reader.onload = () => {
              setImagePreview(reader.result);
            };
          }
          console.log('Reader Result:', reader.result);

        }
        console.log('Response Image:', response.Image);

      } catch (error) {
        console.error('Error loading student:', error.message);
        // Handle error appropriately
      }
    };
  
    loadStudent();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [studentId]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === 'Image' && files && files.length > 0) {
      const file = files[0];

      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = () => {
        setImagePreview(reader.result);
      };

      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: file,
      }));
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formDataToSend = {
        Name: formData.Name,
        Gender: formData.Gender,
        Age: formData.Age,
        Image: formData.Image,
      };

      await updateUser(studentId, formDataToSend);

      setFormData(initialState);
      setImagePreview(null);

      navigate('/user/' + studentId);
    } catch (error) {
      console.error('Error updating student:', error.message);
      // Handle error appropriately
    }
  };


  return (
    <div className={styles.outerbox}>
      <div className={styles.box}>
        <h1>Edit Student</h1>
        <form encType="multipart/form-data" method="post" action="/upload" onSubmit={handleSubmit} style={{ padding: '16px' }}>
          <div style={{ padding: 4 }}>
            <label htmlFor="Name">Name:</label>
            <input
              type="text"
              id="Name"
              name="Name"
              value={formData.Name}
              onChange={handleChange}
              required
            />
          </div>
          <div style={{ padding: 4 }}>
            <label htmlFor="Gender">Gender:</label>
            <input
              type="text"
              id="Gender"
              name="Gender"
              value={formData.Gender}
              onChange={handleChange}
              required
            />
          </div>
          <div style={{ padding: 4 }}>
            <label htmlFor="Age">Age:</label>
            <input
              type="text"
              id="Age"
              name="Age"
              value={formData.Age}
              onChange={handleChange}
              required
            />
          </div>
          <div style={{ padding: 4 }}>
            <label htmlFor="Image">Image:</label>
            <input
              type="file"
              name="Image"
              accept="image/*"
              onChange={handleChange}
              required
            />
            {imagePreview && (
              <img
                src={imagePreview}
                alt="Image Preview"
                style={{ maxWidth: '100%', marginTop: 10 }}
              />
            )}
          </div>
          <button
            className="btn btn-primary"
            type="submit"
            style={{ marginTop: 15, padding: 10, width: 100 }}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Editstudent;
