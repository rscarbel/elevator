import React from "react";
import Elevator from "./Elevator";
import Floor from "./Floor";

interface BuildingProps {
  numOfFloors: number;
  currentFloor: number;
  currentYPosition: number;
}

const Building: React.FC<BuildingProps> = ({ numOfFloors, currentFloor, currentYPosition }) => {
  const floors: JSX.Element[] = [];
  for (let i = numOfFloors; i >= 1; i--) {
    floors.push(<Floor key={i} floor={i} />)
  }
  return <div className='building'>
  <Elevator currentFloor={ currentFloor } currentYPosition={ currentYPosition } />
  {floors}
  </div>
}

export default Building;