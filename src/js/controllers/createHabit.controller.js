import Api from "../models/Api.model.js";
import MainView from "../views/Main.view.js";
import Main from "./Main.controller.js";

export default class createHabit {
  static controllerHabit() {
    const modal = document.querySelector("#modal-criar");
    const popUp = document.querySelector(".container_pop-up_create-habit");
    const buttonInserir = document.querySelector(".button-inserir");

    buttonInserir.addEventListener("click", async (e) => {
      e.preventDefault();
      const dados = {};
      const formValue = [...e.target.form];
      formValue.forEach((input) => {
        if (input.tagName != 'BUTTON') {
          dados[input.name] = input.value;
        } else if(input.className === 'select-custom--create') {
          dados.habit_category = input.id
        }
      });
        if (MainView.messageError() === false) {
            const request = await Api.createHabit(dados);
      
            MainView.renderAllHabits(Api.habitReadAll())
            modal.classList.add('hidden')

            popUp.classList.remove("hidden");
            setTimeout(() => {
                popUp.classList.add("hidden");
            }, 3000)

            formValue.forEach((input) => {
                input.value = ''
            });
          } 
      });
  }
}
