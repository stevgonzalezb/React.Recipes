import { useState } from 'react'

import Sidebar from "./components/Sidebar/Sidebar"
import Recipes from "./pages/Recipes/Recipes"


function App() {

  // Mobile Sidebar flag.
  const [sidebar, setSidebar] = useState(false)
  // let [filters, setFilters] = useState(['Crustacean-free'])
  let [filters, setFilters] = useState(0)

  return (
    <>
      <div className="flex flex-row">
        <Sidebar closeSidebar={handleMobileSidebar} isOpen={sidebar} handleSelectFilter={handleSelectFilter} />
        <Recipes key={filters.length} openSidebar={handleMobileSidebar} filters={filters} handleAddFilter={handleSelectFilter} />
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

  function handleSelectFilter(title) {
    //filters.push(title)
    setFilters(filters++)
    console.log(filters)
  }
}

export default App
