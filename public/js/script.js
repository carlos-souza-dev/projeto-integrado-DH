const cardList = document.querySelector(".status");
const footer = document.getElementById("footerText");

footer.addEventListener("click", function() {
    console.log("Você clicou no footer");
})

const botaoSolicitacao = document.getElementById("botaoCadastrar");

botaoSolicitacao.style.backgroundColor = "yellow";


// for (let i = 0; i < cardList.length; i++) {
    
    
//     if(cardList.value == "Indeferida"){
//         cardList.classList.add("status-red")
//     } else {

//         if(cardList.value == "Deferida"){
//             cardList.classList.add("status-green")
//         } else {
//             cardList.classList.add("status-grey")
//         }
    
//     }
// };