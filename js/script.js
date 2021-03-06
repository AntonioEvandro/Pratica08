const pais = document.querySelector("#pais")

let selecionado = pais.options.selectedIndex

console.log(pais.options[selecionado])

const passaporte = document.querySelector("#passaporte")

const padraoPassaporte = new RegExp("[a-zA-Z]{2}[0-9]{3}")

const enviar = document.querySelector("#enviar")
const validacaoPassaporte = document.querySelector("#validar-passaporte")

const addValidacaoTexto = () => {
    validacaoPassaporte.classList = "validacao"

    if (padraoPassaporte.test(passaporte.value)) {
        validacaoPassaporte.classList.add("valido")
        validacaoPassaporte.innerHTML = "Passaporte válido"
    } else {
        validacaoPassaporte.classList.add("invalido")
        validacaoPassaporte.innerHTML = "Passaporte inválido"
    }
}

enviar.addEventListener("click", (e) => {
    e.preventDefault()
    e.stopPropagation()

    addValidacaoTexto()
} )

passaporte.addEventListener("keyup", (e) => {
    if(passaporte.value.length > 5)
        passaporte.value = passaporte.value.slice(0,5)

    addValidacaoTexto()
} )