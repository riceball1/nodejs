// parsing args

import parseArgs from "minimist";
import Timer from 'tiny-timer';

const {time} = parseArgs(process.argv);


if (!time) {
    throw new Error("--time is required")
}

const timer = new Timer();

timer.on("tick", () => console.log("tick"))
timer.on("done", () => console.log("ticking completed!"))

timer.start(5000)

if (!parseInt(time)) {
    throw new Error("--time must a number")
}

// console.log(time)