let binColor = [0, 0, 0, 0, 0, 0, 0, 0]

function changeColor(identification) {
    let allow = window.document.getElementById(identification)

    let posicion = identification[3]

    if (binColor[posicion] == 1) {
        binColor[posicion] = 0
        allow.style.backgroundColor = 'black'
        allow.style.color = 'white'
        allow.innerHTML = binColor[posicion]
    } else if (binColor[posicion] == 0) {
        binColor[posicion] = 1
        allow.style.backgroundColor = 'white'
        allow.style.color = 'black'
        allow.innerHTML = binColor[posicion]
    }

    atualizaBin()
}

function atualizaBin() {
    let allowNumero = window.document.getElementById('resultadoNumero')
    let allowLetra = window.document.getElementById('resultadoLetra')

    let results = [128, 64, 32, 16, 8, 4, 2, 1]
    let sum = 0

    for (let i = 0; i < 8; i++) {
        if (binColor[i] == 1) {
            sum += results[i]
        }
    }

    allowNumero.innerHTML = sum
    allowLetra.innerHTML = String.fromCharCode(sum)
}