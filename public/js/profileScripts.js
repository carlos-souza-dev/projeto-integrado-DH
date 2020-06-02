const novaSenha = document.getElementById('senha');
const confirmarNovaSenha = document.getElementById('senharepeat');
const inputFile = document.getElementById('photo');
const photoLabel = document.querySelector('.photo');
const interesses = document.querySelector('.tagsInteresse');
const restante = document.querySelector('.interessesRestantes');
const limit = document.getElementById('limit');

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


inputFile.addEventListener('change', function(e) {
    photoLabel.innerHTML = inputFile.files[0].name;
});



let limiteDeInteresses = 10;

limit.innerText = limiteDeInteresses;
restante.innerText = limiteDeInteresses;

interesses.addEventListener('change', function(event) { 
    
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
})