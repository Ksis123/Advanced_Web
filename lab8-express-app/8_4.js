var expresssFunction = require('express')
var expressApp = expresssFunction()

expressApp.use(expresssFunction.json());

const students = [
    { stdid: 'B6311223', name: 'Siwakorn Kaewmala' },
    { stdid: 'B6325855', name: 'piriyakorn khan-o' },
];

expressApp.post('/api/resource/students', function (req, res) {
    const stdid = req.body.stdid;
    const name = req.body.name;
    if (stdid.length == 8) {
        const student = { 
            stdid: stdid, 
            name: name 
        }

        students.push(student);
        res.status(200).send(student);
    } else {
        res.status(404).send('Error 404 cannot Add Student !');

    }
});

expressApp.listen(3000, function () {
    console.log('Listening on port 3000');
});