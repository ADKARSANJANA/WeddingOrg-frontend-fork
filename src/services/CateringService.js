import axios from 'axios';

const CATERING_API_URL = "http://localhost:8080/api/user/admin/cateringid"
const CATERING_API_BASE_URL = "http://localhost:8080/api/user/admin/caterings"
const ADDCATERING_API_BASE_URL = "http://localhost:8080/api/user/admin/addCatering"
const UPDATECATERING_API_BASE_URL = "http://localhost:8080/api/user/admin/editCatering"
//const GETBYID_API_BASE_URL ="http://localhost:8080/api/user/admin/catringid/{id}"
class CateringService{
   
  getCaterings(){
      return axios.get(CATERING_API_BASE_URL);
  }

  createCatering(catering){
    return axios.post(ADDCATERING_API_BASE_URL,catering);
  }
  getCateringById(id){
    return axios.get(CATERING_API_URL +'/'+ id);
  }
  updateCatering(catering,id){
     return axios.put(UPDATECATERING_API_BASE_URL+'/'+id,catering);
  }
}
export default new CateringService()