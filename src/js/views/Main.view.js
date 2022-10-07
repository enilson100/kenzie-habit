export default class MainView {
    static rangeNumber = 10

    static async renderAllHabits(habitsList) {
        const tableBody = document.querySelector('.habits__table-body')
        const habitListAwaited = await habitsList
        tableBody.innerHTML = ''
        let accumulator = 0

        habitListAwaited.forEach(({ habit_id, habit_title, habit_description, habit_category, habit_status }) => {
            if(accumulator < this.rangeNumber) {
                const tableRow = document.createElement('tr')
                tableRow.classList.add('data-row')

                const firstCell = document.createElement('td')
                firstCell.classList.add('body-data')

                const checkboxContainer = document.createElement('button')
                checkboxContainer.classList.add('checkbox-container')

                const checkbox = document.createElement('input')
                checkbox.classList.add('checkbox', 'checkbox-pointer')
                checkbox.type = 'checkbox'
                checkbox.checked = habit_status

                checkboxContainer.append(checkbox)
                firstCell.append(checkboxContainer)

                const secondCell = document.createElement('td')
                secondCell.classList.add('body-data', 'text-2--500')

                const title = document.createElement('p')
                title.classList.add('text-overflow')
                title.innerText = habit_title

                secondCell.append(title)

                const thirdCell = document.createElement('td')
                thirdCell.classList.add('body-data', 'text-2--500')

                const description = document.createElement('p')
                description.classList.add('text-overflow', 'text-overflow--description')
                description.innerText = habit_description

                thirdCell.append(description)

                const forthCell = document.createElement('td')
                forthCell.classList.add('body-data', 'text-3', 'text-3--500')

                const category = document.createElement('p')
                category.classList.add('habit-category')
                habit_category === 'saude' ? category.innerText = 'Saúde' : category.innerText = habit_category

                forthCell.append(category)

                const fifthCell = document.createElement('td')
                fifthCell.classList.add('body-data')

                const iconContainer = document.createElement('button')
                iconContainer.classList.add('row-button')
                iconContainer.id = habit_id

                const icon = document.createElement('i')
                icon.classList.add('fa-solid', 'fa-ellipsis')

                iconContainer.append(icon)
                fifthCell.append(iconContainer)

                tableRow.append(firstCell, secondCell, thirdCell, forthCell, fifthCell)
                tableBody.append(tableRow)
                
                accumulator++
            }
        })

        this.checkIfItsComplete()
    }
    static checkIfItsComplete() {
        const allCheckbox = document.querySelectorAll('.checkbox-pointer')

        allCheckbox.forEach(checkbox => {
            const eventTableRow = checkbox.parentElement.parentElement.parentElement
            const habitText = checkbox.parentElement.parentElement.parentElement.childNodes[1]

            if (checkbox.checked === true) {
                eventTableRow.classList.add('habit-checked')
                habitText.classList.add('text-checked')
            } else {
                eventTableRow.classList.remove('habit-checked')
                habitText.classList.remove('text-checked')
            }
        })
    }
    static messageError() {
        const title = document.querySelector("#habit_title")
        const description = document.querySelector("#habit_description")
        let hasError = false

        const titleErr = document.querySelector("#title_error")
        const descriptionErr = document.querySelector("#description_error")

        if (title.value === "") {
            titleErr.classList.remove("hidden")
            title.classList.add("input--error")
            hasError = true
        } else {
            titleErr.classList.add("hidden")
            title.classList.remove("input--error")
        }
        if (description.value === "") {
            descriptionErr.classList.remove("hidden")
            description.classList.add("input--error")
            hasError = true
        } else {
            descriptionErr.classList.add("hidden")
            description.classList.remove("input--error")
        }
        return hasError
    }

    static messageErrorProfile() {
        const editProfile = document.querySelector("#inputName")
        const editUrlImage = document.querySelector("#inputImg")
        let hasError = false

        const editProfileErr = document.querySelector("#nameErr")
        const editImageErr = document.querySelector("#urlImageErr")

        if (editProfile.value === "") {
            editProfileErr.classList.remove("hidden")
            editProfile.classList.add("input--error")
            hasError = true
        } else {
            editProfileErr.classList.add("hidden")
            editProfile.classList.remove("input--error")
        }
        if (editUrlImage.value === "") {
            editImageErr.classList.remove("hidden")
            editUrlImage.classList.add("input--error")
            hasError = true
        } else {
            editImageErr.classList.add("hidden")
            editUrlImage.classList.remove("input--error")
        }
        return hasError
    }
}