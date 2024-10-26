const projectObj = {
  tombeau: {
    titre: `Tombeau - 3D`,
    description: `Une scène 3D qui vise à reproduire un style réalistique sur un lieu du passé. Réalisé dans le cadre du cours "Modélisation 3D" par Alexandre Gervais, Ian Corbin, Samuel Desmeules-Voyer et Keven Malric, chaque membre de l'équipe on produit au moins 3 éléments 3D uniques à la scène. De plus, j'ai assemblé la scène et Ian Corbin s'est occupé de l'éclairage. Ce projet à été réalisé avec AutoDesk Maya et Arnold.`,
    mainImage: "../Assets/3D/Tombeau/render_final_salle.jpg",
    image1: "../Assets/3D/Tombeau/moodboard_door.png",
    image2: "../Assets/3D/Tombeau/render_door_front.jpg",
    image3: "../Assets/3D/Tombeau/moodboard_sarcophage.png",
    image4: "../Assets/3D/Tombeau/render_sarcophage_cote.jpg",
    image5: "../Assets/3D/Tombeau/moodboard_sword.png",
    image6: "../Assets/3D/Tombeau/render_sword_front.jpg",
    image7: "../Assets/3D/Tombeau/unity_salle.PNG",
    image8: "../Assets/3D/Tombeau/render_final_porte.jpg",
    image9: "../Assets/3D/Tombeau/render_final_pillier.jpg",
    image10: "../Assets/3D/Tombeau/render_final_coffre.jpg",
    image10: "../Assets/3D/Tombeau/render_final_sarcophage.jpg",
    subTitle1: "Moodboard - Porte",
    subTitle3: "Moodboard - Sarcophage",
    subTitle5: "Moodboard - Épée",
    subTitle7: "Capture d'écran - unity",
    subTitle8: "Rendu finaux",
    //text1: "Moodboard - Porte",
    video: false,
    iframe: false,
    apps: ['maya','unity'],
    lingo: false,
  },
  pluieTunnel: {
    titre: `pluie Tunnel - 3D, Sonore`,
    description: `Un environnement fantastique d'une plage déserte qui est sur une île volcanique qui s'apprête à entrer en éruption réalisé dans le cadre des cours "Animation 3D" et "Conception Sonore". Ceci est le gagnant du Prix "Coup de Coeur" du concours "Essais Audiovisuels" 2024. Ce projet dans le style low poly est entièrement fait par moi, Alexandre Gervais, incluant les pistes sonores. Le but de ce projet était d'essayer quelque chose de différent.`,
    mainImage: false,
    video: "../Assets/3D/Pluie_tunnel/underwater_tunnel.mp4",
    iframe: false,
    apps: ['maya','REAPER','DaVinci'],
    lingo: false,
  },
  pixar: {
    titre: `Intro style Pixar - 3D, Sonore`,
    description: `Un environnement fantastique d'une plage déserte qui est sur une île volcanique qui s'apprête à entrer en éruption réalisé dans le cadre des cours "Animation 3D" et "Conception Sonore". Ceci est le gagnant du Prix "Coup de Coeur" du concours "Essais Audiovisuels" 2024. Ce projet dans le style low poly est entièrement fait par moi, Alexandre Gervais, incluant les pistes sonores. Le but de ce projet était d'essayer quelque chose de différent.`,
    mainImage: false,
    video:"../Assets/3D/Intro_Pixar/roy-cote_jeremy_TP3_pixar_mp4_582414_MO.mp4",
    iframe: false,
    apps: ['maya','REAPER','DaVinci'],
    lingo: false,
  },
  MonsterHunter: {
    titre: `Vous êtes le héros : Monster Hunter - 3D, Sonore`,
    description: `Un environnement fantastique d'une plage déserte qui est sur une île volcanique qui s'apprête à entrer en éruption réalisé dans le cadre des cours "Animation 3D" et "Conception Sonore". Ceci est le gagnant du Prix "Coup de Coeur" du concours "Essais Audiovisuels" 2024. Ce projet dans le style low poly est entièrement fait par moi, Alexandre Gervais, incluant les pistes sonores. Le but de ce projet était d'essayer quelque chose de différent.`,
    mainImage: false,
    video: false,
    iframe: "https://sideking.github.io/",
    apps: ['github','vscode'],
    lingo: ['HTML5','css','javascript'],
  },
  odysseus: {
    titre: `odysseus - 3D, Sonore`,
    description: `Un environnement fantastique d'une plage déserte qui est sur une île volcanique qui s'apprête à entrer en éruption réalisé dans le cadre des cours "Animation 3D" et "Conception Sonore". Ceci est le gagnant du Prix "Coup de Coeur" du concours "Essais Audiovisuels" 2024. Ce projet dans le style low poly est entièrement fait par moi, Alexandre Gervais, incluant les pistes sonores. Le but de ce projet était d'essayer quelque chose de différent.`,
    mainImage: false,
    video: "../Assets/3D/Odysseus/Odysseus.mp4",
    iframe: false,
    apps: ['maya','REAPER','DaVinci'],
    lingo: false,
  },
};

let htmlPage = window.location.href;

function loadProject(projectName) {
  localStorage.setItem("projectSelected", projectName);
  if (htmlPage.includes("Projets.html") === true) {
    window.location.href = "./pagesTemplate.html";
  } else if (htmlPage.includes("index.html") === true) {
    window.location.href = "./Projets/pagesTemplate.html";
  }

  /*HTML Elements*/
  let selectedProject = projectName;
  let projectTitle = document.querySelector(".mainContent__Title");
  let projectDesc = document.querySelector(".mainContent__text");
  let projectImg = document.querySelector(".mainContent__mainImage");
  let projectFrame = document.querySelector(".mainContent__frame");
  let projectVideo = document.querySelector(".mainContent__video");
  let projectsideContent = document.querySelector(".mainContent");

  // For the apps section
  let appsContainer = document.querySelector(".maestro__apps");
  let lingoContainer = document.querySelector(".maestro__lingo");
  let maestroHR = document.querySelector(".maestro__separator");
  let appsUsed = document.querySelector(".appsUsed");
  let lingosUsed = document.querySelector(".lingoUsed");
  

  /* Give project info */
  projectTitle.textContent = selectedProject.titre;
  projectDesc.textContent = selectedProject.description;

  if (selectedProject.mainImage !== false) { // if if main image
    projectImg.src = selectedProject.mainImage;
    projectImg.classList.remove("hidden");
  } else {
    projectImg.classList.add("hidden");
  }

  if (selectedProject.video !== false) { // if video
    projectVideo.src = selectedProject.video;
    projectVideo.classList.remove("hidden");
  } else {
    projectVideo.classList.add("hidden");
  }

  if (selectedProject.iframe !== false) { // if iframe
    projectFrame.src = selectedProject.iframe;
    projectFrame.classList.remove("hidden");
  } else {
    projectFrame.classList.add("hidden");
  }

  if (selectedProject.apps !== false) { // if apps
    appsContainer.classList.remove("hidden");
    appsUsed.classList.remove("hidden");
    for (let index = 0; index < selectedProject.apps.length; index++) {
      let img = document.createElement("img");
      img.src = `../Assets/application_logo/${selectedProject.apps[index]}.png`;
      appsContainer.appendChild(img);
    }
  } else {
    appsContainer.classList.add("hidden");
    appsUsed.classList.add("hidden");
  }

  if (selectedProject.lingo !== false) { // if language
    lingoContainer.classList.remove("hidden");
    lingosUsed.classList.remove("hidden");
    maestroHR.classList.remove("hidden");
    for (let index = 0; index < selectedProject.lingo.length; index++) {
      let img = document.createElement("img");
      img.src = `../Assets/application_logo/${selectedProject.lingo[index]}.png`;
      lingoContainer.appendChild(img);
    }
  } else {
    lingoContainer.classList.add("hidden");
    lingosUsed.classList.add("hidden");
    maestroHR.classList.add("hidden");
  }

  // loop for additional images, texts and titles
  for (let index = 1; index < 20; index++) {

     // DOM elements
     let img = document.createElement("img");
     let para = document.createElement("p");
     let subtitle = document.createElement("h3");

     if (selectedProject[`subTitle${index}`]) {
      let titleText = document.createTextNode(selectedProject[`subTitle${index}`]);
      subtitle.appendChild(titleText);
      projectsideContent.appendChild(subtitle);
    }

    if (selectedProject[`text${index}`]) {
      let text = document.createTextNode(selectedProject[`text${index}`]);
      para.appendChild(text);
      para.classList.add("mainContent__text");
      projectsideContent.appendChild(para);
    }

    if (selectedProject[`image${index}`]) {
      img.src = selectedProject[`image${index}`];
      img.classList.add("mainContent__image");
      projectsideContent.appendChild(img);
  }
  }
}

const allProjects = document.querySelectorAll(".project");
console.log(allProjects);
const projectArr = ["tombeau", "pluieTunnel", "pixar", "MonsterHunter","odysseus"];

allProjects.forEach((element) => {
  element.addEventListener("click", function () {
    projectArr.forEach((project) => {
      if (element.classList.contains(project)) {
        localStorage.setItem("projectClicked", project);
        loadProject(project);
      }
    });
  });
});

let projectClicked = localStorage.getItem("projectClicked");
let projectSelected = localStorage.getItem("projectSelected");
console.log(htmlPage);

/* CHECKING EACH PROJECT TO TURN BACK THE LOCALSTORAGE INTO ITEM*/
switch (projectClicked) {
  case "tombeau":
    projectSelected = projectObj.tombeau;
    break;
  case "pluieTunnel":
    projectSelected = projectObj.pluieTunnel;
    break;
  case "pixar":
    projectSelected = projectObj.pixar;
    break;
  case "MonsterHunter":
    projectSelected = projectObj.MonsterHunter;
    break;
  case "odysseus":
    projectSelected = projectObj.odysseus;
    break;
}

if (htmlPage.includes("pagesTemplate.html")) {
  loadProject(projectSelected);
}
