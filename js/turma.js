'use strict'

import { preencherCardAlunosPeloCurso } from "./app.js"

let turmaCurso = localStorage.getItem('nomeTurma')
const alunos = await preencherCardAlunosPeloCurso(turmaCurso)

const criarMainTurma = (aluno) => {

    const titulo = document.getElementById('title-main')
    titulo.textContent = aluno.nomeCurso.replace('001 - Técnico em ', '')

    const finalizado = document.getElementById('container-finalizado')
    const cursando = document.getElementById('container-cursando')
    const todosCursos = document.getElementById('container-todosAlunos')
    const containerCardGerais = document.getElementById('container-card-gerais')

    const containerCard = document.createElement('a')
    containerCard.classList.add('container-card-cursando')
    containerCard.setAttribute('href', 'http://127.0.0.1:5500/html/aluno.html')

    if (aluno.status == 'Finalizado') {
        containerCard.classList.add('container-card-finalizado')
    } else {
        containerCard.classList.add('container-card-cursando')
    }

    containerCard.addEventListener('click', (event) => {     
        localStorage.setItem('nomeAluno', aluno.nome)
        localStorage.setItem('imgAluno', aluno.foto)
        localStorage.setItem('matricula', aluno.matricula)
    })
   
    const nameCard = document.createElement('p')
    nameCard.classList.add('name-card')
    nameCard.textContent = aluno.nome

    const imgCard = document.createElement('img')
    imgCard.classList.add('img-card')
    imgCard.src = aluno.foto

    function mostrarTodosCursos(){
        if (aluno.status == 'Cursando') {
            containerCard.classList.add('container-card-cursando')
            containerCardGerais.append(containerCard)
            containerCard.append(imgCard, nameCard)
        } else {
            containerCard.classList.add('container-card-finalizado')
            containerCardGerais.append(containerCard)
            containerCard.append(imgCard, nameCard)   
        }
    }

    function mostrarCursando() {
        if (aluno.status == 'Cursando') {
            containerCard.classList.add('container-card-cursando')
            containerCardGerais.append(containerCard)
            containerCard.append(imgCard, nameCard)
        } else {
            if (containerCardGerais.contains(containerCard)) {
                containerCardGerais.removeChild(containerCard)
            }
        }
    }

    function mostrarFinalizados() {
        if (aluno.status == 'Finalizado') {
            containerCard.classList.add('container-card-finalizado')
            containerCardGerais.append(containerCard)
            containerCard.append(imgCard, nameCard)  
        } else {
            if (containerCardGerais.contains(containerCard)) {
                containerCardGerais.removeChild(containerCard)
            }
        }
    }

    finalizado.addEventListener('click', function () {
        mostrarFinalizados()
    })

    cursando.addEventListener('click', function () {
        mostrarCursando()
    })

    todosCursos.addEventListener('click', function () {
        mostrarTodosCursos()           
    })

    containerCard.append(imgCard, nameCard)
  
    return containerCard
     
}

const mostrarFiltro = () => {
    const status = document.getElementById('button-status')
    status.addEventListener('click', () => {
        const containerSituacao = document.getElementById('container-situacao').style.display
        if (containerSituacao == 'none') {
            document.getElementById('container-situacao').style.display = 'flex'
        } else {
            document.getElementById('container-situacao').style.display = 'none'
        }
    })
}

const carregarMain = () => {
    const container = document.getElementById('container-card-gerais')
    const cards = alunos.map(criarMainTurma)
    container.replaceChildren(...cards)
}

carregarMain()
mostrarFiltro()