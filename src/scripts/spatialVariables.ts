//this needs to scoped to the module because setting it needs to be synchronous
export let isMoving = false;
export const floorQueue: number[] = [];
export const NUMBER_OF_FLOORS = 10;
export const FRAME_RATE = 25;

export const detectFloor: (yPos: number, floorHeight: number) => number = (
  yPos,
  floorHeight
) => Math.floor(yPos / floorHeight + 1);

export const convertFloorToYVal: (
  floor: number,
  floorHeight: number
) => number = (floor, floorHeight) => floor * floorHeight - floorHeight;
