import React from 'react';

interface KeyProps {
  floor: number;
  floorQueue: number[];
  addFloorToQueue: Function;
  refresh: Function;
}

const Key: React.FC<KeyProps> = ({
  floor,
  addFloorToQueue,
  floorQueue,
  refresh,
}) => {
  //if this floor is in the queue, we will need to "light up" the button
  const isInQueue: boolean = floorQueue.indexOf(floor) === -1 ? false : true;

  return (
    <button
      //add the class for makint it a lit button if it is in the queue
      className={`key ${isInQueue ? 'key--queued' : ''}`}
      onClick={function () {
        addFloorToQueue(floor);
        refresh();
      }}
    >
      <p>{floor}</p>
    </button>
  );
};

export default Key;
