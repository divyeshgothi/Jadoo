// Header Menu JS
/*Mobile Menu Show Hide Start*/
function navigation() {
    document.querySelector("html").classList.toggle("menu-open");
  }
  document.querySelector(".mobile-toggle").addEventListener("click", navigation);
  /*Mobile Menu Show Hide End*/
  /*Dropdown Menu Start*/
  let navitems = document.querySelectorAll(".menu ul li");
  navitems.forEach(function (t) {
    t.addEventListener("click", function (e) {
      navitems.forEach(function (e) {
        e !== t || e.classList.contains("subnav-open")
          ? e.classList.remove("subnav-open")
          : e.classList.add("subnav-open");
      });
    });
  });
  /*Dropdown Menu End*/


  // Accordion

  let items = document.querySelectorAll(".cw-accordion .cw-accordion__item .cw-label");
items.forEach(function (t) {
t.addEventListener("click", function (e) {
 items.forEach(function (e) {
 e !== t || e.classList.contains("cw-open")
 	? e.classList.remove("cw-open")
 	: e.classList.add("cw-open");
 });
});
});
