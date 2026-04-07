import React, { useState } from 'react';

const QueryByMethods: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="p-6 space-y-4 border rounded-xl bg-card text-card-foreground shadow-sm mt-6">
      <h2 className="text-2xl font-bold tracking-tight">QueryBy Methods Demo</h2>
      <p className="text-muted-foreground">
        Use <code>queryBy*</code> when an element might not be in the DOM (e.g., verifying something is removed).
      </p>

      <div className="flex items-center space-x-4">
        <button 
          onClick={() => setIsVisible(!isVisible)}
          className="px-4 py-2 border rounded-md hover:bg-accent transition-colors"
        >
          {isVisible ? 'Hide Content' : 'Show Content'}
        </button>

        {isVisible && (
          <div id="optional-content" className="p-3 bg-secondary text-secondary-foreground rounded-md">
            I am conditionally visible!
          </div>
        )}
      </div>

      {!isVisible && (
        <p className="text-sm italic text-destructive">
          The secret content is currently hidden.
        </p>
      )}
    </div>
  );
};

export default QueryByMethods;
