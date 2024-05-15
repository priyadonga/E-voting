import React, { useRef, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_PARTY_PENDING, GET_ALL_PARTY_PENDING } from '../../redux-saga/admin/action/Action';
import { party_get_req, party_post_req } from '../../redux-saga/Constant';

export default function Party() {
  const nameRef = useRef();
  const shortCodeRef = useRef();
  const [selectedImage, setSelectedImage] = useState(null);
  const [logoPreviewUrl, setLogoPreviewUrl] = useState('');


  let dispatch = useDispatch()

  let data = useSelector((state) => state.adminReducer.party)
  console.log(data);


  const handleSubmit = () => {
    const formData = new FormData();
    formData.append('party_logo', selectedImage);
    formData.append('party_name', nameRef.current.value);
    formData.append('short_code', shortCodeRef.current.value);

    dispatch(
      { type: ADD_PARTY_PENDING, payload: formData, endpoint: party_post_req }
    );
  };

  const handleLogoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setLogoPreviewUrl(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  
  const handleDelete = (id) => {
    console.log(id);
  };

 
  const handleUpdate = () => {
    console.log("Update");
  };

  return (
    <>
      <div className="main-content text-light">
        <div className="modal fade text-dark" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div className="modal-dialog position-relative" style={{ top: '10%' }}>
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="staticBackdropLabel">Party :-</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="mb-2">
                    <label className="form-label">Name :</label>
                    <input type="text" className="form-control" name="name" ref={nameRef} />
                  </div>
                  <div className="mb-2">
                    <label className="form-label">Short Code :</label>
                    <input type="text" className="form-control" name="shortCode" ref={shortCodeRef} />
                  </div>
                  <div className="mb-2">
                    <label className="form-label">Image :</label>
                    <input type="file" name="party-logo" className="form-control" onChange={handleLogoChange} />
                    <img src={logoPreviewUrl} alt="Logo Preview" style={{ width: '20%', marginTop: '10px' }} />
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
              </div>
            </div>
          </div>
        </div>

        <main>
          <div className="row">
            <div className="col-md-12">
              <div className='row mt-3'>
                <div className="col-md-10">
                  <h2 className="text-light">Party Data</h2>
                </div>
                <div className="col-md-2 d-flex justify-content-end">
                  <button type="button" className="btn btn-primary mb-5" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                    +
                  </button>
                </div>
              </div>
              <table className="table" style={{ width: "100%" }}>
                <thead>
                  <tr>
                    <th style={{ background: "#0D6EFD", color: "#ffff" }}>Party Name</th>
                    <th style={{ background: "#0D6EFD", color: "#ffff" }}>Short Code</th>
                    <th style={{ background: "#0D6EFD", color: "#ffff" }}>Image</th>
                    <th style={{ background: "#0D6EFD", color: "#ffff" }}>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((val, index) => (
                    <tr key={index}>
                      <td>{val.party_name}</td>
                      <td>{val.short_code}</td>
                      <td>
                        <img src={val.party_logo} style={{ width: "50px", height: "50px" }} alt="Party Logo" />
                      </td>
                      <td><button onClick={() => handleDelete(val._id)} className="btn btn-danger">Delete</button></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}