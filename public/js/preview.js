function previewImagem () {
    console.log("Entrei na fução")
    var imagem = document.getElementById('upload').files[0];
    var preview = document.getElementById('img-upload');

    var reader = new FileReader();

    reader.onloadend = function() {

        preview.src = reader.result;

    }

    if(imagem) {
        reader.readAsDataURL(imagem);
    }else{
        preview.src = "";
    }
};


function previewImagemUpdate () {
    console.log("Entrei na fução")
    var imagem = document.getElementById('update').files[0];
    var preview = document.getElementById('img-update');

    var reader = new FileReader();

    reader.onloadend = function() {

        preview.src = reader.result;

    }

    if(imagem) {
        reader.readAsDataURL(imagem);
    }else{
        preview.src = "";
    }
};



  
// var btnMorador = document.querySelector('.btn-morador');
// var moradorModal = document.querySelector('.morador-modal-bg');
// var moradorCloseModal = document.querySelector('.morador-close-modal');

// btnMorador.addEventListener('click', function(){
//     moradorModal.classList.add('bg-active');
// }); 

// moradorCloseModal.addEventListener('click', function(){
//     moradorModal.classList.remove('bg-active')
// });

// var userModal = document.querySelector('.user-modal-bg');

// function addModal () {
//     document.querySelector('.user-modal-bg').classList.toggle('bg-active');
// };
