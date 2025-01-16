// Toggle the collapsible sidebar content
const collapsibles = document.querySelectorAll(".collapsible");

collapsibles.forEach(collapsible => {
    collapsible.addEventListener("click", function() {
        this.classList.toggle("active");
        const content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
});

// Sign-up form
document.getElementById("sign-up").addEventListener("click", function() {
    let signUpForm = `
        <h2>Sign Up</h2>
        <form>
            <label for="first-name">First Name:</label><br>
            <input type="text" id="first-name" name="first-name" required><br><br>
            <label for="last-name">Last Name:</label><br>
            <input type="text" id="last-name" name="last-name" required><br><br>
            <label for="email">Email:</label><br>
            <input type="email" id="email" name="email" required><br><br>
            <label for="password">Password:</label><br>
            <input type="password" id="password" name="password" required><br><br>
            <label for="confirm-password">Confirm Password:</label><br>
            <input type="password" id="confirm-password" name="confirm-password" required><br><br>
            <button type="submit">Submit</button><br><br>
            <p>Already have an account? <a href="#">Sign In</a></p>
        </form>
    `;
    document.body.innerHTML = signUpForm;
});
