const team = [
    {
        gitUser: "Camilacslopes",
        linkedin: "camila-lopes-a90511107/"
    },
    {
        gitUser: "carlos-souza-02",
        linkedin: "carlos-alberto-gomes-de-souza-117375192/"
    },
    {
        gitUser: "daniel-santamaria",
        linkedin: "danielsantamaria-/"
    },
    {
        gitUser: "gustavonnobrega",
        linkedin: "gustavonobrega/"
    },
    {
        gitUser: "JulianaAraujo",
        linkedin: "juliana-borges-da-silva-araujo-25915656/"
    },
];

// const options = {
//     method: 'GET',
//     mode: 'cors',
//     cache: 'default'
// };

team.forEach(function (item, index) {

fetch(`https://api.github.com/users/${team[index].gitUser}`)
    .then(function (response) {
        return response.json();
    })
    .then(function (user) {
        
        let member = {
            avatar_url: user.avatar_url, 
            name: user.name? user.name.split(" ")[0] + " " + user.name.split(" ").slice(-1) : "Membro do time", 
            bio: user.bio? user.bio.slice(0, 75) + "..." : "Desenvolvedorx Web Fullstack - Programa Santander Coders 2020", 
            html_url: user.html_url, 
            linkedin: "https://linkedin.com/in/" + team[index].linkedin,
        }
        cardGenerator(member);
    })
    .catch(function (erro) {
        console.log(`Erro ao buscar usuário ${team[index].gitUser}`);
    })

})

function cardGenerator(member) {

    const members = document.getElementById('members');

    const card = document.createElement('div');
    card.setAttribute('class', 'card-member');

    const memberAvatar = document.createElement('div');
    memberAvatar.setAttribute('class', 'member-avatar');
    memberAvatar.style.backgroundImage = `url('${member.avatar_url}')`
    memberAvatar.style.backgroundRepeat= "no-repeat";
    memberAvatar.style.backgroundPosition = 'center';
    memberAvatar.style.backgroundSize = 'cover';

    const memberName = document.createElement('div');
    memberName.setAttribute('class', 'member-name');
    memberName.innerText = `${member.name}`;

    const memberBio = document.createElement('div');
    memberBio.setAttribute('class', 'member-bio');
    memberBio.innerText = `${member.bio}`;

    const divProfiles = document.createElement('div');
    divProfiles.setAttribute('class', 'divProfiles');

    const memberGithub = document.createElement('a');
    memberGithub.setAttribute('class', 'member-github');
    memberGithub.setAttribute('href', `${member.html_url}`);
    memberGithub.innerHTML = '<i class="fa fa-github" style="font-size:28px;color:#ebebeb;"></i>';

    const memberLinkedin = document.createElement('a');
    memberLinkedin.setAttribute('class', 'member-linkedin');
    memberLinkedin.setAttribute('href', `${member.linkedin}`);
    memberLinkedin.innerHTML = '<i class="fa fa-linkedin" style="font-size:28px;color:#ebebeb;"></i>';

    members.appendChild(card);
    card.appendChild(memberAvatar);
    card.appendChild(memberName);
    card.appendChild(memberBio);
    card.appendChild(divProfiles);
    divProfiles.appendChild(memberGithub);
    divProfiles.appendChild(memberLinkedin);

}