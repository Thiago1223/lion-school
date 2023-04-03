'use strict'

import { preencherCardAlunosPeloCurso } from "./app.js"

let turmaCurso = localStorage.getItem('nomeTurma')
let nomeCursosTitulo = localStorage.getItem('nomeTurmaCurso')
const alunos = await preencherCardAlunosPeloCurso(turmaCurso)

const criarMainTurma = (aluno) => {

    const titulo = document.getElementById('title-main')
    titulo.textContent = nomeCursosTitulo

    const finalizado = document.getElementById('container-finalizado')
    const cursando = document.getElementById('container-cursando')
    const todosCursos = document.getElementById('container-todosAlunos')

    const containerCardGerais = document.createElement('div')
    containerCardGerais.classList.add('container-card-gerais')

    const containerCardCursando = document.createElement('a')
    containerCardCursando.classList.add('container-card-cursando')
    containerCardCursando.setAttribute('href', 'http://127.0.0.1:5500/html/aluno.html')

    containerCardCursando.addEventListener('click', (event) => {     
        localStorage.setItem('nomeAluno', aluno.nome)
        localStorage.setItem('imgAluno', aluno.foto)
        localStorage.setItem('matricula', aluno.matricula)
    })

    const containerCardFinalizado = document.createElement('a')
    containerCardFinalizado.classList.add('container-card-finalizado')
    containerCardFinalizado.setAttribute('href', 'http://127.0.0.1:5500/html/aluno.html')

    containerCardFinalizado.addEventListener('click', (event) => {     
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