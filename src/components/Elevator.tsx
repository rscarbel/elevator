import React from "react";
import styleSizes from "../scripts/styleSizes";

interface ElevatorProps {
  currentFloor: number;
  currentYPosition: number;
  height: number;
}

const Elevator: React.FC<ElevatorProps> = ({ currentFloor, currentYPosition, height }) => {

  return <div className='elevator' style={ {
      bottom: `${ currentYPosition }px`,
      height: `${ height + styleSizes.borderWidthValue }px`,
      width: height * .8} }>
    <p>{ currentFloor }</p>
  </div>;
};

export default Elevator;