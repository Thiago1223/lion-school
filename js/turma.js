'use strict'

import { preencherCardAlunosPeloCurso } from "./app.js"

let turmaCurso = localStorage.getItem('nomeTurma')
const alunos = await preencherCardAlunosPeloCurso(turmaCurso)


const criarMainTurma = (aluno) => {

    const finalizado = document.getElementById('container-finalizado')
    const cursando = document.getElementById('container-cursando')
    const todosCursos = document.getElementById('container-todosAlunos')

    const containerCardGerais = document.createElement('div')
    containerCardGerais.classList.add('container-card-gerais')

    const containerCardCursando = document.createElement('div')
    containerCardCursando.classList.add('container-card-cursando')

    const containerCardFinalizado = document.createElement('div')
    containerCardFinalizado.classList.add('container-card-finalizado')
   
    const nameCard = document.createElement('p')
    nameCard.classList.add('name-card')
    nameCard.textContent = aluno.nome

    const imgCard = document.createElement('img')
    imgCard.classList.add('img-card')
    imgCard.src = aluno.foto

    function mostrarTodosCursos(){
        if (aluno.status == 'Cursando') {
            containerCardCursando.classList.add('container-card-cursando')
            containerCardGerais.append(containerCardCursando)
            containerCardCursando.append(imgCard, nameCard)
        } else {
            containerCardFinalizado.classList.add('container-card-finalizado')
            containerCardGerais.append(containerCardFinalizado)
            containerCardFinalizado.append(imgCard, nameCard)   
        }
    }

    function mostrarCursando() {
        if (aluno.status == 'Cursando') {
            containerCardCursando.classList.add('container-card-cursando')
            containerCardGerais.append(containerCardCursando)
            containerCardCursando.append(imgCard, nameCard)
        }
    }

    function mostrarFinalizados() {
        if (aluno.status == 'Finalizado') {
            containerCardFinalizado.classList.add('container-card-finalizado')
            containerCardGerais.append(containerCardFinalizado)
            containerCardFinalizado.append(imgCard, nameCard)  
        }
    }

    finalizado.addEventListener('click', function () {
        mostrarFinalizados()
        containerCardGerais.removeChild(containerCardCursando)             
    })

    cursando.addEventListener('click', function () {
        mostrarCursando()
        containerCardGerais.removeChild(containerCardFinalizado)             
    })

    todosCursos.addEventListener('click',function(){
        mostrarTodosCursos()           
    })

    window.onload = mostrarTodosCursos()
  
    return containerCardGerais
     
}

const carregarMain = () => {
    const container = document.getElementById('container-card-gerais')
    const cards = alunos.map(criarMainTurma)
    container.replaceChildren(...cards)
}

carregarMain()