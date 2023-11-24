import { useEffect, useState } from "react";
import "./App.css";
import CellContainer from "./components/CellContainer/CellContainer";
import Sidebar from "./components/Sidebar/Sidebar";

export interface Cells {
  id: number;
  code: string;
  result: string;
}

export interface Database {
  id: number;
  databasePath: string;
  databaseName: string;
  cells: Cells[];
}

function App() {
  const [databases, setDatabases] = useState<Database[]>([{
    id: 0,
    databaseName: "init database",
    databasePath: "filepath",
    cells: [{ id: 0, code: "code 1", result: "" }],
  }]);
  const [currentDB, setCurrentDB] = useState<Database>(databases[0]);


  const handleAddDatabase = () => {
    const pathInput = window.prompt("Enter the path for the new database:");
    const nameInput = window.prompt("Enter the name for the new database:");

    if (pathInput && nameInput) {
      const newDatabase: Database = {
        id: databases.length, // or use a unique identifier
        databaseName: nameInput,
        databasePath: pathInput,
        cells: [{ id: 0, code: "Your code here", result: "" }],
      };

      setDatabases((prevDatabases) => [...prevDatabases, newDatabase]);
    }
  };

  const handleChangeDB = (db: Database): void => {
    setCurrentDB(db);
  };

  const runCell = (dbId: number, cellId: number, code: string): void => {
    if (cellId === databases[dbId].cells.length - 1) {
      //add a new cell here
      const newCell: Cells = {
        id: databases[dbId].cells.length,
        code: "-- Your code here",
        result: "",
      };
  
      const addedDatabase: Database = {
        ...databases[dbId],
        cells: [...databases[dbId].cells, newCell],
      };

      const updatedDatabases = databases.map(db => db.id === addedDatabase.id ? addedDatabase : db);
  
      setDatabases(updatedDatabases);
      setCurrentDB(updatedDatabases[dbId]);
      return;
    }
  
  };

  console.log(databases);
  
  

  return (
    <div className="App">
      <Sidebar
        databases={databases}
        onAddDatabase={handleAddDatabase}
        changeDatabase={handleChangeDB}
      />
      <CellContainer
        whichDatabase={currentDB}
        getRunningCell={runCell}
      />
    </div>
  );
}

export default App;
