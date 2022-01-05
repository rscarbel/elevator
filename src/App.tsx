import React from 'react';
import './App.css';


function App() {
  return (
    <div className="App">
      <div className='building'>
      </div>
      <div className='keypad'>
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
