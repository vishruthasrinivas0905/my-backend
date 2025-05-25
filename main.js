document.getElementById("registrationForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const password = document.getElementById("password").value;
  const confirm = document.getElementById("confirmPassword").value;

  if (password !== confirm) {
    alert("Passwords do not match!");
    return;
  }

  alert("Successfully registered for the gym!");
  // Here you can send the data to the server (PHP/Node.js/etc)
  this.reset();

  window.location.href = "payment.html";
});
