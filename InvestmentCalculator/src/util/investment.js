// investmet calculator helper function
export function calculateInvestmentResults({
  initialInvestment,
  annualInvestment,
  expectedReturn,
  duration,
}) {
  const annualdata = [];
  let investmentValue = initialInvestment;
  for (i = 0; i < duration; i++) {
    const interestEarnedInYear = investmentValue * (expectedReturn / 100);
    investmentValue += interestEarnedInYear + annualInvestment;
    annualdata.push({
      year: i + 1,
      interest: interestEarnedInYear,
      valueEndOfYear: investmentValue,
      annualInvestment: annualInvestment,
    });
  }
  return annualdata;
}

// currency formatter in Nepalese Rupees
export const formatter = new Intl.NumberFormat("en-NP", {
  style: "currency",
  currency: "NP",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});
