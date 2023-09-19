const p = new Promise(function(resolve, reject){
    setTimeout(function() {
        let sid = 'B6311223';
        if(sid){
            resolve({id: sid, name: 'Siwakorn'});
        }else{
            reject(new Error('Error 404 Bad Request'));
        }
    }, 1000);
})

p.then(result => {
    console.log(result);
})
.catch(function(error){
    console.error(error);
})


