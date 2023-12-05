import { useEffect, useState } from "react";
import styles from "./Home.module.css";
import { displayImages } from "../../Usercrud";
import { Link } from "react-router-dom";

const Home = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const loadUsers = async () => {
    try {
      const response = await displayImages();
      setUsers(response);
    } catch (error) {
      console.error("Error fetching users:", error.message);
      setError("Error fetching users");
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <div className={styles.body}>
    <div className={`container`}>
      <div className="row">
        {error && <div>Error: {error}</div>}
        {users.map((user) => (
          <div key={user._id} className={`${styles.col} col`}>
            <div className={`${styles.card} card`}>
              <Link to={`/user/${user._id}`}>
                  {user.Image ? (
                    <img className={styles.img}
                      src={`data:image/png;base64,${user.Image}`}
                      alt={user.Name}
                    />
                  ) : (
                    <div>No Image</div>
                  )}
                </Link>
                <div className={`card-body`}>
                  <h4>{user.Name}</h4>
                  <h6>Age: {user.Age}</h6>
                  <h6>Gender: {user.Gender}</h6>
                  <h6>id:{user._id}</h6>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
