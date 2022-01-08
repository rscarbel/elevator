import React from "react";
import Key from "./Key";

interface KeypadProps {
  numOfFloors: number;
  floorQueue: number[];
  addFloorToQueue: Function;
  refresh: Function;
}

const Keypad: React.FC<KeypadProps> = ({ numOfFloors, floorQueue, addFloorToQueue, refresh }) => {
  const keys: JSX.Element[] = [];
  for (let i = 1; i <= numOfFloors; i++) {
    keys.push(<Key key={i}
      floor={i}
      floorQueue={floorQueue}
      addFloorToQueue={ addFloorToQueue }
      refresh={ refresh } />)
  }
  return <div className='keypad'>
  {keys}
  </div>
}

export default Keypad;