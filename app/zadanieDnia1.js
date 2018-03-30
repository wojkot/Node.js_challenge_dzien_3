//Twój kod

const fs = require('fs');
const crypto = require('crypto');
const code = "4f7ae6569b55cb6275423ca1cdf31475e607da1d5204c110a58fb480c96e6eca";

process.argv.forEach((val, index) => {
    if (index > 1) {
        fs.readFile("data/zadanieDnia1/" + val,'utf8', (err, data) => {
            if (err === null) {
                const hash = crypto.createHmac('sha256', data).digest('hex');
                console.log(hash);
                if (hash == code) {
                    console.log("File validated succesfully.");
                }
            }
            else {
                console.log("Error reading file.");
            }

        });
    }
});