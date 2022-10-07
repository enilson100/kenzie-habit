export default class Anonymous {
    static redirectLogin() {
        const token = JSON.parse(localStorage.getItem('@kenzie-habit:token'))
        const body = document.querySelector('body')
        const anonymousModal = document.querySelector('.anonymous')
        const anonymousButton = document.querySelector('#anonymousButton')

        if(token === null) {
            const blocker = document.createElement('section')
            blocker.classList.add('blocker')
            blocker.id = 'toLogin'

            body.append(blocker)

            blocker.addEventListener('click', event => {
                anonymousModal.classList.remove("hidden")

                blocker.classList.add('hidden')
            })

            anonymousButton.addEventListener('click', event => {
                location.href = "../../index.html"
            })
        }
    }
}