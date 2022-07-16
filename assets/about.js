var about = document.querySelector('.loadabout');
var abouthome = document.querySelector('.pageabout')
console.log(abouthome);
setTimeout(()=>{
    about.classList.add('endloadabout')
    abouthome.classList.add('onloadabout')
},2000)