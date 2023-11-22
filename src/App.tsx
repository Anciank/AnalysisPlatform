import './App.css'
import CellContainer from './components/CellContainer/CellContainer'
import Sidebar from './components/Sidebar/Sidebar'

function App() {

  return (
    <div className="App">
      <Sidebar />
      <CellContainer databaseName='imdb'/>
    </div>

  )
}

export default App
