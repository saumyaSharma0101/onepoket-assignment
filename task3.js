const fs = require("fs");

const fileName = "data.txt";

fs.readFile(fileName, "utf8", (err, data) => {
  if (err) {
    console.error(`Error reading file ${fileName}: ${err.message}`);
  } else {
    const wordCount = countWords(data);
    console.log(`Total word count in "${fileName}": ${wordCount}`);
  }
});

function countWords(data) {
  //   const words = data.match(/\b\w+\b/g);
  //   const wordCount = words ? words.length : 0;
  //   return wordCount;
  //   const words = text.split(/\s+/);
  //   return words.length;
  const words = data.trim().split(/\s+/);
  return words.filter((word) => word !== "").length;
}
