import React from 'react';

const GetByMethods: React.FC = () => {
  return (
    <div className="p-6 space-y-4 border rounded-xl bg-card text-card-foreground shadow-sm">
      <h2 className="text-2xl font-bold tracking-tight">GetBy Methods Demo</h2>
      <p className="text-muted-foreground">
        These elements are expected to be present on the initial render. 
        <code>getBy*</code> will throw an error if not found.
      </p>
      
      <div className="space-y-2">
        <label htmlFor="username" className="block text-sm font-medium">Username</label>
        <input 
          id="username" 
          type="text" 
          placeholder="Enter username"
          className="w-full px-3 py-2 border rounded-md"
        />
      </div>

      <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:opacity-90 transition-opacity">
        Submit
      </button>

      <div role="status" aria-label="Loading complete">
        Done!
      </div>
    </div>
  );
};

export default GetByMethods;
