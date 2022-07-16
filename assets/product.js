var pro = document.querySelector('.loadpro');
var prohome = document.querySelector('.pagepro')
console.log(prohome);
setTimeout(()=>{
    pro.classList.add('endloadpro')
    prohome.classList.add('onloadpro')
},2000)