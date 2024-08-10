import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";

const submitForm = document.querySelector('.form');
const delayInput = document.querySelector('.delay-input');
const fulfInput = document.querySelector('.fulf-input');

const executor = (resolve, reject) => {
    setTimeout(() => {
        if (fulfInput.checked) {
            resolve();
        } else {
            reject();
        }
    }, delayInput.value);
}
const getResult = event => {
    event.preventDefault();
    const promise = new Promise(executor);
    promise.then(result => {
       iziToast.show({
                message: `✅ Fulfilled promise in ${delayInput.value}ms`,
                color: 'green',
    position: 'topRight'}); 
    }).catch(err => {
              iziToast.show({
                message: `❌ Rejected promise in ${delayInput.value}ms`,
                color: 'red',
    position: 'topRight'});  
    })
};

submitForm.addEventListener('submit', getResult);