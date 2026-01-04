document.addEventListener("DOMContentLoaded", function () {
    const password = document.getElementById("password");
    const toggle = document.getElementById("togglePassword");
    const eyeOpen = toggle.querySelector(".eye-open");
    const eyeSlash = toggle.querySelector(".eye-slash");

    toggle.addEventListener("click", function () {
        if (password.type === "password") {
            password.type = "text";
            eyeOpen.style.display = "none";
            eyeSlash.style.display = "inline";
        } else {
            password.type = "password";
            eyeOpen.style.display = "inline";
            eyeSlash.style.display = "none";
        }
    });
});
