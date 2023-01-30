import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';
import Navbar from "./components/Navbar/Navbar"
import Sidebar from "./components/Sidebar/Sidebar"
import Recipes from "./pages/Recipes/Recipes"

function App() {
  return (
    <>
      <div className="flex flex-row">
      <Sidebar/>
      <Recipes/>
      </div>
    </>

  //   <BrowserRouter>
  //     {/* <Navbar/> */}
  //     {/* <Routes>
  //       <Route exact path='/' element={<div />} />
  //       <Route path='/video/:id' element={<div />} />
  //       <Route path='/channel/:id' element={<div />} />
  //       <Route path='/search/:searchTerm' element={<div />} />
  //     </Routes> */}
  //     <Sidebar/>
  //     <Recipes/>
  // </BrowserRouter>
  )
}

export default App;
