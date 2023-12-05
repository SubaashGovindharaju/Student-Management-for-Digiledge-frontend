import { useState } from "react";
import { addUser } from "../../Usercrud";
import { useNavigate } from "react-router-dom";
import styles from './Createstudent.module.css';

const Createstudent = () => {
  const initialState = {
    Name: "",
    Gender: "",
    Age: "",
    Image: null,
  };

  const Navigate = useNavigate();
  const [formData, setFormData] = useState(initialState);
  const [imagePreview, setImagePreview] = useState(null);

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "Image" && files && files.length > 0) {
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
  
    // Create a new FormData object
    const formDataToSend = {
        Name: formData.Name,
        Gender: formData.Gender,
        Age:formData.Age,
        Image: formData.Image,
    }
  
    // Append form data fields to the FormData object
    // formDataToSend.append("Name", formData.Name);
    // formDataToSend.append("Gender", formData.Gender);
    // formDataToSend.append("Age", formData.Age);
    // formDataToSend.append("Image", formData.Image);
    // Append the image file to the FormData object
    
  
    // Log individual properties of FormData for debugging
    // console.log("FormData to Send - Name:", formDataToSend.get("Name"));
    // console.log("FormData to Send - Gender:", formDataToSend.get("Gender"));
    // console.log("FormData to Send - Age:", formDataToSend.get("Age"));
    // console.log("FormData to Send - Image:", formDataToSend.get("Image"));
  
    // console.log("FormData to Send:", formDataToSend);
  
    try {
      // Call the addUser function with the FormData object
      await addUser(formDataToSend);
  
      // Reset form state
      setFormData(initialState);
      Navigate('/user');
    } catch (error) {
      console.error('Error adding user:', error.message);
    }
  };
  
  return (
    <div className={styles.outerbox}>
      <div className={styles.box}>
        <h1>Create Student</h1>
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
            className='btn btn-primary'
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

export default Createstudent;