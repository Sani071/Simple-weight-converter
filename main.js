let inputField = document.querySelector('#inputfield')
let pondsOutPut = document.querySelector('.poundsoutput')
let gramsOutPut = document.querySelector('.gramsoutput')
let miligramsOutPut = document.querySelector('.miligramsoutput')
inputField.addEventListener("input",function(e) {
    let kg = e.target.value;
    pondsOutPut.innerHTML = kg*2.204623
    gramsOutPut.innerHTML = kg*1000
    miligramsOutPut.innerHTML = kg*10000
    
})



