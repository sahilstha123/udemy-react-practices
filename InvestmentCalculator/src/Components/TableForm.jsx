import React, { useState } from "react";
import { formatter } from "../util/investment";

const TableForm = ({ results, inputs }) => {
  const { InitialInvestment } = inputs;
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;

  // Pagination calculations
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = results.slice(indexOfFirstRow, indexOfLastRow);
  const totalPages = Math.ceil(results.length / rowsPerPage);

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };
  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  return (
    <section className="container mx-auto w-full md:w-10/12 lg:w-8/12 xl:w-7/12 mt-8 p-4">
      <div className="overflow-x-auto">
        <table className="min-w-[600px] w-full table-auto ">
          <thead className="bg-green-100">
            <tr className="text-green-900 text-sm sm:text-base">
              <th className="py-2 px-3 ">Year</th>
              <th className="py-2 px-3 ">Total Amount</th>
              <th className="py-2 px-3 ">Interest (Year)</th>
              <th className="py-2 px-3 ">Total Interest</th>
              <th className="py-2 px-3 ">Invested Capital</th>
            </tr>
          </thead>
          <tbody>
            {currentRows.map((item, index) => {
              const totalInterest =
                Number(item.valueEndOfYear) -
                Number(item.annualInvestment) * item.year -
                Number(InitialInvestment);

              const totalAmountInvested = Number(item.valueEndOfYear) - totalInterest;

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

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="mt-4 flex flex-wrap justify-center gap-3">
          <button
            onClick={handlePrev}
            disabled={currentPage === 1}
            className="px-3 py-1 bg-green-200 rounded cursor-pointer hover:bg-green-400 disabled:opacity-50"
          >
            Previous
          </button>
          <span className="self-center">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className="px-3 py-1 bg-green-200 rounded cursor-pointer hover:bg-green-400 disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}
    </section>
  );
};

export default TableForm;
