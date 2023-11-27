// CellContainer.tsx

import React, { useState } from 'react';
import Cell from '../Cell/Cell';
import "./CellContainer.css"
import { Database } from '../../App';

interface CellContainerProps {
  whichDatabase: Database;
  getRunningCell: (dbId: number, cellId:number, code: string) => void;
  isWaiting: boolean;
}

const CellContainer: React.FC<CellContainerProps> = ({ whichDatabase, getRunningCell, isWaiting }) => {
  const handleCellRun = (cellId: number, code: string): void => {
    getRunningCell(whichDatabase.id, cellId, code);
  }

  if (isWaiting) {
    return (
      <h1 className='CellContainer'>Loading...</h1>
    )
  }

  return (
    <div className='CellContainer'>
      <h1 className='databaseName'>{whichDatabase.databaseName}</h1>
      {whichDatabase.cells.map((cell) => (
        <Cell key={cell.id} whichCell={cell} runCell={handleCellRun}/>
      ))}
    </div>
  );
};

export default CellContainer;
