import React from "react";

interface ElevatorProps {
  currentFloor: number;
  currentYPosition: number;
}


const Elevator: React.FC<ElevatorProps> = ({ currentFloor, currentYPosition }) => {
  return <div className='elevator' style={ { bottom: `${ currentYPosition }px`} }>
    <p>{ currentFloor }</p>
  </div>;
};

export default Elevator;