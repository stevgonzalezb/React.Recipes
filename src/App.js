import { useState } from 'react'

import Sidebar from "./components/Sidebar/Sidebar"
import Recipes from "./pages/Recipes/Recipes"


function App() {

  // Mobile Sidebar flag.
  const [sidebar, setSidebar] = useState(false)

  return (
    <>
      <div className="flex">
        {/* <Sidebar closeSidebar={handleMobileSidebar} isOpen={sidebar} handleSelectFilter={handleSelectFilter} /> */}
        <Recipes />
      </div>
    </>
  )

  function handleMobileSidebar() {

    // Toggle flag.
    setSidebar(!sidebar)

    // Deactivate scroll when menu is open.
    if (!sidebar) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = 'auto'
  }
}

export default App
