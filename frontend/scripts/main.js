document.addEventListener("DOMContentLoaded", () => {
    const loginModal = document.getElementById("loginModal");
    const signupModal = document.getElementById("signupModal");
    const loginBtn = document.getElementById("loginBtn");
    const signupBtn = document.getElementById("signupBtn");
    const closeBtns = document.querySelectorAll(".close");

    loginBtn.onclick = () => {
        loginModal.style.display = "block";
    };

    signupBtn.onclick = () => {
        signupModal.style.display = "block";
    };

    closeBtns.forEach(btn => {
        btn.onclick = () => {
            loginModal.style.display = "none";
            signupModal.style.display = "none";
        };
    });

    window.onclick = (event) => {
        if (event.target === loginModal) {
            loginModal.style.display = "none";
        }
        if (event.target === signupModal) {
            signupModal.style.display = "none";
        }
    };

    // Get current year for footer
    const currentYear = new Date().getFullYear();

    // Update the content of the span element with the current year
    document.getElementById('currentYear').textContent = currentYear;
});
