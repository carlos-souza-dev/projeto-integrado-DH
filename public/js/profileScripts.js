const novaSenha = document.getElementById('senha');
const confirmarNovaSenha = document.getElementById('senharepeat');
const inputFile = document.getElementById('photo');
const photoLabel = document.querySelector('.photo');
const interesses = document.querySelector('.tagsInteresse');
const interesseItem = document.querySelectorAll('.interesse');
const restante = document.querySelector('.interessesRestantes');
const limit = document.getElementById('limit');
const interessesString = document.getElementById('interessesControllerObject');


// Validação de digitação correta de nova senha
confirmarNovaSenha.addEventListener('blur', function () {
    
    if(novaSenha.value.trim()) {

        if(novaSenha.value == confirmarNovaSenha.value){
            confirmarNovaSenha.style.border = "2px solid green";
        } else {
            confirmarNovaSenha.style.border = "2px solid red";
        }
    } else {
        confirmarNovaSenha.style.border = "1px solid #ced4da";
    }

});

novaSenha.addEventListener('blur', function () {
    
    confirmarNovaSenha.disabled = false;

    if(novaSenha.value.trim()) {
        if(novaSenha.value == confirmarNovaSenha.value){
            confirmarNovaSenha.style.border = "2px solid green";
        } else {
            confirmarNovaSenha.style.border = "2px solid red";
        }
    } else {
        confirmarNovaSenha.style.border = "1px solid #ced4da";
        confirmarNovaSenha.disabled = true;
    }

});


// exibição do nome do arquivono campo de imagem
inputFile.addEventListener('change', function(e) {
    photoLabel.innerHTML = inputFile.files[0].name;
});


// marcação dos interesses do usuário, de acordo com o banco de dados
window.addEventListener('DOMContentLoaded', function(event) {
    let interessesArray = JSON.parse(interessesString.innerText);
    
    // document.getElementById('testeArrayInteresse').innerText = interessesArray;
    
    for(i in interessesArray) {
        for(i2 in interesseItem) {
            if(interessesArray[i] == interesseItem[i2].value){
                interesseItem[i2].checked = true;
            }
        }
    }
    
});

// O limite de interesses deverá ser definido pela variável abaixo, limiteGlobal
const limiteGlobal = 10;

window.addEventListener('load', function(event) { 
    
    let limiteDeInteresses = limiteGlobal;

    limit.innerText = limiteDeInteresses;
    // restante.innerText = limiteDeInteresses;

    const checked = interesses.querySelectorAll('input[type="checkbox"]:checked');
    const notChecked = interesses.querySelectorAll('input[type="checkbox"]:not(:checked)');
        
    if(checked.length >= limiteDeInteresses) {
        for(interesse of notChecked) {
            interesse.disabled = true;
        }
    }

    if(checked.length < limiteDeInteresses) {
        for(interesse of notChecked) {
            interesse.disabled = false;
        }
    }

    restante.innerText = (limiteDeInteresses - checked.length);
});

interesses.addEventListener('change', function(event) { 
    
    let limiteDeInteresses = limiteGlobal;

    const checked = this.querySelectorAll('input[type="checkbox"]:checked');
    const notChecked = this.querySelectorAll('input[type="checkbox"]:not(:checked)');
        
    if(checked.length >= limiteDeInteresses) {
        for(interesse of notChecked) {
            interesse.disabled = true;
        }
    }

    if(checked.length < limiteDeInteresses) {
        for(interesse of notChecked) {
            interesse.disabled = false;
        }
    }

    restante.innerText = (limiteDeInteresses - checked.length);
});