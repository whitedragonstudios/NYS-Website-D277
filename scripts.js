document.getElementById("submit-button").addEventListener("click", function() {
    var email = document.getElementById("email").value;
    var cemail = document.getElementById("cemail").value;
    if (!emailValidation(email, cemail)) {
        return;
    }
});

function emailValidation(email, cemail) {
    if (email.trim() === "" || cemail.trim() === "") {
        alert("Email fields cannot be empty");
        return false;     
    } else if (email.trim().toLowerCase() !== cemail.trim().toLowerCase()) {
        alert("Emails do not match")
        return false;
    } else {
        alert("Email is valid and matches");
        return true;
    }
}