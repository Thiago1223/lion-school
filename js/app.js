'use strict'

export const preencherDadosCursos = async () => {
    const url = `https://apilionschool.cyclic.app/v1/lion-school/cursos`
    const response = await fetch(url)
    const data = await response.json()

    return data.cursos
}

export const preencherCardAlunosPeloCurso = async (nome) => {
    const url = `http://localhost:8080/v1/lion-school/alunos?curso=${nome}`
    const response = await fetch(url)
    const data = await response.json()

    return data.curso
}

export const preencherCardAlunosPelaSituacao = async (nomeSituacao) => {
    const url = `https://apilionschool.cyclic.app/v1/lion-school/alunos?situacao=${nomeSituacao}`
    const response = await fetch(url)
    const data = await response.json()

    return data.status
}

export const preencherCardAlunoPelaMatricula = async (matricula) => {
    const url = `https://apilionschool.cyclic.app/v1/lion-school/alunos/${matricula}`
    const response = await fetch(url)
    const data = await response.json()

    return data.aluno
}

export const preencherCardEstatisticasAlunoPelaMatricula = async (matricula) => {
    const url = `https://apilionschool.cyclic.app/v1/lion-school/alunos/mediaCurso/${matricula}`
    const response = await fetch(url)
    const data = await response.json()

    return data
}