const header = document.querySelector(".header")

window.onscroll = function () {
    var top = window.scrollY;
    console.log(top);
    if (top >= 400) {
        header.classList.add("active")
    } else {
        header.classList.remove("active");
    }
}




const buton = document.querySelector('.buton')
const close = document.querySelector('.close')
const vv1 = document.querySelector('.vv1')
const video = document.querySelector('video')

buton.addEventListener('click',()=>{
    vv1.style.visibility = "visible";
    vv1.style.opacity = 1; 
});

close.addEventListener('click', ()=>{
    vv1.style.visibility = "hidden";
    vv1.style.opacity = 0; 

    video.pause();
    video.currentTime = 0;
});


$(document).ready(function(){
    $('#open').click(function(){
        $('.img-slider').css('transform','scale(1)');
    })

    $('#close').click(function(){
        $('.img-slider').css('transform','scale(0)');
    })
})


var slides = document.querySelectorAll('.slide');
var btns = document.querySelectorAll('.btn');
let currentSlide = 1;

// Javascript for image slider manual navigation
var manualNav = function(manual){
  slides.forEach((slide) => {
    slide.classList.remove('active');

    btns.forEach((btn) => {
      btn.classList.remove('active');
    });
  });

  slides[manual].classList.add('active');
  btns[manual].classList.add('active');
}

btns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    manualNav(i);
    currentSlide = i;
  });
});

// Javascript for image slider autoplay navigation
var repeat = function(activeClass){
  let active = document.getElementsByClassName('active');
  let i = 1;

  var repeater = () => {
    setTimeout(function(){
      [...active].forEach((activeSlide) => {
        activeSlide.classList.remove('active');
      });

    slides[i].classList.add('active');
    btns[i].classList.add('active');
    i++;

    if(slides.length == i){
      i = 0;
    }
    if(i >= slides.length){
      return;
    }
    repeater();
  }, 10000);
  }
  repeater();
}
repeat();



const btnEl = document.querySelector('.btn');

const toggleOptions = () => {
  const wrapperEl = document.querySelector('.wrapper');
  const iconEl = btnEl.querySelector('i');
  wrapperEl.classList.toggle('active');
  if(iconEl.classList.contains('ri-share-line')){
    iconEl.classList.replace('ri-share-line','ri-close-line');
  }else{
    iconEl.classList.replace('ri-close-line','ri-share-line');
  }
}

btnEl.addEventListener('click',toggleOptions);