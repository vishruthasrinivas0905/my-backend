document.getElementById("paymentMode").addEventListener("change", function () {
  const mode = this.value;

  document.getElementById("cardFields").classList.add("hidden");
  document.getElementById("upiFields").classList.add("hidden");
  document.getElementById("cashFields").classList.add("hidden");

  if (mode === "card") {
    document.getElementById("cardFields").classList.remove("hidden");
  } else if (mode === "upi") {
    document.getElementById("upiFields").classList.remove("hidden");
  } else if (mode === "cash") {
    document.getElementById("cashFields").classList.remove("hidden");
  }
});

document.getElementById("paymentForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const mode = document.getElementById("paymentMode").value;

  if (!mode) {
    alert("Please select a payment method.");
    return;
  }

  if (mode === "card") {
    const number = document.getElementById("cardNumber").value.trim();
    const cvv = document.getElementById("cvv").value.trim();

    if (number.length < 13 || isNaN(number)) {
      alert("Invalid card number.");
      return;
    }
    if (cvv.length < 3 || isNaN(cvv)) {
      alert("Invalid CVV.");
      return;
    }
  }

  if (mode === "upi") {
    const upi = document.getElementById("upiId").value.trim();
    if (!upi.includes("@")) {
      alert("Invalid UPI ID.");
      return;
    }
  }

  alert("Payment successful! Thank you for joining.");
  this.reset();
  document.querySelectorAll('.payment-section').forEach(el => el.classList.add('hidden'));
});
