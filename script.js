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

let filterArr = document.querySelectorAll(".filter");
console.log(filterArr)

let projetsArr = document.querySelectorAll(".projects__element");
console.log(projetsArr)

for (let i = 0; i < filterArr.length; i++) {
  filterArr[i].addEventListener("click", function() {
    console.log(`${filterArr[i].id}`);
    for (let j = 0; j < projetsArr.length; j++) {
      projetsArr[j].style.display = "block";
      if (!projetsArr[j].classList.contains(`${filterArr[i].id}`) ) {
      projetsArr[j].style.display = "none";
    }
    }
  })
}