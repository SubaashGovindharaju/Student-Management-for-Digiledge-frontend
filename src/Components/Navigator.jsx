/* eslint-disable react/no-unknown-property */
// import styles from './Navigator.module.css';
import Home from "./Home";
import Liststudent from "./Liststudent";
import Profile from "./Profile";
import Createstudent from "./Createstudent";
import Editstudent from "./Editstudent";
import Studentid from "./Studentid";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

const Navigator = () => {
    return (
        <BrowserRouter>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="/user" className="nav-link active" aria-current="page" >Dashboard</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/user/Liststudent" className="nav-link active"  > Students</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/user/createstudent" className="nav-link active"  > Add Students</Link>
                            </li>
                        </ul>
                    </div>
                    <div >
                        <Link to="/user/Profile" className="nav-link active"  > Profile</Link>
                    </div>
                </div>
            </nav>

            <Routes>
                <Route index path='/' element={<Home />} />
                <Route path="user">
                    <Route index element={<Home />} />
                    <Route path="Liststudent" element={<Liststudent />} />
                    <Route path="createstudent" element={<Createstudent />} />
                    <Route path="Profile" element={<Profile />} />
                    <Route path="Edituser" element={< Editstudent />} />
                    <Route path=":studentId" element={< Studentid />} />
                </Route>
                <Route path='/404' element={<h3>Page not found ,please check url</h3>} />
                <Route path='*' element={<Navigator to={'/404'} replace />} />
            </Routes>

        </BrowserRouter >
    );

}
export default Navigator;