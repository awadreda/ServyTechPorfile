document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  emailjs
    .send(
      "service_dno8112", // Service ID
      "template_8bqy2ya", // Template ID
      {
        user_email: email, // Variable for email field
        user_message: message, // Variable for message field
      }
    )
    .then(
      (response) => {
        alert("Message sent successfully!");
        console.log("SUCCESS!", response.status, response.text);
      },
      (error) => {
        alert("Failed to send message. Please try again.");
        console.log("FAILED...", error);
      }
    );
});
