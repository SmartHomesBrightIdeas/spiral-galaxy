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

// How fast the saturation changes
export function sliderSaturationWave(saturationFrequency) {
  satFrequency = max(.1, saturationFrequency)
}

// How much saturation you lose from 100%
export function sliderSaturationRange(saturationRange) {
  satRange = saturationRange
}

export function render(index) {
  h = time(.1 / tf / speed) + index/pixelCount * rLength
  s = 1 - wave(time(.08 / satFrequency)) * satRange
  hsv(h, s, 1) // control brightness with built in brightness slider
}

export var t1,t2,t3,h,s,v,speed,satRange,satFrequency;
