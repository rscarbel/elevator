import React from "react"

interface KeyProps {
  floor: number;
  yAxisPos: number;
  addFloorToQueue: Function;
}

const Key: React.FC<KeyProps> = ({ floor, addFloorToQueue, yAxisPos }) => {
  return <div className='key' onClick={ function(){addFloorToQueue(floor)} }>
    <p>{ floor }</p>
  </div>;
};

export default Key;