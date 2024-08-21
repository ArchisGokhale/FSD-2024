document.addEventListener("DOMContentLoaded", () => {
    // Using getElementById to get a single element
    const form = document.getElementById("registrationForm");

    // Using getElementsByTagName to get all input elements
    const inputs = document.getElementsByTagName("input");

    // Using getElementsByClassName to get elements by class name
    const output = document.getElementsByClassName("output")[0];

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        let formData = {};
        for (let input of inputs) {
            formData[input.name] = input.value;
        }
        output.innerHTML = `
            <h3>Form Data:</h3>
            <p><strong>Username:</strong> ${formData.username}</p>
            <p><strong>Email:</strong> ${formData.email}</p>
            <p><strong>Phone Number:</strong> ${formData.phone}</p>
            <p><strong>Password:</strong> ${formData.password}</p>
            <p><strong>Confirm Password:</strong> ${formData.confirmPassword}</p>
        `;
    });

    // Change text to bold and size 20
    const boldTextButton = document.getElementById("boldTextButton");
    boldTextButton.addEventListener("click", () => {
        output.innerHTML = `<p style="font-weight: bold; font-size: 20px;">${output.innerText}</p>`;
    });

    // Change image source
    const changeImageButton = document.getElementById("changeImageButton");
    changeImageButton.addEventListener("click", () => {
        const image = document.getElementById("image");
        image.src = "C:/Archis Btech Comp/TY Btech Comp/FSD/batman.jpg";
    });

    // Change background image
    const changeBackgroundButton = document.getElementById("changeBackgroundButton");
    changeBackgroundButton.addEventListener("click", () => {
        document.body.style.backgroundImage = "url('C:/Archis Btech Comp/TY Btech Comp/FSD/batman.jpg')";
    });

    // jQuery related functionalities
    $(document).ready(function(){
        $("p").click(function(){
            $(this).hide();
        });

        $("tag1").click(function(){
            $(this).remove();
        });

        $("#btn1").click(function(){
            alert("Background color of tag2 = " + $("tag2").css("background-color"));
        });

        $("#btn2").click(function(){
            $('ol').append("<li>List Item 3</li>");
        });
    });
});
