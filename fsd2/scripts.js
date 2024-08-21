// JavaScript for Form Validation and Dropdown Toggle

document.addEventListener("DOMContentLoaded", function() {

    // Form Validation
    document.querySelector("form").addEventListener("submit", function(event) {
        const firstName = document.getElementById("firstName").value.trim();
        const lastName = document.getElementById("lastName").value.trim();
        const email = document.getElementById("email").value.trim();
        
        if (firstName === "" || lastName === "" || email === "") {
            alert("Please fill in all required fields.");
            event.preventDefault(); // Prevent form submission
        } else {
            alert("Form submitted successfully!");
        }
    });

    // Dropdown Toggle Example
    const dropdown = document.querySelector(".dropdown-toggle");
    dropdown.addEventListener("click", function() {
        const dropdownMenu = document.querySelector(".dropdown-menu");
        dropdownMenu.classList.toggle("show");
    });

});
