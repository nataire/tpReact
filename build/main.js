"use strict";

console.log('Welcome to REACTube !');
var what = 'door';
console.log('Hold', 'the', what);
/*
V1 
const tumbnail = `L8KQIPCODV8`;
const url = `https://source.unsplash.com/${tumbnail}/600x340`;
let html = `<a href="${url}">
            <img src="${url}"/>
            <h4>${tumbnail}</h4>
            </a>`;
//console.log(html );
document.querySelector('.videoList').innerHTML = html;*/
//V2

/*
const data = ['L8KQIPCODV8', 'umyvrlx0ma8', 'L1ijLaihN2A'];


let htmlFinal = '';

for (let i = 0; i < data.length; i++) {

    const tumbnail = data[i];
    const url = `https://source.unsplash.com/${tumbnail}/600x340`;
    htmlFinal += `<a href="${url}">
                <img src="${url}"/>
                <h4>${tumbnail}</h4>
                </a>`;
}

document.querySelector('.videoList').innerHTML = htmlFinal;
*/
//v3

var data = [{
  id: 1,
  title: 'Le Top 10 des framework JS',
  description: 'Vous n\'en croirez pas vos yeux',
  file: 'video1.mp4',
  thumbnail: 'L8KQIPCODV8'
}, {
  id: 2,
  title: '5 bonnes raisons de ne pas fuir cette formation',
  description: 'Vous allez halluciner ! Cliquez vite !',
  file: 'video2.mp4',
  thumbnail: 'umyvrlx0ma8'
}, {
  id: 3,
  title: 'Les plus grands secrets des développeurs React',
  description: 'Cliquez et découvrez avant les autres ces astuces incroyables !',
  file: 'video3.mp4',
  thumbnail: 'L1ijLaihN2A'
}, {
  id: 4,
  title: 'Votre DSI ne veut pas que vous voyiez cette vidéo !',
  description: 'Les experts sont formels : cette méthode de développement mystérieuse va changer votre vie.',
  file: 'video1.mp4',
  thumbnail: 'XIVDN9cxOVc'
}, {
  id: 5,
  title: 'Les gens vous supplieront de développer leur appli !',
  description: 'Visionnez cette vidéo au plus vite et apprenez les 1022 méthodes de développement les plus rentables.',
  file: 'video2.mp4',
  thumbnail: 'E9ANYNkN4Sc'
}, {
  id: 6,
  title: 'Les 12 techniques imparables pour rater un café',
  description: 'Vous en avez marre de tout réussir ? Ratez aux moins les cafés grâce à cette vidéo inédite !',
  file: 'video3.mp4',
  thumbnail: 'uwIJbtLpvV4'
}];
var htmlFinal = '';

for (var i = 0; i < data.length; i++) {
  preparationVideo(data[i]);
}

document.querySelector('.videoList').innerHTML = htmlFinal;

function preparationVideo(_ref) {
  var thumbnail = _ref.thumbnail,
      title = _ref.title,
      description = _ref.description;
  var url = "https://source.unsplash.com/".concat(thumbnail, "/600x340");
  htmlFinal += "<a href=\"".concat(url, "\">\n                    <img src=\"").concat(url, "\"/>\n                    <section class=\"infos\">\n                        <h4>").concat(title, "</h4>\n                        <p>").concat(description, "</p>\n                    </section>\n                </a>");
}
//# sourceMappingURL=main.js.map