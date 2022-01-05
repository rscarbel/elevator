import React from "react"

interface KeyProps {
  floor: number;
  changeFloor: Function;
}

const Key: React.FC<KeyProps> = ({ floor, changeFloor }) => {
  return <div className='key' onClick={ function(){changeFloor(floor)} }>
    <p>{ floor }</p>
  </div>;
};

export default Key;