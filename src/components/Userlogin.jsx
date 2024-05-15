import React, { useRef, useState } from 'react';
import axios from 'axios';
import img from '../../src/img/login.png';
import { useNavigate } from 'react-router-dom'; 

const Userlogin = () => {
  const name = useRef();
  const password = useRef();
  const navigate = useNavigate(); 

  const handleSubmit = async () => {
    const data = {
      cardNo: name.current.value,
      password: password.current.value,
    };
    if (name.current.value === "" || password.current.value === "") {
      window.alert("Please enter both username and password."); 
      name.current.value = "";
      password.current.value = "";
    } else {
      try {
        const res = await axios.post("http://13.127.211.205:8000/v1/login/user", data);
        if (res.status === 200 && res.data.success) {
          localStorage.setItem("role", "user");
          localStorage.setItem("userData", JSON.stringify(res.data.data));
          name.current.value = "";
          password.current.value = "";
          navigate('/voter'); 
        } 
      } catch (error) {
        console.error("Login error:", error);
        name.current.value = "";
        password.current.value = "";
        window.alert("Incorrect username or password. Please try again."); 
      }
    }
  };

  const handleAdminLogin = () => {
    navigate('/Adminlogin');
  };

  return (
    <div className="container-fluid" style={{ paddingTop: '4rem', paddingBottom: '5rem' }}>
      <div className="row">
        <>
          <div className="col-md-5" style={{ padding: "0", position: "relative", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <img src={img} alt="Banner" style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "cover" }} />
          </div>
          <div className="col-md-7" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ width: "80%", maxWidth: "400px", margin: "0 auto" }}>
              <h1 className="text-center text-light mb-4">User login</h1>
              <form>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label text-light">User name</label>
                  <input type="text" id="username" className="form-control" ref={name} />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label text-light">Password</label>
                  <input type="password" id="password" className="form-control" ref={password} />
                </div>
                <div className="d-grid mb-3">
                  <button type="button" className="btn btn-primary" onClick={handleSubmit}>Log In</button>
                </div>
                <div className="d-grid mb-3">
                  <button type="button" className="btn btn-primary" onClick={handleAdminLogin}>Admin Login</button>
                </div>
              </form>
            </div>
          </div>
        </>
      </div>
    </div>
  );
};

export default Userlogin;
