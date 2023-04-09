const fs = require("fs");
const commissionCalculation = require("./modules/app");

if (process.argv.length < 3) {
  console.log("Please pass cmd line argument for input file");
  return;
}

fs.readFile(`./${process.argv[2]}`, "utf8", (err, jsonString) => {
  if (err) {
    console.log("Input file read failed: ", err);
    return;
  }

  const inputJson = JSON.parse(jsonString);
  commissionCalculation(inputJson);
});
