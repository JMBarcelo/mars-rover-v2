// Rover Object Goes Here
let rover = {
  direction: 'N',
  X: 0,
  Y: 0
};
let direction = rover.direction;
let X = rover.X;
let Y = rover.Y;
let travelLog = [X, Y];
console.log(travelLog);
// ======================

// ======================
function turnLeft(rover){
  console.log("turnLeft was called!");
  switch (direction){
    case 'N':
      direction = 'W';
      break;
    case 'W':
      direction = 'S';
      break;
    case 'S':
      direction = 'E';
      break;
    case 'E':
      direction = 'N';
      break;
  }
  // console.log(direction);
}

function turnRight(rover){
  console.log("turnRight was called!");
  switch (direction){
    case 'N':
      direction = 'E';
      break;
    case 'E':
      direction = 'S';
      break;
    case 'S':
      direction = 'W';
      break;
    case 'W':
      direction = 'N';
      break;
  }
  console.log(direction);
}

function moveForward(rover){
  console.log("moveForward was called");
  switch (direction){
    case 'N':
      Y += 1;
      break;
    case 'E':
      X += 1;
      break;
    case 'S':
      Y -= 1;
      break;
    case 'W':
      X -= 1;
      break;
  }
  if (X < 0 || Y < 0 || X > 9 || Y > 9) {
    console.log("Position outside the grid! Canceling order.");
    moveBackward(direction);
  }
  else {
    console.log(X, Y);
    /*travelLog = travelLog.push(X);
    travelLog = travelLog.push(Y);    
    console.log(travelLog);  */
  }
}

function moveBackward(rover){
  console.log("moveBackward was called");
  switch (direction){
    case 'N':
      Y -= 1;
      break;
    case 'E':
      X -= 1;
      break;
    case 'S':
      Y += 1;
      break;
    case 'W':
      X += 1;
      break;
  }
  if (X < 0 || Y < 0 || X > 9 || Y > 9) {
    console.log("Position outside the grid! Canceling order.");
    moveForward(direction);
  }
  else {
    console.log(X, Y);
    /*travelLog = travelLog.push(X);
    travelLog = travelLog.push(Y);    
    console.log(travelLog);  */
  }
}

function start(rover){
  let commands = prompt ("Enter below your list of instructions." + "\n\n" + "REMEMBER, enter only the first letter of each instruction: (f)orward, (b)ackward, (r)ight, (l)eft: ");
  for (var i = 0; i < commands.length; i++) {
    switch (commands.charAt(i)){
      case 'f': case 'F':
        moveForward();
        break;
      case 'b': case 'B':
        moveBackward();
        break;
      case 'r': case 'R':
        turnRight();
        break;
      case 'l': case 'L':
        turnLeft();
        break;
    }
  }
  console.log(travelLog);
}