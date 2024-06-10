// Variáveis
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
let randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1

// Eventos
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keydown', function(e) {
  if(e.key == 'Enter' && screen1.classList.contains('hide')) {
    handleResetClick()
  }
})

// Funções Callback
function handleTryClick(event) {
  event.preventDefault()

  const inputNumber = document.querySelector("#inputNumber")
  const numberValue = Number(inputNumber.value)
  
  if (!isNaN(numberValue) && numberValue >= 1 && numberValue <= 10) {
    if (numberValue == randomNumber) {
      toggleScreen()
      screen2.querySelector("h2").innerText = `Acertou em ${xAttempts} tentativas`
    }

    xAttempts++
  } else {
    alert("Por favor, insira um número válido entre 1 e 10.")
  }

  inputNumber.value = ""   
}

function handleResetClick() {
  toggleScreen()
  xAttempts = 1
  randomNumber = Math.round(Math.random() * 10)
}

function toggleScreen() {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}
