export default class CustomSelect {
    static optionsArray = [
        {
            id: 'casa',
            text: 'Casa',
            iconClass: 'fa-user'
        },
        {
            id: 'estudos',
            text: 'Estudo',
            iconClass: 'fa-poll-h'
        },
        {
            id: 'lazer',
            text: 'Lazer',
            iconClass: 'fa-leaf'
        },
        {
            id: 'trabalho',
            text: 'Trabalho',
            iconClass: 'fa-poll'
        },
        {
            id: 'saude',
            text: 'Saúde',
            iconClass: 'fa-heart'
        },
    ]

    static getUserClick() {
        const select = document.querySelector('.select-custom')
        const optionsContainer = document.querySelector('.option-container')
        const selector = document.querySelector('.selector')
        
        select.addEventListener('click', () => {
            optionsContainer.innerHTML = ''

            optionsContainer.classList.toggle('hidden')

            this.optionsArray.forEach(({ id, text, iconClass }) => {
                const li = document.createElement('li')
            
                const option = document.createElement('button')
                option.classList.add('pop-up__button', 'text-2', 'text-2--500')
                option.id = id
                option.type = 'button'
                
                const icon = document.createElement('i')
                icon.classList.add('fa-solid', iconClass, 'select-icon')

                const optionText = document.createElement('p')
                optionText.innerText = text
                optionText.classList.add('no-pointer-event')

                option.append(icon, optionText)
                li.append(option)
                optionsContainer.append(li)
            })
        })

        optionsContainer.addEventListener('click', event => {
            if(event.target.tagName === 'BUTTON') {
                selector.innerHTML = ''

                const icon = event.target.childNodes[0]
                const text = event.target.childNodes[1]

                select.id = event.target.id

                selector.append(icon, text)

                optionsContainer.classList.add('hidden')
            }
        })
    }

    static getUserClickCreate() {
        const select = document.querySelector('.select-custom--create')
        const optionsContainer = document.querySelector('.option-container--create')
        const selector = document.querySelector('.selector--create')
        
        select.addEventListener('click', () => {
            optionsContainer.innerHTML = ''

            optionsContainer.classList.toggle('hidden')

            this.optionsArray.forEach(({ id, text, iconClass }) => {
                const li = document.createElement('li')
            
                const option = document.createElement('button')
                option.classList.add('pop-up__button', 'text-2', 'text-2--500')
                option.id = id
                option.type = 'button'
                
                const icon = document.createElement('i')
                icon.classList.add('fa-solid', iconClass, 'select-icon')

                const optionText = document.createElement('p')
                optionText.innerText = text
                optionText.classList.add('no-pointer-event')

                option.append(icon, optionText)
                li.append(option)
                optionsContainer.append(li)
            })
        })

        optionsContainer.addEventListener('click', event => {
            if(event.target.tagName === 'BUTTON') {
                selector.innerHTML = ''

                const icon = event.target.childNodes[0]
                const text = event.target.childNodes[1]

                select.id = event.target.id

                selector.append(icon, text)

                optionsContainer.classList.add('hidden')
            }
        })
    }
}