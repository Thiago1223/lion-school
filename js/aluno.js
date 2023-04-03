'use strict'

import { preencherCardAlunoPelaMatricula } from "./app.js"
import { preencherCardEstatisticasAlunoPelaMatricula } from "./app.js"

let nomeAlunoCurso = localStorage.getItem('nomeAluno')
let imgAlunoCurso = localStorage.getItem('imgAluno')
let matriculaCurso = localStorage.getItem('matricula')
const matricula = await preencherCardAlunoPelaMatricula(matriculaCurso)
const media = await preencherCardEstatisticasAlunoPelaMatricula(matriculaCurso)
console.log(media)

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

const criarCardStatusAluno = (status) => {

    const containerStatusInfo = document.createElement('div')
    containerStatusInfo.classList.add('container-status-info')
    
    const containerNotas = document.createElement('div')
    containerNotas.classList.add('container-notas')

    const notas = document.createElement('p')
    notas.textContent = status.media

    const containerProgresso = document.createElement('div')
    containerProgresso.classList.add('container-progresso')

    const containerBarra = document.createElement('div')
    containerBarra.classList.add('container-barra')

    const barra = document.createElement('div')

    const containerDisciplina = document.createElement('div')
    containerDisciplina.classList.add('container-disciplina')

    const materia = document.createElement('p')
    materia.textContent = status.sigla


    if (parseInt(status.media) > 50) {
        notas.classList.add('notas-azul')
        barra.classList.add('barra-azul')
        barra.style.height = `${status.media}%`
        containerProgresso.append(containerBarra)
        containerNotas.append(notas)
        containerBarra.append(barra)
    } else if (parseInt(status.media) == 50) {
        notas.classList.add('notas-amarelo')
        barra.classList.add('barra-amarelo')
        barra.style.height = `${status.media}%`
        containerProgresso.append(containerBarra)
        containerNotas.append(notas)
        containerBarra.append(barra)
    } else {
        barra.style.height = `${status.media}%`
        notas.classList.add('notas-vermelho')
        barra.classList.add('barra-vermelho')
        containerProgresso.append(containerBarra)
        containerNotas.append(notas)
        containerBarra.append(barra)
    }

    containerStatusInfo.append(containerNotas, containerProgresso, containerDisciplina)
   
    containerDisciplina.append(materia)

    return containerStatusInfo

}

const carregarCard = () => {
    const container = document.getElementById('container-aluno')
    const cards = matricula.map(criarCardAluno)
    container.replaceChildren(...cards)
}

const carregarStatus = () => {
    const container = document.getElementById('container-status')
    const cards = media.map(criarCardStatusAluno)
    container.replaceChildren(...cards)
}

carregarCard()
carregarStatus()