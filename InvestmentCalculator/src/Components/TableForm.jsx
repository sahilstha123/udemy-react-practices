import React, { useState } from "react";
import { formatter } from "../util/investment";

const TableForm = ({ results, inputs }) => {
  const { InitialInvestment } = inputs;
  
 

  return (
    <section className="container mx-auto w-full md:w-8/12 lg:w-6/12 xl:w-9/12 mt-8 p-4">
      <div className="overflow-x-auto">
        <table className="w-full table-auto ">
          <thead className="bg-green-100">
            <tr className="text-green-900 text-sm sm:text-base">
              <th className="py-2 px-3 ">Year</th>
              <th className="py-2 px-3 ">Total Amount</th>
              <th className="py-2 px-3 ">Interest(Year)</th>
              <th className="py-2 px-3 ">Total Interest</th>
              <th className="py-2 px-3 ">Invested Capital</th>
            </tr>
          </thead>
          <tbody>
            {results.map((item, index) => {
              const totalInterest =
                Number(item.valueEndOfYear) -
                Number(item.annualInvestment) * item.year -
                Number(InitialInvestment);

              const totalAmountInvested =
                Number(item.valueEndOfYear) - totalInterest;

              return (
                <tr key={index} className="text-center text-sm sm:text-base">
                  <td className="py-1 px-2 ">{item.year}</td>
                  <td className="py-1 px-2 ">{formatter.format(item.valueEndOfYear)}</td>
                  <td className="py-1 px-2 ">{formatter.format(item.interest)}</td>
                  <td className="py-1 px-2 ">{formatter.format(totalInterest)}</td>
                  <td className="py-1 px-2 ">{formatter.format(totalAmountInvested)}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

     
    </section>
  );
};

export default TableForm;
