
console.log("CareerConnect JavaScript connected successfully!");

document.addEventListener("DOMContentLoaded", function() {

    let applyForm = document.getElementById("applyForm");

    applyForm.addEventListener("submit", function(event) {

        event.preventDefault();

        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let phone = document.getElementById("phone").value;
        let skills = document.getElementById("skills").value;

        let message = document.getElementById("message");

        if (!email.includes("@")) {
            message.textContent = "Please enter a valid email";
            return;
        }

        let application = {
            name: name,
            email: email,
            phone: phone,
            skills: skills
        };

        localStorage.setItem(
            "application",
            JSON.stringify(application)
        );

        message.textContent = "Application submitted successfully!";

        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Phone:", phone);
        console.log("Skills:", skills);
    });

    async function getUser() {
        try {
            let response = await fetch(
                "https://jsonplaceholder.typicode.com/users/1"
            );

            if (!response.ok) {
                throw new Error("Failed to fetch user");
            }

            let user = await response.json();

           document.getElementById("userName").textContent = user.name;

document.getElementById("userEmail").textContent = user.email;
        }catch (error) {
    console.log("Error:", error);

    document.getElementById("userName").textContent =
        "Unable to load user data.";

    document.getElementById("userEmail").textContent = "";
}
    }

    getUser();

});