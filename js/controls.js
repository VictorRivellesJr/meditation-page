import {
  minutesDisplay,
  secondsDisplay,
  startButton,
  body,
  root,
  startIcon,
  stopIcon,
  plus5Icon,
  plus1Icon,
  minus1Icon,
  minus5Icon,
  forestIcon,
  rainIcon,
  waveIcon,
  firePlaceIcon,
  thunderIcon,
  tibetanCymbalsSlider,
  cymbalText,
  buttonContainer,
  modeButton,
  lightIcon,
  darkIcon,
  plus1Button,
  minus1Button,
} from "./elements.js"
import {
  stopAllAudios,
  isAudioPlaying,
  playTibetanCymbalsSound,
  setThemeBackground,
} from "./sounds.js"

let totalMinutes = parseInt(minutesDisplay.textContent)
let colorLightness = getComputedStyle(
  document.documentElement
).getPropertyValue("--color-lightness")
let modeSelected = "light"
let colorLightnessVariation = ""
let colorTheme = ""
let cymbalsController = "off"

function startApp() {
  if (minutesDisplay.textContent > 0) {
    if (cymbalsController === "on") {
      playTibetanCymbalsSound()
    }
    startTimer()
    startColorFX()
  }
}

function startTimer() {
  startButton.disabled = true
  timer = setTimeout(() => {
    let minutes = parseInt(minutesDisplay.textContent)
    let seconds = parseInt(secondsDisplay.textContent)
    if (seconds > 0) {
      secondsDisplay.textContent = String(seconds - 1).padStart(2, "0")
    } else {
      minutesDisplay.textContent = String(minutes - 1).padStart(2, "0")
      secondsDisplay.textContent = "59"
    }
    if (minutes === 0 && seconds === 0) {
      stopAllAudios()
      if (cymbalsController === "on") {
        playTibetanCymbalsSound()
        setCymbalsTextColor()
      }
      return stopAndResetApp()
    }
    startTimer()
  }, 1000)
}

function stopAndResetApp() {
  startButton.disabled = false
  clearTimeout(timer)
  clearInterval(colorLightnessVariation)
  stopAllAudios()
  resetTimerDisplay()
  setButtonsBackground()
  setComponentsColor("var(--color-primary)")
  setCymbalsTextColor()
}

function resetTimerDisplay() {
  minutesDisplay.textContent = String(totalMinutes).padStart(2, "0")
  secondsDisplay.textContent = "00"
}

function startColorFX() {
  let floatingValue = -1
  colorLightnessVariation = setInterval(() => {
    if (parseInt(colorLightness) === 41) {
      floatingValue = -1
    }
    if (parseInt(colorLightness) === 11) {
      floatingValue = 1
    }
    colorLightness = String(parseInt(colorLightness) + floatingValue).padEnd(
      3,
      "%"
    )
    root.setProperty("--color-lightness", colorLightness)
  }, 50)
}

function setComponentsColor(color) {
  startIcon.style.fill = color
  stopIcon.style.fill = color
  plus5Icon.style.fill = color
  plus1Icon.style.fill = color
  minus1Icon.style.fill = color
  minus5Icon.style.fill = color
  forestIcon.style.fill = color
  rainIcon.style.fill = color
  waveIcon.style.fill = color
  firePlaceIcon.style.fill = color
  thunderIcon.style.fill = color
  plus1Button.style.borderColor = color
  minus1Button.style.borderColor = color
  colorTheme = color
  setCymbalsTextColor()
}

function changeMinutesBy5(minutes) {
  if (minutes > 0 || minutesDisplay.textContent >= 5)
    minutesDisplay.textContent = String(
      parseInt(minutesDisplay.textContent) + minutes
    ).padStart(2, "0")
  totalMinutes = parseInt(minutesDisplay.textContent)
}

function changeMinutesBy1(minute) {
  if (minute > 0 || minutesDisplay.textContent >= 1)
    minutesDisplay.textContent = String(
      parseInt(minutesDisplay.textContent) + minute
    ).padStart(2, "0")
  totalMinutes = parseInt(minutesDisplay.textContent)
}

function switchMode() {
  modeSelected = modeSelected === "light" ? "dark" : "light"
  modeButton.innerHTML = modeSelected === "light" ? lightIcon : darkIcon
  body.style.background = `var(--bg-${modeSelected})`
  tibetanCymbalsSlider.style.background = `var(--bc-${modeSelected})`

  setCymbalsTextColor()
  setButtonsBackground()
}

function setButtonsBackground() {
  buttonContainer.forEach((element) => {
    element.style.backgroundColor = `var(--bc-${modeSelected})`
  })
  isAudioPlaying === true && setThemeBackground()
}

function setCymbalsFeatures() {
  cymbalsController = cymbalsController === "off" ? "on" : "off"
  setCymbalsTextColor()
}

function setCymbalsTextColor() {
  if (isAudioPlaying === true && cymbalsController === "on") {
    cymbalText.style.color = colorTheme
  } else {
    if (cymbalsController === "on") {
      cymbalText.style.color =
        modeSelected === "light"
          ? "var(--color-primary)"
          : "var(--color-tertiary)"
    } else {
      cymbalText.style.color =
        modeSelected === "light"
          ? "var(--color-tertiary)"
          : "var(--color-primary)"
    }
  }
}

export {
  startApp,
  stopAndResetApp,
  changeMinutesBy5,
  changeMinutesBy1,
  switchMode,
  setCymbalsFeatures,
  setComponentsColor,
  modeSelected,
}
