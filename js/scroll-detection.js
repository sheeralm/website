let oldWrapper = "";
let oldScrollTopVal = 0;
let isScrollUp = false;
$('article').scroll(function () {
    $('section').each(function () {
        let scrollTopVal = $(".scroller").scrollTop() - 15;
        let screenBottom = scrollTopVal + $(window).height();
        let sectionBottom = this.offsetTop + $(this).outerHeight();
        // console.log(this.id);
        console.log("scroll top " + scrollTopVal);
        // console.log("section bottom " + sectionBottom);
        // console.log("screen bottom " + screenBottom);
        // if (scrollTopVal <= oldScrollTopVal) {
        //     // if the top of the current section is less than or equal to the scroll top val (the current height of the top of the screen)
        //     // and if the top of the current section + the height of the section is less than the position of the top of the screen
        //     if ($(this).position().top <= scrollTopVal && ($(this).position().top + $(this).outerHeight()) > scrollTopVal) {
        //         let newWrapper = $(this).attr("id");
        //         if (newWrapper != oldWrapper) {
        //             currentButton = $('#' + newWrapper.substring(0, newWrapper.indexOf('-')));
        //             currentButton.toggleClass("active");
        //             if (oldWrapper != "") {
        //                 oldButton = $('#' + oldWrapper.substring(0, oldWrapper.indexOf('-')));
        //                 oldButton.toggleClass("active");
        //             }
        //             oldWrapper = newWrapper;
        //         }
        //     }
        // }
        // else {
        if (sectionBottom > screenBottom && (sectionBottom - $(this).outerHeight()) < screenBottom) {
            console.log(this.id);
            let newWrapper = $(this).attr("id");
            if (newWrapper != oldWrapper) {
                currentButton = $('#' + newWrapper.substring(0, newWrapper.indexOf('-')));
                currentButton.toggleClass("active");
                if (oldWrapper != "") {
                    oldButton = $('#' + oldWrapper.substring(0, oldWrapper.indexOf('-')));
                    oldButton.toggleClass("active");
                }
                oldWrapper = newWrapper;
            }
        }
        // }
        oldScrollTopVal = scrollTopVal;
    });
})