//Dados dos Empregados

let empregados = [
    { nome: "Alice Silva", idade: 28, cargo: "Desenvolvedora", salario: 3500, cidade: "São Paulo", estado: "SP" },
    { nome: "Bruno Pereira", idade: 34, cargo: "Gerente", salario: 7200, cidade: "Rio de Janeiro", estado: "RJ" },
    { nome: "Carlos Almeida", idade: 30, cargo: "Analista", salario: 5200, cidade: "Belo Horizonte", estado: "MG" },
    { nome: "Diana Costa", idade: 25, cargo: "Suporte", salario: 3200, cidade: "Curitiba", estado: "PR" },
    { nome: "Eduardo Nunes", idade: 38, cargo: "Gerente", salario: 8000, cidade: "Porto Alegre", estado: "RS" },
    { nome: "Fernanda Souza", idade: 29, cargo: "Desenvolvedora", salario: 3600, cidade: "Salvador", estado: "BA" },
    { nome: "Gustavo Moreira", idade: 45, cargo: "Diretor", salario: 15000, cidade: "Fortaleza", estado: "CE" },
    { nome: "Helena Figueira", idade: 32, cargo: "Analista", salario: 5000, cidade: "Manaus", estado: "AM" },
    { nome: "Igor Martins", idade: 27, cargo: "Suporte", salario: 3100, cidade: "Recife", estado: "PE" },
    { nome: "Julia Ramos", idade: 31, cargo: "Desenvolvedora", salario: 3700, cidade: "Brasília", estado: "DF" },
    { nome: "Lucas Oliveira", idade: 33, cargo: "Suporte", salario: 3300, cidade: "Natal", estado: "RN" },
    { nome: "Mariana Cunha", idade: 29, cargo: "Analista", salario: 4900, cidade: "Vitória", estado: "ES" },
    { nome: "Nina Araújo", idade: 26, cargo: "Desenvolvedora", salario: 3400, cidade: "Florianópolis", estado: "SC" },
    { nome: "Otávio Fernandes", idade: 42, cargo: "Gerente", salario: 7500, cidade: "Goiânia", estado: "GO" },
    { nome: "Paula Dias", idade: 24, cargo: "Suporte", salario: 3100, cidade: "Belém", estado: "PA" },
    { nome: "Quintino Batista", idade: 37, cargo: "Diretor", salario: 14500, cidade: "São Luís", estado: "MA" },
    { nome: "Renata Lima", idade: 35, cargo: "Analista", salario: 5300, cidade: "Teresina", estado: "PI" },
    { nome: "Silvia Mendes", idade: 30, cargo: "Desenvolvedora", salario: 3650, cidade: "Campo Grande", estado: "MS" },
    { nome: "Thiago Cavalcanti", idade: 41, cargo: "Gerente", salario: 8200, cidade: "Aracaju", estado: "SE" },
    { nome: "Ursula Rocha", idade: 28, cargo: "Suporte", salario: 3200, cidade: "Maceió", estado: "AL" }
];

exibir()

function exibir() {
    document.getElementById("itens_tbody").innerHTML = ''
    empregados.forEach((element, i) => {
        let html = `
        <tr>
            <td>${element.nome}</td>
            <td>${element.idade}</td>
            <td>${element.cargo}</td>
            <td>${element.salario}</td>
            <td>${element.cidade}</td>
            <td>${element.estado}</td>
            <td>
                <a href="#" class="text-info" title="Detalhar" onclick="detalhar(${i})" data-bs-toggle="modal" data-bs-target="#detalharModal"><i class="fas fa-eye"></i></a>
                <a href="#" class="text-warning ms-3" title="Editar" onclick="editar(${i})" data-bs-toggle="modal" data-bs-target="#editarModal"><i class="fas fa-edit"></i></a>
                <a href="#" class="text-danger ms-3" title="Excluir" onclick="excluir(${i})"><i class="fas fa-trash-alt"></i></a>
            </td>
        </tr>`
        document.getElementById("itens_tbody").innerHTML += html
    })
}

function detalhar(i) {
    const empregado = empregados[i]
    let detalhes = `
    <p>Nome: <strong> ${empregado.nome}</strong></p>
    <p>Idade: <strong> ${empregado.idade}</strong></p>
    <p>Cargo: <strong> ${empregado.cargo}</strong></p>
    <p>Salário: <strong> ${empregado.salario}</strong></p>
    <p>Cidade: <strong> ${empregado.cidade}</strong></p>
    <p>Estado: <strong> ${empregado.estado}</strong></p>
    `
    document.getElementById("detalhesEmpregado").innerHTML = detalhes
}

function editar(i) {
    const empregado = empregados[i]
    document.getElementById("indice").value = i
    document.getElementById("nome").value = empregado.nome
    document.getElementById("idade").value = empregado.idade
    document.getElementById("cargo").value = empregado.cargo
    document.getElementById("salario").value = empregado.salario
    document.getElementById("cidade").value = empregado.cidade
    document.getElementById("estado").value = empregado.estado
}

function atualizar() {
    let i = document.getElementById("indice").value

    let empregado = empregados[i]
    empregado.nome = document.getElementById("nome").value
    empregado.idade = document.getElementById("idade").value
    empregado.cargo = document.getElementById("cargo").value
    empregado.salario = document.getElementById("salario").value
    empregado.cidade = document.getElementById("cidade").value
    empregado.estado = document.getElementById("estado").value

    exibir()
}

function excluir(i) {
    empregados.splice(i, 1)
    console.log(empregados)
    exibir()
}


const totalSalarios = empregados.reduce((total, emp) => {
    return total += emp.salario
}, 0)



console.log(totalSalarios)