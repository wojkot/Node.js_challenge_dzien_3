const MY_PWD_HASH = '5dca0fc4e306d92b2077ad85e7c4bd87a3e8648e';

//Twój kod

const crypto = require('crypto');

const passwords = ['??TegoHasła', 'CodersLab', 'Node.js Szyfruje Pliki', 'Zaźółć Gęślą Jaźń', 'Moje Haslo 1@3!', '111#$((@)n', 'Dzisiaj Szyfruje 83'];
const alghoritms = ['sha256', 'sha512', 'rmd160', 'md5'];

passwords.forEach((password) => {
    alghoritms.forEach((alghoritm) => {
        const hash = crypto.createHmac(alghoritm, password).digest('hex');
        if (hash === MY_PWD_HASH) {
            console.log("The password is: ", password);
        }
    });
});

