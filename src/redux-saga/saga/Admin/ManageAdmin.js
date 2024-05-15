import { put, call } from "redux-saga/effects"
import { getData, postData } from "../../admin/api/Api"
import { ADD_CONNECTION_FAILED, ADD_CONNECTION_SUCCESS, ADD_ELECTION_FAILED, ADD_ELECTION_SUCCESS, ADD_PARTY_FAILED, ADD_PARTY_SUCCESS, ADD_USER_FAILED, ADD_USER_SUCCESS, ADD_VOTE_FAILED, ADD_VOTE_SUCCESS, GET_ALL_CONNECTION_FAILED, GET_ALL_CONNECTION_PENDING, GET_ALL_CONNECTION_SUCCESS, GET_ALL_ELECTION_FAILED, GET_ALL_ELECTION_SUCCESS, GET_ALL_PARTY_FAILED, GET_ALL_PARTY_PENDING, GET_ALL_PARTY_SUCCESS, GET_ALL_USER_FAILED, GET_ALL_USER_PENDING, GET_ALL_USER_SUCCESS, GET_ALL_VOTE_FAILED, GET_ALL_VOTE_SUCCESS } from "../../admin/action/Action"

function* handle_get_party_data(action) {
    // console.log(action, "manage");
    try {
        let { status, data } = yield call(getData, action)
        console.log(data, "partyyyy");
        if (status == 200) {
            yield put({ type: GET_ALL_PARTY_SUCCESS, data })
        }
        else {
            yield put({ type: GET_ALL_PARTY_FAILED, data })
        }

    } catch (error) {
        yield put({ type: GET_ALL_PARTY_FAILED, error })

    }
}

function* handle_get_election_data(action) {
    // console.log(action, "manage");
    try {
        let { status, data } = yield call(getData, action)

        if (status == 200) {
            yield put({ type: GET_ALL_ELECTION_SUCCESS, data })
        }
        else {
            yield put({ type: GET_ALL_ELECTION_FAILED, data })
        }

    } catch (error) {
        yield put({ type: GET_ALL_ELECTION_FAILED, error })

    }

}

function* handle_get_connection_data(action) {
    console.log(action, "manage");
    try {
        let { status, data } = yield call(getData, action)
        // console.log(data, "sssssss");
        if (status == 200) {
            yield put({ type: GET_ALL_CONNECTION_SUCCESS, data })
        }
        else {
            yield put({ type: GET_ALL_CONNECTION_FAILED, data })

        }

    } catch (error) {
        yield put({ type: GET_ALL_CONNECTION_FAILED, error })

    }

}

function* handle_get_user_data(action) {
    console.log(action, "manage");
    try {
        let { status, data } = yield call(getData, action)
        // console.log(data, "");
        if (status == 200) {
            yield put({ type: GET_ALL_USER_SUCCESS, data })
        }
        else {
            yield put({ type: GET_ALL_USER_FAILED, data })

        }

    } catch (error) {
        yield put({ type: GET_ALL_USER_FAILED, error })

    }

}
function* handle_get_vote_data(action) {
    console.log(action, "manage");
    try {
        let { status, data } = yield call(getData, action)
        // console.log(data, "");
        if (status == 200) {
            yield put({ type: GET_ALL_VOTE_SUCCESS, data })
        }
        else {
            yield put({ type: GET_ALL_VOTE_FAILED, data })

        }

    } catch (error) {
        yield put({ type: GET_ALL_VOTE_FAILED, error })

    }

}



// ADD method
function* handle_add_election_data(action) {
    console.log(action, "manage");
    try {
        let { status, data } = yield call(postData, action)
        console.log(status);
        if (status == 201 || status == 200) {
            yield put({ type: ADD_ELECTION_SUCCESS, data })
        }
        else {
            yield put({ type: ADD_ELECTION_FAILED, data })

        }

    } catch (error) {
        yield put({ type: ADD_ELECTION_FAILED, error })

    }

}
function* handle_add_connection_data(action) {
    console.log(action, "manage");
    try {
        let { status, data } = yield call(postData, action)
        console.log(status);
        if (status == 201 || status == 200) {
            yield put({ type: ADD_CONNECTION_SUCCESS, data })
        }
        else {
            yield put({ type: ADD_CONNECTION_FAILED, data })

        }

    } catch (error) {
        yield put({ type: ADD_CONNECTION_FAILED, error })

    }

}


function* handle_add_user_data(action) {
    console.log(action, "manage");
    try {
        let { status, data } = yield call(postData, action)
        console.log(status);
        if (status == 201 || status == 200) {
            yield put({ type: ADD_USER_SUCCESS, data })
        }
        else {
            yield put({ type: ADD_USER_FAILED, data })

        }

    } catch (error) {
        yield put({ type: ADD_USER_FAILED, error })

    }

}

function* handle_add_party_data(action) {
    console.log(action, "manage");
    try {
        let { status, data } = yield call(postData, action)
        console.log(status);
        if (status == 201 || status == 200) {
            yield put({ type: ADD_PARTY_SUCCESS, data })
        }
        else {
            yield put({ type: ADD_PARTY_FAILED, data })
        }
    } catch (error) {
        yield put({ type: ADD_PARTY_FAILED, error })

    }

}
function* handle_add_vote_data(action) {
    console.log(action, "manage");
    try {
        let { status, data } = yield call(postData, action)
        console.log(status);
        if (status == 201 || status == 200) {
            yield put({ type: ADD_VOTE_SUCCESS, data })
        }
        else {
            yield put({ type: ADD_VOTE_FAILED, data })
        }
    } catch (error) {
        yield put({ type: ADD_VOTE_FAILED, error })

    }

}


export { handle_get_party_data, handle_add_vote_data, handle_get_vote_data, handle_get_election_data, handle_get_user_data, handle_add_election_data, handle_add_party_data, handle_get_connection_data, handle_add_connection_data, handle_add_user_data }