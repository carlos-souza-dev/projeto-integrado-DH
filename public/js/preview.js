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
    
    console.log("Entrei na fução ")

    var preview = document.querySelectorAll('#img-update');

    var i = 0;

    preview.forEach(element => {
        
        var input = document.querySelectorAll('#update')[i].files[0];

    
        var reader = new FileReader();
    
        reader.onloadend = function() {
    
            element.src = reader.result;
    
        }
    
        if(input) {
            reader.readAsDataURL(input);
        }else{
            element.src = "";
        }

        i++;
    });

};