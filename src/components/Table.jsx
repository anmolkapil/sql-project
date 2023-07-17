function Table({ csvData, isLoading, currentPage, resultsPerPage }) {
  if (isLoading) {
    return (
      <div className='flex items-center justify-center h-full text-lg'>
        Loading...
      </div>
    );
  }

  if (!csvData) {
    return (
      <div className='flex items-center justify-center h-full text-lg'>
        Run Query to see Results
      </div>
    );
  }

  return (
    <table className='border-collapse border border-slate-400 border-hidden text-sm table-auto'>
      <thead>
        <tr className='bg-gray-100'>
          {/* Add row number header */}
          <th className='p-2 border border-gray-300'>#</th>
          {/* Render table headers */}
          {Object.keys(csvData[0]).map((header, index) => (
            <th className='p-2 border border-gray-300' key={index}>
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {/* Render table rows */}
        {csvData.map((row, rowIndex) => (
          <tr className='even:bg-slate-50' key={rowIndex}>
            {/* Render row number */}
            <td className='bg-gray-100 p-2 border border-gray-300'>
              {rowIndex + 1 + (currentPage - 1) * resultsPerPage}
            </td>
            {Object.values(row).map((value, cellIndex) => (
              <td className='p-2 border border-gray-300' key={cellIndex}>
                {value}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
