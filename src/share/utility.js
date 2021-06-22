
import {SimpleCrypto} from 'simple-crypto-js'
var CryptoJS = require("crypto-js");
let key = "123#$%";

const CryptoKey = () => {
    return SimpleCrypto.generateRandom(256);
}
const Encrypt = (message, key) => {
    const simpleCrypto = new SimpleCrypto(key);
    return simpleCrypto.encrypt(message);
}
const EncryptData = (message) => {
    const encrypt = CryptoJS.HmacSHA1(message,key).toString();
    return encrypt;
}
const Decrypt = (message, key) => {
    const simpleCrypto = new SimpleCrypto(key);
    return simpleCrypto.decrypt(message);
}
const DecryptData = (message) => {
    return CryptoJS.AES.decrypt(message,key).toString(CryptoJS.enc.Utf8);
}
const GetSessionToken = () => {
    let retVal = null;

    const tokenKey = localStorage.getItem('_id');
    const token = localStorage.getItem('_val');

    if(tokenKey) {
      const decryptString = Decrypt(token, tokenKey);

      if(decryptString) {
        retVal = JSON.parse(decryptString);
      }
    }

    return retVal;
}

export {
    CryptoKey,
    Encrypt,
    Decrypt,
    GetSessionToken,
    EncryptData,
    DecryptData
}