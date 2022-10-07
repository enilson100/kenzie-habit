import Api from "../models/Api.model.js";
import MainView from "../views/Main.view.js";

export default class Delete {
  static deleleHabit() {
    const button = document.querySelector(".delete-button");
    const popUp = document.querySelector('.container_pop-up_create-user')
    const modalDelete = document.querySelector(".container_delete-habit");
    const modalEdit = document.querySelector("#edit-modal");
    const backButton = document.querySelector("#cancelar");
    const buttonDelete = document.querySelector(".button_red");
    const buttonExit = document.querySelector("#exit")

    button.addEventListener("click", (e) => {
      e.preventDefault();
      modalEdit.classList.add("hidden");
      modalDelete.classList.remove("hidden");
    });
    backButton.addEventListener("click", (e) => {
      e.preventDefault();
      modalEdit.classList.remove("hidden");
      modalDelete.classList.add("hidden");
    });
    buttonDelete.addEventListener("click", async (e) => {
      e.preventDefault()
      const id = e.target.id;
     
      const deleteRequest = await Api.habitDelete(id); 
      MainView.renderAllHabits(Api.habitReadAll())
      modalDelete.classList.add("hidden")
      
      popUp.classList.remove("hidden");
        setTimeout(() => {
            popUp.classList.add("hidden");
        }, 3000)
      
    });
    buttonExit.addEventListener("click", (e) => {
        modalDelete.classList.add("hidden")
    })
  }
}

