document.getElementById('toggleBtn').addEventListener('click', function () {
    var loginForm = document.getElementById('loginForm');
    var signupForm = document.getElementById('signupForm');

    if (loginForm.style.display === 'block') {
        loginForm.style.display = 'none';
        signupForm.style.display = 'block';
        document.getElementById('toggleBtn').innerText = 'Switch to Login';
    } else {
        loginForm.style.display = 'block';
        signupForm.style.display = 'none';
        document.getElementById('toggleBtn').innerText = 'Switch to Sign Up';
    }
});
document.getElementById('sendOtpBtn').addEventListener('click', function () {
    // Add logic to send OTP here
    alert('OTP Sent!'); // Placeholder alert, replace with actual logic
});
