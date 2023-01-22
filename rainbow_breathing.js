// A Breathing Slow Rainbow with Sliders

// Global time factor, lower is slower
var tf = 5

// Speed min and max of slider (0-1)
var minSpeed = .3
var maxSpeed = 1
export function sliderSpeed(z) {
  speed = min(max(minSpeed, z), maxSpeed)
}

// Number of rainbows, min and max (1-n)
var maxRainbows = 4
var minRainbows = 1
export function sliderRainbows(r) {
  rLength = max(min(r*maxRainbows, maxRainbows), minRainbows)
}

var h1 = 1
export function sliderHue(hue) {
  h1 = hue
}

// How fast the saturation changes
export function sliderSaturationWave(saturationFrequency) {
  satFrequency = max(.1, saturationFrequency)
}

// How much saturation you lose from 100%
export function sliderSaturationRange(saturationRange) {
  satRange = saturationRange
}

// How fast the brightness changes
export function sliderBrightnessWave(brightnessFrequency) {
  vFrequency = max(.1, brightnessFrequency)
}

// How much brightness you lose from 100%
export function sliderBrightnessRange(brightnessRange) {
  vRange = brightnessRange
}

export function render(index) {
  // if hue slider is 1, rainbow mode, otherwise hue from slider
  h = h1 == 1 ? time(.1 / tf / speed) + index/pixelCount * rLength : h1
  s = 1 - wave(time(.08 / satFrequency)) * satRange
  v = 1 - wave(time(.08 / vFrequency)) * vRange
  hsv(h, s, v) // control brightness with built in brightness slider
}

export var t1,t2,t3,h,h1,s,v,speed,satRange,satFrequency;
