import React from 'react'

const CalculatorForm = ({handleOnChange, inputs}) => {
  return (
     <main className="w-11/12 md:w-8/12 mt-2 lg:w-6/12 xl:w-5/12 bg-[var(--secondary-color)] container mx-auto rounded-lg text-gray-200 shadow-lg p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="flex flex-col">
          <label htmlFor="initial" className="label-field">Initial Investment</label>
          <input
            id="initial"
            type="text"
            className="input-field"
            name="InitialInvestment"
            value={inputs.InitialInvestment}
            onChange={handleOnChange}
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="annual" className="label-field">Annual Investment</label>
          <input
            id="annual"
            type="text"
            className="input-field"
            name="AnnualInvestment"
            value={inputs.AnnualInvestment}
            onChange={handleOnChange}
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="return" className="label-field">Expected Return (%)</label>
          <input
            id="return"
            type="text"
            className="input-field"
            name="ExpectedReturn"
            value={inputs.ExpectedReturn}
            onChange={handleOnChange}
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="duration" className="label-field">Duration (Years)</label>
          <input
            id="duration"
            type="number"
            min="1"
            max="50"
            className="input-field"
            name="Duration"
            value={inputs.Duration}
            onChange={handleOnChange}
          />
        </div>
      </div>
    </main>
  )
}

export default CalculatorForm