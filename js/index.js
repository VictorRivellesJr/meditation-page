import {
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
} from "./elements.js"
import {
  startApp,
  stopAndResetApp,
  changeMinutesBy5,
  changeMinutesBy1,
  switchMode,
  setCymbalsFeatures,
} from "./controls.js"
import { setThemeFeatures, setVolume } from "./sounds.js"

window.onload = tibetanCymbalCheckbox.checked = false

startButton.addEventListener("click", startApp)
stopButton.addEventListener("click", stopAndResetApp)
plus5Button.addEventListener("click", () => changeMinutesBy5(5))
plus1Button.addEventListener("click", () => changeMinutesBy1(1))
minus1Button.addEventListener("click", () => changeMinutesBy1(-1))
minus5Button.addEventListener("click", () => changeMinutesBy5(-5))

forestButton.addEventListener("click", () => setThemeFeatures("forest"))
rainButton.addEventListener("click", () => setThemeFeatures("rain"))
waveButton.addEventListener("click", () => setThemeFeatures("wave"))
firePlaceButton.addEventListener("click", () => setThemeFeatures("firePlace"))
thunderButton.addEventListener("click", () => setThemeFeatures("thunder"))

modeButton.addEventListener("click", switchMode)

forestSlider.oninput = () => setVolume("forest")
rainSlider.oninput = () => setVolume("rain")
waveSlider.oninput = () => setVolume("wave")
firePlaceSlider.oninput = () => setVolume("firePlace")
thunderSlider.oninput = () => setVolume("thunder")

tibetanCymbalCheckbox.addEventListener("change", () => setCymbalsFeatures())
