# Elevator

We're going up!

This project is a simple representation of an elevator, but it's the best example of how you can expect my code to look if I'm writing something do be deployed into production.
I'm doing my best to have a few dependencies as I can (e.g. the algorithm doesn't know about the size of the floors, nor the number).

The styling can all be edited by a designer using css who doesn't know anything about JavaScript or coding, and they won't break it.

The components are modularized, and work independent of each other.

The variables and functions are well-named (descriptive).


The exception to what I would do in a real-world app is right now I am refactoring some of it, all on the master branch. There are a few known bugs that have been introduced in my refactoring (e.g. spamming a lot of different keys makes the elevator glitch out), but the reason I'm doing this on the master branch instead of making a seperate branch is because I want the process to be seen every step of the way, without having to dig around.


Some of the shortcommings that I'm going to get around to fixing is the prop-drilling that's currently happening on the main App.tsx file. It is messy, but I have a good direction to solve it (thanks to a senior dev friend).


## Getting started

The project is [deployed here](https://ryans-elevator.netlify.app/).

To get started with the development version, just run npm start.

## difficulties

getting the final key to turn off when the elevator arrived was the biggest pain. It took way too much time

I tried implementing a refresh by putting a boolean state on the app module. Whenever the elevator queue was empty, it was to refresh the key components after the three-second waiting period.

The problem came in that since useState is asynchronous, toggling it was sometimes useless, because it was trying to set the state to the same boolean.

I fixed it by setting the refresh state to be an object literal. Since object literals always have a new spot in memory, assigning the refresh state to a new object literaly will always count as a new state, no mater how much of an asynchronous nightmare it may become.

## Screenshots

<img src="https://i.imgur.com/a9BunTL.png">


## MVP Project requirements

* create building with floors
  * display floor number on each floor

* create elevator
  * it has to behave as a real elevator would.

* create keypad
  * keys need to light up when pressed
  * keys need to remain lighted up when elevator has not reached them

* make elevator move
  * it needs to go to the floor of the button that was pressed
  * it needs to have a priority queue
  * it needs to stop at floors inbetween the current floor and the target floor
  * it needs to wait at stopped floors

* display current floor
  * it should update as the floor moves
