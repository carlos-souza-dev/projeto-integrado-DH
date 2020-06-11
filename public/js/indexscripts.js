// const members = document.getElementById('members');
// // const cardMember = document.getElementsByClassName('card-member');
// const memberAvatar = document.getElementsByClassName('member-avatar');
// // const memberName = document.getElementsByClassName('member-name');
// const memberGithub = document.getElementsByClassName('member-github');
// const memberLinkedin = document.getElementsByClassName('member-linkedin');

// //Preenchimento dos cards dos membros do time do Portal do Condomínio com consulta à API do GitHub

// const teamMembers = [
//     {
//         name: "Camila Lopes",
//         user: "Camilacslopes",
//         github,
//         linkedin
//     },
//     {
//         name: "Carlos Souza",
//         user: "carlos-souza-02",
//         github,
//         linkedin
//     },
//     {
//         name: "Daniel Santamaria",
//         user: "daniel-santamaria",
//         github,
//         linkedin
//     },
//     {
//         name: "Gustavo Nóbrega",
//         user: "gustavonnobrega",
//         github,
//         linkedin
//     },
//     {
//         name: "Juliana Araújo",
//         user: "JulianaAraujo",
//         github,
//         linkedin
//     },
// ]

// for(let i = 0; i < 5;i++) {
	
// 	// fetch(`https://api.github.com/users/${teamMembers[member].user}`)
// 	// 	.then(function (response) {
// 	// 		return response.json();
// 	// 	})
// 	// 	.then(function (gituser) {
//     const cardMember = document.createElement("div");
//     cardMember.classList.add("card-member");

//     const memberName = document.createElement("div");
//     memberName.classList.add("member-name");

//     cardMember.appendChild(memberName);
//     members.appendChild(cardMember);
    



//             // memberAvatar.style.backgroundImg = `url(${gituser.avatar_url})` 

//             // alert(gituser.name)
            
//             // logradouro.value = endereco.logradouro;
// 			// logradouro.readOnly = true;

// 			// cidade.value = endereco.localidade;
// 			// cidade.readOnly = true;

// 			// estado.value = endereco.uf;
// 			// estado.readOnly = true;

// 			// bairro.value  = endereco.bairro;
// 			// bairro.readOnly = true;
// 		// })
// 		// .catch(function (erro) {
//         //     alert(erro)
            
//         //     // cepform.value = "";
// 		// 	// alert('Erro ao consultar CEP');
// 		// })
		
// }


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