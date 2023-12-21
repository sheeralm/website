window.onload = function () {
    let h = $("#about-me-wrapper").height();
    $("#work-experience-wrapper").css({
        height: h
    });
};
window.addEventListener("resize", (event) => {
    let h = $("#about-me-wrapper").height();
    $("#work-experience-wrapper").css({
        height: h
    });
});