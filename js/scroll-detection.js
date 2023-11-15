let test = document.querySelector(".scroller").querySelectorAll("section");
//

// for (let i = 0; i < test.length; i++) {
//     test[i].addEventListener('scrollend', () => console.log('snap ended'));
// }
let selections = ["Home","About","Projects","Resume","Contact"];
let head = selections[0];
let scroller = document.querySelector(".scroller");
let headY = scroller.scrollTop;
scroller.addEventListener('scrollend', () => {
    if (scroller.scrollTop > headY) {
        console.log("scroll down");
    }
    else {
        console.log("scroll up");
    }
    headY = scroller.scrollTop;
});