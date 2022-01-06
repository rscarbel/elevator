const grabCSSVariable = (variable:string) => getComputedStyle(document.documentElement).getPropertyValue(variable)

const borderWidth = grabCSSVariable('--floor-border');

const floorHeight = grabCSSVariable('--floor-height');

const floorPadding = grabCSSVariable('--floor-padding');


/**
 * @description Object for handeling css vars
*/
const styleSizes = {
  borderWidth,
  floorHeight,
  floorPadding,

  /**
  * @description get the pixel value as an integer
  */
  parseStyleValue (style: string) {
    return parseInt(style.slice(0, style.length - 1))
  },

  /**
  * @description set the css variable pixel amount
  */
  setStyle (variable: string, value: number) {
    document.documentElement.style.setProperty(variable,`${value}px`);
  },
}

export default styleSizes;