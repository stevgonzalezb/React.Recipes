import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';
import Navbar from "./components/Navbar/Navbar"

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<div />} />
        <Route path='/video/:id' element={<div />} />
        <Route path='/channel/:id' element={<div />} />
        <Route path='/search/:searchTerm' element={<div />} />
      </Routes>
  </BrowserRouter>
  );
}

export default App;
