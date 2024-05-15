
import * as React from 'react';
import Button from '@mui/joy/Button';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import DialogTitle from '@mui/joy/DialogTitle';
import DialogContent from '@mui/joy/DialogContent';
import Stack from '@mui/joy/Stack';
import Add from '@mui/icons-material/Add';
import { Grid } from '@mui/material';
import { Box, ListItem } from '@mui/joy';
import DataTable from '../../Atoms/DataTable';
import AddButton from '../../Atoms/Button';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_USER_PENDING } from '../../redux-saga/admin/action/Action';
import { user_post_req } from '../../redux-saga/Constant';

export default function User() {

  let dispatch = useDispatch();
  let userData = useSelector((state) => state.adminReducer?.user);



  const inputTitles = [
    "cardNo",
    "name",
    "fatherName",
    "sex",
    "dob",
    "assemblyNoandName",
    "address",
    "partNoandName",
    "password",
  ];
  const inputTypes = [
    "text",
    "text",
    "text",
    "text",
    "date",
    "text",
    "text",
    "text",
    "password",
  ];
  // // Sample column data
  const columns = [
    { id: "cardNo", label: "Election Name", minWidth: 170, align: "center" },
    { id: "name", label: "Name", minWidth: 170, align: "center" },
    { id: "fatherName", label: "Father Name", minWidth: 170, align: "center" },
    { id: "sex", label: "Gender", minWidth: 170, align: "center" },
    { id: "dob", label: "DOB", minWidth: 170, align: "center" },
    { id: "assemblyNoandName", label: "A.N.N", minWidth: 170, align: "center" },
    { id: "partNoandName", label: "P.N", minWidth: 170, align: "center" },
    { id: "password", label: "Password", minWidth: 170, align: "center" },
    { id: "address", label: "Address", minWidth: 170, align: "center" },
  ];

  // Map user data for DataTable rows, handle potential null data
  const rows = userData?.map((user) => ({
    cardNo: user?.cardNo || "",
    name: user?.name || "",
    fatherName: user?.fatherName || "",
    sex: user?.sex || "",
    dob: user?.dob || "",
    assemblyNoandName: user?.assemblyNoandName || "",
    partNoandName: user?.partNoandName || "",
    password: user?.password || "",
    address: user?.address || "",
  }));





  // Function to handle form submission for adding election
  const handleSubmit = (formData) => {
    console.log(formData);
    dispatch({ type: ADD_USER_PENDING, payload: formData, endpoint:user_post_req })
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
    <React.Fragment>
      <Grid container spacing={2} sx={{ flexGrow: 1 }}>
        <Grid xs={8}>
          <ListItem>  <Input size="md" placeholder="Search" /></ListItem>
        </Grid>
        <Grid xs={4}>
          <ListItem> <AddButton
            title="Add User"
            inputTitles={inputTitles}
            inputTypes={inputTypes}
            onSubmit={handleSubmit}
          /></ListItem>
        </Grid>
        <Grid xs={12}>
          <Box mt={5}>
            <DataTable
              columns={columns}
              rows={rows}
              onDelete={handleDelete}
              onUpdate={handleUpdate}
              height={450}
            />
          </Box>
        </Grid>

      </Grid>

    </React.Fragment>
  );
}