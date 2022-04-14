import axios from 'axios';

const VENUE_API_URL = "http://localhost:8080/api/user/admin/venueid"
const VENUE_API_BASE_URL = "http://localhost:8080/api/user/admin/allVenues"
const ADDVENUE_API_BASE_URL = "http://localhost:8080/api/user/admin/addvenue"
const UPDATEVENUE_API_BASE_URL = "http://localhost:8080/api/user/admin/editvenue"
//const GETBYID_API_BASE_URL ="http://localhost:8080/api/user/admin/venueid/{id}"
class VenueService{
   
  getVenues(){
      return axios.get(VENUE_API_BASE_URL);
  }

  createVenue(venue){
    return axios.post(ADDVENUE_API_BASE_URL,venue);
  }
  getVenueById(id){
    return axios.get(VENUE_API_URL +'/'+ id);
  }
  updateVenue(venue,id){
     return axios.put(UPDATEVENUE_API_BASE_URL+'/'+id,venue);
  }
}
export default new VenueService()