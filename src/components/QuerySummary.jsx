import ExportButton from './ExportButton';

function QuerySummary({
  rowCount,
  executionTime,
  resultsPerPage,
  handleResultsPerPageChange,
  handleNextPage,
  handlePrevPage,
  currentPage,
  totalPages,
  handlePageChange,
  csvData,
}) {
  const formattedExecutionTime = (executionTime / 1000).toFixed(2);
  return (
    <div className='bg-gray-50 px-4 py-2 text-sm flex justify-between items-center'>
      <div className='flex items-center'>
        <span className='mr-4'>Total Rows: {rowCount}</span>
        <span className='mr-4'>Execution Time: {formattedExecutionTime} s</span>
        <span className='mr-2'>Results per page: </span>
        <select value={resultsPerPage} onChange={handleResultsPerPageChange}>
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={50}>50</option>
        </select>

        <button
          className='flex justify-center items-center ml-4 select-none cursor-pointer'
          onClick={handlePrevPage}
          disabled={currentPage === 1}
        >
          <span className='material-symbols-outlined'>arrow_back</span>
        </button>
        <span className='mx-2'>Page</span>
        <input
          type='number'
          min={1}
          max={totalPages}
          value={currentPage}
          onChange={handlePageChange}
        />
        <span className='mr-2'>of {totalPages}</span>
        <button
          className='flex justify-center items-center select-none cursor-pointer'
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          <span className='material-symbols-outlined'>arrow_forward</span>
        </button>
      </div>
      <ExportButton data={csvData} />
    </div>
  );
}

export default QuerySummary;
