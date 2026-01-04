document.addEventListener("DOMContentLoaded", function () {
    const password = document.getElementById("password");
    const toggle = document.getElementById("togglePassword");

    if (!password || !toggle) return;

    const eyeOpen = toggle.querySelector(".eye-open");
    const eyeSlash = toggle.querySelector(".eye-slash");

    toggle.addEventListener("click", function () {
        const isHidden = password.type === "password";

        if (isHidden) {
            // SHOW → bisa ngetik
            password.type = "text";
            password.readOnly = false;
            eyeOpen.style.display = "none";
            eyeSlash.style.display = "inline";
            password.focus();
        } else {
            // HIDE → TIDAK bisa ngetik
            password.type = "password";
            password.readOnly = true;
            eyeOpen.style.display = "inline";
            eyeSlash.style.display = "none";
        }
    });
});
