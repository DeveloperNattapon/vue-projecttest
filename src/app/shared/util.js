import {SimpleCrypto} from "simple-crypto-js";

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

export {
    CryptoKey,
    Encrypt,
    Decrypt
}