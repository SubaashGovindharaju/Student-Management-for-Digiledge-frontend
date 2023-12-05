// import React from 'react';
import './Profile.css'
const Profile = () => {
    return (
        <div>
            <div style={{paddingTop:"50px"}} className="container bootstrap snippets bootdey">
                <div style={{backgroundColor:"white"}}  className="panel-body inf-content">
                    <div className="row">
                        <div className="col-md-4">
                            <img alt="" style={{/*width:600px;*/ }} title="" className="img-circle img-thumbnail isTooltip" src="https://bootdey.com/img/Content/avatar/avatar7.png" data-original-title="Usuario" />
                            <ul title="Ratings" className="list-inline ratings text-center">
                                <li><a href="#/"><span className="glyphicon glyphicon-star"></span></a></li>
                                <li><a href="#/"><span className="glyphicon glyphicon-star"></span></a></li>
                                <li><a href="#/"><span className="glyphicon glyphicon-star"></span></a></li>
                                <li><a href="#/"><span className="glyphicon glyphicon-star"></span></a></li>
                                <li><a href="#/"><span className="glyphicon glyphicon-star"></span></a></li>
                            </ul>
                        </div>
                        <div className="col-md-6">
                            <strong>Information</strong><br />
                            <div className="table-responsive">
                                <table className="table table-user-information">
                                    <tbody>
                                        <tr>
                                            <td>
                                                <strong>
                                                    <span className="glyphicon glyphicon-asterisk text-primary"></span>
                                                    Identificacion
                                                </strong>
                                            </td>
                                            <td className="text-primary">
                                                123456789
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <strong>
                                                    <span className="glyphicon glyphicon-user  text-primary"></span>
                                                    Name
                                                </strong>
                                            </td>
                                            <td className="text-primary">
                                                subaash
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <strong>
                                                    <span className="glyphicon glyphicon-cloud text-primary"></span>
                                                    Last Name
                                                </strong>
                                            </td>
                                            <td className="text-primary">
                                                G
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>
                                                <strong>
                                                    <span className="glyphicon glyphicon-bookmark text-primary"></span>
                                                    Username
                                                </strong>
                                            </td>
                                            <td className="text-primary">
                                                Subaash G
                                            </td>
                                        </tr>


                                        
                                        <tr>
                                            <td>
                                                <strong>
                                                    <span className="glyphicon glyphicon-envelope text-primary"></span>
                                                    Email
                                                </strong>
                                            </td>
                                            <td className="text-primary">
                                                noreply@email.com
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <strong>
                                                    <span className="glyphicon glyphicon-calendar text-primary"></span>
                                                    created
                                                </strong>
                                            </td>
                                            <td className="text-primary">
                                                20 jul 2014
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <strong>
                                                    <span className="glyphicon glyphicon-calendar text-primary"></span>
                                                    Teacher
                                                </strong>
                                            </td>
                                            <td className="text-primary">
                                               Sam Anterson
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Profile;