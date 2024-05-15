import React, { useEffect, useState } from 'react';
import DataTable from '../../Atoms/DataTable';
import {
  Box,
  Button,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  FormControl,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_CONNECTION_PENDING, GET_ALL_CONNECTION_PENDING, GET_ALL_ELECTION_PENDING, GET_ALL_PARTY_PENDING } from '../../redux-saga/admin/action/Action';
import { election_get_req, party_get_req, partylist_get_req, partylist_post_req } from '../../redux-saga/Constant';

const Conction = () => {
  const [selectedElection, setSelectedElection] = useState('');
  const [selectedParty, setSelectedParty] = useState('');

  let electionData = useSelector((state) => state.adminReducer?.election);
  let partyData = useSelector((state) => state.adminReducer?.party);
  let connectionData = useSelector((state) => state.adminReducer?.connection);

  // Columns configuration for DataTable
  const columns = [
    {
      id: "ElectionName",
      label: "Election Name",
      minWidth: 170,
      align: "center",
    },
    {
      id: "Partyname",
      label: "Party Name",
      minWidth: 170,
      align: "center",
    },
  ];

  // Rows configuration for DataTable
  const rows = connectionData?.map((Connection) => ({
    ElectionName: Connection?.election?.election_name,
    Partyname: Connection?.party?.party_name,
    id: Connection?._id,
  }));

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
    <div>
      <Grid
        container
        spacing={2}
        mt={4}
        columns={12}
        sx={{
          flexGrow: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Grid item xs={8}>
          <DataTable
            columns={columns}
            rows={rows}
            onDelete={handleDelete}
            onUpdate={handleUpdate}
            height={500}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <FormControl fullWidth sx={{ marginBottom: 2 }}>
            <select value={selectedElection} onChange={(e) => setSelectedElection(e.target.value)}>
              <option value="">Select Election</option>
              {electionData?.map((val) => (
                <option key={val._id} value={val._id}>{val.election_name}</option>
              ))}
            </select>
          </FormControl>
          <FormControl fullWidth sx={{ marginBottom: 2 }}>
            <select value={selectedParty} onChange={(e) => setSelectedParty(e.target.value)}>
              <option value="">Select Party</option>
              {partyData?.map((val) => (
                <option key={val._id} value={val._id}>{val.party_name}</option>
              ))}
            </select>
          </FormControl>
          <Button variant="contained" onClick={handleSubmit} fullWidth>
            Submit
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Conction;