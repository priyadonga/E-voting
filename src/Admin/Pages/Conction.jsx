import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_CONNECTION_PENDING, GET_ALL_CONNECTION_PENDING, GET_ALL_ELECTION_PENDING, GET_ALL_PARTY_PENDING } from '../../redux-saga/admin/action/Action';
import { election_get_req, party_get_req, partylist_get_req, partylist_post_req } from '../../redux-saga/Constant';

const Conction = () => {
  const [selectedElection, setSelectedElection] = useState('');
  const [selectedParty, setSelectedParty] = useState('');

  let electionData = useSelector((state) => state.adminReducer?.election);
  let partyData = useSelector((state) => state.adminReducer?.party);
  let connectionData = useSelector((state) => state.adminReducer?.connection);

  let dispatch = useDispatch()

  // Function to handle form submission for adding election
  const handleSubmit = () => {
    let data = {
      election: selectedElection,
      party: selectedParty
    }
    dispatch({ type: ADD_CONNECTION_PENDING, endpoint: partylist_post_req, payload: data })
  };

  // Function to handle deletion of election
  const handleDelete = (id) => {
    console.log(id);
  };

  // Function to handle update of election
  const handleUpdate = (id) => {
    console.log(id);
  };

  return (
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
                <select className="form-select" aria-label="Select Election" name="election" onChange={(e) => setSelectedElection(JSON.parse(e.target.value))}>
                  <option value="">Select Election</option>
                  {electionData.map(election => (
                    <option key={election.id} value={JSON.stringify(election)}>{election.election_name}</option>
                  ))}
                </select>
                <select className="form-select my-4" aria-label="Select party" name="party" onChange={(e) => setSelectedParty(JSON.parse(e.target.value))}>
                  <option value="">Select Party</option>
                  {partyData.map(party => (
                    <option key={party.id} value={JSON.stringify(party)}>{party.party_name}</option>
                  ))}
                </select>
                <button className='btn btn-primary' onClick={handleSubmit}>Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <main>
        <div className="row">
          <div className="col-md-12">
            <div className='row mt-3'>
              <div className="col-md-10">
                <h2 className="text-light">Conction Data</h2>
              </div>
              <div className="col-md-2 d-flex justify-content-end">
                <button type="button" className="btn btn-primary mb-5" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                  +
                </button>
              </div>
            </div>
            <table className="table">
              <thead>
                <tr>
                  <th>Election Name</th>
                  <th>Date</th>
                  <th>Party Name</th>
                  <th>Short Code</th>
                  <th>Image</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {selectedElection && selectedParty && (
                  <tr>
                    <td>{selectedElection.election_name}</td>
                    <td>{selectedElection.date}</td>
                    <td>{selectedParty.party_name}</td>
                    <td>{selectedParty.short_code}</td>
                    <td><img src={selectedParty.party_logo} alt="party logo" /></td>
                    <td><button className="btn btn-danger">Delete</button></td>
                    {/* <td style={{ background: '#C4C4C4' }}><button onClick={() => deleteData(val._id)} className="btn btn-danger">Delete</button></td> */}
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Conction;