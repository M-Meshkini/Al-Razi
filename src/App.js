import './App.css';
import {Route, Routes, BrowserRouter } from "react-router-dom";
import Homepage from './Components/Homepage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Homepage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;