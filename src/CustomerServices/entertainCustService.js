import axios from 'axios';

const GETALL_API_URL ="http://localhost:8080/api/user/customer/allentertainment";
const SELECT_API_URL="http://localhost:8080/api/user/customer/selectentertainment";
const ADDENTERTAIN_API_URL="http://localhost:8080/api/user/customer/addentertain";

class entertainCustService{

    getEntertain(){
        return axios.get(GETALL_API_URL);
    }

    selectentertain(entertain){
        return axios.post(SELECT_API_URL,entertain);
    }

    addentertain(entertain){
        return axios.post(ADDENTERTAIN_API_URL,entertain);
    }

}
export default new entertainCustService;