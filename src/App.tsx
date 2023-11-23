import { useState } from "react";
import "./App.css";
import CellContainer from "./components/CellContainer/CellContainer";
import Sidebar from "./components/Sidebar/Sidebar";

interface Cells {
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
  const exampleDB: Database = {
    id: 0,
    databaseName: "asdf",
    databasePath: "asg",
    cells: [],
  };
  const [databases, setDatabases] = useState<Database[]>([exampleDB]);
  const [currentDB, setCurrentDB] = useState<Database>(databases[0]);

  const handleAddDatabase = () => {
    const pathInput = window.prompt("Enter the path for the new database:");
    const nameInput = window.prompt("Enter the name for the new database:");
    
    if (pathInput && nameInput) {
      const newDatabase: Database = {
        id: databases.length + 1, // or use a unique identifier
        databaseName: nameInput,
        databasePath: pathInput,
        cells: [],
      };
  
      setDatabases((prevDatabases) => [...prevDatabases, newDatabase]);
    }
  };

  const handleChangeDB = (db: Database): void  => {
    setCurrentDB(db);
  }  

  return (
    <div className="App">
      <Sidebar databases={databases} onAddDatabase={handleAddDatabase} changeDatabase={handleChangeDB}/>
      <CellContainer whichDatabase={currentDB} />
    </div>
  );
}

export default App;
