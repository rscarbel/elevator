import React from 'react';
import { setStyle } from '../scripts/utils';

interface ChangeHeightProps {
  height: number;
  isActive: boolean;
  setFloorHeight: Function;
}

const deactivatedStyle = {
  color: '#959494',
  backgroundColor: '#d5d5d5',
  pointerEvents: 'none',
};

const incrementStyle = {
  color: '#FFFFFF',
  backgroundColor: '#009910',
};

const decrementStyle = {
  color: '#000000',
  backgroundColor: '#ffd13d',
};

const ChangeHeightInterface: React.FC<ChangeHeightProps> = ({
  height,
  isActive,
  setFloorHeight,
}) => {
  const incrementHeight = () => {
    setStyle('--floor-height', height + 5);
    setFloorHeight((height += 5));
  };
  const decrementHeight = () => {
    setStyle('--floor-height', height - 5);
    setFloorHeight((height -= 5));
  };

  return (
    <div className="change-height">
      <p>Change floor height:</p>

      <button
        style={isActive ? incrementStyle : deactivatedStyle}
        onClick={incrementHeight}
      >
        +
      </button>

      <button
        style={isActive && height > 15 ? decrementStyle : deactivatedStyle}
        onClick={function () {
          if (height > 5) {
            decrementHeight();
          }
        }}
      >
        -
      </button>
    </div>
  );
};

export default ChangeHeightInterface;
