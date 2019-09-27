function generate1(){
     let card = Math.floor(Math.random() * 9) + 1;
        document.querySelector("#cardnumber1").innerHTML = `${card}`;
}

function generate2(){
     let card2 =  Math.floor(Math.random() * 9) + 1;
        document.querySelector("#cardnumber2").innerHTML = `${card2}`;
}