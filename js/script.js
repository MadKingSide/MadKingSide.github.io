const swiper = new Swiper('.news__swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay: {
      delay: 5000,
    },
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
});

const mySwiperTwo = new Swiper (".swiper-filters", {
  slidesPerView: "auto",
  spaceBetween: 10,
  focusableElements: false,
  
});


// section filter

let filterArr = document.querySelectorAll(".filter");
console.log(filterArr)

let projetsArr = document.querySelectorAll(".projects__element");
console.log(projetsArr)

for (let i = 0; i < filterArr.length; i++) {
  filterArr[i].addEventListener("click", function() {
    console.log(`${filterArr[i].id}`); // to check which class is clicked
    filterArr[i].classList.toggle("toggled");
    for (let j = 0; j < projetsArr.length; j++) {

      if (filterArr[i].id == "all") {
        filterArr.forEach(element => {
          element.classList.remove("toggled");
        });
        projetsArr.forEach(element => {
          element.classList.remove("unDisplay");
        });
        filterArr[0].classList.add("toggled");
      } else if (!projetsArr[j].classList.contains(`${filterArr[i].id}`) ) {
        projetsArr[j].classList.toggle("unDisplay");
        filterArr[0].classList.remove("toggled");
      }
    }
    //loop to check if a filter is selected (for tous)
    let nbChecked = 0;
    
    for (let h = 0; h < filterArr.length; h++) {
      
      if (filterArr[h].classList.contains("toggled")) {
        //console.log("has");
        nbChecked ++;
      } else if (!filterArr[h].classList.contains("toggled")) {
        //console.log("none");
      }
      console.log(nbChecked) //number of filter checked
    }
    if (nbChecked == 0) {
      filterArr[0].classList.add("toggled");
    }
    
  })
}


// section keyboard sounds

let keyboard = new Audio();
let hoverarr = document.querySelectorAll(".maestro img");
//console.log(hoverarr); to check what is in the array

for (let index = 0; index < hoverarr.length; index++) {
  hoverarr[index].addEventListener("mouseover", function() {
    let randomSounds = Math.floor((Math.random() * 14) + 1);
    //console.log(randomSounds); which sound will play
    //console.log(window.location.href); what is the current url
    if (window.location.href.includes(index.html) || htmlPage === "https://madkingside.github.io/") {
      keyboard.src = `./Assets/Keyboard_sounds_effect/${randomSounds}.wav`;
    } else {
      keyboard.src = `../Assets/Keyboard_sounds_effect/${randomSounds}.wav`;
    }
    keyboard.volume = 0.5;
    keyboard.play();
  })
}