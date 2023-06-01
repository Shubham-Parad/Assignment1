const fs = require("fs/promises");

const myFileWriter = async (fileName, fileContent) => {
  // write code here
  // dont chnage function name
  try {
    await fs.writeFile(fileName, fileContent);
    console.log(`File ${fileName} has been created!`)
  } catch (err) {
    console.log(err);
  }
};

const myFileReader = async (fileName) => {
  // write code here
  // dont chnage function name
  try {
    const data = await fs.readFile(fileName);
    console.log(`File ${fileName} contains ${data}`);
  } catch (err) {
    console.log(err)
  }
};

const myFileUpdater = async (fileName, fileContent) => {
  // write code here
  // dont chnage function name
  try {
    await fs.appendFile(fileName, fileContent);
    console.log(`File ${fileName} has been Updated`);
  } catch (err) {
    console.log(err)
  }
};

const myFileDeleter = async (fileName) => {
  // write code here
  // dont chnage function name
  try {
    await fs.unlink(fileName);
    console.log(`File ${fileName} has been deleted!`);
  } catch (err) {
    console.log(err)
  }
};

myFileWriter('example.txt', 'This is an example file!')
  .then(() => myFileReader('example.txt'))
  .then(() => myFileUpdater('example.txt', ' And here is some new content!'))
  .then(() => myFileReader('example.txt'))
  .then(() => myFileDeleter('example.txt'));

module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter };
