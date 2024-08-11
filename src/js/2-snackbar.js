import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
const submitForm = document.querySelector('.form');
const delayInput = document.querySelector('.delay-input');
const fulfInput = document.querySelector('.fulf-input');
const rejInput = document.querySelector('.rej-input');

const executor = (resolve, reject) => {
        if (fulfInput.checked) {
            resolve(`✅ Fulfilled promise in ${delayInput.value}ms`);
        } else if (rejInput.checked){
            reject(`❌ Rejected promise in ${delayInput.value}ms`);
        }
    
}
const getResult = event => {
    console.log(delayInput.value);
console.log(fulfInput.checked);
    event.preventDefault();
    const promise = new Promise(executor);
    promise.then(result => {
         setTimeout(() => {
             iziToast.show({
                 message: result,
                 color: 'green',
                 position: 'topRight',
             } )
       }, delayInput.value
       ); 
    }).catch(err => {
        setTimeout(() => {
            iziToast.show({
                message: err,
                color: 'red',
                position: 'topRight'
            });
        }, delayInput.value)
    })
};
submitForm.addEventListener('submit', getResult);