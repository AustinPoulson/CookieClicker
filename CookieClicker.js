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
    const startTime = Date.now();
    let currentTime = Date.now();
    console.log('start: ', startTime);
    timer = setInterval(() => {
      robot.mouseClick('left')
      clicks = clicks + 1;
      currentTime = Date.now();
      console.log('click: ', clicks, ' clicks/sec: ', (clicks / ((currentTime - startTime) / 1000)));
    }, 1);
  }

  if (e.state.toLowerCase() === 'down' && e.name.toLowerCase() === 'c') {
    clearInterval(timer);
    console.log('stop');
    process.exit();
  }
})