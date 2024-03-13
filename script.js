function validateAndNavigate() {
    // Validate the form
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (username.trim() === '' || email.trim() === '' || password.trim() === '') {
        alert('Please fill in all fields before proceeding.');
    } else {
        // If all fields are filled, navigate to the next page
        window.location.href = 'resume.html'; // Replace 'next_page.html' with the desired page
    }
}