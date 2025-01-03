// AJAX form submission to handle the form without refreshing the page
function validateEmail(email) {
    // Regular expression to validate email format, requiring domain and TLD
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

function submitForm(event) {
    event.preventDefault(); // Prevent the form from refreshing the page

    // Get form elements
    const email = document.getElementById('email').value;
    const responseElement = document.getElementById('response');

    // Validate email format
    if (!validateEmail(email)) {
        responseElement.innerHTML = "Please enter a valid email address.";
        return;
    }

    // Get form data from the contact form
    const formData = new FormData(document.getElementById('contactForm'));

    // Set up the AJAX request
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "../submit.php", true); // Set to send form data to submit.php

    // Handle the response from the server
    xhr.onload = function () {
        if (xhr.status === 200) {
            // Display success message if the submission is successful
            responseElement.innerHTML = "Your message has been sent successfully!";
        } else {
            // Display error message if there was an issue
            responseElement.innerHTML = "There was an error submitting your form. Please try again.";
        }
    };

    // Handle network errors during AJAX
    xhr.onerror = function () {
        responseElement.innerHTML = "An error occurred during the request. Please check your network connection.";
    };

    // Send form data via AJAX
    xhr.send(formData);
}
