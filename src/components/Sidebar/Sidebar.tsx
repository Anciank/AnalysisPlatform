import "./Sidebar.css";
import { Database } from "../../App";

interface SidebarProps {
  databases: Database[];
  onAddDatabase: () => void;
  changeDatabase: (db:Database) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ databases, onAddDatabase, changeDatabase }) => {
  return (
    <div className="Sidebar">
      <button className="databaseButton" onClick={onAddDatabase}>
        + Add Database
      </button>
      {databases.map((d: Database) => (
        <button key={d.id} className="databaseButton" onClick={() => changeDatabase(d)}>
          {d.databaseName}
        </button>
      ))}
    </div>
  );
};

export default Sidebar;
