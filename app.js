
function unfoldNav() {
  let selectNav = document.getElementsByTagName("nav")[0];
  if (selectNav.className === "nav") {
    selectNav.className = "nav-unfolded";
  } else {
    selectNav.className = "nav";
  }
}

window.onscroll = function() {scrollCheck()};

function scrollCheck() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("scrollBtn").style.display = "block";
  } else {
    document.getElementById("scrollBtn").style.display = "none";
  }
}

function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Changing nav link background on the products page
function changeNavLinksBackground(linkNumber) {
  let productsNavLinks = document.getElementsByClassName("productspage-nav-link");
  for (let i=0; i < productsNavLinks.length; i++ ) {
    (i === linkNumber) 
    ?  productsNavLinks[i].style.backgroundColor ="#282e35"
    :  productsNavLinks[i].style.backgroundColor ="#444c56"; 
  }
}

// Changing the text and the image on the products page
let acacia = document.getElementById("products-acacia");
let wildflower = document.getElementById("products-wildflower");
let propolis = document.getElementById("products-propolis");
let pollen = document.getElementById("products-pollen");


function changeToAcacia() {
  changeNavLinksBackground(0);
  acacia.style.display = "block";
  wildflower.style.display = "none";
  propolis.style.display = "none";
  pollen.style.display = "none";
}

function changeToWildflower() {
  changeNavLinksBackground(1);
  acacia.style.display = "none";
  wildflower.style.display = "block";
  propolis.style.display = "none";
  pollen.style.display = "none";
}

function changeToPropolis() {
  changeNavLinksBackground(2);
  acacia.style.display = "none";
  wildflower.style.display = "none";
  propolis.style.display = "block";
  pollen.style.display = "none";
}

function changeToPollen() {
  changeNavLinksBackground(3);
  acacia.style.display = "none";
  wildflower.style.display = "none";
  propolis.style.display = "none";
  pollen.style.display = "block";
}
