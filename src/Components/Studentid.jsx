import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { deleteUser, getStudentById } from "../../Usercrud";
// import { getStudentById } from "./StudentApi"; // Adjust the path accordingly
import styles from "./Studentid.module.css";

const Studentid = () => {
  const { studentId } = useParams();
  const [student, setStudent] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStudentDetails = async () => {
      try {
        const studentData = await getStudentById(studentId);
        setStudent(studentData);
      } catch (error) {
        setError("Error fetching student details");
      }
    };

    fetchStudentDetails();
  }, [studentId]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!student) {
    return <div>Loading...</div>;
  }
  const removeStudent = async () => {
    try {
      await deleteUser(student._id);
      // Redirect to the list of students after successful deletion
      // You can use useHistory hook for this purpose
      // Example: history.push('/user');
      console.log("Student deleted successfully");
    } catch (error) {
      console.error("Error deleting student", error);
    }
  };
  return (
    <div className={styles.body}>
      <div className={styles.outerbox}>
        <div className={styles.box}>
          <div className={styles.profile}>
            {/* <img className={styles.img} src={profileData.image} alt="" /> */}
            {student.Image && (
              <img
                className={styles.img}
                src={`data:image/png;base64,${student.Image}`}
                alt={student.Name}
              />
            )}

            <h2>{student.Name}</h2>
            <h3>AGE: {student.Age}</h3>
            <h3>Gender:{student.Gender}</h3>
            <div className={styles.button}>
              <Link
                style={{ textDecoration: "none" }}
                to={`/user/Edituser?id=${student._id}`}
              >
                <button className={` btn btn-primary ${styles.button}`}>
                  EDIT
                </button>
              </Link>
              <Link style={{ textDecoration: "none" }} to={`/user`}>
                {" "}
                <button
                  className={` btn btn-primary ${styles.button}`}
                  onClick={removeStudent}
                >
                  Delete
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>

    //   <div>
    //     <h1>{student.Name}</h1>
    //     <p>Gender: {student.Gender}</p>
    //     <p>Age: {student.Age}</p>
    //     {student.Image && <img src={`data:image/png;base64,${student.Image}`} alt={student.Name} />}
    //   </div>
  );
};

//     const [profileData, setData] = useState({
//         Name: "",
//         Gender: "",
//         Age: "",
//         image: ""
//     });
//     const loadUsers = async () => {
//         const response = await displayIdImages(studentId);
//         setData(response);
//     }

//     useEffect(() => {
//         loadUsers();
//         // eslint-disable-next-line react-hooks/exhaustive-deps
//     }, []);

//     const removeFromUi = async (userId) => {
//         // eslint-disable-next-line no-unused-vars
//         const response = await deleteUser(userId);
//         const newUser = profileData.filter(({ id }) => userId !== id);
//         setData(newUser);
//     }
//     return (
// <div className={styles.body}>
//     <div className={styles.outerbox}>
//         <div className={styles.box}>
//             <div className={styles.profile}>
//                 <img className={styles.img} src={profileData.image} alt="" />
//                 <h2>{profileData.Name}</h2>
//                 <h3>AGE: {profileData.Age}</h3>
//                 <h3>Gender:{profileData.Gender}</h3>
//                 <div className={styles.button}>
//                     <Link style={{ textDecoration: 'none' }} to={`/user/Edituser?id=${profileData._id}`}>
//                         <button className={` btn btn-primary ${styles.button}`}>EDIT</button>
//                     </Link>
//                     <Link style={{ textDecoration: 'none' }} to={`/user`}> <button className={` btn btn-primary ${styles.button}`} onClick={() => removeFromUi(profileData.id)} >Delete</button></Link>
//                 </div>
//             </div>
//         </div >
//     </div>
// </div>
//     );
// }

export default Studentid;
