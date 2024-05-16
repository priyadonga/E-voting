import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_VOTE_PENDING } from '../../redux-saga/admin/action/Action';
import { vote_post_req } from '../../redux-saga/Constant';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
    const [selectedParty, setSelectedParty] = useState(null);
    const [selectedData, setSelectedData] = useState(null);
    const navigate = useNavigate();
  
    const handleSubmit = (Output) => {
      // Handle submission of selected data
      if (selectedData) {
        Output(selectedData);
        setSelectedData(null);
      } else {
      }
    };
  
    const handleLogout = () => {
      localStorage.removeItem('role'); // Clear the user role from local storage
      navigate('/');
    };
  
    const handlePartySelection = (party) => {
      setSelectedParty(party);
    };

    let dispatch = useDispatch();
    let connectionData = useSelector((state) => state.adminReducer.connection);

    const getUser = () => {
        const userData = JSON.parse(localStorage.getItem("userData"));
        return userData;
    };

    let user = getUser();

    let data = connectionData?.map((connection) => ({
        id: connection?._id,
        party_id: connection?.party?._id,
        election_name: connection?.election?.election_name,
        election: connection?.election?._id,
        party: connection?.party?.party_name,
        short_code: connection?.party?.short_code,
        partylogo: connection?.party?.party_logo,
    }));

    const handleVote = (rowData) => {
        console.log(rowData);
        let data = {
            user: user?._id,
            party: rowData?.party_id,
            election: rowData?.election,
        };
        dispatch({ type: ADD_VOTE_PENDING, endpoint: vote_post_req, payload: data });
        
        // Navigate to a different page after submitting vote
        navigate('/');
        localStorage.clear();
        // Reload the page
        window.location.reload();
    };

    return (
        <>
            <div className="main py-3 px-5">
                <h2 className="text-light text-center my-4">Select Party</h2>
                <button className="btn btn-primary mb-4" onClick={handleSubmit}>Submit</button>
                <button className='btn btn-primary mb-4 ms-4' onClick={handleLogout}>Log Out</button>
                <table className="table" style={{ width: "100%" }}>
                    <thead>
                        <tr>
                            <th style={{ background: "#0D6EFD", color: "#ffff" }}>Party Name</th>
                            <th style={{ background: "#0D6EFD", color: "#ffff" }}>Short Code</th>
                            <th style={{ background: "#0D6EFD", color: "#ffff" }}>Image</th>
                            <th style={{ background: "#0D6EFD", color: "#ffff" }}>Select</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((party, index) => (
                            <tr key={index}>
                                <td>{party.party}</td>
                                <td>{party.short_code}</td>
                                <td>{party.partylogo && <img src={party.partylogo} alt="Party Image" style={{ maxWidth: "100px" }} />}</td>
                                <td>
                                    <button className="btn btn-primary" onClick={() => handleVote(party)}>Vote</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default Home;
