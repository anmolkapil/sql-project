import { useState } from 'react';

import QuerySummary from './QuerySummary';
import Table from './Table';

function QueryResults({
  csvData,
  isLoading,
  executionTime,
  currentPage,
  setCurrentPage,
}) {
  const [resultsPerPage, setResultsPerPage] = useState(10);

  const totalPages = csvData ? Math.ceil(csvData.length / resultsPerPage) : 0;
  const currentResults = csvData
    ? csvData.slice(
        (currentPage - 1) * resultsPerPage,
        currentPage * resultsPerPage
      )
    : null;

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePageChange = (event) => {
    const value = parseInt(event.target.value, 10);
    // Ensure the entered page number is within the valid range
    if (value >= 1 && value <= totalPages) {
      setCurrentPage(value);
    }
  };

  const handleResultsPerPageChange = (event) => {
    const value = parseInt(event.target.value, 10);
    setResultsPerPage(value);
    setCurrentPage(1); // Reset the current page when results per page changes
  };

  return (
    <>
      {csvData && !isLoading && (
        <QuerySummary
          rowCount={csvData.length}
          executionTime={executionTime}
          handleResultsPerPageChange={handleResultsPerPageChange}
          handleNextPage={handleNextPage}
          handlePrevPage={handlePrevPage}
          currentPage={currentPage}
          totalPages={totalPages}
          handlePageChange={handlePageChange}
          csvData={csvData}
        />
      )}

      <div className='flex-grow overflow-auto'>
        <Table
          csvData={currentResults}
          isLoading={isLoading}
          currentPage={currentPage}
          resultsPerPage={resultsPerPage}
        />
      </div>
    </>
  );
}

export default QueryResults;
