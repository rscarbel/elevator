import { floor } from "cypress/types/lodash";
import React from "react";

interface ChangeHeightProps {
  incrementHeight: Function;
  decrementHeight: Function;
  height: number;
  isActive: boolean;
}

const deactivatedStyle = {
  color: '#959494',
  backgroundColor: '#d5d5d5',
  pointerEvents: 'none',
}

const incrementStyle = {
  color: '#FFFFFF',
  backgroundColor: '#009910'
}

const decrementStyle = {
  color: '#000000',
  backgroundColor: '#ffd13d'
}

const ChangeHeightInterface: React.FC<ChangeHeightProps> = ({ incrementHeight, decrementHeight, height, isActive}) => {
  return <div className="change-height">

    <p>Change floor height:</p>

    <button
    style={isActive ? incrementStyle : deactivatedStyle}
    onClick={function(){incrementHeight()
    }}>+</button>

    <button
    style={isActive && !(height <= 5) ? decrementStyle : deactivatedStyle}
    onClick={function(){
      if (height > 5) {
        decrementHeight()
      }
      }}>-</button>

  </div>
};

export default ChangeHeightInterface;