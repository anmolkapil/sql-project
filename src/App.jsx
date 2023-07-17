import './index.css';

import Sidebar from './components/Sidebar';
import QueryTab from './components/QueryTab';

function App() {
  return (
    <main className='flex h-screen divide-x'>
      <Sidebar />
      <QueryTab />
    </main>
  );
}

export default App;
