// Get the modals
var loginModal = document.getElementById("loginModal");
var signupModal = document.getElementById("signupModal");

// Get the <span> elements that close the modals
var closeButtons = document.getElementsByClassName("close");

// Get buttons that open the modals (assuming you have them)
var loginBtn = document.getElementById("loginBtn");
var signupBtn = document.getElementById("signupBtn");

// Open the login modal
loginBtn.onclick = function() {
    loginModal.style.display = "block";
}

// Open the signup modal
signupBtn.onclick = function() {
    signupModal.style.display = "block";
}

// Close the modal when the user clicks on <span> (x)
Array.prototype.forEach.call(closeButtons, function(btn) {
    btn.onclick = function() {
        btn.parentElement.parentElement.style.display = "none";
    }
});

// Close the modal when the user clicks anywhere outside of the modal
window.onclick = function(event) {
    if (event.target == loginModal) {
        loginModal.style.display = "none";
    } else if (event.target == signupModal) {
        signupModal.style.display = "none";
    }
}
