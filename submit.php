<?php
// Check if the request method is POST, ensuring the form was submitted correctly
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get and sanitize the form data
    $name = htmlspecialchars(trim($_POST['name']));  // Sanitize name
    $email = htmlspecialchars(trim($_POST['email']));  // Sanitize email
    $message = htmlspecialchars(trim($_POST['message']));  // Sanitize message

    // Validate email format
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400); // Bad Request
        echo "Invalid email address.";
        exit();
    }

    // Ensure required fields are not empty
    if (empty($name) || empty($email) || empty($message)) {
        http_response_code(400); // Bad Request
        echo "All fields are required.";
        exit();
    }

    // Set the destination email and subject for the email
    $to = "prabhakar.bugga@hcl.com";  // Destination email address
    $subject = "New Message from Contact Form";  // Subject of the email

    // Construct the body of the email
    $body = "Name: $name\nEmail: $email\nMessage:\n$message";

    // Set the "From" header to the user's email address
    $headers = "From: $email";

    // Attempt to send the email using the mail() function
    if (mail($to, $subject, $body, $headers)) {
        // If the email is sent successfully, display a success message
        echo "Form submitted successfully";
    } else {
        // If email sending fails, return an HTTP 500 response and display an error message
        http_response_code(500); // Internal Server Error
        echo "Failed to send email. Please try again.";
    }
} else {
    // If the request method is not POST, return an HTTP 400 (Bad Request) response
    http_response_code(400);
    echo "Invalid request.";
}
?>
