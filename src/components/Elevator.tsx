import React from "react";
import styleSizes from "../scripts/styleSizes";

interface ElevatorProps {
  currentFloor: number;
  currentYPosition: number;
  height: number;
}

const Elevator: React.FC<ElevatorProps> = ({ currentFloor, currentYPosition }) => {

  //anything larger than this will spill off the side of the building

  return <div className='elevator' style={ {
      bottom: `${ currentYPosition }px`} }>
    <p>{ currentFloor }</p>
  </div>;
};

export default Elevator;