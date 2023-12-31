const emojis = [
    "🐱",
    "🐱",
    "🦝",
    "🦝",
    "🦊",
    "🦊",
    "🐶",
    "🐶",
    "🐵",
    "🐵",
    "🦁",
    "🦁",
    "🐯",
    "🐯",
    "🐮",
    "🐮",
  ];
let openCards = [];
//criar um enbaralhador de emojis
//sort permite criar uma ordenação de acordo com alguma função criada
//math para fazer calculos matemáticos
//para cada elemento vai colocar o valor de 2 e -1. O que tiver com o 2 vai pra frente e -1 vai para trás

let shuffleEmojis = emojis.sort(() => (Math.random() > 0.5 ? 2 : -1));
//criando uma caixa dinamicamente
for (let i = 0; i < emojis.length; i++) {
  let box = document.createElement("div");
  box.className = "item";
  box.innerHTML = shuffleEmojis[i];
  box.onclick = handleClick;
  document.querySelector(".game").appendChild(box);
}
//comparar se as 2 cartas são iguais e verificar se foram abertas apenas 2 cartas
function handleClick(){
  if(openCards.length < 2) {
    this.classList.add("boxOpen");
    openCards.push(this); 
  }

  if(openCards.length == 2) {
    setTimeout(checkMatch, 500);
  }
}

function checkMatch() {
  if(openCards[0].innerHTML=== openCards[1].innerHTML){
    openCards[0].classList.add("boxMatch");
    openCards[1].classList.add("boxMatch");
  }else{
    openCards[0].classList.remove("boxOpen");
    openCards[1].classList.remove("boxOpen");
  }
  openCards =[];

  if(document.querySelectorAll(".boxMatch").length===emojis.length){
    alert('Você venceu !')
  }
}



 