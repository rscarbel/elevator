import React, { useState } from 'react';
import './App.css';
import ChangeHeightInterface from './components/ChangeHeightInterface';
import { floorHeightValue, wait } from './scripts/utils';
import { moveElevatorDown, moveElevatorUp } from './scripts/moveElevator';
import Building from './components/Building';
import Keypad from './components/Keypad';

//this needs to scoped to the module because setting it needs to be synchronous
let isMoving = false;
const floorQueue: number[] = [];
const NUMBER_OF_FLOORS = 10;
//how long the elevator will pause on each floor in ms
const WAIT_TIME = 10000;
const FRAME_RATE = 25;

function App() {
  const [floorHeight, setFloorHeight] = useState(floorHeightValue);
  const movementSpeed: number = Math.floor(floorHeight / 8);

  //need to change state to rerender keys so that the last highlighted key is cleared
  const [, setRefreshComponent] = useState({});
  //a boolean fails since useState is asynchronous, using an object literal guarantees this
  const refresh = () => {
    setRefreshComponent({});
  };

  //add floors to queue and initiate elevator movement
  const addFloorToQueue = (floor: number) => {
    if (floorQueue.indexOf(floor) === -1) {
      floorQueue.push(floor);
    }
    //keep only one instance of moveElevator on the call stack
    if (!isMoving) {
      isMoving = true;
      moveElevator();
    }
  };

  //keep track of the position on the y-axis
  let [elevatorYAxisPos, setElevatorYAxisPos] = useState(0);

  //identify what floor the y-axis position corresponds to
  const detectFloor = (yPos: number = elevatorYAxisPos) =>
    Math.floor(yPos / floorHeight + 1);

  //we need tofloorHeight to account for the height of the elevator.
  const convertFloorToYVal = (floor: number) =>
    floor * floorHeight - floorHeight;

  const moveElevator = async () => {
    const targetLocation: number = convertFloorToYVal(floorQueue[0]);
    const currentLocation: number = elevatorYAxisPos;
    const exactFloorPosition = currentLocation / floorHeight + 1;
    const currentFloorQueueIndex = floorQueue.indexOf(exactFloorPosition);

    //if the current location is the same as one of the floors in the queue, pause on that floor
    if (currentFloorQueueIndex !== -1) {
      //pause on floor
      await wait(WAIT_TIME);
      //remove the floor we're stopped at from the queue
      floorQueue.splice(currentFloorQueueIndex, 1);

      //if there's more floors, move to them, otherwise set the move status to false
      if (floorQueue.length) {
        moveElevator();
      } else {
        isMoving = false;
        //go back to the first floor if it's not already there
        if (exactFloorPosition !== 1) {
          addFloorToQueue(1);
        } else {
          refresh();
        }
      }
    } else {
      let newElevatorPosition: number = 0;
      //decrement the location if the target is below the current location
      if (currentLocation > targetLocation) {
        newElevatorPosition = moveElevatorDown(
          currentLocation,
          targetLocation,
          movementSpeed,
          detectFloor,
          elevatorYAxisPos
        );
        //increment the location if the target is below the current location
      } else if (currentLocation < targetLocation) {
        newElevatorPosition = moveElevatorUp(
          currentLocation,
          targetLocation,
          movementSpeed,
          detectFloor,
          elevatorYAxisPos
        );
      }

      setElevatorYAxisPos((elevatorYAxisPos = newElevatorPosition));
      await wait(FRAME_RATE);
      moveElevator();
    }
  };

  return (
    <div className="App">
      <div className="top-menu">
        <ChangeHeightInterface
          setFloorHeight={setFloorHeight}
          height={floorHeight}
          isActive={!isMoving}
        />

        <p>Current floor: {detectFloor()}</p>

        <Keypad
          numOfFloors={NUMBER_OF_FLOORS}
          floorQueue={floorQueue}
          addFloorToQueue={addFloorToQueue}
          refresh={refresh}
        />
      </div>

      <Building
        numOfFloors={NUMBER_OF_FLOORS}
        currentFloor={detectFloor()}
        currentYPosition={elevatorYAxisPos}
      />
      {document
        .querySelector('.elevator')
        ?.scrollIntoView({ block: 'center', inline: 'center' })}
    </div>
  );
}

export default App;
