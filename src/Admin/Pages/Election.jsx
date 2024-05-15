import React, {useRef} from "react";
import { useDispatch, useSelector } from "react-redux";
import { ADD_ELECTION_PENDING, GET_ALL_ELECTION_PENDING } from "../../redux-saga/admin/action/Action";
import { election_get_req, election_post_req } from "../../redux-saga/Constant";

const Election = () => {
  const nameRef = useRef();
    const dateRef = useRef();

  let dispatch = useDispatch();
 
  let data = useSelector((state) => state.adminReducer.election)

 

  // Function to handle form submission for adding election
  const handleSubmit = () => {
    const newData = {
      election_name: nameRef.current.value,
      date: dateRef.current.value,
  };
    dispatch({ type: ADD_ELECTION_PENDING, payload: newData, endpoint: election_post_req })
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
                                <h1 class="modal-title fs-5" id="staticBackdropLabel">Election :-</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="mb-10">
                                        <label className="form-label">Name :</label>
                                        <input type="text" className="form-control" name="name" ref={nameRef} />
                                    </div>
                                    <div className="mb-2">
                                        <label className="form-label">Date :</label>
                                        <input type="date" className="form-control" name="date" ref={dateRef} />
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
                        <div className="col-md-12">
                            <div className='row mt-3'>
                                <div className="col-md-10">
                                    <h2 className="text-light">Election Data</h2>
                                </div>
                                <div className="col-md-2 d-flex justify-content-end">
                                    <button type="button" className="btn btn-primary mb-5" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                        +
                                    </button>
                                </div>

                                <table className="table" style={{ width: '100%' }}>
                                    <thead>
                                        <tr>
                                            <th style={{ background: '#001124', color: '#ffff' }}>State Name</th>
                                            <th style={{ background: '#001124', color: '#ffff' }}>Date</th>
                                            <th style={{ background: "#001124", color: "#ffff" }}>Delete</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.map((val, index) => (
                                            <tr key={index}>
                                                <td style={{ background: '#C4C4C4' }}>{val.election_name}</td>
                                                <td style={{ background: '#C4C4C4' }}>{val.date}</td>
                                                <td style={{ background: '#C4C4C4' }}><button onClick={() => handleDelete(val._id)} className="btn btn-danger">Delete</button></td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>

                            </div>
                        </div>
                    </div>
                </main >

            </div >
    </>
  );
};

export default Election;