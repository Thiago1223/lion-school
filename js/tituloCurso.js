export let turma = {
    ds: "Desenvolvimento de Sistemas",
    rds: "Redes de Computadores"
}

export const pegarTituloDS = function () {
    const turmaStringDS = JSON.stringify(turma.ds)
    let jsonSemAspasDS = ''
    for (let i = 0; i < turmaStringDS.length; i++) {
        if (turmaStringDS[i] !== '"') {
            jsonSemAspasDS += turmaStringDS[i]

        }
    }
    return jsonSemAspasDS
}

export const pegarTituloRDS = function () {
    const turmaStringRDS = JSON.stringify(turma.rds)
    let jsonSemAspasRDS = ''
    for (let i = 0; i < turmaStringRDS.length; i++) {
        if (turmaStringRDS[i] !== '"') {

            jsonSemAspasRDS += turmaStringRDS[i]
        }
    }
    return jsonSemAspasRDS
}