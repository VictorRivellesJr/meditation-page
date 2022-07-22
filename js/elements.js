const minutesDisplay = document.querySelector("#minutes")
const secondsDisplay = document.querySelector("#seconds")
const startButton = document.querySelector("#startButton")
const stopButton = document.querySelector("#stopButton")
const plus5Button = document.querySelector("#plus5Button")
const plus1Button = document.querySelector("#plus1Button")
const minus1Button = document.querySelector("#minus1Button")
const minus5Button = document.querySelector("#minus5Button")
const forestButton = document.querySelector("#forestButton")
const rainButton = document.querySelector("#rainButton")
const waveButton = document.querySelector("#waveButton")
const firePlaceButton = document.querySelector("#firePlaceButton")
const thunderButton = document.querySelector("#thunderButton")
const forestSlider = document.querySelector("#forestSlider")
const rainSlider = document.querySelector("#rainSlider")
const waveSlider = document.querySelector("#waveSlider")
const firePlaceSlider = document.querySelector("#firePlaceSlider")
const thunderSlider = document.querySelector("#thunderSlider")
const tibetanCymbalsSlider = document.querySelector(".sliderSwitch")
const tibetanCymbalCheckbox = document.querySelector("#tibetanCymbalCheckbox")
const cymbalText = document.querySelector("#cymbalText")
const startIcon = document.querySelector("#startIcon")
const stopIcon = document.querySelector("#stopIcon")
const plus5Icon = document.querySelector("#plus5Icon")
const plus1Icon = document.querySelector("#plus1Icon")
const minus1Icon = document.querySelector("#minus1Icon")
const minus5Icon = document.querySelector("#minus5Icon")
const forestIcon = document.querySelector("#forestIcon")
const rainIcon = document.querySelector("#rainIcon")
const waveIcon = document.querySelector("#waveIcon")
const firePlaceIcon = document.querySelector("#firePlaceIcon")
const thunderIcon = document.querySelector("#thunderIcon")
const buttonContainer = document.querySelectorAll(".buttonContainer")
const forestContainer = document.querySelector("#forestContainer")
const rainContainer = document.querySelector("#rainContainer")
const waveContainer = document.querySelector("#waveContainer")
const firePlaceContainer = document.querySelector("#firePlaceContainer")
const thunderContainer = document.querySelector("#thunderContainer")
const modeButton = document.querySelector("#modeButton")
const body = document.body
const root = document.documentElement.style

const forestAudio = new Audio("../sound/forest.wav")
const rainAudio = new Audio("../sound/rain.wav")
const waveAudio = new Audio("../sound/wave.mp3")
const firePlaceAudio = new Audio("../sound/firePlace.mp3")
const thunderAudio = new Audio("../sound/thunder.mp3")
const tibetanCymbalsAudio = new Audio("../sound/tibetan-cymbals.mp3")

const lightIcon =
  '<img src="./img/light-icon.svg" alt="Sun image for light mode" />'

const darkIcon =
  '<img src="./img/dark-icon.svg" alt="Moon image for dark mode" />'

export {
  minutesDisplay,
  secondsDisplay,
  startButton,
  stopButton,
  plus5Button,
  plus1Button,
  minus1Button,
  minus5Button,
  forestButton,
  rainButton,
  waveButton,
  firePlaceButton,
  thunderButton,
  forestSlider,
  rainSlider,
  waveSlider,
  firePlaceSlider,
  thunderSlider,
  modeButton,
  tibetanCymbalCheckbox,
  tibetanCymbalsSlider,
  cymbalText,
  buttonContainer,
  startIcon,
  stopIcon,
  plus5Icon,
  plus1Icon,
  minus1Icon,
  minus5Icon,
  lightIcon,
  darkIcon,
  body,
  root,
  forestContainer,
  rainContainer,
  waveContainer,
  firePlaceContainer,
  thunderContainer,
  forestIcon,
  rainIcon,
  waveIcon,
  firePlaceIcon,
  thunderIcon,
  forestAudio,
  rainAudio,
  waveAudio,
  firePlaceAudio,
  thunderAudio,
  tibetanCymbalsAudio,
}
