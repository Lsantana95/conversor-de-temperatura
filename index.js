let input = document.getElementById ("inputNum")
let select = document.getElementById("unidadeConverter")
let Mostrar_Texto = document.getElementById("texto")
let Mostrar_Resultado = document.getElementById("resultado")

input.addEventListener("change", ConverterTemperatura)
select.addEventListener("change", ConverterTemperatura)


function ConverterTemperatura() {
  let temperatura = input.value 

  if(temperatura != "" ) {
    if(select.value == "Celcius") {
      Mostrar_Texto.innerHTML = "Fahrenheit"
      let Temperatura_Calculada = (temperatura * 1.8 + 32).toFixed(2)

      Mostrar_Resultado.innerHTML = `${temperatura} graus em Celcius é ${Temperatura_Calculada}`
    }
    else {
      Mostrar_Texto.innerHTML = "Celcius"
      let Temperatura_Calculada = ((temperatura - 32 ) / 1.8 ).toFixed(2)

      Mostrar_Resultado.innerHTML = `$ {temperatura} graus em Fahrenheit em Celcius é ${Temperatura_Calculada}`
    }
  }
  else {
    Mostrar_Resultado.innerHTML = ""
  }

}