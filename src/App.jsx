import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from "./Homepage"
import Syncro from './Syncro';
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/syncro" element={<Syncro />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
