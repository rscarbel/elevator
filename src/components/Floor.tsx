import React from 'react';
import { borderWidthValue } from '../scripts/utils';

interface FloorProps {
  floor: number;
}

const Floor: React.FC<FloorProps> = ({ floor }) => {
  return (
    <div
      className="floor"
      style={{
        borderBottomWidth: floor === 1 ? borderWidthValue : 0,
      }}
    >
      <p>{floor}</p>
    </div>
  );
};

export default Floor;
