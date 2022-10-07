import Api from "../models/Api.model.js"
import MainView from "../views/Main.view.js"
import Main from "./Main.controller.js"

export default class editHabitController {
    static alterationsObject = {}

    static getUserInput() {
        const form = document.querySelector('.modal-edit-habito-form')
        const popUp = document.querySelector('.container_pop-up_edit-habit')
        const editModal = document.querySelector('#edit-modal')

        const formInputs = [...form]

        form.addEventListener('submit', event => {
            event.preventDefault()

            formInputs.forEach(input => {
                if(input.tagName != 'BUTTON' && input.type != 'checkbox') {
                    this.alterationsObject[input.name] = input.value
                } else if(input.className === 'select-custom') {
                    this.alterationsObject.habit_category = input.id
                }
            })

            Api.habitEdit(this.alterationsObject, Main.currentHabitId)
            setTimeout(() => {
                MainView.renderAllHabits(Api.habitReadAll())
            }, 200)
            
            editModal.classList.add('hidden')

            popUp.classList.remove("hidden");
            setTimeout(() => {
                popUp.classList.add("hidden");
            }, 3000)
        })
    }

    static resetAlterationObject() {
        this.alterationsObject = {}
    }

    static closeButton() {
        const closeButton = document.querySelector('#edit-habit')
        const modal = document.querySelector('#edit-modal')

        closeButton.addEventListener('click', event => {
            modal.classList.add('hidden')
        })
    }
}