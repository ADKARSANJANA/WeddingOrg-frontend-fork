import axios from 'axios';

const GETALL_API_URL ="http://localhost:8080/api/user/customer/getvenues";
const SELECT_API_URL="http://localhost:8080/api/user/customer/selectVenue";
const ADDVENUE_API_URL="http://localhost:8080/api/user/customer/addVenue";

class venueCustService{

    getVenues(){
        return axios.get(GETALL_API_URL);
    }

    selectVenue(venue){
        return axios.post(SELECT_API_URL,venue);
    }

    addVenue(venue){
        return axios.post(ADDVENUE_API_URL,venue);
    }

}
export default new venueCustService;