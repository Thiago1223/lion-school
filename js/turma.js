'use strict'

import { preencherCardAlunosPeloCurso } from "./app.js"
import { preencherCardAlunosPelaSituacao } from "./app.js"

let turmaCurso = localStorage.getItem('nomeTurma')
const alunos = await preencherCardAlunosPeloCurso(turmaCurso)


const criarMainTurmaDs = (aluno) => {
     const containerCardGerais = document.createElement('div')
    containerCardGerais.classList.add('container-card-gerais')

    const containerCardGeraisFinalizado = document.createElement('div')
    containerCardGerais.classList.add('container-card-gerais')

    const containerCardCursando = document.createElement('div')
    const containerCardFinalizado = document.createElement('div')

   
    const nameCard = document.createElement('p')
    nameCard.classList.add('name-card')
    nameCard.textContent = aluno.nome

    const imgCard = document.createElement('img')
    imgCard.classList.add('img-card')
    imgCard.src = aluno.foto


    const nameCardFinalizado = document.createElement('p')
    nameCardFinalizado.classList.add('name-card')
    nameCardFinalizado.textContent = aluno.nome

    const imgCardFinalizado = document.createElement('img')
    imgCardFinalizado.classList.add('img-card')
    imgCardFinalizado.src = aluno.foto
    containerCardFinalizado.classList.add('container-card-finalizado')
    containerCardCursando.classList.add('container-card-cursando')


    const finalizado = document.getElementById('container-finalizado')
    const cursando = document.getElementById('container-cursando')
    const todosCursos = document.getElementById('container-todosAlunos')

    function mostrarTodosCursos(){
        if (aluno.status == "Cursando") {


            containerCardCursando.classList.add('container-card-cursando')
            containerCardGerais.append(containerCardCursando)
            containerCardCursando.append(imgCard, nameCard)
        }else{
                containerCardFinalizado.classList.add('container-card-finalizado')
                containerCardGerais.append(containerCardFinalizado)
                containerCardFinalizado.append(imgCardFinalizado, nameCardFinalizado)
               
            }
    }

    function mostrarCursando() {
        if (aluno.status == "Cursando") {


            containerCardCursando.classList.add('container-card-cursando')
            containerCardGerais.append(containerCardCursando)
            containerCardCursando.append(imgCard, nameCard)
        }
    }
    function mostrarFinalizados() {
        if (aluno.status == 'Finalizado') {
            containerCardFinalizado.classList.add('container-card-finalizado')
            containerCardGerais.append(containerCardFinalizado)
            containerCardFinalizado.append(imgCardFinalizado, nameCardFinalizado)
           
        }
    }
    finalizado.addEventListener('click', function () {

        mostrarFinalizados()
        containerCardCursando.classList.add('desaparecer')
        containerCardGerais.removeChild(containerCardCursando)


    })


    cursando.addEventListener('click', function () {
        mostrarCursando()
        containerCardFinalizado.classList.add('desaparecer')
        containerCardGerais.removeChild(containerCardFinalizado)

    })
    todosCursos.addEventListener('click',function(){
        mostrarTodosCursos()
        console.log('klsdjf');
        
        
    })
    window.onload = mostrarTodosCursos()


    // containerCardGerais.append(containerCardCursando,containerCardFinalizado)
 
   
        // containerCardGerais.append(containerCardFinalizado)
        // containerCardFinalizado.append(imgCardFinalizado, nameCardFinalizado)
        
  
        // containerCardGerais.append(containerCardCursando)
        // containerCardCursando.append(imgCard, nameCard)
    
  
   


  
    return containerCardGerais
    
    
}











const carregarMainDs = () => {
    const container = document.getElementById('container-card-gerais')
    const cards = alunos.map(criarMainTurmaDs)


    container.replaceChildren(...cards)
}



carregarMainDs()



