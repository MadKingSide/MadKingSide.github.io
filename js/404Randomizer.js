let peopleArray = ["Alexandre","Erick","Isaac","Kenza","Keven","Kristy","Maik","Micheal_Ihab","Pierre-luc","Raphael","Samuel","Sitmonternna","Victor",];
let textArray = ["While this is a 404 not found page, I'd say that you found the perfect candidate.","I borrowed a suit from raphael and i got lost while returning it. Are you lost too?","'Why am i here?' Why are YOU here?","Are you lost? I'm lost too!","We are so fucking lost I'd think we're in a 404 page.","Euh, where are we? Why is this page so empty?","WHERE ARE WE!? I'M LOST, HELP!","I don't know where we are but watch my back and I'll watch yours.","This page went for a coffee break... grab yourself a cup while we look for it!","Even I can see you're lost while being half-blind.","I'm [missing] my [404] right now.","Hi! Who are you? Are you lost too?","What are you doing? You're not supposed to be here.",]

console.log(peopleArray.length, textArray.length)

let image = document.querySelector(".img404");
let text = document.querySelector(".text404");

let randomSacrifice = Math.floor(Math.random() * peopleArray.length);
console.log(randomSacrifice);

image.src = `./Assets/404Peeps/${peopleArray[randomSacrifice]}.jpg`;
text.innerHTML = textArray[randomSacrifice];