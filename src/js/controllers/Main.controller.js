import Api from "../models/Api.model.js";
import MainView from "../views/Main.view.js";
import CustomSelect from "./CustomSelect.controller.js";
import editHabitController from "./editHabit.controller.js";

export default class Main {
    static currentHabitId = 0
    
    static clickButttonCreate() {
        const button = document.querySelector(".section__filter--button")
        const sectionModal = document.querySelector("#modal-criar")
        const spanX = document.querySelector(".fa-x")
        const buttonInserir = document.querySelector(".button--big")
        const popUp = document.querySelector(".container_pop-up_create-habit")
        const inputTitle = document.querySelector("#habit_title")
        
        button.addEventListener("click", event => {
            event.preventDefault()
            
            sectionModal.classList.remove("hidden")
        })
        spanX.addEventListener("click", event => {
            event.preventDefault()
            sectionModal.classList.add("hidden")
        })
    }

    static async showAllComplets() {
        const button = document.querySelector("#postsConcluded");
        const posts = await Api.habitReadAll();
        const tableBody = document.querySelector('.habits__table-body');

        button.addEventListener("click", async event => {
            const posts = await Api.habitReadAll()
            event.preventDefault()

            tableBody.innerHTML = "";
            
            const truePosts = posts.filter(post => {
                if (post.habit_status) {
                    return true
                }
            })
            await MainView.renderAllHabits(truePosts)
        })
    }

    static showAll() {
        const buttonTodos = document.querySelector("#allPosts");
        const tableBody = document.querySelector('.habits__table-body');
        
        buttonTodos.addEventListener("click", async event => {
            const todos = await Api.habitReadAll()
            event.preventDefault()

            tableBody.innerHTML = ""
            await MainView.renderAllHabits(todos)
        })
    }

    static clickButtonEdit() {
        const tableBody = document.querySelector('.habits__table-body')
        const editModal = document.querySelector('#edit-modal')
        const editForm = document.querySelector('.modal-edit-habito-form')
        const selector = document.querySelector('.selector')
        
        tableBody.addEventListener('click', async event => {
            if (event.target.tagName === 'BUTTON') {
                editModal.classList.remove('hidden')
               
                const inputArray = [...editForm.elements]

                const habit = await Api.getHabitById(event.target.id)

                this.currentHabitId = event.target.id

                const idButton = document.querySelector('.button_red')
                idButton.id = event.target.id


                inputArray.forEach(input => {
                    if (input.tagName != 'BUTTON') {
                        if (input.type != 'checkbox') {
                            input.value = habit[input.name] 
                        } else {
                            input.checked = habit[input.name]
                        }
                    } else if(input.className === 'select-custom') {
                        input.id = habit.habit_category
                        selector.innerHTML = ''
                        
                        const indexOfOption = CustomSelect.optionsArray.findIndex(({id}) => id === habit.habit_category)

                        const option = CustomSelect.optionsArray[indexOfOption]

                        const icon = document.createElement('i')
                        icon.classList.add('fa-solid', option.iconClass, 'select-icon')

                        const optionText = document.createElement('p')
                        optionText.innerText = option.text
                        optionText.classList.add('no-pointer-event')

                        selector.append(icon, optionText)
                    }
                })

                editHabitController.resetAlterationObject()
            }
        })
    }

    static clickCheckbox() {
            const tableBody = document.querySelector(".habits__table-body");

            tableBody.addEventListener("click", (event) => {
            if (event.target.type === "checkbox") {

                const buttonId = event.composedPath()[3].childNodes[4].childNodes[0].id;

                Api.habitComplete(buttonId);

                MainView.checkIfItsComplete();
            }
        });
    }

    static loadMoreButton() {
        const button = document.querySelector('.load-more')
        
        button.addEventListener('click', event => {
            MainView.rangeNumber += 10
            MainView.renderAllHabits(Api.habitReadAll())
        })
    }
}
