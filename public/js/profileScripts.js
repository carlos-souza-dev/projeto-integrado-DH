const novaSenha = document.getElementById('senha');
const confirmarNovaSenha = document.getElementById('senharepeat');

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
