import React from "react"

interface KeyProps {
  floor: number;
  floorQueue: number[];
  addFloorToQueue: Function;
  refresh: Function;
}

const Key: React.FC<KeyProps> = ({ floor, addFloorToQueue, floorQueue, refresh }) => {

  const isInQueue: boolean = floorQueue.indexOf(floor) === -1 ? false : true;

  return <div className={`key ${isInQueue ? 'queued-key' : ''}`} onClick={ function(){addFloorToQueue(floor);refresh()} }>
    <p>{ floor }</p>
  </div>;
};

export default Key;