import { ADD_CONNECTION_FAILED, ADD_CONNECTION_PENDING, ADD_CONNECTION_SUCCESS, ADD_ELECTION_FAILED, ADD_ELECTION_PENDING, ADD_ELECTION_SUCCESS, ADD_PARTY_SUCCESS, ADD_USER_FAILED, ADD_USER_PENDING, ADD_USER_SUCCESS, ADD_VOTE_FAILED, ADD_VOTE_SUCCESS, GET_ALL_CONNECTION_FAILED, GET_ALL_CONNECTION_PENDING, GET_ALL_CONNECTION_SUCCESS, GET_ALL_ELECTION_FAILED, GET_ALL_ELECTION_PENDING, GET_ALL_ELECTION_SUCCESS, GET_ALL_PARTY_FAILED, GET_ALL_PARTY_PENDING, GET_ALL_PARTY_SUCCESS, GET_ALL_USER_FAILED, GET_ALL_USER_PENDING, GET_ALL_USER_SUCCESS, GET_ALL_VOTE_FAILED, GET_ALL_VOTE_PENDING, GET_ALL_VOTE_SUCCESS } from "../action/Action"

let initialstate = {
    party: [],
    election: [],
    vote: [],
    connection: [],
    user: [],
    isLoading: false,
    isError: null,
}

let adminReducer = (state = initialstate, action) => {
    console.log(action, "reducer ");
    switch (action.type) {
        case GET_ALL_PARTY_PENDING,GET_ALL_VOTE_PENDING, GET_ALL_CONNECTION_PENDING, GET_ALL_ELECTION_PENDING, GET_ALL_USER_PENDING, ADD_USER_PENDING, ADD_ELECTION_PENDING, ADD_CONNECTION_PENDING: {
            return {
                isLoading: true,
                ...state
            };
        }
        case GET_ALL_PARTY_SUCCESS: {

            return {
                ...state,
                isLoading: false,
                party: action.data.data,
            };
        }
        case GET_ALL_CONNECTION_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                connection: action.data.data,
            };
        }
        case GET_ALL_ELECTION_SUCCESS: {

            return {
                ...state,
                isLoading: false,
                election: action.data.data,
            };
        }
        case GET_ALL_VOTE_SUCCESS: {

            return {
                ...state,
                isLoading: false,
                vote: action.data.data,
            };
        }
        case GET_ALL_USER_SUCCESS: {

            return {
                ...state,
                isLoading: false,
                user: action.data.data,
            };
        }
        case ADD_ELECTION_SUCCESS: {
            return {
                isLoading: false,
                election: state?.election?.concat(action.data.data)
            };
        }
        case ADD_CONNECTION_SUCCESS: {
            return {
                isLoading: false,
                connection: state?.connection?.concat(action.data.data)
            };
        }
        case ADD_USER_SUCCESS: {
            return {
                isLoading: false,
                user: state?.user?.concat(action.data.data)
            };
        }
        case ADD_PARTY_SUCCESS: {
            return {
                isLoading: false,
                party: state?.party?.concat(action.data.data)
            };
        }
        case ADD_VOTE_SUCCESS: {
            return {
                isLoading: false,
                vote: state?.vote?.concat(action.data.data)
            };
        }

        case GET_ALL_PARTY_FAILED,GET_ALL_VOTE_FAILED, GET_ALL_ELECTION_FAILED, ADD_ELECTION_FAILED, ADD_CONNECTION_FAILED, GET_ALL_PARTY_FAILED, GET_ALL_CONNECTION_FAILED, GET_ALL_USER_FAILED, ADD_USER_FAILED: {
            return {
                ...state,
                isError: action.data.data,
            }
        }
       

        default: {
            return {
                ...state
            }
        }
    }
}

export default adminReducer;