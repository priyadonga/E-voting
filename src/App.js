import React, { useEffect } from 'react';
import { Route, Routes, Navigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
  GET_ALL_CONNECTION_PENDING,
  GET_ALL_ELECTION_PENDING,
  GET_ALL_PARTY_PENDING,
  GET_ALL_USER_PENDING,
  GET_ALL_VOTE_PENDING,
} from './redux-saga/admin/action/Action';
import { election_get_req, party_get_req, partylist_get_req, user_get_req, vote_get_req } from './redux-saga/Constant';

import Adminlogin from './components/Adminlogin';
import Dashboard from './Admin/Pages/Dashboard';
import Party from './Admin/Pages/Party';
import Election from './Admin/Pages/Election';
import Conction from './Admin/Pages/Conction';
import User from './Admin/Pages/User';
import Profile from './Admin/Pages/Profile';
import Home from './User/Pages/Home';
import Userlogin from './components/Userlogin';
import Sidebar from './Admin/Header/Sidebar';

const getRole = () => {
  return localStorage.getItem('role');
};

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: GET_ALL_ELECTION_PENDING, endpoint: election_get_req });
    dispatch({ type: GET_ALL_PARTY_PENDING, endpoint: party_get_req });
    dispatch({ type: GET_ALL_CONNECTION_PENDING, endpoint: partylist_get_req });
    dispatch({ type: GET_ALL_USER_PENDING, endpoint: user_get_req });
    dispatch({ type: GET_ALL_VOTE_PENDING, endpoint: vote_get_req });
  }, [dispatch]);

  const role = getRole();
  const location = useLocation();

  const isLoginPage = location.pathname === '/';

  if (!role || role === '') {
    return (
      <Routes>
        <Route path="/" element={<Adminlogin />} />
        <Route path="/userlogin" element={<Userlogin />} />
      </Routes>
    );
  }

  return (
    <>
      {role === 'admin' && <Sidebar />}
      <Routes>
        {role === 'admin' && (
          <>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/party" element={<Party />} />
            <Route path="/election" element={<Election />} />
            <Route path="/conction" element={<Conction />} />
            <Route path="/user" element={<User />} />
            <Route path="/profile" element={<Profile />} />
          </>
        )}
        {role === 'user' && <Route path="/home" element={<Home />} />}
        {/* Add other routes as needed */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
};

export default App;
