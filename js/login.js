document.getElementById('loginBtn').addEventListener('click', function() {
    const loginUsername = document.getElementById('loginusername').value.trim();
    const loginPassword = document.getElementById('loginpassword').value.trim();

    let isValid = true;

    // Define a regex for alphabetic characters only
    const alphabeticRegex = /^[a-zA-Z]+$/;

    // Define a regex for password validation
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[?$#@])[A-Za-z\d?$#@]{6,10}$/;

    if (!loginUsername) {
        document.getElementById('loginusernameError').style.display = 'block';
        document.getElementById('loginusernameError').textContent = 'Please enter your username';
        isValid = false;
    } else if (!alphabeticRegex.test(loginUsername)) {
        document.getElementById('loginusernameError').style.display = 'block';
        document.getElementById('loginusernameError').textContent = 'Username must contain only alphabetic characters';
        isValid = false;
    } else {
        document.getElementById('loginusernameError').style.display = 'none';
    }

    if (!loginPassword) {
        document.getElementById('loginpasswordError').style.display = 'block';
        document.getElementById('loginpasswordError').textContent = 'Please enter your password';
        isValid = false;
    } else if (!passwordRegex.test(loginPassword)) {
        document.getElementById('loginpasswordError').style.display = 'block';
        document.getElementById('loginpasswordError').textContent = 'Password must be 6-10 characters long and including a mix of letters, numbers, and specific special characters (?, $, #, @)';
        isValid = false;
    } else {
        document.getElementById('loginpasswordError').style.display = 'none';
    }
    
    if (isValid) {
        window.location.href = './seller-add-car.html';
    }

    console.log('Login validation completed');
});
