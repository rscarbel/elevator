import React from "react"

interface KeyProps {
  floor: number;
}

const Key: React.FC<KeyProps> = ({ floor }) => {
  return <div className='key'>
    <p>{ floor }</p>
  </div>;
};

export default Key;