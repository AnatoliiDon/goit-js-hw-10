import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{i as s}from"./assets/vendor-77e16229.js";const i=document.querySelector(".form"),r=document.querySelector(".delay-input"),u=document.querySelector(".fulf-input"),m=document.querySelector(".rej-input"),p=(t,o)=>{const e=parseInt(r.value),n=u.checked,c=m.checked;setTimeout(()=>{n?t(e):c&&o(e)},e)},l=t=>{t.preventDefault(),new Promise(p).then(e=>{s.show({message:`✅ Fulfilled promise in ${e}ms`,color:"green",position:"topRight"})}).catch(e=>{s.show({message:`❌ Rejected promise in ${e}ms`,color:"red",position:"topRight"})})};i.addEventListener("submit",l);
//# sourceMappingURL=commonHelpers2.js.map
