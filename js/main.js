// Header section

window.onscroll = function() {scrollHandler()};

let navbar = document.getElementById("navbar");
let sticky = navbar.offsetTop;

function scrollHandler() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

// Burger-menu

(function () {
  const burgerItem = document.querySelector(".burger-menu");
  const menu = document.querySelector(".header-nav");
  const menuCloseItem = document.querySelector(".header-nav__close");
  const menuLinks = document.querySelectorAll(".header__list_link");
  burgerItem.addEventListener("click", () => {
      menu.classList.add("header-nav_active");
  });
  menuCloseItem.addEventListener("click", () => {
      menu.classList.remove("header-nav_active");
  });
  if (window.innerWidth <= 767) {
      for (let i = 0; i < menuLinks.length; i += 1) {
          menuLinks[i].addEventListener("click", () => {
              menu.classList.remove("header-nav_active");
          });
      }
  }
}());

// Realty section

window.onload = function(){
  slideOne();
  slideTwo();
  slideThree();
  slideFour();
  slideFive();
  slideSix();
}

let sliderOne = document.getElementById("slider-1");
let sliderTwo = document.getElementById("slider-2");
let displayValOne = document.getElementById("range-1");
let displayValTwo = document.getElementById("range-2");
let minGap = 0;
let sliderTrack = document.querySelector(".realty__area_slider-track");
let sliderMaxValue = document.getElementById("slider-1").max;
let sliderThree = document.getElementById("slider-3");
let sliderFour = document.getElementById("slider-4");
let displayValThree = document.getElementById("range-3");
let displayValFour = document.getElementById("range-4");
let minGap2 = 0;
let sliderTrack2 = document.querySelector(".realty__floor_slider-track");
let sliderMaxValue3 = document.getElementById("slider-3").max;
let sliderFive = document.getElementById("slider-5");
let sliderSix = document.getElementById("slider-6");
let displayValFive = document.getElementById("range-5");
let displayValSix = document.getElementById("range-6");
let minGap3 = 0;
let sliderTrack3 = document.querySelector(".realty__price_slider-track");
let sliderMaxValue5 = document.getElementById("slider-5").max;

function slideOne(){
  if(parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap){
      sliderOne.value = parseInt(sliderTwo.value) - minGap;
  }
  displayValOne.textContent = sliderOne.value;
  fillColor();
}
function slideTwo(){
  if(parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap){
      sliderTwo.value = parseInt(sliderOne.value) + minGap;
  }
  displayValTwo.textContent = sliderTwo.value;
  fillColor();
}
function slideThree(){
  if(parseInt(sliderFour.value) - parseInt(sliderThree.value) <= minGap2){
      sliderThree.value = parseInt(sliderFour.value) - minGap2;
  }
  displayValThree.textContent = sliderThree.value;
  fillColor2();
}
function slideFour(){
  if(parseInt(sliderFour.value) - parseInt(sliderThree.value) <= minGap2){
      sliderFour.value = parseInt(sliderThree.value) + minGap2;
  }
  displayValFour.textContent = sliderFour.value;
  fillColor2();
}
function slideFive(){
  if(parseInt(sliderSix.value) - parseInt(sliderFive.value) <= minGap3){
      sliderFive.value = parseInt(sliderSix.value) - minGap3;
  }
  displayValFive.textContent = sliderFive.value;
  fillColor3();
}
function slideSix(){
  if(parseInt(sliderSix.value) - parseInt(sliderFive.value) <= minGap3){
      sliderSix.value = parseInt(sliderFive.value) + minGap3;
  }
  displayValSix.textContent = sliderSix.value;
  fillColor3();
}

function fillColor(){
  percent1 = (sliderOne.value / sliderMaxValue) * 100;
  percent2 = (sliderTwo.value / sliderMaxValue) * 100;
  sliderTrack.style.background = `linear-gradient(to right, #dadae5 ${percent1}% , #5891D4 ${percent1}% , #5891D4 ${percent2}%, #dadae5 ${percent2}%)`;
}
function fillColor2(){
  percent3 = (sliderThree.value / sliderMaxValue3) * 100;
  percent4 = (sliderFour.value / sliderMaxValue3) * 100;
  sliderTrack2.style.background = `linear-gradient(to right, #dadae5 ${percent3}% , #5891D4 ${percent3}% , #5891D4 ${percent4}%, #dadae5 ${percent4}%)`;
}
function fillColor3(){
  percent5 = (sliderFive.value / sliderMaxValue5) * 100;
  percent6 = (sliderSix.value / sliderMaxValue5) * 100;
  sliderTrack3.style.background = `linear-gradient(to right, #dadae5 ${percent5}% , #5891D4 ${percent5}% , #5891D4 ${percent6}%, #dadae5 ${percent6}%)`;
}

// News section

$(function() {
  let owl = $(".owl-carousel");
  owl.owlCarousel({
      items: 3,
      margin: 30,
      loop: true,
      nav: false,
      dots: true,
      dotsContainer: ".custom-dots",
  });
});
