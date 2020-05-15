#!/usr/bin/env node
'use strict';

console.log(`Watching '${process.cwd()}' for changes..`);

// Plays a beep when a file changes in the current directory
require("fs").watch('.', (event, file) => {
    console.log(`${event}, ${file}`);
    process.stdout.write('\x07');
});
