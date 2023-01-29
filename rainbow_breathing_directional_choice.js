// A Breathing Slow Rainbow with Sliders

var direction = 0 // 0 for outward, 1 for inward

// Speed min and max of slider (0-1)
var minSpeed = .1
var maxSpeed = 15
var speed = .3
export function sliderSpeed(z) {
  // speed = min(max(minSpeed, z), maxSpeed)
  speed = max(min(z*maxSpeed, z), minSpeed)
}

// Number of rainbows, min and max (1-n)
var maxRainbows = 5
var minRainbows = 1
var rLength = 1
export function sliderRainbows(r) {
  rLength = max(min(r*maxRainbows, maxRainbows), minRainbows)
}

var h1 = 1
export function sliderHue(hue) {
  h1 = hue
}

// How fast the saturation changes
var satFrequency = 1
var maxSaturationFrequency = .75  
export function sliderSaturationWave(saturationFrequency) {
  satFrequency = max(.1, saturationFrequency * maxSaturationFrequency)
}

// How much saturation you lose from 100%
var satRange = 0
export function sliderSaturationRange(saturationRange) {
  satRange = saturationRange
}

// How fast the brightness changes
var vFrequency = 1
export function sliderBrightnessWave(brightnessFrequency) {
  vFrequency = max(.1, brightnessFrequency)
}

// How much brightness you lose from 100%
vRange = 0
export function sliderBrightnessRange(brightnessRange) {
  vRange = brightnessRange
}

// How much of the number of rainbows range you want to be covering
var rainbowFrequency = 1
export function sliderRainbowFrequency(rainbowFrequency) {
  rainbowFrequency = max(.1, rainbowFrequency)
}

// How much of the number of rainbows range you want to be covering
var rainbowRange = 5
export function sliderRainbowRange(rainbowRange) {
  rainbowRange = max(.1, rainbowRange)
}



export function render(index) {
  // if hue slider is 1, rainbow mode, otherwise hue from slider
  if (direction == 0) { 
    h = h1 == 1 ? time(.3 / speed) + index/pixelCount * max(1, rainbowRange * rLength * wave(time(.8 * rainbowFrequency))) : h1
  } else {
      h = h1 == 1 ? 1-(time(.3 / speed)) + index/pixelCount * max(1, rainbowRange * rLength * wave(time(.8 * rainbowFrequency))) : h1
  }
  // if (h==1) {
  //   time(.1 / tf / speed) + index/pixelCount * rLength
  // } else {
  //   h = h1
  // }
  
  
  s = 1 - wave(time(.08 / satFrequency)) * satRange
  v = 1 - wave(time(.08 / vFrequency)) * vRange
  hsv(h, s, v) // control brightness with built in brightness slider
}

export var t1,t2,t3,h,h1,s,v,speed,satRange,satFrequency,rLength;
