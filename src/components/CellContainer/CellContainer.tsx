// CellContainer.tsx

import React, { useState } from 'react';
import Cell from '../Cell/Cell';
import "./CellContainer.css"
import { Database } from '../../App';

interface CellContainerProps {
  whichDatabase: Database;
  getRunningCell: (dbId: number, cellId:number, code: string) => void;
}

const CellContainer: React.FC<CellContainerProps> = ({ whichDatabase, getRunningCell }) => {
  const handleCellRun = (cellId: number, code: string): void => {
    getRunningCell(whichDatabase.id, cellId, code);
  }

  return (
    <div className='CellContainer'>
      <h3 className='databaseName'>{whichDatabase.databaseName}</h3>
      {whichDatabase.cells.map((cell) => (
        <Cell key={cell.id} whichCell={cell} runCell={handleCellRun}/>
      ))}
    </div>
  );
};

export default CellContainer;
