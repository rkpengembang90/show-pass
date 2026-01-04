document.addEventListener("DOMContentLoaded", function () {
    const password = document.getElementById("password");
    const toggle = document.getElementById("togglePassword");

    if (!password || !toggle) return;

    const eyeOpen = toggle.querySelector(".eye-open");
    const eyeSlash = toggle.querySelector(".eye-slash");

    let isHidden = true; // default: password mode

    toggle.addEventListener("click", function () {
        if (isHidden) {
            // SHOW → bisa ngetik
            password.type = "text";
            password.readOnly = false;
            eyeOpen.style.display = "none";
            eyeSlash.style.display = "inline";
            password.focus();
        } else {
            // HIDE → dimatikan ngetiknya
            password.type = "password";
            password.readOnly = true;
            eyeOpen.style.display = "inline";
            eyeSlash.style.display = "none";
        }

        isHidden = !isHidden;
    });
});
