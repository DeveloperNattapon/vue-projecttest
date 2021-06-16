import { httpClient } from "../../../share";

const apiSaveUserAccount = parameter => {
 const url = "api/User/SaveUserAccount";
 return httpClient.post(url,parameter).then(res => {
     console.log(res);
     if(res.success) {
          res.data.data
    }
 }).catch(error => {
     console.log("Error ==>", error.message)
 });
 
}
const apiGetStock  =() => {
    const url = "/api/Stock/GetStock";
    return httpClient.get(url).then(res => {
        console.log(res);
    }).catch(error => {
        console.log("Error ==>",error);
    });
}

export const service = {
    apiSaveUserAccount,
    apiGetStock
}