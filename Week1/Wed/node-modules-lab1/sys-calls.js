const fs = require('fs');

fs.writeFile('sample.txt', 'Hello, World!', (err) => {
    if (err) {
        console.error('Error writing to file:', err);
        return;
    }
    console.log('sameple.txt created.');
} ) ;

fs.readFile('sample.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
    } else {
        console.log('File content:', data);
    }
});

fs.writeFile('output.txt', 'This is some sample data.', (err) => {
  if (err) {
    console.error('Error writing file:', err);
  } else {
    console.log('Data written to output.txt');
  }
});

const os = require('os');

console.log("Platform: " + os.platform());
console.log("Hostname: " + os.hostname());
console.log("Architecture: " + os.arch());
console.log("CPUs:", os.cpus());