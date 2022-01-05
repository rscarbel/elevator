import React from "react"

interface KeyProps {
  floor: number;
  yAxisPos: number;
  changeFloor: Function;
}

const Key: React.FC<KeyProps> = ({ floor, changeFloor, yAxisPos }) => {
  return <div className='key' onClick={ function(){changeFloor(yAxisPos)} }>
    <p>{ floor }</p>
  </div>;
};

export default Key;