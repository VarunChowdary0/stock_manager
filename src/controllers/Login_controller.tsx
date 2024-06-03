import axios from "axios";
import { url } from "./Server_URL";

export const login = (username:string,password:string,sk:string) => {
   
return axios.post(url+'admin_login',{
        username,
        password,
        sk
    })
    .then((res)=>{
        // console.log(res);
        return {status:true,data:res.data.data}
    })
    .catch((err)=>{
        console.log(err);
        return {status:false,data:"NA"}
    })
}