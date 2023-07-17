import { useState, useContext } from 'react';

import { AppContext } from '../context/AppContext';

function QueryRunner({ queryName, setQueryName, query, onRunQuery }) {
  const { savedQueries, setSavedQueries } = useContext(AppContext);
  const [warning, setWarning] = useState(false);

  const handleSaveQuery = () => {
    //Show Warning if Name Field is Empty
    if (queryName === '') {
      setWarning(true);
      setTimeout(() => {
        setWarning(false);
      }, 2000);
      return;
    }
    const newSavedQueries = { ...savedQueries, [queryName]: query };
    setSavedQueries(newSavedQueries);
    localStorage.setItem('savedQueries', JSON.stringify(newSavedQueries));
  };

  return (
    <div className='bg-gray-50 flex justify-between items-center px-4 py-2'>
      <div>
        <input
          className='placeholder:text-sm focus:outline-blue-500 px-4 py-2 rounded-lg w-[300px] border'
          placeholder='Enter query name...'
          spellCheck='false'
          value={queryName}
          onChange={(e) => setQueryName(e.target.value)}
        />
        {warning && (
          <span className='text-sm text-red-500 ml-4'>
            Query Name Cannot be Empty
          </span>
        )}
      </div>
      <div className='flex gap-x-4'>
        <button
          onClick={onRunQuery}
          className='flex justify-center items-center bg-green-500 hover:bg-green-600 active:bg-green-700 rounded-lg text-white px-5 py-2 gap-1'
        >
          <span className='-ml-2 material-symbols-outlined'>play_arrow</span>
          Run Query
        </button>
        <button
          onClick={handleSaveQuery}
          className='hover:bg-gray-200 active:bg-gray-300 flex justify-center items-center border-solid border border-gray-500 rounded-lg px-5 py-2 gap-1'
        >
          <span className='material-symbols-outlined'>save</span>
          Save Query
        </button>
      </div>
    </div>
  );
}
export default QueryRunner;
