const members = document.getElementById('members');

const card = document.createElement('div');
card.setAttribute('class', 'card-member');

const memberAvatar = document.createElement('div');
memberAvatar.setAttribute('class', 'member-avatar');
memberAvatar.style.backgroundImage = "url('https://i.pinimg.com/originals/7c/c7/a6/7cc7a630624d20f7797cb4c8e93c09c1.png')"
memberAvatar.style.backgroundRepeat= "no-repeat";
memberAvatar.style.backgroundPosition = 'center';
memberAvatar.style.backgroundSize = 'cover';

const memberName = document.createElement('div');
memberName.setAttribute('class', 'member-name');
memberName.innerText = "Daniel"

const divProfiles = document.createElement('div');
divProfiles.setAttribute('class', 'divProfiles');

const memberGithub = document.createElement('a');
memberGithub.setAttribute('class', 'member-github');
memberGithub.setAttribute('href', 'https://www.google.com');
memberGithub.innerHTML = '<i class="fa fa-github" style="font-size:28px;color:#ebebeb;"></i>';

const memberLinkedin = document.createElement('a');
memberLinkedin.setAttribute('class', 'member-linkedin');
memberLinkedin.setAttribute('href', 'https://www.google.com');
memberLinkedin.innerHTML = '<i class="fa fa-linkedin" style="font-size:28px;color:#ebebeb;"></i>';

members.appendChild(card);
card.appendChild(memberAvatar);
card.appendChild(memberName);
card.appendChild(divProfiles);
divProfiles.appendChild(memberGithub);
divProfiles.appendChild(memberLinkedin);


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