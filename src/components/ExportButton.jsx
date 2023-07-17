import Papa from 'papaparse';

//Export Table Data to CSV
const ExportButton = ({ data }) => {
  const exportCSV = () => {
    const csv = Papa.unparse(data);
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', 'data.csv');
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
      className='flex gap-1 justify-center items-center bg-white hover:bg-gray-200 active:bg-gray-300 border-solid border border-gray-500 rounded-lg px-5 py-2 text-sm'
      onClick={exportCSV}
    >
      <span className='-ml-2 material-symbols-outlined'>upgrade</span>
      Export CSV
    </button>
  );
};

export default ExportButton;
