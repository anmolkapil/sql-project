import { useContext, useEffect, useState } from 'react';
import Papa from 'papaparse';

import QueryRunner from './QueryRunner';
import QueryEditor from './QueryEditor';
import QueryResults from './QueryResults';
import { AppContext } from '../context/AppContext';

function QueryPanel({ tabId }) {
  const { savedQueries, selectedQuery, activeTab } = useContext(AppContext);
  //Setting Demo code Snippet for Even and Odd Tabs
  const codeSnippet =
    tabId % 2 ? 'SELECT * FROM customers' : 'SELECT * FROM order_details';
  const [queryName, setQueryName] = useState('');
  const [query, setQuery] = useState(codeSnippet);
  const [loading, setLoading] = useState(false);
  const [csvData, setCSVData] = useState(null);
  const [executionTime, setExecutionTime] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const isActiveTab = activeTab === tabId;

  useEffect(() => {
    if (selectedQuery && savedQueries[selectedQuery] && isActiveTab) {
      setQueryName(selectedQuery);
      setQuery(savedQueries[selectedQuery]);
    }
  }, [selectedQuery, savedQueries, isActiveTab]);

  const handleRunQuery = async () => {
    setLoading(true);

    try {
      setCurrentPage(1);
      const startTime = performance.now();
      //Demo data for Even and Odd Tabs
      const response = await fetch(
        tabId % 2 ? 'customers.csv' : 'order_details.csv'
      );
      const csvText = await response.text();

      Papa.parse(csvText, {
        header: true,
        complete: (results) => {
          setCSVData(results.data);
          setLoading(false);
          const endTime = performance.now();
          setExecutionTime(endTime - startTime);
        },
        error: (error) => {
          console.error('Error parsing CSV:', error);
          setLoading(false);
          setExecutionTime(0);
        },
      });
    } catch (error) {
      console.error('Error fetching CSV:', error);
      setLoading(false);
      setExecutionTime(0);
    }
  };

  return isActiveTab ? (
    <>
      <QueryRunner
        onRunQuery={handleRunQuery}
        queryName={queryName}
        setQueryName={setQueryName}
        query={query}
      />
      <QueryEditor query={query} setQuery={setQuery} />
      <QueryResults
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        csvData={csvData}
        isLoading={loading}
        executionTime={executionTime}
      />
    </>
  ) : null;
}
export default QueryPanel;
