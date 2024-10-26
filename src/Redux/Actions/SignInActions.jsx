import { GETUSER, LOGOUTUSER, SETUSER } from "../ActionTypes";

export const setuser=(data)=>{
    // console.log(data);
    return{
        type:SETUSER,
        payload:data
    }
}
export const getuser=()=>{
    return{
        type:GETUSER
    }
}
export const logoutuser=()=>{
    console.log("logout");
    return{
        type:LOGOUTUSER,
    }
}