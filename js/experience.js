// Custom JavaScript to Initialize the Accordion
        $(document).ready(function() {
            $("#accordion").accordion({
                heightStyle: "content", // Each panel adjusts height based on its content
                collapsible: true,  // Allows all panels to be collapsed at once
                animate: 200,  // Adds smooth transition when opening/closing panels
                active: false  // Prevents the first panel from opening automatically
            });
        });