// Function waits until the document is fully loaded
$(document).ready(function() {
    $("[data-fancybox='gallery']").fancybox({
        toolbar: false,  // Hides the top toolbar (including search, counter, etc.)
        smallBtn: true,  // Shows a smaller close button inside the popup
        arrows: false,   // Disables navigation arrows
        infobar: false   // Disables the counter (e.g., "1 / 3")
    });
});
