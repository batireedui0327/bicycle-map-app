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
  } else {
    switch (modifier) {
      case 'left':
        audio = new Audio(leftAudio);
        break;
      case 'right':
        audio = new Audio(rightAudio);
        break;
      case 'slight left':
        audio = new Audio(slightLeftAudio);
        break;
      case 'slight right':
        audio = new Audio(slightRightAudio);
        break;
      case 'sharp left':
        audio = new Audio(sharpLeftAudio);
        break;
      case 'sharp right':
        audio = new Audio(sharpRightAudio);
        break;
      default:
        audio = new Audio(straightAudio);
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
