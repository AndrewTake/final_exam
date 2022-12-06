const readlineSync = require("readline-sync");

const getMonths = () => {
  return new Promise((resolve, reject) => {
    let valid = false;
    let uin = null;
    while (!valid) {
      uin = parseInt(
        readlineSync.question(
          "How many months would you like to calculate (0 to exit)? "
        )
      );
      if (uin === uin && !isNaN(uin) && 0 < uin && uin < 241) {
        valid = true;
      } else if (uin === uin && !isNaN(uin) && uin === 0) {
        process.exit(0);
      } else {
        console.log(
          "Please try again, value must be a number between 1 and 240, or 0 to exit."
        );
      }
    }
    resolve(uin);
  });
};

module.exports = getMonths;
