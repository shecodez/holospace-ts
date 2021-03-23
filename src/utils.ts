/*
HSL = Hue, Saturation, Lightness 
So hues between 0-359 will cover all colors, 
saturation is how rich you want the color, 100% works for me, 
and Lightness determines the deepness: 
  50% is normal, 
  25% is dark colors, 
  75% is pastel. 
src: https://stackoverflow.com/a/21682946
use: (with fn as prototypes) 
function colorByHashCode(value) {
  return "<span style='color:" + value.getHashCode().intToHSL() + "'>" + value + "</span>";
}
*/

// String.prototype
export const getHashCode = function (str: string) {
  let hash = 0;
  if (str.length === 0) return hash;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
    hash = hash & hash; // Convert to 32bit integer
  }
  return Math.floor(Math.abs(((Math.sin(hash) * 10000) % 1) * 16777216));
};

// Number.prototype
export const intToHSL = function (int: Number) {
  var shortened = Number(int) % 360;
  return `hsl(${shortened},100%,32%)`;
};
