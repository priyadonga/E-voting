import { all } from "redux-saga/effects";
import { handle_add_connection_data_saga, handle_add_election_data_saga, handle_add_party_data_saga, handle_add_user_data_saga, handle_add_vote_data_saga, handle_election_data_saga, handle_get_connection_data_saga, handle_get_user_data_saga, handle_get_vote_data_saga, handle_party_data_saga,handle_delete_party_saga,handle_delete_election_saga } from "./rootsaga/AdminSaga";

function* rootsaga() {
    yield all([handle_election_data_saga(),handle_get_vote_data_saga(),handle_party_data_saga(),handle_get_user_data_saga(),handle_add_election_data_saga(),handle_get_connection_data_saga(),handle_add_connection_data_saga(),handle_add_user_data_saga(),handle_add_party_data_saga(),handle_add_vote_data_saga(),handle_delete_party_saga(),handle_delete_election_saga()])
}

export default rootsaga;