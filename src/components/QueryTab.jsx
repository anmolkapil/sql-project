import { useContext, useState } from 'react';
import QueryPanel from './QueryPanel';
import { AppContext } from '../context/AppContext';

const QueryTab = () => {
  const { activeTab, setActiveTab } = useContext(AppContext);

  //Added two tabs initially for demo purpose
  const [tabs, setTabs] = useState([
    { id: 1, title: 'Tab 1' },
    { id: 2, title: 'Tab 2' },
  ]);
  const [tabCounter, setTabCounter] = useState(2);

  const handleAddTab = () => {
    if (tabs.length >= 20) {
      window.alert('Max Tab Limit Reached!!!');
      return;
    }
    const newTabId = tabCounter + 1;
    setTabCounter(newTabId);
    const newTabTitle = `Tab ${newTabId}`;
    setTabs((prevTabs) => [...prevTabs, { id: newTabId, title: newTabTitle }]);
    setActiveTab(newTabId); // Set the newly added tab as the active tab
  };

  const handleRemoveTab = (id) => {
    let newActiveTabId = null;
    const nextTabs = tabs.filter((tab) => {
      if (tab.id !== id) {
        return true;
      } else {
        const currentIndex = tabs.findIndex((tab) => tab.id === id);
        const prevTab = tabs[currentIndex - 1];
        const nextTab = tabs[currentIndex + 1];
        newActiveTabId = prevTab ? prevTab.id : nextTab ? nextTab.id : null;
        return false;
      }
    });

    setTabs(nextTabs);

    if (newActiveTabId) {
      setActiveTab(newActiveTabId);
    } else {
      setActiveTab(null);
    }
  };

  const handleTabClick = (id) => {
    setActiveTab(id);
  };

  return (
    <div className='flex flex-col w-full divide-y max-w-[calc(100vw-300px)]'>
      <div className='flex gap-x-1 max-w-[calc(100vw-300px)]'>
        <div className='flex overflow-auto'>
          {tabs.map((tab) => (
            <div
              key={tab.id}
              className={`mr-1 flex justify-center items-center min-w-[120px] p-3 cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-white-100 border-b-2 border-b-blue-500'
                  : 'bg-gray-200 border-b-2'
              }`}
              onClick={() => handleTabClick(tab.id)}
            >
              {tab.title}
              <button
                className='flex items-center justify-center ml-2 text-gray-400 hover:text-gray-900'
                onClick={(e) => {
                  e.stopPropagation();
                  handleRemoveTab(tab.id);
                }}
              >
                <span className='-mr-1 material-symbols-outlined'>close</span>
              </button>
            </div>
          ))}
        </div>
        <button
          className='min-w-[50px] h-[50px] bg-gray-200 text-blue-600 flex items-center justify-center'
          onClick={handleAddTab}
        >
          <span className='material-symbols-outlined'>add</span>
        </button>
      </div>

      {tabs.map((tab) => (
        <QueryPanel key={tab.id} tabId={tab.id} />
      ))}
    </div>
  );
};

export default QueryTab;
