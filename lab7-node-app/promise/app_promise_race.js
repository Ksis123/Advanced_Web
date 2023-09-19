const p1 = new Promise(function(resolve, reject){
    setTimeout(() => {
        console.log('The Firstt route to my home');
        resolve(1);

    }, 1000);

})

const p2 = new Promise(function(resolve, reject){
    setTimeout(() => {
        console.log('The Second route to my home');
        resolve(2);
    }, 3000);
    
})

Promise.race([p1, p2])
    .then(function(result){
        console.log(result);
});