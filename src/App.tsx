import React, { useState } from 'react';
import './App.css';
import Floor from './components/Floor';
import Elevator from './components/Elevator';
import Key from './components/Key';

//create queue for pressed floors that persists though renders
const floorQueue: number[] = [];
let isMoving: boolean = false;

function App() {

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

  //Add data for all 10 floors
  for (let i = 10; i >= 1; i--) {
    floors.push(<Floor key={i} floor={i} />)
    keys.unshift(<Key key={i}
      floor={i}
      floorQueue={floorQueue}
      addFloorToQueue={ addFloorToQueue } />)
  }

  //Add functionality for visualizing the elevator move
  const moveElevator = () => setTimeout(() => {

    const targetLocation: number =  convertFloorToYPos(floorQueue[0]);

    const currentLocation: number = elevatorYAxisPos;

    const exactFloorPosition = currentLocation / 50 + 1;

    const currentFloorQueueIndex  = floorQueue.indexOf(exactFloorPosition)

    //if the current y-axis location is the same as one of the floors in the queue, pause on that floor
    if (currentFloorQueueIndex !== -1) {
      setTimeout(() => {
        floorQueue.splice(currentFloorQueueIndex,1)
        if (floorQueue.length) {
          moveElevator();
        } else {
          isMoving = false;
        }
      }, 1500)
    } else {
      if (currentLocation > targetLocation) {
        setElevatorYAxisPos(elevatorYAxisPos -= 5);
        moveElevator();
      } else if (currentLocation < targetLocation) {
        setElevatorYAxisPos(elevatorYAxisPos += 5);
        moveElevator();
      } else {
        floorQueue.shift();
        setTimeout(() => {
          if (floorQueue.length) {
            moveElevator();
          } else {
            isMoving = false;
          }
        }, 1500)
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

/*
TODO

create keypad with 10 keys
    keys need to light up when pressed
    keys need to remain lighted up when elevator has not reached them

make elevator move
    it needs to stop at floors inbetween the current floor and the target floor
    it needs to wait 3 seconds at stopped floors

*/
