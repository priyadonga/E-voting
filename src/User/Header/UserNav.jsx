import { MdSpaceDashboard } from "react-icons/md";
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import { FaUser } from 'react-icons/fa6';
import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const UserNav = () => {
    const [open, setOpen] = React.useState(false);
    //   get User Info
    const getUser = () => {
        const userData = JSON.parse(localStorage.getItem("userData"));
        return userData;
    };
    let userData = getUser();


    const location = useLocation();

    // Function to handle logout
    const handleLogout = () => {

        window.location.href = '/'

        localStorage.clear()
        window.location.reload();
    };

    return (
        <div className="sidebar bg-dark text-white p-3">
            <div className="logo text-center mb-3 w-50">
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRADpfeWoT-oOJ5Ip2X5JugYmj06CO0H5Rt0gtygESLzN3qCEez2Rb0zSGWNyI920QrTfY&usqp=CAU"
                    alt="E-Voting System Logo"
                    className="img-fluid m-4"
                />
            </div>
            <ul className="menu list-unstyled">
                <li className={`menu-item ${location.pathname === '/home' ? 'active' : ''}`}>
                    <Link to="/home" className="text-white">Home</Link>
                </li>
                <li className={`menu-item ${location.pathname === '/party' ? 'active' : ''}`}>
                    <React.Fragment>
                        <div style={{ textDecoration: "none", color: "black" }} onClick={() => setOpen(true)}>
                            <FaUser style={{ fontSize: "25px", color: "#707070", paddingRight: "5px" }} />
                            <span class="text nav-text">Profile</span>
                        </div>
                        <Modal
                            aria-labelledby="modal-title"
                            aria-describedby="modal-desc"
                            open={open}
                            onClose={() => setOpen(false)}
                            sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                        >
                            <Sheet
                                variant="outlined"
                                sx={{
                                    maxWidth: 500,
                                    borderRadius: 'md',
                                    p: 3,
                                    boxShadow: 'lg',
                                }}
                            >
                                <ModalClose variant="plain" sx={{ m: 1 }} />
                                <Typography
                                    component="h2"
                                    id="modal-title"
                                    level="h4"
                                    textColor="inherit"
                                    fontWeight="lg"
                                    mb={1}
                                >
                                    User Profile
                                </Typography>
                                <Typography id="modal-desc" textColor="text.tertiary">
                                    <div className="card border-light mb-3">
                                        <div className="card-body">
                                            <h5 className="card-title">
                                                Name: <b>{userData.name}</b>
                                            </h5>
                                            <hr />
                                            <p className="card-text">
                                                <b>father Name:</b>&nbsp;
                                                {userData.fatherName}
                                            </p>
                                            <p className="card-text">
                                                <b>Date of Birth</b>&nbsp;
                                                {userData.dob}
                                            </p>
                                            <p className="card-text">
                                                <b>part No. and Name</b>&nbsp;
                                                {userData.partNoandName}
                                            </p>
                                            <p className="card-text">
                                                <b>Gender :</b>&nbsp;
                                                {userData.sex}
                                            </p>
                                            <p className="card-text">
                                                <b>Address :</b>&nbsp;
                                                {userData.address}
                                            </p>
                                        </div>
                                    </div>
                                </Typography>
                            </Sheet>
                        </Modal>
                    </React.Fragment>
                </li>
            </ul>
            <div className="logout text-center mt-3"> {/* Logout button */}
                <button className="btn btn-danger"  onClick={handleLogout}>
                    Logout
                </button>
            </div>
        </div>
    );
};

export default UserNav;
