const CryptoJS = require('crypto-js');

exports.encryptSsn = (ssn) => {
    try{
        return CryptoJS.AES.encrypt(ssn, process.env.ENCRYPTION_KEY).toString();
    }catch(e){
        return null;
    }
}

exports.decryptSsn = (ssn) => {
    try{
        const bytes = CryptoJS.AES.decrypt(ssn, process.env.ENCRYPTION_KEY);
        return JSON.parse(bytes.toString(CryptoJS.enc.Utf8))
    }catch(e){
        return null;
    }
}

exports.generateSessionToken = (token) => {
    try{
        return CryptoJS.AES.encrypt(token, process.env.SESSION_ENCRYPTION_KEY).toString();
    }catch(e){
        return null;
    }
}

exports.checkSessionToken = (token) => {
    try{
        const bytes = CryptoJS.AES.decrypt(token, process.env.SESSION_ENCRYPTION_KEY);
        return JSON.parse(bytes.toString(CryptoJS.enc.Utf8))
    }catch(e){
        return null;
    }
}