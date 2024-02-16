import './App.css';
import {Route, Routes, BrowserRouter } from "react-router-dom";
import Homepage from './Components/Homepage';
import AboutUs from './Components/AboutUs';
import Home from './Components/Copilot_Hompage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path="/" exact element={<Homepage />} />
        <Route path="/copilot" exact element={<Home />} />
        <Route path="/aboutus" exact element={<AboutUs />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;