'use strict'

export const preencherDadosCursos = async () => {
    const url = `https://apilionschool.cyclic.app/v1/lion-school/cursos`
    const response = await fetch(url)
    const data = await response.json()

    return data.cursos
}

export const preencherCardAlunosPeloCurso = async (nomeCurso) => {
    const url = `https://apilionschool.cyclic.app/v1/lion-school/alunos?curso=${nomeCurso}`
    const response = await fetch(url)
    const data = await response.json()

    return data.curso
}

export const preencherCardAlunosPeloStatus = async (nomeCurso, status) => {
    const url = `https://apilionschool.cyclic.app/v1/lion-school/alunos?curso=${nomeCurso}&situacao=${status}`
    const response = await fetch(url)
    const data = await response.json()

    return data.curso
}

export const preencherCardAlunosPeloAno = async (nomeCurso, status, ano) => {
    const url = `https://apilionschool.cyclic.app/v1/lion-school/alunos?curso=${nomeCurso}&situacao=${status}&ano=${ano}`
    const response = await fetch(url)
    const data = await response.json()

    return data.curso
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