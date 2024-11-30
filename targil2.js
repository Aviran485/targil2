const fs = require('fs');
const path = require('path');

//arr of file names
const inputFiles = [
    'file1.txt', 'file2.txt', 'file3.txt',
    'file4.txt', 'file5.txt', 'file6.txt',
    'file7.txt', 'file8.txt', 'file9.txt', 'file10.txt'
];

//path to the dir containing the files
const directoryPath = 'C:\\Users\\aviran\\Desktop\\alsu\\targil 2 txt';

//output file name
const outputFile = 'output.txt';

//create a new output file
fs.writeFileSync(outputFile, '', 'utf8');

//loop through each file in the input array
for (let i = 0; i < inputFiles.length; i++) {
    const filePath = path.join(directoryPath, inputFiles[i]); //full path of the current file
    const linesToCopy = i + 1; //number of lines to copy

    const content = fs.readFileSync(filePath, 'utf8'); //read file content
    const lines = content.split('\n'); //split into lines

    if (lines.length >= linesToCopy) {
        fs.appendFileSync(outputFile, lines.slice(0, linesToCopy).join('\n') + '\n', 'utf8'); //write lines
    }
}

console.log(`created successfully ${outputFile}`);
