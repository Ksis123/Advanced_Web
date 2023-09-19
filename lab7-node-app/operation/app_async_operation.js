const func_1 = () => {
    setTimeout(() => {
        console.log('The First function done !')
    }, 1500);
}
const func_2 = () => {
    console.log('The Second function done !!');
}

func_1();
func_2();