// Chroma.js is a small-ish zero-dependency JavaScript library for all kinds of color conversions and color scales.
//
// The premise of this helper function is to do a simple way of obtaining the color box color so we can determine
// the text color to be applied
//
//  - This helper function utilizes chroma-js contrast method which returns a value based on the threshold
//    between two colours; for text rendering, a minimum contrast between background and text of 4.5:1 is recommended
import chroma from 'chroma-js'

function getTextColor(color){
    if(chroma.contrast(color, 'white') < 4.5){
        return 'black'
    }else{
        return 'white'
    }
}
export default getTextColor