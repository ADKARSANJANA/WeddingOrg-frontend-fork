import axios from 'axios';

const GETALL_API_URL ="http://localhost:8080/api/user/customer/alldecor";
const SELECT_API_URL="http://localhost:8080/api/user/customer/selectdecor";
const ADDDECOR_API_URL="http://localhost:8080/api/user/customer/adddecor";

class decorCustService{

    getDecor(){
        return axios.get(GETALL_API_URL);
    }

    selectdecor(decor){
        return axios.post(SELECT_API_URL,decor);
    }

    adddecor(decor){
        return axios.post(ADDDECOR_API_URL,decor);
    }

}
export default new decorCustService;