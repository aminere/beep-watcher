
// Plays a beep when a file changes in the current directory
require("fs").watch('.', (event, file) => {
    console.log(`${event}, ${file}`);
    process.stdout.write('\x07');
});
