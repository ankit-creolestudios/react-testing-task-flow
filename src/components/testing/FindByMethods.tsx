import React, { useState } from 'react';

const FindByMethods: React.FC = () => {
  const [data, setData] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchData = () => {
    setLoading(true);
    setData(null);
    setTimeout(() => {
      setData('Async Data Loaded Successfully!');
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="p-6 space-y-4 border rounded-xl bg-card text-card-foreground shadow-sm mt-6">
      <h2 className="text-2xl font-bold tracking-tight">FindBy Methods Demo</h2>
      <p className="text-muted-foreground">
        Use <code>findBy*</code> for elements that appear asynchronously (e.g., after an API call). 
        It returns a Promise and retries until the element appears or times out.
      </p>

      <button 
        onClick={fetchData}
        disabled={loading}
        className="px-4 py-2 bg-primary text-primary-foreground rounded-md disabled:opacity-50"
      >
        {loading ? 'Fetching...' : 'Fetch Async Data'}
      </button>

      <div className="mt-4 min-h-[3rem] flex items-center justify-center border-t pt-4">
        {loading && <p aria-busy="true">Loading...</p>}
        {data && (
          <div role="alert" className="text-green-600 font-semibold animate-in fade-in duration-500">
            {data}
          </div>
        )}
      </div>
    </div>
  );
};

export default FindByMethods;
