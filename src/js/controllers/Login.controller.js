import Api from "../models/Api.model.js";
import CampoObrigatorio from "../views/Login.view.js";

export default class LoginController {
  static controllerLogin() {
    const buttonLogin = document.querySelector(".button-login");

    buttonLogin.addEventListener("click", async (e) => {
      e.preventDefault();
      const dados = {};
      const formValue = [...e.target.form];
      formValue.forEach((input) => {
        if (input.value !== "") {
          dados[input.name] = input.value;
        }
      });
      const request = await Api.loginUser(dados);
      if (request.token !== undefined) {
        location.href = "./src/pages/homepage.html";
      } else {
        CampoObrigatorio.messError();

        localStorage.removeItem("@kenzie-habit:user");
        localStorage.removeItem("@kenzie-habit:token");
      }
    });
  }
}
