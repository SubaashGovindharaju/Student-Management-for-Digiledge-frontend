import { useEffect, useState } from "react";
import { displayImages } from "../../Usercrud";
import { Link } from 'react-router-dom';
import styles from "./Liststudent.module.css";
const Liststudent = () => {
    const [users, setUsers] = useState([]);

    const loadUsers = async () => {
        const response = await displayImages();
        setUsers(response);
    }

    useEffect(() => {
        loadUsers();


        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <div>        
            <table className={styles.table}>
                <tbody>
                <tr className={styles.tr}>
                <th className={styles.th}>S.NO</th>

                    <th className={styles.th}> Name</th>
                    <th className={styles.th}>Age</th>
                    <th className={styles.th}>Gender</th>
                    <th className={styles.th}>Image</th>
                </tr>

                {users.map((user) => (

                    <tr className={styles.tr}   key={user._id}>
                        <td className={styles.td}>{user._id}</td>
                        <td className={styles.td}>{user.Name}</td>
                        <td className={styles.td}>{user.Age}</td>
                        <td className={styles.td}>{user.Gender}</td>
                        <td className={styles.td}><Link to={`/user/${user._id}`}>
                            <img className={styles.img}    src={`data:image/png;base64,${user.Image}`} alt={user.Name} /></Link></td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default Liststudent;