input.onButtonPressed(Button.A, function () {
    let temperatura = input.temperature() // O usa parseInt(prompt("Ingrese temperatura"))

    if (temperatura >= 34) {
        basic.showString("Temperatura Alta")
    } else if (temperatura >= 26) {
        basic.showString("Temperatura Normal")
    } else {
        basic.showString("Temperatura Baja")
    }
})
