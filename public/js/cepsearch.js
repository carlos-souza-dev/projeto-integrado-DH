const containerEndereco = document.getElementById('container-endereco');
const consulta = document.getElementById('consulta');
const logradouro = document.getElementById('logradouro');
const numero = document.getElementById('numero');
const cidade = document.getElementById('cidade');
const estado = document.getElementById('estado');
const bairro = document.getElementById('bairro');
const cepform = document.getElementById('cep');
const cepDesconhecido = document.getElementById('unknownCep');
const enviar = document.getElementById('enviar');

containerEndereco.style.display = 'none';

window.addEventListener('keydown', function(event) {
    if(event.keyCode == 13) {
        event.preventDefault();
    }
});

enviar.addEventListener('click', function() {
    sessionStorage.setItem('modalSucesso', true);
});

cepform.addEventListener('blur', consultarCep);
cepform.addEventListener('keydown', apagaEndereco);

cepDesconhecido.addEventListener('click', function () {
	exibeForm();
	apagaEndereco()
	cepform.value = "";
});

function exibeForm() {
	containerEndereco.style.display = 'block';
}

function consultarCep() {

	let cep = cepform.value;
	
	fetch(`https://viacep.com.br/ws/${cep}/json/`)
		.then(function (response) {
			return response.json();
		})
		.then(function (endereco) {
			logradouro.value = endereco.logradouro;
			logradouro.readOnly = true;

			cidade.value = endereco.localidade;
			cidade.readOnly = true;

			estado.value = endereco.uf;
			estado.readOnly = true;

			bairro.value  = endereco.bairro;
			bairro.readOnly = true;
		})
		.catch(function (erro) {
			cepform.value = "";
			alert('Erro ao consultar CEP');
		})
		
		exibeForm();
}

function apagaEndereco () {
	logradouro.value = "";
	logradouro.readOnly = false;

	cidade.value = "";
	cidade.readOnly = false;

	estado.value = "";
	estado.readOnly = false;

	bairro.value  = "";
	bairro.readOnly = false;
}

	// // Definir carregando com visivel e container do endereço como invisivel
	// document.getElementById('carregando').style.display = 'block';
	// document.getElementById('container-endereco').style.display = 'none';

	// // Obter valor do cep digitado e uri concatenado
	// var cep = document.getElementById('cepText').value;
	// var uri = "https://apps.widenet.com.br/busca-cep/api/cep/" + cep + ".json";
	
	// // Definir instancia para executar ajax
	// var xhr = new XMLHttpRequest();
	
	// // Definir função de callback
	// xhr.onreadystatechange = function(response) {
	// 	// Verificar se ajax está finalizado para exibir endereço obtido do servidor
	// 	if (this.readyState == 4 && this.status == 200) {
	// 		// Converter para objeto (assim podemodes acessar suas propriedades)
	// 		var endereco = JSON.parse(this.responseText);
			
	// 		// Definir valore do endereço, com seus respectivos elementos na página (por id)
	// 		document.getElementById('logradouro').innerText = endereco.address;
	// 		document.getElementById('bairro').innerText = endereco.district;
	// 		document.getElementById('cidade').innerText = endereco.city;
	// 		document.getElementById('estado').innerText = endereco.state;
			
	// 		// Esconder carregando e exibir container com endereço definir no trecho de codigo acima
	// 		document.getElementById('carregando').style.display = 'none';
	// 		document.getElementById('container-endereco').style.display = 'block';
	// 	}
	// };
	
	// // Definir método de acesso (GET) e URI para onde deve ser enviado o request
	// xhr.open('GET', uri);
	
	// // Executar a chamada do request para uri
	// xhr.send();
// }

/* <div id="carregando" style="display:none;color:RED">
	<h1>Carregando...</h1>
</div>

<input class="form-control col-2" type="text" id="cepText" />
<button type="button" class="btn btn-dark" onclick="consultarCep()">Consultar</button>

<div id="container-endereco">
	<div class="item-endereco">
		Logradouro: <span id="logradouro"></span>
	</div>
	<div class="item-endereco">
		Bairro: <span id="bairro"></span>
	</div>
	<div class="item-endereco">
		Cidade: <span id="cidade"></span>
	</div>
	<div class="item-endereco">
		Estado: <span id="estado"></span>
	</div>
</div> */





/* <html>
    <head>
    <title>ViaCEP Webservice</title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

    <!-- Adicionando Javascript -->
    <script type="text/javascript" >
    
    function limpa_formulário_cep() {
            //Limpa valores do formulário de cep.
            document.getElementById('rua').value=("");
            document.getElementById('bairro').value=("");
            document.getElementById('cidade').value=("");
            document.getElementById('uf').value=("");
            document.getElementById('ibge').value=("");
    }

    function meu_callback(conteudo) {
        if (!("erro" in conteudo)) {
            //Atualiza os campos com os valores.
            document.getElementById('rua').value=(conteudo.logradouro);
            document.getElementById('bairro').value=(conteudo.bairro);
            document.getElementById('cidade').value=(conteudo.localidade);
            document.getElementById('uf').value=(conteudo.uf);
            document.getElementById('ibge').value=(conteudo.ibge);
        } //end if.
        else {
            //CEP não Encontrado.
            limpa_formulário_cep();
            alert("CEP não encontrado.");
        }
    }
        
    function pesquisacep(valor) {

        //Nova variável "cep" somente com dígitos.
        var cep = valor.replace(/\D/g, '');

        //Verifica se campo cep possui valor informado.
        if (cep != "") {

            //Expressão regular para validar o CEP.
            var validacep = /^[0-9]{8}$/;

            //Valida o formato do CEP.
            if(validacep.test(cep)) {

                //Preenche os campos com "..." enquanto consulta webservice.
                document.getElementById('rua').value="...";
                document.getElementById('bairro').value="...";
                document.getElementById('cidade').value="...";
                document.getElementById('uf').value="...";
                document.getElementById('ibge').value="...";

                //Cria um elemento javascript.
                var script = document.createElement('script');

                //Sincroniza com o callback.
                script.src = 'https://viacep.com.br/ws/'+ cep + '/json/?callback=meu_callback';

                //Insere script no documento e carrega o conteúdo.
                document.body.appendChild(script);

            } //end if.
            else {
                //cep é inválido.
                limpa_formulário_cep();
                alert("Formato de CEP inválido.");
            }
        } //end if.
        else {
            //cep sem valor, limpa formulário.
            limpa_formulário_cep();
        }
    };

    </script>
    </head>

    <body>
    <!-- Inicio do formulario -->
      <form method="get" action=".">
        <label>Cep:
        <input name="cep" type="text" id="cep" value="" size="10" maxlength="9"
               onblur="pesquisacep(this.value);" /></label><br />
        <label>Rua:
        <input name="rua" type="text" id="rua" size="60" /></label><br />
        <label>Bairro:
        <input name="bairro" type="text" id="bairro" size="40" /></label><br />
        <label>Cidade:
        <input name="cidade" type="text" id="cidade" size="40" /></label><br />
        <label>Estado:
        <input name="uf" type="text" id="uf" size="2" /></label><br />
        <label>IBGE:
        <input name="ibge" type="text" id="ibge" size="8" /></label><br />
      </form>
    </body>

    </html> */