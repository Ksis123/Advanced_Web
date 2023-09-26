var expresssFunction = require('express')
var expressApp = expresssFunction()

const students = [
    { std_id: 'B6311223', name: 'Siwakorn Kaewmala' },
    { std_id: 'B6325855', name: 'piriyakorn khan-o' },
    { std_id: 'B6303044', name: 'chookiat kainta' },
];

expressApp.use(function (req, res, next) {
    console.log('Logged')
    next()
});

expressApp.use(function (req, res, next) {
    console.log('Autentication')
    next()
});

expressApp.get('/', function (req, res) {
    res.status(200).send('Hello World');
});

expressApp.get('/api/resource/students/:std_id', function (req, res) {
    const std_id = req.params.std_id;
    if (std_id == 'B6311223') {
        res.status(200).send(students[0]);
    } else if (std_id == 'B6325855') {
        res.status(200).send(students[1]);
    } else if (std_id == 'B6303044') {
        res.status(200).send(students[2]);
    } else {
        res.status(404).send('Error 404 not Found');

    }
})

expressApp.listen(3000, function () {
    console.log('Listening on port 3000');
});