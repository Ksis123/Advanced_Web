const checkAuth = (username, password) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(username == 'Siwakorn' && password == 'B6311223'){
                console.log('---checkAuth---')
                resolve({authData: username+password})
            }else{
                reject(new Error('Authentication Fail .'))
            }
        })
    }, 2000);
}

const getStudent = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('---getStudent---')
            const data = {name: 'Siwakorn Kaewmala', permission: 'user'};
            resolve(data)
        }, 3000);
    })
}

const getTheTResult = async() => {
    const auth = await checkAuth('Siwakorn','B6311223')
    const data = await getStudent(auth);
    console.log(data);
}

console.log('---Start---')
getTheTResult();
console.log('---Finish---')