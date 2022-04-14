import axios from 'axios';

const LOGIN_URL = "http://localhost:8080/api/user/login";
const SIGNUP_URL = "http://localhost:8080/api/user/signup";


class UserSigUpLoginService{
 

  login(details){
    return axios.post(LOGIN_URL,details);
  }

  signup(details){
    return axios.post(SIGNUP_URL,details);
  }
}
export default new UserSigUpLoginService()