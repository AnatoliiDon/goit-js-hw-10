import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
const submitForm = document.querySelector('.form');
const delayInput = document.querySelector('.delay-input');
const fulfInput = document.querySelector('.fulf-input');
const rejInput = document.querySelector('.rej-input');

let inputValue;

const executor = (resolve, reject) => {
   inputValue = parseInt(delayInput.value);
        if (fulfInput.checked) {
            resolve(`✅ Fulfilled promise in ${delayInput.value}ms`);
        } else if (rejInput.checked){
            reject(`❌ Rejected promise in ${delayInput.value}ms`);
        }
    
}
const getResult = event => {
    event.preventDefault();
    const promise = new Promise(executor);
    promise.then(result => {
         setTimeout(() => {
             iziToast.show({
                 message: result,
                 color: 'green',
                 position: 'topRight',
             } )
       }, inputValue
       ); 
    }).catch(err => {
        setTimeout(() => {
            iziToast.show({
                message: err,
                color: 'red',
                position: 'topRight'
            });
        }, inputValue)
    })
};
submitForm.addEventListener('submit', getResult);