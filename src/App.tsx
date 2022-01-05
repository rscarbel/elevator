import React, { useState } from 'react';
import './App.css';
import Floor from './components/Floor';
import Elevator from './components/Elevator';
import Key from './components/Key';

//create queue for pressed floors that persists though renders
const floorQueue: number[] = [];

function App() {

  //add floors to queue and initiate elevator movement
  const addFloorToQueue = (floor: number) => {
    floorQueue.push(floor)
    moveElevator()
  }

  //keep track of the position on the y-axis
  let [ elevatorYAxisPos, setElevatorYAxisPos ] = useState(0);
  const changeElevatorYAxisPos = (location: number) => {
    setElevatorYAxisPos(location);
  };

  //store arrays for displays on UI
  const floors: JSX.Element[] = [];
  const keys: JSX.Element[] = [];

  //Add data for all 10 floors
  for (let i = 10; i >= 1; i--) {
    floors.push(<Floor key={i} floor={i} />)
    keys.unshift(<Key key={i}
      floor={i}
      changeFloor={ changeFloor } />)
  }

  //Add functionality for visualizing the elevator move
  const moveElevator = () => setTimeout(() => {
    //Since each floor is 50px, we need to multiply the floor by 50 and then subtract 50 to account for the height of the elevator.
    //grab first element in queue and find it's location on the page.
    const targetPosition: number = floorQueue[0] * 50 - 50;
    const currentPosition: number = currentFloor * 50 - 50;

  },25)


  return (
    <div className="App">
      <div className='building'>
        <p>Current floor: {currentFloor}</p>
        {floors}
        <Elevator currentFloor={ currentFloor }/>
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

create building with 10 floors
    display floor number on each floor
create elevator
create keypad with 10 keys
    keys need to light up when pressed
    keys need to remain lighted up when elevator has not reached them

make elevator move
    it needs to go to the floor of the button that was pressed
    it needs to have a priority queue
    it needs to stop at floors inbetween the current floor and the target floor
    it needs to wait 3 seconds at stopped floors
display current floor
    it should update as the floor moves
*/
