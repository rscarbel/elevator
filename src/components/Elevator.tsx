import React from "react";

interface ElevatorProps {
  currentFloor: number;
  currentYPosition: number;
  height: number;
}


const Elevator: React.FC<ElevatorProps> = ({ currentFloor, currentYPosition, height }) => {
  return <div className='elevator' style={ { bottom: `${ currentYPosition }px`,
  height: `${ height - 2 }px`} }>
    <p>{ currentFloor }</p>
  </div>;
};

export default Elevator;