function validateEmail() {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const emailInput = document.getElementById("emailInput");
    const emailError = document.getElementById("emailError");

    if (emailPattern.test(emailInput.value)) {
        emailError.textContent = "Valid email address. ✔ ";
        emailError.style.color = "white";
    } else {
        emailError.textContent = "Invalid email format. Please use example@domain.com. ✖ ";
        emailError.style.color = "white";
    }
}

function validatePassword() {
    const passwordInput = document.getElementById("passwordInput");
    const passwordCriteria = document.getElementById("passwordCriteria");
    const password = passwordInput.value;
    const criteria = [];

    // Check for criteria
    if (password.length < 8) {
        criteria.push("At least 8 characters ✖");
    }
    if (!/[A-Z]/.test(password)) {
        criteria.push("At least one uppercase letter ✖");
    }
    if (!/[a-z]/.test(password)) {
        criteria.push("At least one lowercase letter ✖");
    }
    if (!/[0-9]/.test(password)) {
        criteria.push("At least one number ✖");
    }
    if (!/[!@#$%^&*]/.test(password)) {
        criteria.push("At least one special character ✖");
    }

    // Update
    if (criteria.length > 0) {
        passwordCriteria.innerHTML = "Password must meet the following criteria: <br>" + criteria.join("<br>");
        passwordCriteria.style.color = "white";
    } else {
        passwordCriteria.innerHTML = "Password is strong! ✔";
        passwordCriteria.style.color = "white";
    }
}

function validatePhone() {
    const phoneInput = document.getElementById("phoneInput");
    const phoneError = document.getElementById("phoneError");
    const phonePattern = /^\+977-9[678]\d{8}$/; 

    if (phonePattern.test(phoneInput.value)) {
        phoneError.textContent = "Valid phone number. ✔ ";
        phoneError.style.color = "white";
    } else {
        phoneError.textContent = "Invalid phone number format. Use +977-9*********. ✖";
        phoneError.style.color = "white";
    }
}

function validateURL() {
    const urlInput = document.getElementById("urlInput");
    const urlError = document.getElementById("urlError");
    const urlPattern = /^(https?:\/\/)?([a-z0-9-]+\.)+[a-z]{2,6}(\/[^\s]*)?$/i;

    if (urlPattern.test(urlInput.value)) {
        urlError.textContent = "Valid URL. ✔";
        urlError.style.color = "white";
    } else {
        urlError.textContent = "Invalid URL format. Make sure it starts with http:// or https://. ✖";
        urlError.style.color = "white";
    }
}
