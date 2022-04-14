import axios from 'axios';

const GETALL_API_URL ="http://localhost:8080/api/user/customer/catering";
const SELECT_API_URL="http://localhost:8080/api/user/customer/selectCaterings";
const ADDCATERING_API_URL="http://localhost:8080/api/user/customer/addCatering";

class cateringCustService{

    getCaterings(){
        return axios.get(GETALL_API_URL);
    }

    selectcatering(caterings){
        return axios.post(SELECT_API_URL,caterings);
    }

    addcatering(catering){
        return axios.post(ADDCATERING_API_URL,catering);
    }

}
export default new cateringCustService;