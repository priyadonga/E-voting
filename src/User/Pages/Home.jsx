import React from 'react'
import TablewithRadio from '../../Atoms/TablewithRadio'
import { useDispatch, useSelector } from 'react-redux';
import { ADD_VOTE_PENDING } from '../../redux-saga/admin/action/Action';
import { vote_post_req } from '../../redux-saga/Constant';

const Home = () => {

    let dispatch = useDispatch();

    let connectionData = useSelector((state) => state.adminReducer.connection);

    const getUser = () => {
        const userData = JSON.parse(localStorage.getItem("userData"));
        return userData;
    };

    let user = getUser();

    let data = connectionData?.map((connection) => ({
        id: connection?._id,
        party_id:connection?.party?._id,
        election_name: connection?.election?.election_name,
        election: connection?.election?._id,
        party: connection?.party?.party_name,
        partylogo: connection?.party?.party_logo,
    }));

    let finalData = (rowData) => {
        console.log(rowData);
        let data = {
            user: user?._id,
            party: rowData?.party_id,
            election: rowData?.election,
        };
        dispatch({ type: ADD_VOTE_PENDING, endpoint: vote_post_req, payload: data })
        
        window.location.href="/"
        localStorage.clear()
        window.location.reload()
    }




    return (
        <div>
            <TablewithRadio data={data} Output={finalData} />
            
        </div>
    )
}

export default Home