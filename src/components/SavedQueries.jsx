import { useContext } from 'react';

import { AppContext } from '../context/AppContext';

function SavedQueries() {
  const { savedQueries, setSavedQueries, setSelectedQuery } =
    useContext(AppContext);

  const handleDeleteQuery = (queryName) => {
    // eslint-disable-next-line no-unused-vars
    const { [queryName]: _, ...remainingQueries } = savedQueries;
    setSavedQueries(remainingQueries);
    localStorage.setItem('savedQueries', JSON.stringify(remainingQueries));
  };

  return (
    <ul className='overflow-auto'>
      {Object.keys(savedQueries).map((queryName, index) => (
        <li
          className='my-2 cursor-pointer border bg-white hover:bg-gray-100 active:bg-gray-200 rounded-lg'
          key={index}
        >
          <div className='flex items-center justify-between'>
            <div
              onClick={() => setSelectedQuery(queryName)}
              className='grow mr-1 px-4 py-3 leading-none'
            >
              <span>{queryName}</span>
            </div>
            <div
              onClick={() => handleDeleteQuery(queryName)}
              className='select-none mr-2 rounded-full hover:bg-gray-300 w-8 h-8 flex items-center justify-center'
            >
              <span className='material-symbols-outlined'>delete_forever</span>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default SavedQueries;
