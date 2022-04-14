import axios from 'axios';

const ENTERTAINMENT_API_URL = "http://localhost:8080/api/user/admin/entertainmentid"
const ENTERTAINMENT_API_BASE_URL = "http://localhost:8080/api/user/admin/entertainments"
const ADDENTERTAINMENT_API_BASE_URL = "http://localhost:8080/api/user/admin/addEntertainment"
const UPDATEENTERTAINMENT_API_BASE_URL = "http://localhost:8080/api/user/admin/editEntertainment"
//const GETBYID_API_BASE_URL ="http://localhost:8080/api/user/admin/catringid/{id}"
class EntertainmentService{
   
  getEntertainments(){
      return axios.get(ENTERTAINMENT_API_BASE_URL);
  }

  createEntertainment( entertainment){
    return axios.post(ADDENTERTAINMENT_API_BASE_URL, entertainment);
  }
  getEntertainmentById(id){
    return axios.get(ENTERTAINMENT_API_URL +'/'+ id);
  }
  updateEntertainment(entertainment,id){
     return axios.put(UPDATEENTERTAINMENT_API_BASE_URL+'/'+id,entertainment);
  }
}
export default new EntertainmentService()