//@prepros-append map.js
//@prepros-append responsive.js
//@prepros-append ibg.js

@@include("webp.js");
@@include("ibg.js");
@@include("responsive.js");
@@include("forms.js");
@@include("map.js");

// first fullscreen parallax effect
window.addEventListener("scroll", () => {
  const s = pageYOffset / 2;
  document.querySelector(
    ".mainblock__bg"
  ).style.transform = `translate3d(0, ${s}px, 0)`;
});

//smooth scroll from first fullscreen to content
const gotos = document.querySelectorAll(".goto");
if (gotos) {
  [].forEach.call(gotos, (e) => {
    e.addEventListener("click", () => {
      const link = e.getAttribute("href");
      if (link) {
        document
          .querySelector("." + link.split("#")[1])
          .scrollIntoView({ behavior: "smooth" });
      }
    });
  });
}
