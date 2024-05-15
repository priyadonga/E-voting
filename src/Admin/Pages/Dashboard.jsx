import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

const Dashboard = () => {

  const dispatch = useDispatch()

  const partyData = useSelector((state) => state.adminReducer.party);
  const electiondata = useSelector((state) => state.adminReducer.election);
  const userdata = useSelector((state) => state.adminReducer.user);
  const votes = useSelector((state) => state.adminReducer.vote);

  function calculatePartyVotes(data) {
    const partyVotes = {};
    const votedEntries = data.filter(
      (entry) => entry.party !== null && entry.election !== null
    );
    
    votedEntries.forEach((entry) => {
      const { party } = entry;
      if (party.party_name in partyVotes) {
        partyVotes[party.party_name]++;
      } else {
        partyVotes[party.party_name] = 1;
      }
    });
    return partyVotes;
  }

  const partyVotes = calculatePartyVotes(votes);

  return (
    <>
        {/* <Sidebar /> */}
        <div className="main-content text-light">
            <main>
                <div className="row">
                    <div className="col-4">
                        <div className="card" style={{ width: '18rem' }}>
                            <div className="card-body px-0">
                                <h3 className="card-title text-center">Total Parties</h3>
                                <hr />
                                <h2 className="card-text text-center my-3">{partyData?.length}</h2>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="card" style={{ width: '18rem' }}>
                            <div className="card-body px-0">
                                <h3 className="card-title text-center">Total Users</h3>
                                <hr />
                                <h2 className="card-text text-center my-3">{userdata?.length}</h2>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="card" style={{ width: '18rem' }}>
                            <div className="card-body px-0">
                                <h3 className="card-title text-center">Total Elections</h3>
                                <hr />
                                <h2 className="card-text text-center my-3">{electiondata?.length}</h2>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Party Table-------------------------------------- */}

                <h2 className="text-light my-5">Vote Count</h2>
                <table className="table" style={{ width: "100%" }}>
                    <thead>
                        <tr>
                            <th style={{ background: "#0D6EFD", color: "#ffff" }}>Party Name</th>
                            <th style={{ background: "#0D6EFD", color: "#ffff" }}>Short Code</th>
                            <th style={{ background: "#0D6EFD", color: "#ffff" }}>Image</th>
                            <th style={{ background: "#0D6EFD", color: "#ffff" }}>Count</th>
                        </tr>
                    </thead>
                    <tbody>
                        {partyData.map((party, index) => (
                            <tr key={index}>
                                <td>{party.party_name}</td>
                                <td>{party.short_code}</td>
                                <td>{party.party_logo && <img src={party.party_logo} alt="Party Image" style={{ maxWidth: "100px" }} />}</td>
                                <td>{partyVotes[party.party_name] || 0}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </main>
        </div>
    </>
);
  
}

export default Dashboard;