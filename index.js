function generate1() {                   // Randomly get card and type of card(Spades, Diamonds, Hearts & Clovers)
  let min=2;
  let max=14 ;
  let typeCard=""

      let typeCardNumber = Math.floor(Math.random() * 4) + 1;
      switch(typeCardNumber) {
        case 1:
           typeCard="spades"
           break;
        case 2:
            typeCard="diamonds"
           break;
         case 3:
            typeCard="hearts"
            break;
        case 4:
           typeCard="clovers"
           break;
     }

      let card = Math.floor(Math.random() * (max - min + 1) + min);
      switch(card) {
        case 11:
           card="J"
            break;
        case 12:
           card="Q"
            break;
         case 13:
            card="K"
            break;
         case 14:
            card="A"
            break;
       // default:
    }

      document.querySelector("#cardnumber1").innerHTML = `${card}<p>  ${typeCard}  </p>`;
    //   document.getElementById("p1go").addEventListener("click", function(generate1){
    //     generate1.preventDefault()
    //   });

}

function generate2() {                   // Randomly get card and type of card(Spades, Diamonds, Hearts & Clovers)
  let min=2;
  let max=14 ;
  let typeCard2=""

      let typeCardNumber2 = Math.floor(Math.random() * 4) + 1;
      switch(typeCardNumber2) {
        case 1:
           typeCard2="spades"
           break;
        case 2:
            typeCard2="diamonds"
           break;
         case 3:
            typeCard2="hearts"
            break;
        case 4:
           typeCard2="clovers"
           break;
     }

      let card2 = Math.floor(Math.random() * (max - min + 1) + min);
      switch(card2) {
        case 11:
           card2="J"
            break;
        case 12:
           card2="Q"
            break;
         case 13:
            card2="K"
            break;
         case 14:
            card2="A"
            break;
       // default:
    }

      document.querySelector("#cardnumber2").innerHTML = `${card2}<p>  ${typeCard2}  </p>`;
    //   document.getElementById("p1go").addEventListener("click", function(generate1){
    //     generate1.preventDefault()
    //   });

}