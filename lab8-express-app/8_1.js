var expresssFunction = require('express')
var expressApp = expresssFunction()

expressApp.get('/api/resource', function  (req, res) {
    res.status(200).send('Hello World');
})

expressApp.listen(3000, function(){
    console.log('Listening on port 3000');
});
