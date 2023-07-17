import TableCollection from './TableCollection';
import SavedQueries from './SavedQueries';

function Sidebar() {
  const tables = [
    {
      tableName: 'customers',
      columns: [
        { name: 'customerID', type: 'string' },
        { name: 'companyName', type: 'string' },
        { name: 'contactName', type: 'string' },
        { name: 'contactTitle', type: 'string' },
        { name: 'address', type: 'string' },
        { name: 'city', type: 'string' },
        { name: 'region', type: 'string' },
        { name: 'postalCode', type: 'integer' },
        { name: 'country', type: 'string' },
        { name: 'phone', type: 'integer' },
        { name: 'fax', type: 'integer' },
      ],
    },
    {
      tableName: 'order_details',
      columns: [
        { name: 'orderID', type: 'integer' },
        { name: 'productID', type: 'integer' },
        { name: 'unitPrice', type: 'integer' },
        { name: 'quantity', type: 'integer' },
        { name: 'discount', type: 'integer' },
      ],
    },
  ];

  return (
    <div className='flex flex-col bg-gray-50 min-w-[300px] px-4 divide-y max-h-screen overflow-auto'>
      {/* Database Information */}
      <div className='py-4'>
        <div className='flex items-center justify-center gap-3 font-bold text-center bg-white border rounded-lg p-4 text-xl text-gray-950/70'>
          <span className='-ml-2 material-symbols-outlined'>database</span>
          Demo Database
        </div>
      </div>

      {/* Table Collection */}
      <div className='py-4'>
        <h2 className='font-bold text-gray-500'>TABLES</h2>
        {tables.map((table, index) => (
          <TableCollection key={index} table={table} />
        ))}
      </div>

      {/* Saved Queries */}
      <div className='py-4'>
        <h2 className='font-bold text-gray-500'>SAVED QUERIES</h2>
        <SavedQueries />
      </div>
    </div>
  );
}

export default Sidebar;
