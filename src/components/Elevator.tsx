import React from "react";

interface ElevatorProps {
  currentFloor: number;
}


const Elevator: React.FC<ElevatorProps> = ({ currentFloor }) => {
  return <div className='elevator' style={ { bottom: `${currentFloor * 50 - 50}px`} }>
    <p>{ currentFloor }</p>
  </div>;
};

export default Elevator;