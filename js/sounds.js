import {
  forestAudio,
  rainAudio,
  waveAudio,
  firePlaceAudio,
  thunderAudio,
  tibetanCymbalsAudio,
  forestIcon,
  rainIcon,
  waveIcon,
  firePlaceIcon,
  thunderIcon,
  forestContainer,
  rainContainer,
  waveContainer,
  firePlaceContainer,
  thunderContainer,
  forestSlider,
  rainSlider,
  waveSlider,
  firePlaceSlider,
  thunderSlider,
} from "./elements.js"
import { setComponentsColor, modeSelected } from "./controls.js"

let isAudioPlaying = false
let currentAudioTypePlaying = null
let audioTypesHistoryList = []

const audioTypesController = {
  forest: "off",
  rain: "off",
  wave: "off",
  firePlace: "off",
  thunder: "off",
}

const themeTypesComponents = {
  forest: {
    audio: forestAudio,
    container: forestContainer,
    icon: forestIcon,
    slider: forestSlider,
  },
  rain: {
    audio: rainAudio,
    container: rainContainer,
    icon: rainIcon,
    slider: rainSlider,
  },
  wave: {
    audio: waveAudio,
    container: waveContainer,
    icon: waveIcon,
    slider: waveSlider,
  },
  firePlace: {
    audio: firePlaceAudio,
    container: firePlaceContainer,
    icon: firePlaceIcon,
    slider: firePlaceSlider,
  },
  thunder: {
    audio: thunderAudio,
    container: thunderContainer,
    icon: thunderIcon,
    slider: thunderSlider,
  },
}

function setThemeFeatures(type) {
  if (audioTypesController[type] === "off") {
    startThemeAudio(type)
    startThemeVFX(type)
    if (type === "rain") {
      openThunderControl()
    }
  } else {
    stopAudioAndResetButton(type)
    checkAudios(type)
  }
}

function startThemeAudio(type) {
  isAudioPlaying = true
  audioTypesController[type] = "on"
  themeTypesComponents[type].audio.play()
  themeTypesComponents[type].audio.volume =
    themeTypesComponents[type].slider.value / 100
  themeTypesComponents[type].audio.loop = true
  setCurrentAudioTypePlaying(type)
}

function setCurrentAudioTypePlaying(type) {
  if (currentAudioTypePlaying !== type) {
    updateAudioTypesPlayedList()
    currentAudioTypePlaying = type
  }
}

function updateAudioTypesPlayedList() {
  if (currentAudioTypePlaying !== null) {
    audioTypesHistoryList.unshift(currentAudioTypePlaying)
  }
}

function startThemeVFX(type) {
  setComponentsColor(`var(--bc-${type})`)
  themeTypesComponents[
    type
  ].container.style.backgroundColor = `var(--bc-${type})`
  themeTypesComponents[type].icon.style.fill = "var(--color-secondary)"
}

function openThunderControl() {
  thunderContainer.style.display = "flex"
}

function stopAudioAndResetButton(type) {
  themeTypesComponents[type].audio.pause()
  themeTypesComponents[
    type
  ].container.style.backgroundColor = `var(--bc-${modeSelected})`
  audioTypesController[type] = "off"

  if (type === "rain") {
    closeThunderControl()
  }
}

function closeThunderControl() {
  thunderContainer.style.display = "none"
  stopAudioAndResetButton("thunder")
  checkAudios("thunder")
}

function checkAudios(type) {
  if (Object.values(audioTypesController).includes("on")) {
    let setType
    type === currentAudioTypePlaying
      ? (setType = getLastAudioTypePlayed())
      : (setType = currentAudioTypePlaying)
    setComponentsColor(`var(--bc-${setType})`)
    return (themeTypesComponents[setType].icon.style.fill =
      "var(--color-secondary)")
  }
  isAudioPlaying = false
  return setComponentsColor(`var(--color-primary)`)
}

function getLastAudioTypePlayed() {
  currentAudioTypePlaying = audioTypesHistoryList.find(
    (type) => audioTypesController[type] === "on"
  )
  return currentAudioTypePlaying
}

function stopAllAudios() {
  for (const type in audioTypesController) {
    if (audioTypesController[type] === "on") {
      stopAudioAndResetButton(type)
    }
  }
  isAudioPlaying = false
}

function playTibetanCymbalsSound() {
  tibetanCymbalsAudio.play()
}

function setThemeBackground() {
  for (const type in audioTypesController) {
    if (audioTypesController[type] === "on") {
      themeTypesComponents[
        type
      ].container.style.backgroundColor = `var(--bc-${type})`
    }
  }
}

function setVolume(type) {
  themeTypesComponents[type].audio.volume =
    themeTypesComponents[type].slider.value / 100
}

export {
  stopAllAudios,
  playTibetanCymbalsSound,
  setThemeBackground,
  setThemeFeatures,
  setVolume,
  isAudioPlaying,
}
