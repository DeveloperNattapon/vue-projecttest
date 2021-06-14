
import {SimpleCrypto} from 'simple-crypto-js'

const CryptoKey = () => {
    return SimpleCrypto.generateRandom(256);
}

const Encrypt = (message, key) => {
    const simpleCrypto = new SimpleCrypto(key);
    return simpleCrypto.encrypt(message);
}

const Decrypt = (message, key) => {
    const simpleCrypto = new SimpleCrypto(key);
    return simpleCrypto.decrypt(message);
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
    GetSessionToken
}