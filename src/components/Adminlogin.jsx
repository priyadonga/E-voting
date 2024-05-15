import React, { useRef } from 'react';
import axios from 'axios';
import img from '../../src/img/login.png';
import { useNavigate } from 'react-router-dom'; 

const Adminlogin = () => {
  const name = useRef();
  const password = useRef();
  const navigate = useNavigate(); 

  const handleSubmit = async () => {
    const data = {
      name: name.current.value,
      password: password.current.value,
    };

    if (name.current.value === "" || password.current.value === "") {
      name.current.value = "";
      password.current.value = "";
      return;
    } 
    
    try {
      const res = await axios.post("http://13.127.211.205:8000/v1/login/admin", data);
      if (res.status === 200) {
        localStorage.setItem('role', 'admin');
        name.current.value = "";
        password.current.value = "";
        navigate('/dashboard'); 
      }
    } catch (error) {
      console.error("Login error:", error);
      name.current.value = "";
      password.current.value = "";
      window.alert("Incorrect adminname or password. Please try again."); 
    }
  };

  const handleUserLogin = () => {
    navigate('/Userlogin');
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
              <h1 className="text-center text-light mb-4">Admin login</h1>
              <form>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label text-light">Admin name</label>
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
                  <button type="button" className="btn btn-primary" onClick={handleUserLogin}>User Login</button>
                </div>
              </form>
            </div>
          </div>
        </>
      </div>
    </div>
  );
};

export default Adminlogin;
