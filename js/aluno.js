'use strict'

import { preencherCardAlunoPelaMatricula } from "./app.js"

let nomeAlunoCurso = localStorage.getItem('nomeAluno')
let imgAlunoCurso = localStorage.getItem('imgAluno')
let matriculaCurso = localStorage.getItem('matricula')
const matricula = await preencherCardAlunoPelaMatricula(matriculaCurso)

const criarCardAluno = () => {

    const containerAluno = document.createElement('div')
    containerAluno.classList.add('container-aluno')

    const imgAluno = document.createElement('img')
    imgAluno.classList.add('img-aluno')
    imgAluno.src = imgAlunoCurso

    const nameAluno = document.createElement('p')
    nameAluno.classList.add('name-aluno')
    nameAluno.textContent = nomeAlunoCurso

    containerAluno.append(imgAluno, nameAluno)

    return containerAluno

}

const carregarCard = () => {
    const container = document.getElementById('container-aluno')
    const cards = matricula.map(criarCardAluno)
    container.replaceChildren(...cards)
}

carregarCard()