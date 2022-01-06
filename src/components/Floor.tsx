import React from "react"
import styleSizes from "../scripts/styleSizes";


interface FloorProps {
  floor: number;
  height: number;
}

const Floor: React.FC<FloorProps> = ({ floor, height }) => {

  return <div className='floor' style={
    {height: `${height - styleSizes.borderWidthValue}px`,
      borderBottomWidth: floor === 1 ? styleSizes.borderWidthValue : 0}
    }>
    <p>{ floor }</p>
  </div>;
};

export default Floor;