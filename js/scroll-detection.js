/**
 * Adds jquery event listeners for scrolling to each section within my website.
 */
let oldWrapper = "";
let oldScrollTopVal = 0;
$('article').scroll(function () {
    $('section').each(function () {
        let scrollTopVal = $(".scroller").scrollTop() - 15;
        let screenBottom = scrollTopVal + $(window).height();
        let sectionBottom = this.offsetTop + $(this).outerHeight();

        // Checks if the bottom of the screen is inside the section
        //  (Above the bottom of the section and below the bottom of the section + the height of the section)
        //  Subtracting because the height value increases as you move from top to bottom. So subtract to check above
        if (sectionBottom > screenBottom && (sectionBottom - $(this).outerHeight()) < screenBottom) {
            let newWrapper = $(this).attr("id");
            // Avoids operations and function calls if still within the same section
            if (newWrapper != oldWrapper) {
                currentButton = $('#' + newWrapper.substring(0, newWrapper.indexOf('-')));
                currentButton.toggleClass("active"); // Lowers current the toolbar button of the current section
                // Raises old toolbar button of previous active section
                if (oldWrapper != "") {
                    let oldButton = $('#' + oldWrapper.substring(0, oldWrapper.indexOf('-')));
                    oldButton.toggleClass("active");
                }
                oldWrapper = newWrapper;
            }
        }
        oldScrollTopVal = scrollTopVal;
    });
})