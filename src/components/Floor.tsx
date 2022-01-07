import React from "react"
import styleSizes from "../scripts/styleSizes";


interface FloorProps {
  floor: number;
}

const Floor: React.FC<FloorProps> = ({ floor }) => {

  return <div className='floor' style={
    {
      borderBottomWidth: floor === 1 ? styleSizes.borderWidthValue : 0}
    }>
    <p>{ floor }</p>
  </div>;
};

export default Floor;