import React from "react";
import styleSizes from "../scripts/styleSizes";

interface ElevatorProps {
  currentFloor: number;
  currentYPosition: number;
  height: number;
}

const Elevator: React.FC<ElevatorProps> = ({ currentFloor, currentYPosition, height }) => {

  //anything larger than this will spill off the side of the building
  const maxElevatorSize: number = window.innerWidth * .6
  const width: number = height * .8;

  return <div className='elevator' style={ {
      bottom: `${ currentYPosition }px`,
      height: `${ height + styleSizes.borderWidthValue }px`,
      width: width < maxElevatorSize ? width : maxElevatorSize} }>
    <p>{ currentFloor }</p>
  </div>;
};

export default Elevator;