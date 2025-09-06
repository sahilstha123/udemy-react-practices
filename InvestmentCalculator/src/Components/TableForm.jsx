import React from "react";

const TableForm = () => {
  return (
    <section className="container mx-auto w-5/12 mt-8 bg-blue-700 p-4">
      <div>
        <table className="w-full">
          <tr className="gap-4">
            <th>Year</th>
            <th>Investment value</th>
            <th>Interest(Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </table>
      </div>
    </section>
  );
};

export default TableForm;
