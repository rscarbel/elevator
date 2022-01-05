# Elevator

We're going up!
This project is a simple representation of an elevator.
On the UI, there will be a building, an elevator, and a keypad.
It will operate exactly as a normal elevator does.

## Screenshots

none yet!  :(

## Getting started

The project is [deployed here](https://ryans-elevator.netlify.app/).
To get started with the development version, just run npm start.

## Project requirements

* create building with 10 floors
  * display floor number on each floor

* create elevator

* create keypad with 10 keys
  * keys need to light up when pressed
  * keys need to remain lighted up when elevator has not reached them

* make elevator move
  * it needs to go to the floor of the button that was pressed
  * it needs to have a priority queue
  * it needs to stop at floors inbetween the current floor and the target floor
  * it needs to wait 3 seconds at stopped floors

* display current floor
  * it should update as the floor moves