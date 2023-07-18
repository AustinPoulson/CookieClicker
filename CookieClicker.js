import robot from 'robotjs';
import {GlobalKeyboardListener} from "node-global-key-listener";

const keyboard = new GlobalKeyboardListener();

let timer;
let clicks = 0;

await keyboard.addListener((e, down) => {
  const isCtrlActive = (down["LEFT CTRL"] || down["RIGHT CTRL"])

  if (!isCtrlActive) {
    return;
  }

  if (e.state.toLowerCase() === 'down' && e.name.toLowerCase() === 's') {
    console.log('start');
    timer = setInterval(() => {
      robot.mouseClick('left'), 1
      clicks = clicks + 1;
      console.log('click: ', clicks);
    });
  }

  if (e.state.toLowerCase() === 'down' && e.name.toLowerCase() === 'c') {
    clearInterval(timer);
    console.log('stop');
    process.exit();
  }
})