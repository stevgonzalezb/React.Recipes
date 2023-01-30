import { useState } from 'react'

import './App.css';
import Sidebar from "./components/Sidebar/Sidebar"
import Recipes from "./pages/Recipes/Recipes"

function App() {

  // Mobile Sidebar flag.
  const [sidebar, setSidebar] = useState(false)

  return (
    <>
      <div className="flex flex-row">
      <Sidebar closeSidebar={handleMobileSidebar} isOpen={sidebar}/>
      <Recipes openSidebar={handleMobileSidebar} />
      </div>
    </>
  )

  function handleMobileSidebar() {
    setSidebar(!sidebar)
    if (sidebar) {
        document.body.style.overflow = 'hidden'
    } else {
        document.body.style.overflow = 'auto'
    }
  }
}

export default App
