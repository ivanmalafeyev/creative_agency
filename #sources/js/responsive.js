// let w, h;
// w = window.outerWidth;
// h = window.outerHeight;

// function resize() {
//   adiptiveHeader("header-menu", "header-top-lang", "header-top");
//   adiptiveHeader("header-menu", "header-bottom-menu", "header-bottom__column");
// }

// function adiptiveHeader(burgerMenuClass, elementClass, returnPointClass) {
//   let burgerMenu = document.querySelector("." + burgerMenuClass);
//   let element = document.querySelector("." + elementClass);
//   let returnPoint = document.querySelector("." + returnPointClass);
//   if (w < 768) {
//     if (!element.classList.contains("done")) {
//       element.classList.add("done");
//       burgerMenu.append(element);
//     }
//   } else {
//     element = burgerMenu.querySelector("." + elementClass);
//     if (element) {
//       if (element.classList.contains("done")) {
//         element.classList.remove("done");
//         if (element.classList.contains(elementClass + "--right")) {
//           returnPoint.parentNode.lastChild.previousSibling.prepend(element);
//         } else {
//           returnPoint.prepend(element);
//         }
//       }
//     }
//   }
// }

// window.addEventListener("resize", () => {
//   w = window.outerWidth;
//   h = window.outerHeight;
//   resize();
// });

// resize();
let wo, ho, wi, hi;
wo = window.outerWidth;
ho = window.outerHeight;
wi = window.innerWidth;
hi = window.innerHeight;

function resize() {
  // document.querySelector(".mainblock").style.minHeight = hi + "px";
}

// window.addEventListener("resize", () => {
//   wo = window.outerWidth;
//   ho = window.outerHeight;
//   wi = window.innerWidth;
//   hi = window.innerHeight;
//   resize();
// });

// resize();

const menuIcon = document.querySelector(".header__icon");
const menu = document.querySelector(".header__menu");
const menuSocial = document.querySelector(".header__social");

menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("active");
  menu.classList.toggle("active");
  menuSocial.classList.toggle("active");
});
