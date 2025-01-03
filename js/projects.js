// Define jQuery tabs plugin for simple tabs
(function($) {
    $.fn.simpleTabs = function() {
        // Hide all tab content except the first
        this.find('.tab-content').hide();
        this.find('.tab-content:first').show();

        // Add click event to each tab link
        this.find('ul li a').on('click', function(event) {
            event.preventDefault();

            // Remove active class from all tabs and hide all content
            $(this).parent().siblings().find('a').removeClass('active');
            $(this).addClass('active');
            $(this).closest('.tabs-container').find('.tab-content').hide();

            // Show the selected tab content
            const target = $(this).attr('href');
            $(target).show();
        });

        // Set the first tab as active
        this.find('ul li:first a').addClass('active');
    };
})(jQuery);

$(document).ready(function() {
    // Initialize tabs plugin
    $('#project-tabs').simpleTabs();
});
