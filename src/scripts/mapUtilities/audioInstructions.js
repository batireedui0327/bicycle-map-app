import rightAudio from '../../audio/right.mp3';
import slightRightAudio from '../../audio/slight-right.mp3';
import sharpRightAudio from '../../audio/sharp-right.mp3';
import leftAudio from '../../audio/left.mp3';
import slightLeftAudio from '../../audio/slight-left.mp3';
import sharpLeftAudio from '../../audio/sharp-left.mp3';
import straightAudio from '../../audio/straight.mp3';
import arrivalAudio from '../../audio/arrival.mp3';

let lastLocation;

export function resetAudioHistory() {
  lastLocation = '';
}

export function playAudioDirection(allDirections) {
  const currentDirection = allDirections[1];
  console.log(`current direction: ${JSON.stringify(currentDirection)}`);
  console.log(`last location: ${JSON.stringify(lastLocation)}`);
  console.log(`current location: ${JSON.stringify(currentDirection.location)}`);
  if (isValid(currentDirection)) {
    lastLocation = currentDirection.location;
    playAudio(currentDirection);
  }
}

function playAudio(currentDirection) {
  const { type, modifier } = currentDirection;
  let audio;

  if (type === 'arrive') {
    audio = new Audio(arrivalAudio);
    console.log('arrival audio played');
  } else {
    switch (modifier) {
      case 'left':
        audio = new Audio(leftAudio);
        console.log('left audio played');
        break;
      case 'right':
        audio = new Audio(rightAudio);
        console.log('right audio played');
        break;
      case 'slight left':
        audio = new Audio(slightLeftAudio);
        console.log('slight right audio played');
        break;
      case 'slight right':
        audio = new Audio(slightRightAudio);
        console.log('slight left audio played');
        break;
      case 'sharp left':
        audio = new Audio(sharpLeftAudio);
        console.log('sharp left audio played');
        break;
      case 'sharp right':
        audio = new Audio(sharpRightAudio);
        console.log('sharp right audio played');
        break;
      default:
        audio = new Audio(straightAudio);
        console.log('straight audio played');
        break;
    }
  }
  audio.play();
}

function isValid(direction) {
  if (
    direction.distance <= 50 &&
    JSON.stringify(direction.location) !== JSON.stringify(lastLocation) &&
    direction.type !== 'depart'
  ) {
    return true;
  }
  return false;
}
