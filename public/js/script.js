// script já está conectado.

const senha = document.getElementById("password");
const confirmarSenha = document.getElementById("confirmPassword");
const btnCadastro = document.querySelector(".btn-cadastro");
const formCadastro = document.querySelector(".cadastro-enter")


formCadastro.addEventListener("mouseover", function (eve) {
    
    const senhaUm = senha.value;
    const senhaDois = confirmarSenha.value;    

    if(senhaUm.trim() !== "" && senhaDois.trim() !== ""){ 

        if(senhaUm !== senhaDois) {
          
            senha.style.border = "2px solid red";
            confirmarSenha.style.border = "2px solid red";
            btnCadastro.style.opacity = "0.5"
        } else {
            btnCadastro.style.opacity = "1"
            senha.style.border = "2px solid green";
            confirmarSenha.style.border = "2px solid green";
            senha.style.backgroundColor = "white";
            confirmarSenha.style.backgroundColor = "white";
        }
    } else {
            senha.style.backgroundColor = "rgb(243, 198, 198, 1)";
            confirmarSenha.style.backgroundColor = "rgb(243, 198, 198, 1)";
    }
});