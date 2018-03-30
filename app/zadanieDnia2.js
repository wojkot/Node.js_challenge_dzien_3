const ENCRYPTED_TEXT = '4f9fa8f98650091c4910f5b597773c0a48278cfb001fe4eb3ff47ada85cbf0ed3dc17016b031e1459e6e4d9b001ab6e102c11e834a98dce9530c9668c47b76ee6f09d075d19a38e48b415e067c6ddcfad0d3526c405a4f4f2fb1e7502f303c40';
const prePassword = ("Pobawmy się jak komputerowy Detektyw").split(" ");
const alghoritms = ['aes192', 'aes-256-cbc', 'aes-256-ecb'];
let password = "";
const fs = require('fs');
const crypto = require('crypto');

prePassword.forEach((val) => {
    password += val[0] + val[val.length - 1];
});

function decodeText(encodedText, password, algorithm) {
    const decipher = crypto.createDecipher(algorithm, password);
    decipher.setAutoPadding(false);
    let decrypted = decipher.update(encodedText, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
}


process.argv.forEach((arg,index) => {


                alghoritms.forEach((alghoritm) =>{
                    let code = decodeText(ENCRYPTED_TEXT, password, alghoritm);
                    console.log(code)
                });
            
  
});


