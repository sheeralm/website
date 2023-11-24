let oldWrapper = "";

$('article').scroll(function () {
    $('section').each(function () {
        if($(this).position().top <= $(document).scrollTop() && ($(this).position().top + $(this).outerHeight()) > $(document).scrollTop()) {
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
    });
})