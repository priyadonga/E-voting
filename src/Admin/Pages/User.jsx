import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_USER_PENDING } from '../../redux-saga/admin/action/Action';
import { user_post_req } from '../../redux-saga/Constant';
import img from "../img/user.png";

export default function User() {
  const cardNoRef = useRef();
  const nameRef = useRef();
  const fatherNameRef = useRef();
  const sexRef = useRef();
  const dobRef = useRef();
  const assemblyNoandNameRef = useRef();
  const partNoandNameRef = useRef();
  const passwordRef = useRef();
  const addressRef = useRef();

  let dispatch = useDispatch();
  let data = useSelector((state) => state.adminReducer?.user);

  // Function to handle form submission for adding election
  const handleSubmit = () => {
    const newData = {
      cardNo: cardNoRef.current.value,
      name: nameRef.current.value,
      fatherName: fatherNameRef.current.value,
      sex: sexRef.current.value,
      dob: dobRef.current.value,
      assemblyNoandName: assemblyNoandNameRef.current.value,
      partNoandName: partNoandNameRef.current.value,
      password: passwordRef.current.value,
      address: addressRef.current.value,
    };
    dispatch({ type: ADD_USER_PENDING, payload: newData, endpoint: user_post_req })
  };

  // Function to handle deletion of election
  const handleDelete = (id) => {
    console.log(id);
  };

  // Dummy function for handling update (not implemented)
  const handleUpdate = () => {
    console.log("Update");
  };

  return (
    <>
      <div className="main-content text-light">
        <div class="modal fade text-dark" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div class="modal-dialog position-relative" style={{ top: '10%' }}>
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="staticBackdropLabel">User :-</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="mb-2">
                    <label className="form-label">cardNo :</label>
                    <input type="text" className="form-control" name="cardNo" ref={cardNoRef} />
                  </div>
                  <div className="mb-2">
                    <label className="form-label">Name :</label>
                    <input type="text" className="form-control" name="name" ref={nameRef} />
                  </div>
                  <div className="mb-2">
                    <label className="form-label">Father's/Mother's Name :</label>
                    <input type="text" className="form-control" name="fatherName" ref={fatherNameRef} />
                  </div>
                  <div className="mb-2">
                    <label className="form-label">Sex :</label>
                    <input type="text" className="form-control" name="Sex" ref={sexRef} />
                  </div>
                  <div className="mb-2">
                    <label className="form-label">Date Of Birth :</label>
                    <input type="date" className="form-control" name="dob" ref={dobRef} />
                  </div>
                  <div className="mb-2">
                    <label className="form-label">assemblyNoandName :</label>
                    <input type="text" className="form-control" name="assemblyNoandName" ref={assemblyNoandNameRef} />
                  </div>
                  <div className="mb-2">
                    <label className="form-label">partNoandName :</label>
                    <input type="text" className="form-control" name="partNoandName" ref={partNoandNameRef} />
                  </div>
                  <div className="mb-2">
                    <label className="form-label">Password :</label>
                    <input type="password" className="form-control" name="password" ref={passwordRef} />
                  </div>
                  <div className="mb-2">
                    <label className="form-label">address :</label>
                    <input type="address" className="form-control" name="address" ref={addressRef} />
                  </div>
                </form>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary" onClick={handleSubmit}>Submit</button>
              </div>
            </div>
          </div>
        </div>

        <main>
          <div className="row">
            <div className="col-md-3 pt-3">
              <img src={img} alt="Banner" style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "cover", paddingTop: '5rem', paddingBottom: '5rem' }} />
            </div>
            <div className="col-md-9 ps-3">
              <div className='row mt-3'>
                <div className="col-md-10">
                  <h2 className="text-light">User Data</h2>
                </div>
                <div className="col-md-2 d-flex justify-content-end">
                  <button type="button" className="btn btn-primary mb-5" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                    +
                  </button>
                </div>
              </div>
              <table className="table" style={{ width: '100%' }}>
                <thead>
                  <tr>
                    <th style={{ background: '#0D6EFD', color: '#ffff' }}>Card No</th>
                    <th style={{ background: '#0D6EFD', color: '#ffff' }}>Name</th>
                    <th style={{ background: '#0D6EFD', color: '#ffff' }}>Sex</th>
                    <th style={{ background: '#0D6EFD', color: '#ffff' }}>Date of Birth</th>
                    <th style={{ background: '#0D6EFD', color: '#ffff' }}>Parent's Name</th>
                    <th style={{ background: '#0D6EFD', color: '#ffff' }}>Address</th>
                    <th style={{ background: "#0D6EFD", color: "#ffff" }}>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((val, index) => {
                    console.log(val, "map")
                    return (
                      <>
                        <tr key={index}>
                          <td>{val.cardNo}</td>
                          <td>{val.name}</td>
                          <td>{val.sex}</td>
                          <td>{val.dob}</td>
                          <td>{val.fatherName}</td>
                          <td style={{ width: '25%' }}>{val.address}</td>
                          <td><button onClick={() => handleDelete(val._id)} className="btn btn-danger">Delete</button></td>
                        </tr>
                      </>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>

        </main >
      </div >
    </>
  );
}