import React from "react";

interface ElevatorProps {
  currentFloor: number;
}

const Elevator: React.FC<ElevatorProps> = ({ currentFloor }) => {
  return <div className='elevator'>
    <p>{ currentFloor }</p>
  </div>;
};

export default Elevator;