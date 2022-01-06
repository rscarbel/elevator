const grabCSSVariable = (variable:string) => getComputedStyle(document.documentElement).getPropertyValue(variable)

const borderWidth = grabCSSVariable('--floor-border');

const floorHeight = grabCSSVariable('--floor-height');

const floorPadding = grabCSSVariable('--floor-padding');

const parseStyleValue = (style: string) => parseInt(style.slice(0, style.length - 1))

/**
 * @description Object for handeling css vars
*/
const styleSizes = {
  borderWidth,
  floorHeight,
  floorPadding,
  borderWidthValue: parseStyleValue(borderWidth),
  floorHeightValue: parseStyleValue(floorHeight),
  floorPaddingValue: parseStyleValue(floorPadding),
  /**
  * @description set the css variable pixel amount
  */
  setStyle (variable: string, value: number) {
    document.documentElement.style.setProperty(variable,`${value}px`);
  },
}

export default styleSizes;