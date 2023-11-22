// CellContainer.tsx

import React, { useState } from 'react';
import Cell from '../Cell/Cell';
import "./CellContainer.css"

interface CellContainerProps {
  databaseName: string;
}

const CellContainer: React.FC<CellContainerProps> = ({ databaseName }) => {
  const [cells, setCells] = useState([{ id: 1 }]);

  const handleCellRun = (cellId: number, code: string) => {
    // Handle the code run logic (e.g., send the code to the backend)
    console.log(`Cell ${cellId} executed: ${code}`);

    // Check if the current cell is the last one
    const isLastCell = cellId === cells[cells.length - 1].id;

    if (isLastCell) {
      // If it's the last cell, add a new cell
      const newCellId = cells.length + 1;
      setCells([...cells, { id: newCellId }]);
    }
  };

  return (
    <div className='CellContainer'>
      <h3 className='databaseName'>{databaseName}</h3>
      {cells.map((cell) => (
        <Cell key={cell.id} cellId={cell.id} onRun={handleCellRun} />
      ))}
    </div>
  );
};

export default CellContainer;
