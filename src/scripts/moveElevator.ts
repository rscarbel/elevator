export const moveElevatorDown: (currentLocation: number,
  targetLocation: number,
  movementSpeed: number,
  detectFloor: Function,
  elevatorYAxisPos: number) => number = (
    currentLocation,
    targetLocation,
    movementSpeed,
    detectFloor,
    elevatorYAxisPos) => {
      //we need to check to see if we've overshot a floor, otherwise we'll end up in an endless loop
      if (detectFloor() !== detectFloor(currentLocation - movementSpeed)
      && (currentLocation - movementSpeed) < targetLocation ) {
        return (elevatorYAxisPos - currentLocation - targetLocation)
       } else {
        return (elevatorYAxisPos -  movementSpeed)
       }
}

export const moveElevatorUp: (
  currentLocation: number,
  targetLocation: number,
  movementSpeed: number,
  detectFloor: Function,
  elevatorYAxisPos: number) => number = (currentLocation,
    targetLocation,
    movementSpeed,
    detectFloor,
    elevatorYAxisPos) => {
      //check if overshot a floor
      if (detectFloor() !== detectFloor(currentLocation + movementSpeed)
      && (currentLocation + movementSpeed) > targetLocation  ) {
        return elevatorYAxisPos + targetLocation - currentLocation;
       } else {
        return elevatorYAxisPos + movementSpeed;
       }
}