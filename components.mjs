export const form = (data = {}) => {
    const form = document.createElement('form');
    const btn = document.createElement('button')

    const state = {
        email: '',
        password: '',
    }

    const setState = (values) => Object.assign(state, values)
       
    const handleChange = (event) => {
        const { id, value } = event.currentTarget

        setState({ [id]: value })
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        console.log(state)
    }

    const build = () => {
        const { email, password } = state
        const components = [
            inputGroup({ id: 'email', name: 'Email', type: 'email', value: email }, { change: handleChange }),
            inputGroup({ id: 'password', name: 'Senha', type: 'password', value: password }, { change: handleChange }),
            btn
        ]

        btn.classList.add('btn', 'btn-primary', 'mt-2')
        btn.innerHTML = 'Enviar'
        form.classList.add('component-form')
        form.addEventListener('submit', handleSubmit)
        form.append(...components)
    }

    setState(data)
    build()

    return form
}

const inputGroup = (attributes, events) => {
    const div = document.createElement('div')
    const input = document.createElement('input')

    div.classList.add('mb-2')
    input.classList.add('form-control')
   
    for (let key in attributes) input.setAttribute(key, attributes[key])
    // Os Eventos também podem ser inicializados no componente pai
    for (let key in events) input.addEventListener(key, events[key])

    div.innerHTML = `<label class="form-label" for="${attributes.id}">${attributes.name}</label>`
    div.append(input)

    return div
}