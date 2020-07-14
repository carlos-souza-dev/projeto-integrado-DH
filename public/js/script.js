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
            senha.style.backgroundColor = "white";
            confirmarSenha.style.border = "2px solid green";
            confirmarSenha.style.backgroundColor = "white";
        }
    } else {
        senha.style.backgroundColor = "rgb(243, 198, 198, 1)";
        confirmarSenha.style.backgroundColor = "rgb(243, 198, 198, 1)";
    }
});

const resposta = document.getElementById("resposta");
const cpf = document.getElementById("inputcpf")

cpf.addEventListener("focusout", function(eve) {
    
    const inputcpf = document.getElementById("inputcpf").value;

    var soma = 0;
    var digitoDois;
    var digitoUm;
    var numUm = Number(inputcpf[9])
    var numDois = Number(inputcpf[10])
    
    if(inputcpf.length <= 0) {
        resposta.innerHTML = `<span style="width: 100%; color: red; margin: 0 auto;">
                                <p style="color: red; text-align: center; font-size: 16px;">Campo CPF obrigatório.</p>
                            </span>`
            cpf.style.border = "2px solid red";

    } else {
        if ((inputcpf == "00000000000") || (inputcpf.length > 11)) {
            
            resposta.innerHTML = `<span style="width: 100%; color: red; margin: 0 auto;">
                                    <p style="color: red; text-align: center; font-size: 16px;">Esse CPF não existe.</p>
                                </span>`
            cpf.style.border = "2px solid red";

    } else {

        for (var i = 0; i <= 8; i++) {

            var x = Number(10);
            var dividendo = Number(inputcpf[i]);
            x = x - i;
            soma += (x * dividendo);

        }
        
        digitoUm= soma % 11;  
        soma = 0;
        
        for (var i = 0; i <= 9; i++) {

            var x = Number(11);
            var dividendo = Number(inputcpf[i]);
            x = x - i;
            soma += (x * dividendo);

        }

        digitoDois = soma % 11;
        console.log(numUm)
        console.log(numDois)

        if(digitoUm > 1) {
            var verificadorUm = 11 - digitoUm;
        } else {
            verificadorUm = digitoUm;
        }

        if(digitoDois > 1) {
            var verificadorDois = 11 - digitoDois;
        } else {
            verificadorDois = digitoDois;
        }  


        if(numUm == verificadorUm && numDois == verificadorDois) {
            
            resposta.innerHTML = `<span style="width: 100%; color: green; margin: 0 auto;">
                                    <p style="font-size: 16px; color: green; text-align: center;">CPF válido.</p>
                                </span>`
            cpf.style.border = "2px solid green";
            
        } else {

            resposta.innerHTML = `<span style="width: 100%; color: red; margin: 0 auto;">
                                    <p style="color: red; font-size: 16px; text-align: center;">CPF inválido.</p>
                                </span>`
            cpf.style.border = "2px solid red";
                                
        }    
            
        }
    }
}) 