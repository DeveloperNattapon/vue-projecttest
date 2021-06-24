import {
    httpClient
} from "../../../share";

const apiSaveUserAccount = parameter => {
    const url = "api/User/SaveUserAccount";
    return httpClient.post(url, parameter).then(res => res.data.data).catch(error => {
        console.log("Error ==>", error.message)
    });

}
const apiGetStock = () => {
    const url = "/api/Stock/GetStock";
    return httpClient.get(url).then(res => res.data).catch(error => {
        console.log("Error ==>", error);
    });
}
const logout = () => {
    localStorage.removeItem('user')
    localStorage.removeItem("userLogin");
}

const UserCheck = parameter => {
     const url = "/api/User/UserCheck";
     return httpClient.post(url,parameter).then(res => res.data.data).catch(error => {
         console.log("Error ==> ",error.message);
     })
 }
export const service = {
    apiSaveUserAccount,
    apiGetStock,
    logout,
    UserCheck
}