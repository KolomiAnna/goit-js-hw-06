
const formEl = document.querySelector(`.login-form`);
formEl.addEventListener("submit", (event) => {
  event.preventDefault();

  const {
    elements: { email, password }
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    alert("Всі поля повинні бути заповнені!");
  }

  const formObject = {
    [email.name]: email.value,
    [password.name]: password.value
  };

  if (email.value !== "" && password.value !== "") {
    console.log(formObject);
  }
})
