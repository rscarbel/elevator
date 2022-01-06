import React from "react";

interface ChangeHeightProps {
  incrementHeight: Function;
  decrementHeight: Function;
  height: number;
}

const ChangeHeightInterface: React.FC<ChangeHeightProps> = ({ incrementHeight, decrementHeight, height}) => {
  return <div className="change-height">
    <p>Change floor height:</p>
    <button onClick={function(){incrementHeight()}}>+</button>
    <button onClick={function(){
      if (height > 5) {
        decrementHeight()
      }
      }}>-</button>
  </div>
};

export default ChangeHeightInterface;