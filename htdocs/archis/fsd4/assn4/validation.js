function validateForm() {
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;

    if (name == "" || phone == "" || email == "") {
        alert("Please fill out all required fields.");
        return false;
    }

    var phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phone)) {
        alert("Please enter a valid 10-digit phone number.");
        return false;
    }

    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

   

    return true;
}
