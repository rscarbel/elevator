const grabCSSVariable = (variable:string) => getComputedStyle(document.documentElement).getPropertyValue(variable);

export const borderWidth = grabCSSVariable('--floor-border');
export const floorHeight = grabCSSVariable('--floor-height');
export const floorPadding = grabCSSVariable('--floor-padding');

export const borderWidthValue = parseInt(borderWidth);
export const floorHeightValue = parseInt(floorHeight);
export const floorPaddingValue = parseInt(floorPadding);

  /**
  * @description set the css variable pixel amount
  */
export const setStyle: (variable: string, value: number)=> void = (variable, value) => {
  document.documentElement.style.setProperty(variable,`${value}px`);
}

export const wait: (time: number) => void = (time) => new Promise (resolve => setTimeout(resolve, time));