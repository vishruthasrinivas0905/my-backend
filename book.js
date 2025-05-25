document.getElementById("bookingForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const time = document.getElementById("time").value;

  if (!email || !time) {
    alert("Please fill in all fields.");
    return;
  }

  // In real setup, you'd check if the email is registered
  // For now, just show confirmation
  document.getElementById("confirmationMessage").textContent =
    `Booking confirmed for ${email} at ${time}. See you soon!`;

  this.reset();
});
