const { writeFileSync } = require("fs");

const fileWriteHandler = (fileWriteHandler) => {
  const path = "modules/store/store.json";

  try {
    writeFileSync(path, JSON.stringify(fileWriteHandler, null, 2), "utf8");
  } catch (error) {
    console.log("An error has occurred when writing the file: ", error);
  }
};

module.exports = fileWriteHandler;
