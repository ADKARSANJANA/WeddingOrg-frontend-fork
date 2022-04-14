import axios from 'axios';

const decor_API_URL = "http://localhost:8080/api/user/admin/decorid"
const decor_API_BASE_URL = "http://localhost:8080/api/user/admin/decors"
const ADDdecor_API_BASE_URL = "http://localhost:8080/api/user/admin/addDecor"
const UPDATEdecor_API_BASE_URL = "http://localhost:8080/api/user/admin/editDecor"
//const GETBYID_API_BASE_URL ="http://localhost:8080/api/user/admin/catringid/{id}"
class DecorService{
   
  getDecors(){
      return axios.get(decor_API_BASE_URL);
  }

  createDecor(decor){
    return axios.post(ADDdecor_API_BASE_URL,decor);
  }
  getDecorById(id){
    return axios.get(decor_API_URL +'/'+ id);
  }
  updateDecor(decor,id){
     return axios.put(UPDATEdecor_API_BASE_URL+'/'+id,decor);
  }
}
export default new DecorService()