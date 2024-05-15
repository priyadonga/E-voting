import axios from "axios"
import { Base_url } from "../../Constant"

let getData = (action) => {
    console.log(action, "api mathi data");
    let { endpoint } = action;
    return axios.get(Base_url + endpoint).then((res) => {

        let data = res.data;
        let status = res.status;
        return { data, status }
    })
}

let postData = (action) => {
    console.log(action, "post data api");
    let { endpoint } = action;
    console.log(action);
    return axios.post(Base_url + endpoint, action.payload).then((res) => {
        let data = res.data;
        let status = res.status;
        return { data, status }
    })
}


export { getData, postData } 