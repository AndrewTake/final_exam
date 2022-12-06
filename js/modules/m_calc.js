const calcPayments = (mortgage) => {
  const monthlyInterest = mortgage[1] * mortgage[0];
  const paymentToPrincipal = mortgage[2] - monthlyInterest;
  const newMortgageBalance = mortgage[0] - paymentToPrincipal;
  return [newMortgageBalance, paymentToPrincipal, monthlyInterest];
};

const formatter = new Intl.NumberFormat("en-us", {
  style: "currency",
  currency: "USD",
});

const mortgageCalc = (mortgages, months) => {
  return new Promise((resolve, reject) => {
    let mString = "";
    for (let i = 0; i < mortgages.length; i++) {
      mString += `Mortgage ${i + 1}\n\tStarting Total: ${formatter.format(
        mortgages[i][0]
      )}\n\tMonthly Payment: ${formatter.format(
        mortgages[i][2]
      )}\n\tMonthly Interest: ${mortgages[i][1]}\n\n`;
    }
    for (let yIndex = 0; yIndex < months; yIndex++) {
      mString += `*** Month ${yIndex + 1} ***\n`;
      for (let mIndex = 0; mIndex < mortgages.length; mIndex++) {
        const newVals = calcPayments(mortgages[mIndex]);
        mString += `Mortgage${
          mIndex + 1
        }\n\tRemaining Balance: ${formatter.format(
          newVals[0]
        )}\n\tPayment to Principal: ${formatter.format(
          newVals[1]
        )}\n\tPayment to Interest: ${formatter.format(newVals[2])}\n\n`;
        mortgages[mIndex][0] = newVals[0];
      }
    }
    resolve(mString);
  });
};

module.exports = mortgageCalc;
