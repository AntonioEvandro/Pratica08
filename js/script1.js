//Minha tentativa

const pais = document.querySelector("#pais")

let selecionado = pais.options.selectedIndex

console.log(pais.options[selecionado])

const passporte = document.querySelector("#passaporte")

const padraoPassaporte = new RegExp("[a-zA-Z]{2}[0-9]{12}")

const enviar = document.querySelector("#enviar")

const validacaoPassaporte = document.querySelector("#validar-passaporte")

enviar.addEventListener("click", (e)=> {
    e.preventDefault()
    e.stopPropagation()

    alert(padraoPassaporte.exec(passporte.value))

    validacaoPassaporte.classList = "validacao"

    if (padraoPassaporte.test(passporte.value)){
        validacaoPassaporte.classList.add("valido")
        validacaoPassaporte.innerHTML = "Passaporte válido"
    }else{
        validacaoPassaporte.classList.add("invalido")
        validacaoPassaporte.innerHTML = "Passaporte inválido"
    }

})