document.addEventListener("DOMContentLoaded", function () {
    const password = document.getElementById("password");
    const toggle = document.getElementById("togglePassword");

    if (!password || !toggle) return;

    const eyeOpen = toggle.querySelector(".eye-open");
    const eyeSlash = toggle.querySelector(".eye-slash");

    let isShow = false;

    toggle.addEventListener("click", function () {

        if (!isShow) {
            // ===== SHOW =====
            password.type = "text";
            password.readOnly = false; // bisa ngetik
            eyeOpen.style.display = "none";
            eyeSlash.style.display = "inline";
            password.focus();
            isShow = true;

        } else {
            // ===== HIDE =====
            password.type = "password";
            password.readOnly = true; // ❌ kunci
            eyeOpen.style.display = "inline";
            eyeSlash.style.display = "none";
            isShow = false;
        }
    });
});
