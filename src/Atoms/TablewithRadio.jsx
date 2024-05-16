import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

const TablewithRadio = ({ data, Output }) => {
  const [selectedParty, setSelectedParty] = useState(null);
  const [selectedData, setSelectedData] = useState(null);
  const navigate = useNavigate();

  
  const handleSubmit = () => {
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

  return (
    <>
      <h2 className="text-light text-center my-4">Select Party</h2>

      <button className="btn btn-primary mb-4 " onClick={handleSubmit}>Submit</button>
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
              <td>{party.party_name}</td>
              <td>{party.short_code}</td>
              <td>{party.party_logo && <img src={party.party_logo} alt="Party Image" style={{ maxWidth: "100px" }} />}</td>
              <td>
                <input type="radio" name="party" onChange={() => handlePartySelection(party)} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
     
    </>
  );
};

export default TablewithRadio;