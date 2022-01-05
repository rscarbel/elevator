import React from "react"

interface KeyProps {
  floor: number;
  yAxisPos: number;
  floorQueue: number[];
  addFloorToQueue: Function;
}

const Key: React.FC<KeyProps> = ({ floor, addFloorToQueue, floorQueue,  yAxisPos }) => {

  const isInQueue: boolean = floorQueue.indexOf(floor) === -1 ? false : true;

  return <div className={`key ${isInQueue ? 'queued-key' : ''}`} onClick={ function(){addFloorToQueue(floor)} }>
    <p>{ floor }</p>
  </div>;
};

export default Key;