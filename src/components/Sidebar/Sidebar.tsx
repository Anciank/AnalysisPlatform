import React from "react";
import "./Sidebar.css";
import { Database } from "../../App";

interface SidebarProps {
  databases: Database[];
  onAddDatabase: (dbFile: File | null) => void;
  changeDatabase: (db:Database) => void;
  setWaiting: (waiting:boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ databases, onAddDatabase, changeDatabase, setWaiting }) => {
  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const selectedFile = files[0];

      onAddDatabase(selectedFile);

      setWaiting(true);

      const formData = new FormData();
      formData.append("file", selectedFile);

      try {
        //implement file transfer logic here.
        // Add the logic to get the database ID and append it to the FormData
        const databaseId = databases.length.toString();
        formData.append("databaseId", databaseId);

        // Replace "http://localhost:8080/databaseFile" with your actual server URL
        const response = await fetch("http://localhost:8080/databaseFile", {
          method: "POST",
          body: formData,
        });

        if (response.ok) {
          console.log("File uploaded successfully");
          // You can handle success response here
        } else {
          console.error("File upload failed");
          // You can handle error response here
        }
      } catch (error) {
        console.error("Error uploading file", error);
      } finally {
        setWaiting(false);
      }
    }
  };

  return (
    <div className="Sidebar">
      <label className="uploadBtn">
        <input type="file" onChange={handleFileChange} />
        Upload File
      </label>
      {databases.map((d: Database) => (
        <button key={d.id} className="databaseButton" onClick={() => changeDatabase(d)}>
          {d.databaseName}
        </button>
      ))}
    </div>
  );
};

export default Sidebar;
