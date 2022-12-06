const fs = require("fs").promises;

const readCSV = (file) => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, "utf-8")
      .then((data) => {
        let split = data.split(/\r?\n/);
        for (const i in split) {
          split[i] = split[i].split(",");
        }
        resolve(split);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

module.exports = readCSV;
