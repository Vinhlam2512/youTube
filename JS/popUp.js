const shows = document.querySelectorAll(".show");
const btns = document.querySelectorAll(".e-header");
const overLay = document.querySelector(".over-lay");
const body = document.querySelector(".app");
const submenus = document.querySelectorAll(".sub-menu");

btns.forEach(function (btn, index) {
  btn.addEventListener("focus", function (e) {
    shows[index].style.display = "block";
  });

  btn.addEventListener("blur", function (e) {
    shows[index].style.display = "none";
  });
});
// console.log(shows.nextElementSibling );
// btns.forEach(function (btn, index) {
//     btn.addEventListener("click", function () {
//         var isClose = shows[index].clientWidth === 0;
//         if (isClose) {
//             add(index);
//         } else {
//             remove(index);
//         }
//         console.log('1');
//     })
// })
// add = function (index) {
//     shows[index].style.display = "block";
// }
// remove = function (index) {
//     shows[index].style.display = "none";
// }
