import rightAudio from '../../audio/right.mp3';
import leftAudio from '../../audio/left.mp3';
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
    console.log('Played arrive audio');
    audio = new Audio(arrivalAudio);
  } else if (modifier.includes('right')) {
    console.log('Played turn right audio');
    audio = new Audio(rightAudio);
  } else if (modifier.includes('left')) {
    console.log('Played turn left audio');
    audio = new Audio(leftAudio);
  } else {
    console.log('Played go forward audio');
    audio = new Audio(straightAudio);
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
