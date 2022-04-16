const fullpageEl = document.getElementById("fullpage");
const menuBtn = document.querySelector(".menu__btn");
const navigation = document.querySelector(".navigation");
const navCloseBtn = document.querySelector(".navigation__close__btn");

const blurOverlay = document.querySelector(".blur__overlay");

const IS_ACTIVE = "is--active";

const toggleNavigation = () => {
  navigation.classList.toggle(IS_ACTIVE);
  blurOverlay.classList.toggle(IS_ACTIVE);
  fullpageEl.classList.toggle("no-scroll");
};

menuBtn.addEventListener("click", toggleNavigation);
navCloseBtn.addEventListener("click", toggleNavigation);
blurOverlay.addEventListener("click", toggleNavigation);

new fullpage(fullpageEl, {
  autoScrolling: true,
  scrollBar: true,
});
