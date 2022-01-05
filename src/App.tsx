import React, { useState } from 'react';
import './App.css';
import Floor from './components/Floor';
import Elevator from './components/Elevator';
import Key from './components/Key';

//create queue for pressed floors that persists though renders
const floorQueue: number[] = [];
let isMoving: boolean = false;
const NUMBER_OF_FLOORS: number = 10;
//how long the elevator will pause on each floor in ms
const WAIT_TIME: number = 3000;

function App() {

  //need to change state to rerender keys so that the last highlighted key is cleared
  let [ , setRefreshComponent ] = useState({})
  const refresh = () => {
    setRefreshComponent({})
  }

  //add floors to queue and initiate elevator movement
  const addFloorToQueue = (floor: number) => {
    if (floorQueue.indexOf(floor) === -1) {
      floorQueue.push(floor)
    }
    if (!isMoving) {
      isMoving = true;
      moveElevator()
    }
  }

  //keep track of the position on the y-axis
  let [ elevatorYAxisPos, setElevatorYAxisPos ] = useState(0);

  //identify what floor the y-axis position corresponds to
  const detectFloor = (yPos: number = elevatorYAxisPos) => Math.floor(yPos / 50 + 1);

  //Since each floor is 50px, we need to multiply the floor by 50 and then subtract 50 to account for the height of the elevator.
  //grab first element in queue and find it's location on the page.
  const convertFloorToYPos = (floor: number) => floor * 50 - 50

  //store arrays for displays on UI
  const floors: JSX.Element[] = [];
  const keys: JSX.Element[] = [];

  //Add data for all NUMBER_OF_FLOORS floors
  for (let i = NUMBER_OF_FLOORS; i >= 1; i--) {
    floors.push(<Floor key={i} floor={i} />)
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

    const exactFloorPosition = currentLocation / 50 + 1;

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
        setElevatorYAxisPos(elevatorYAxisPos -= 5);
        moveElevator();
        //increment the location if the target is below the current location
      } else if (currentLocation < targetLocation) {
        setElevatorYAxisPos(elevatorYAxisPos += 5);
        moveElevator();
      }
    }
  },25)

  return (
    <div className="App">
      <div className='building'>
        <p>Current floor: {detectFloor()}</p>
        {floors}
        <Elevator currentFloor={ detectFloor() } currentYPosition={ elevatorYAxisPos }/>
      </div>
      <div className='keypad'>
        {keys}
      </div>
    </div>
  );
}

export default App;
