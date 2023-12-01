// Cell.tsx

import React from 'react';
import CodeInput from '../CodeInput/CodeInput';
import Result from '../Result/Result';
import "./Cell.css"
import { Cells } from "../../App"

interface CellProps {
  whichCell: Cells;
  runCell: (cellId: number, code: string) => void;
}

const Cell: React.FC<CellProps> = ({ whichCell, runCell }) => {
  const handleCodeRun = (code: string) => {
    //send code to "localhost:8080/code" along with cell id and database id.
    //after backend processed the code and give a result. update whickcell.result.

    runCell(whichCell.id, code);    
  };

  return (
    <div className='Cell'>
      <CodeInput runCodeInput={handleCodeRun} defaultQuery={whichCell.code}/>

      {whichCell.result === '' ? null : <Result result={whichCell.result} />}
      
      
    </div>
  );
};

export default Cell;
