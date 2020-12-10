"use strict";

//@prepros-append map.js
//@prepros-append responsive.js
//@prepros-append ibg.js
function testWebP(cb) {
  var webP = new Image();

  webP.onload = webP.onerror = function () {
    cb(webP.height == 2);
  };

  webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {
  if (support) {
    document.querySelector("body").classList.add("webp");
  } else {
    document.querySelector("body").classList.add("no-webp");
  }
});
;
var img = document.querySelectorAll(".ibg");
Array.prototype.forEach.call(img, function (value) {
  if (value.querySelector("img")) {
    value.style.backgroundImage = "url(" + value.querySelector("img").getAttribute("src") + ")";
  }
});
; // let w, h;
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

var wo, ho, wi, hi;
wo = window.outerWidth;
ho = window.outerHeight;
wi = window.innerWidth;
hi = window.innerHeight;

function resize() {
  document.querySelector(".mainblock").style.minHeight = hi + "px";
} // window.addEventListener("resize", () => {
//   wo = window.outerWidth;
//   ho = window.outerHeight;
//   wi = window.innerWidth;
//   hi = window.innerHeight;
//   resize();
// });
// resize();


var menuIcon = document.querySelector(".header__icon");
var menu = document.querySelector(".header__menu");
var menuSocial = document.querySelector(".header__social");
menuIcon.addEventListener("click", function () {
  menuIcon.classList.toggle("active");
  menu.classList.toggle("active");
  menuSocial.classList.toggle("active");
});
; // first fullscreen parallax effect

window.addEventListener("scroll", function () {
  var s = pageYOffset / 2;
  document.querySelector(".mainblock__bg").style.transform = "translate3d(0, ".concat(s, "px, 0)");
}); //smooth scroll from first fullscreen to content

var gotos = document.querySelectorAll(".goto");

if (gotos) {
  [].forEach.call(gotos, function (e) {
    e.addEventListener("click", function () {
      var link = e.getAttribute("href");

      if (link) {
        document.querySelector("." + link.split("#")[1]).scrollIntoView({
          behavior: "smooth"
        });
      }
    });
  });
}