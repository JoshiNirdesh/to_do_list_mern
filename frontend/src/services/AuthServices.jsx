import axios from 'axios';

const loginUser = (data)=>{
   return  axios.post("http://localhost:4000/api/v1/user/login",data);
}
const registerUser = ()=>{

}
const AuthServices = {loginUser,registerUser};
export default AuthServices