import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../img/logo.png";
import { path } from '../Path';
import { FaBars } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
    const navigate = useNavigate();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const handleLinkClick = () => {
        if (isSidebarOpen) {
            setIsSidebarOpen(false);
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('role'); // Clear the user role from local storage
        navigate('/');
    };

    return (
        <>
            <input type="checkbox" name="" id="sidebar-toggle" checked={isSidebarOpen} onChange={() => { }} />
            <div className={`sidebar ${isSidebarOpen ? 'active' : ''}`} >
                <div className="sidebar-main text-light">
                    <div className="logo d-flex justify-content-center border-bottom" style={{ padding: '13px' }}>
                        <img src={logo} alt="logo" width={'20%'} />
                        <h3 className="fs-4 fw-bold d-flex align-items-center mb-0 p-2">E-Election</h3>
                    </div>
                    <div className="sidebar-menu p-3 mb-5">
                        <div className="menu-head text-uppercase text-center fw-semibold" style={{ fontSize: '18px' }}>
                            {path.map((val, ind) => (
                                <p key={ind}>
                                    <Link className="text-light" style={{ textDecoration: 'none' }} to={`${val.path}`} onClick={handleLinkClick}>{val.name}</Link>
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <header className="border-bottom" style={{ marginLeft: isSidebarOpen ? '0' : '16rem' }}>
                <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{ paddingTop: '1rem', paddingBottom: '1rem' }}>
                    <div className="container-fluid">
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <div className="text-light fs-5" onClick={toggleSidebar} style={{ cursor: 'pointer' }}>
                                    <FaBars size={30} />
                                </div>
                                <li className="nav-item">
                                    <a className="nav-link active text-light" aria-current="page" href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active text-light" aria-current="page" href="#">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active text-light" aria-current="page" href="#">Contact</a>
                                </li>
                            </ul>
                            <button className='btn btn-primary' onClick={handleLogout}>Log Out</button>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
};

export default Sidebar;
