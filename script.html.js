//contact page
document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.getElementById("contactForm");
    const submitButton = document.getElementById("submitButton");
    const successMessage = document.getElementById("successMessage");


    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (validateForm(name, email, message)) {
            submitButton.textContent = "Sending...";
            submitButton.disabled = true;
            setTimeout(function() {
                successMessage.classList.remove("hidden");
                submitButton.textContent = "Send Message";
                submitButton.disabled = false;
                contactForm.reset();
            }, 1500); 
        }
    });
    function validateForm(name, email, message) {
        if (name === "" || email === "" || message === "") {
            alert("Please fill out all fields.");
            return false;
        }
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address.");
            return false;
        }

        return true;
    }
});
// about section
document.getElementById('scrollToTop').addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
// home section
// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
