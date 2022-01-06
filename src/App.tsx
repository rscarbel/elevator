import React, { useState } from 'react';
import './App.css';
import Floor from './components/Floor';
import Elevator from './components/Elevator';
import Key from './components/Key';
import ChangeHeightInterface from './components/ChangeHeightInterface';

//create queue for pressed floors that persists though renders
const floorQueue: number[] = [];
let isMoving: boolean = false;
const NUMBER_OF_FLOORS: number = 10;
//how long the elevator will pause on each floor in ms
const WAIT_TIME: number = 3000;

function App() {

  let [ floorHeight, setFloorHeight ] = useState(50);
  const incrementHeight = () => {
    setFloorHeight(floorHeight += 5);
  };
  const decrementHeight = () => {
    setFloorHeight(floorHeight -= 5);
  };

  //need to change state to rerender keys so that the last highlighted key is cleared
  let [ , setRefreshComponent ] = useState({})
  //since useState is async, booleans are dangerous to use for refreshing, since the boolean may have changed multiple times before it is called.
  //Setting it to an object literal will work better, because an object is always a new place in memory
  //meaning the state is guaranteed to change, no matter how many instances are on the callstack
  const refresh = () => {
    setRefreshComponent({})
  }

  //add floors to queue and initiate elevator movement
  const addFloorToQueue = (floor: number) => {
    if (floorQueue.indexOf(floor) === -1) {
      floorQueue.push(floor)
    }
    //keep only one instance of moveElevator on the call stack
    if (!isMoving) {
      isMoving = true;
      moveElevator()
    }
  }

  //keep track of the position on the y-axis
  let [ elevatorYAxisPos, setElevatorYAxisPos ] = useState(0);

  //identify what floor the y-axis position corresponds to
  const detectFloor = (yPos: number = elevatorYAxisPos) => Math.floor(yPos / floorHeight + 1);

  //Since each floor is floorHeightpx, we need to multiply the floor by floorHeight and then subtract floorHeight to account for the height of the elevator.
  const convertFloorToYPos = (floor: number) => floor * (floorHeight + 2) - floorHeight

  //store arrays for displays on UI
  const floors: JSX.Element[] = [];
  const keys: JSX.Element[] = [];

  //Add data for all NUMBER_OF_FLOORS floors
  for (let i = NUMBER_OF_FLOORS; i >= 1; i--) {
    floors.push(<Floor key={i} floor={i} height={floorHeight} />)
    keys.unshift(<Key key={i}
      floor={i}
      floorQueue={floorQueue}
      addFloorToQueue={ addFloorToQueue }
      refresh={ refresh } />)
  }

  //Add functionality for visualizing the elevator move
  //This is done recursively so that we can check for new floors as the elevator is moving
  const moveElevator = () => setTimeout(() => {

    const targetLocation: number =  convertFloorToYPos(floorQueue[0]);

    const currentLocation: number = elevatorYAxisPos;

    const exactFloorPosition = currentLocation / (floorHeight) + 1;

    const currentFloorQueueIndex  = floorQueue.indexOf(exactFloorPosition)

    //if the current y-axis location is the same as one of the floors in the queue, pause on that floor
    if (currentFloorQueueIndex !== -1) {
      setTimeout(() => {
        //remove the floor we're stopped at from the queue
        floorQueue.splice(currentFloorQueueIndex,1)
        //if there's more floors, move to them, otherwise set the move status to false
        if (floorQueue.length) {
          moveElevator();
        } else {
          isMoving = false;
          //go back to the first floor if it's not already there
          if (exactFloorPosition !== 1) {
            addFloorToQueue(1);
          } else {
            refresh()
          }
        };
      }, WAIT_TIME)
    } else {
      //decrement the location if the target is below the current location
      if (currentLocation > targetLocation) {
        setElevatorYAxisPos(elevatorYAxisPos -= floorHeight / 10);
        moveElevator();
        //increment the location if the target is below the current location
      } else if (currentLocation < targetLocation) {
        setElevatorYAxisPos(elevatorYAxisPos += floorHeight / 10);
        moveElevator();
      }
    }
  },25)

  return (
    <div className="App">
      <div className='top-menu'>
        <ChangeHeightInterface
        incrementHeight={incrementHeight}
        decrementHeight={decrementHeight}
        height={floorHeight} />
        <p>Current floor: {detectFloor()}</p>
      <div className='keypad'>
        {keys}
      </div>
      </div>
      <div className='building'>
        <Elevator currentFloor={ detectFloor() }
        currentYPosition={ elevatorYAxisPos }
        height={floorHeight}/>
        {floors}
        {window.scroll(0,window.innerHeight - elevatorYAxisPos)}
      </div>
    </div>
  );
}

export default App;
