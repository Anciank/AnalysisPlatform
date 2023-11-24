// Result.tsx

import React from 'react';
import "./Result.css"

interface ResultProps {
  result: string
}

const Result: React.FC<ResultProps> = ({ result }) => {
  return (
    <div className='Result'>
      <h3>Query Result:</h3>
      <pre>{JSON.stringify(result, null, 2)}</pre>
    </div>
  );
};

export default Result;
