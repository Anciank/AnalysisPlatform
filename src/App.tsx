import { useState } from "react";
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
  databaseFile: File | null;
  databaseName: string;
  cells: Cells[];
}

function App() {
  const [databases, setDatabases] = useState<Database[]>([{
    id: 0,
    databaseName: "init database",
    databaseFile: null,
    cells: [{ id: 0, code: "code 1", result: "" }],
  }]);
  const [currentDB, setCurrentDB] = useState<Database>(databases[0]);
  const [isWaiting, setIsWaiting] = useState<boolean>(false);


  const handleAddDatabase = (dbFile: File | null) => {
    const nameInput = window.prompt("Enter the name for the new database:");

    if (nameInput) {
      const newDatabase: Database = {
        id: databases.length, // or use a unique identifier
        databaseName: nameInput,
        databaseFile: dbFile,
        cells: [{ id: 0, code: "Your code here", result: "" }],
      };

      setDatabases((prevDatabases) => [...prevDatabases, newDatabase]);
    }
  };

  const handleChangeDB = (db: Database): void => {
    setCurrentDB(db);
  };

  const runCell = async (dbId: number, cellId: number, code: string): Promise<void> => {
    try {
      // Mock server URL
      const serverUrl = "http://localhost:8080/code";
  
      // Send a POST request to the mock server
      const response = await fetch(serverUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          databaseId: databases[dbId].id,
          cellId: cellId,
          code: code,
        }),
      });
  
      if (response.ok) {
        // Mock server response
        const result = await response.json();
  
        // Update the result of the current cell
        const updatedDatabases = databases.map(db =>
          db.id === databases[dbId].id
            ? {
                ...db,
                cells: db.cells.map(cell =>
                  cell.id === cellId ? { ...cell, result: result } : cell
                ),
              }
            : db
        );
  
        setDatabases(updatedDatabases);
      } else {
        console.error("Error:", response.statusText);
      }
    } catch (error) {
      console.error("Error executing code", error);
    } finally {
      if (cellId === databases[dbId].cells.length - 1) {
        // If the executed cell is the last cell, add a new cell
        const newCell: Cells = {
          id: databases[dbId].cells.length,
          code: "-- Your code here",
          result: "",
        };
  
        const addedDatabase: Database = {
          ...databases[dbId],
          cells: [...databases[dbId].cells, newCell],
        };
  
        const updatedDatabases = databases.map(db =>
          db.id === addedDatabase.id ? addedDatabase : db
        );
  
        setDatabases(updatedDatabases);
        setCurrentDB(updatedDatabases[dbId]);
      }
    }
  };
  

  console.log(databases);
  
  

  return (
    <div className="App">
      <Sidebar
        databases={databases}
        onAddDatabase={handleAddDatabase}
        changeDatabase={handleChangeDB}
        setWaiting={setIsWaiting}
      />
      <CellContainer
        whichDatabase={currentDB}
        getRunningCell={runCell}
        isWaiting={isWaiting}
      />
    </div>
  );
}

export default App;
