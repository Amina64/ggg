document.getElementById("contact-btn").addEventListener("click", function() {
    window.scrollTo({
        top: document.getElementById("contact").offsetTop,
        behavior: 'smooth'
    });
});

document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Message sent! Thank you for reaching out.");
    document.getElementById("contact-form").reset();
});
