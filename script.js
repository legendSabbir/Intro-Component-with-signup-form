/*const form = document.querySelector(".form")
const submitBtn = document.querySelector(".submit")
const inputs = document.querySelectorAll("input")
const emailInp = document.querySelector(".email")
//  "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"

submitBtn.addEventListener("click", function (e) {
  inputs.forEach(inp => {
    if (inp.value === "" || inp.value == null) {
      e.preventDefault()
      inp.parentElement.classList.add("error")
    } else {
      inp.parentElement.classList.remove("error")
    }
    if (inp.classList.contains("email")) {
      const regex = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/
      if (inp.value !== "" && regex.test(inp.value)) {
        inp.parentElement.classList.remove("error")
      } else {
        e.preventDefault()
        inp.parentElement.classList.add("error")
      }
    }
  })
})

inputs.forEach(input => {
  input.addEventListener("focus", function () {
    this.parentElement.classList.remove("error")
  })
  input.addEventListener("blur", function () {
    if (this.value === "" || this.value == null) {
      this.parentElement.classList.add("error")
    } else {
      this.parentElement.classList.remove("error")
    }
    if (this.classList.contains("email")) {
      const regex = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/
      if (this.value !== "" && regex.test(this.value)) {
        this.parentElement.classList.remove("error")
      } else {
        this.parentElement.classList.add("error")
      }
    }
  })
})
*/

const form = document.querySelector(".form");
const submitBtn = document.querySelector(".submit");
const inputs = document.querySelectorAll("input");
const emailRegex = /[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$/;

submitBtn.addEventListener("click", function (e) {
  inputs.forEach((inp) => {
    validateInput(inp, e);
  });
});

inputs.forEach((input) => {
  input.addEventListener("focus", function () {
    this.parentElement.classList.remove("error");
  });

  input.addEventListener("blur", function () {
    validateInput(this);
  });
});

function validateInput(inp, e) {
  const value = inp.value.trim()
  if (value === "" || value == null) {
    if (e) e.preventDefault();
    inp.parentElement.classList.add("error");
  } else if (inp.classList.contains("email")) {
    if (emailRegex.test(value)) {
      inp.parentElement.classList.remove("error");
    } else {
      if (e) e.preventDefault();
      inp.parentElement.classList.add("error");
    }
  } else {
    inp.parentElement.classList.remove("error");
  }
}