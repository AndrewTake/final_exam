const path = require("path");

const readCSV = require("./modules/csv_reader");
const getMonths = require("./modules/get_uin");
const mortgageCalc = require("./modules/m_calc");

const dataFile = path.join(__dirname, "mortgage_data.csv");

readCSV(dataFile)
  .then((mortgages) => {
    getMonths().then((months) => {
      mortgageCalc(mortgages, months).then((mString) => {
        console.log(mString);
      });
    });
  })
  .catch((err) => {
    console.error(err);
  });
