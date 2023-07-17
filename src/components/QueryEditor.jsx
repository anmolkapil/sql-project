import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs';
import 'prismjs/components/prism-sql';
import 'prismjs/themes/prism.css';

function QueryEditor({ query, setQuery }) {
  const handleQueryChange = (newQuery) => {
    setQuery(newQuery);
  };

  return (
    <div className='flex min-h-[200px] max-h-[200px] p-4 overflow-auto'>
      {/* Row Numbers */}
      <div className='mr-4'>
        <div className='flex flex-col'>
          {query.split('\n').map((_, index) => (
            <span key={index} className='text-gray-300 font-light'>
              {index + 1}
            </span>
          ))}
        </div>
      </div>
      {/* Code Editor */}
      <div className='flex-grow'>
        <Editor
          value={query}
          onValueChange={handleQueryChange}
          highlight={(code) => highlight(code, languages.sql, 'sql')}
        />
      </div>
    </div>
  );
}

export default QueryEditor;
