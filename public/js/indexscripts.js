let mensagemSucesso = sessionStorage.getItem('modalSucesso');
        
window.addEventListener('load', function () {
    if(mensagemSucesso) {
        $('#ModalCenter').modal('show');
    }

    sessionStorage.removeItem('modalSucesso');
})


if(!sessionStorage.getItem('modalshown')) {

document.addEventListener('mouseenter', function() {
    document.addEventListener('mouseleave', function() {
        
        $('#ModalCenterNewsLetter').modal('show');
        sessionStorage.setItem('modalshown', true);
    }, 
        { once: true }
    );
}, { once: true } );

}

const subscribed = document.getElementById('subscribed').innerText;

sessionStorage.setItem('subscriptionConfirm', false)

if(subscribed && !sessionStorage.getItem('subscription')) {
    $('#ModalConfirmSubscription').modal('show');
    sessionStorage.setItem('subscription', true);
}