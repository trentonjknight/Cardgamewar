


//console.log(generate1());

document.querySelector("#cardnumber1").innerHTML = generate1() ;

document.querySelector("#cardnumber2").innerHTML = generate2();

function generate1(){

     return Math.floor(Math.random() * 9) + 1;
}
function generate2(){

     return Math.floor(Math.random() * 9) + 1;
}