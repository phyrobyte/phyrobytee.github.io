document.addEventListener("DOMContentLoaded", function () {
    const themeToggleBtn = document.getElementById("theme-toggle");
    const adminLoginBtn = document.getElementById("admin-login-btn");
    const adminModal = document.getElementById("admin-modal");
    const closeModal = document.getElementById("close-modal");
    const loginBtn = document.getElementById("login-btn");
    const adminPasswordInput = document.getElementById("admin-password");
    const adminActions = document.getElementById("admin-actions");

    // Dark/Light theme toggle
    themeToggleBtn.addEventListener("click", function () {
        document.body.classList.toggle("light-theme");
    });

    // Open admin login modal
    adminLoginBtn.addEventListener("click", function () {
        adminModal.style.display = "block";
    });

    // Close modal
    closeModal.addEventListener("click", function () {
        adminModal.style.display = "none";
    });

    // Simple password check (for demo purposes, replace with a real auth system)
    loginBtn.addEventListener("click", function () {
        const password = adminPasswordInput.value;
        if (password === "yourpassword") {  // Change "yourpassword" to a secure password
            adminActions.classList.remove("hidden");
        } else {
            alert("Incorrect password!");
        }
    });

    // Add Image functionality (mockup for demo purposes)
    document.getElementById("add-image-btn").addEventListener("click", function () {
        alert("Add image functionality coming soon!");
    });

    // Edit Text functionality (mockup for demo purposes)
    document.getElementById("edit-text-btn").addEventListener("click", function () {
        alert("Edit text functionality coming soon!");
    });

    // Close modal when clicking outside the content
    window.onclick = function (event) {
        if (event.target === adminModal) {
            adminModal.style.display = "none";
        }
    };
});