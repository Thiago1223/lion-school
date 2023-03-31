'use strict'

import { preencherDadosCursos } from "./app.js"
import { preencherCardAlunos } from "./app.js"

const cursos = await preencherDadosCursos()

const criarCardCursos = (curso) => {

    const containerCursosGerais = document.createElement('div')
    containerCursosGerais.classList.add('container-cursos-gerais')

    const containerCurso = document.createElement('a')
    containerCurso.classList.add('container-curso')
    containerCurso.setAttribute('href', 'http://127.0.0.1:5500/html/turma.html')

    containerCurso.addEventListener('click', (event) => {     
      if(curso.sigla == 'DS'){
        localStorage.setItem('nomeTurma', 'DS')
          
      }else{
        localStorage.setItem('nomeTurma', 'RDS')
      }
    })

    const containerInfoCurso = document.createElement('div')
    containerInfoCurso.classList.add('container-info-curso')

    const iconDs = document.createElement('i')
    iconDs.classList.add('fa-sharp', 'fa-solid', 'fa-code')

    const titleCurso = document.createElement('h1')
    titleCurso.classList.add('title-curso')
    titleCurso.textContent = curso.sigla

    containerCursosGerais.append(containerCurso)

    containerCurso.append(containerInfoCurso)

    containerInfoCurso.append(iconDs, titleCurso)

    return containerCurso
}

const carregarCard = () => {
    const container = document.getElementById('container-cursos-gerais')
    const cards = cursos.map(criarCardCursos)
    container.replaceChildren(...cards)
}

carregarCard()