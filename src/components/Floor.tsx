import React from "react"

interface FloorProps {
  floor: number;
  height: number;
}

const Floor: React.FC<FloorProps> = ({ floor, height }) => {
  return <div className='floor' style={{height: `${height - 2}px`}}>
    <p>{ floor }</p>
  </div>;
};

export default Floor;