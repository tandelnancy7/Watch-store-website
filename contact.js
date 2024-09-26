document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Basic validation (you can expand this)
    if (name && email && message) {
        document.getElementById("responseMessage").innerText = "Thank you for your message, " + name + "!";
        document.getElementById("contactForm").reset(); // Reset the form
    } else {
        document.getElementById("responseMessage").innerText = "Please fill in all fields.";
        document.getElementById("responseMessage").style.color = "red";
    }
});
