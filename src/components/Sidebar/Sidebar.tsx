import "./Sidebar.css"

const Sidebar = () => {
  const databases = ['MongoDB', 'DuckDB', 'MySQL', 'Sqlite3', 'DuckDB', 'DuckDB', 'DuckDB', 'DuckDB', 'DuckDB', 'DuckDB', 'DuckDB', 'DuckDB', 'DuckDB', 'DuckDB', 'DuckDB', 'DuckDB', 'DuckDB', 'DuckDB', 'DuckDB', 'DuckDB', 'DuckDB', 'DuckDB', 'DuckDB', 'DuckDB', 'DuckDB', 'DuckDB', 'DuckDB', 'DuckDB', 'DuckDB', 'DuckDB', 'DuckDB', 'DuckDB', 'DuckDB', 'DuckDB', 'DuckDB', 'DuckDB', 'DuckDB', 'DuckDB', 'DuckDB', 'DuckDB', 'DuckDB', 'DuckDB', 'DuckDB', 'DuckDB', 'DuckDB', 'DuckDB', 'DuckDB', 'DuckDB', 'DuckDB', 'DuckDB', 'DuckDB', 'DuckDB', 'DuckDB', 'DuckDB'];






  return (
    <div className='Sidebar'>
      <button className="databaseButton">
        + Add Database
      </button>
      {databases.map(d => <button className="databaseButton">
        {d}
      </button>)}
    </div>
  )
}

export default Sidebar