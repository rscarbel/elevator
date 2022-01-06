import React from "react"
import styleSizes from "../scripts/styleSizes";


interface FloorProps {
  floor: number;
  height: number;
}

const Floor: React.FC<FloorProps> = ({ floor, height }) => {
  const borderWidthValue = styleSizes.parseStyleValue(styleSizes.borderWidth);

  return <div className='floor' style={
    {height: `${height - borderWidthValue}px`,
    borderBottomWidth: floor === 1 ? borderWidthValue : 0}
    }>
    <p>{ floor }</p>
  </div>;
};

export default Floor;