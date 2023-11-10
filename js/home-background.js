let svg = document.getElementById("monitor-1");
let screenSaver = document.getElementById("screen-saver");

function updateDVDPosition() {
    let svgSpecs = svg.getBoundingClientRect();
    screenSaver.style.width = svgSpecs.width;
    screenSaver.style.height = svgSpecs.height;
    screenSaver.style.top = svgSpecs.top + document.body.scrollTop;
    screenSaver.style.right = svgSpecs.right;
    screenSaver.style.bottom = svgSpecs.bottom;
    screenSaver.style.left = svgSpecs.left;
    // setTimeout(function () {
    // }, 5000);
}
updateDVDPosition();

window.addEventListener("resize", (event) => {
    updateDVDPosition();
});