const jwt = require('jsonwebtoken');

const playload = {
    std_id: 'B6311223',
    name: 'Siwakorn Kaewmala',
    major: 'CPE'
}

const key = 'MY_Key'
const token = jwt.sign(playload, key, {expiresIn: '5m'});
console.log(token)

try {
    const dataInToken = jwt.verify(token, key);
    console.log(dataInToken);
} catch (error){
    console.log(error);
}