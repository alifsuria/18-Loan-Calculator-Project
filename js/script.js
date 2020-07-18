function calculator() {
  const amount = document.querySelector("#amount").value;
  const interestRate = document.querySelector("#interest").value;
  const month = document.querySelector("#month").value;
  const display = document.querySelector("#display");
  const interest = (amount* (interestRate * 0.01)) / month
  let payment = ((amount/month) + interest).toFixed(2)
  display.innerHTML ="Monthly Payment = RM"+ payment;
}
