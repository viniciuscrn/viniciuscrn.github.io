const cores = []

document.getElementById("adicionar").addEventListener("click", function () {
    cor = document.getElementById("cor").value
    cores.push(cor)
    exibir()
    document.getElementById("cor").value = ""
    document.getElementById("cor").focus()
})

function exibir() {
    document.getElementById("lista_cores").innerHTML = ""
    cores.forEach(function (element, i) {
        document.getElementById("lista_cores").innerHTML += "<li>" + element + " <a href='#' onclick='excluir(" + i + ")' id='excluir'>remover</a></li>"
    })
}

function excluir(id) {
    delete cores[id]
    exibir()
}

function ordenar_crescente() {
    cores.sort()
    exibir()
}

function ordenar_decrescente() {
    cores.reverse()
    exibir()
}

function pesquisar() {
    let text = document.getElementById("pesquisa").value
    coresFilter = cores.filter(function (element) {
        return cores.includes(element)
    })

    coresFilter.forEach(element => {
        document.getElementById("exibir_pesquisa").innerHTML += "<p>" + element + "</p>"
    })
}