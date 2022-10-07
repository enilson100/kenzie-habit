export default class CampoObrigatorio {
  static messError() {
    const inputEmail = document.querySelector(".input-email");
    const inputSenha = document.querySelector(".input-senha");
    let hasError = false;

    const emailErr = document.querySelector("#email_error");
    const senhaErr = document.querySelector("#senha_error");

    if (inputEmail.value === "") {
      emailErr.classList.remove("hidden");
      inputEmail.classList.add("input--error");
      hasError = true;
    } else {
      emailErr.classList.add("hidden");
      inputEmail.classList.remove("input--error");
    }
    if (inputSenha.value === "") {
      senhaErr.classList.remove("hidden");
      inputSenha.classList.add("input--error");
      hasError = true;
    } else {
      senhaErr.classList.add("hidden");
      inputSenha.classList.remove("input--error");
    }
    return hasError;
  }
}
