import React from "react"

interface FloorProps {
  floor: number;
}

const Floor: React.FC<FloorProps> = ({ floor }) => {
  return <div className='floor'>
    <p>{ floor }</p>
  </div>;
};

export default Floor;