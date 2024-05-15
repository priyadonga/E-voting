import { takeLatest } from "redux-saga/effects";
import { ADD_CONNECTION_PENDING, ADD_ELECTION_PENDING, ADD_PARTY_PENDING, ADD_USER_PENDING, ADD_VOTE_PENDING, GET_ALL_CONNECTION_PENDING, GET_ALL_ELECTION_PENDING, GET_ALL_PARTY_PENDING, GET_ALL_USER_PENDING, GET_ALL_VOTE_PENDING } from "../../admin/action/Action";
import { handle_add_connection_data, handle_add_election_data, handle_add_party_data, handle_add_user_data, handle_add_vote_data, handle_get_connection_data, handle_get_election_data, handle_get_party_data, handle_get_user_data, handle_get_vote_data } from "../Admin/ManageAdmin";

function* handle_party_data_saga() {
    yield takeLatest(GET_ALL_PARTY_PENDING, handle_get_party_data);
}

function* handle_election_data_saga() {
    yield takeLatest(GET_ALL_ELECTION_PENDING, handle_get_election_data);
}
function* handle_get_connection_data_saga() {
    yield takeLatest(GET_ALL_CONNECTION_PENDING, handle_get_connection_data);
}
function* handle_get_user_data_saga() {
    yield takeLatest(GET_ALL_USER_PENDING, handle_get_user_data);
}
function* handle_get_vote_data_saga() {
    yield takeLatest(GET_ALL_VOTE_PENDING, handle_get_vote_data);
}




function* handle_add_election_data_saga() {
    yield takeLatest(ADD_ELECTION_PENDING, handle_add_election_data);
}
function* handle_add_connection_data_saga() {
    yield takeLatest(ADD_CONNECTION_PENDING, handle_add_connection_data);
}
function* handle_add_user_data_saga() {
    yield takeLatest(ADD_USER_PENDING, handle_add_user_data);
}
function* handle_add_party_data_saga() {
    yield takeLatest(ADD_PARTY_PENDING, handle_add_party_data);
}
function* handle_add_vote_data_saga() {
    yield takeLatest(ADD_VOTE_PENDING, handle_add_vote_data);
}


export { handle_election_data_saga,handle_get_vote_data_saga,handle_add_vote_data_saga, handle_party_data_saga, handle_get_user_data_saga, handle_add_election_data_saga,handle_add_party_data_saga, handle_get_connection_data_saga, handle_add_connection_data_saga ,handle_add_user_data_saga};