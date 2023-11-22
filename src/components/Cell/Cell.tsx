// Cell.tsx

import React, { useState } from 'react';
import CodeInput from '../CodeInput/CodeInput';
import Result from '../Result/Result';
import "./Cell.css"

interface CellProps {
  cellId: number;
  onRun: (cellId: number, code: string) => void;
}

const Cell: React.FC<CellProps> = ({ cellId, onRun }) => {
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState<{ message: string; data: any[] } | null>(null);

  const handleCodeRun = (code: string) => {
    // Simulate sending the code to the backend
    // For demonstration purposes, setTimeout is used to mimic an asynchronous request
    setTimeout(() => {
      // Assume the backend responds with some result
      const mockResult = {
        message: 'Query executed successfully!',
        data: [{ name: 'John', age: 30 }, { name: 'Jane', age: 25 },{ name: 'Joan', age: 20 },{ name: 'Jone', age: 35 }],
      };

      // Update state to show the result and set the result data
      setShowResult(true);
      setResult(mockResult);
    }, 1000); // Simulating a delay for the backend request
    onRun(cellId, code)
  };

  return (
    <div className='Cell'>
      <CodeInput onRun={handleCodeRun} />

      {showResult && <Result result={result!} />}
    </div>
  );
};

export default Cell;
