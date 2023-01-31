import { useState } from 'react'

import './App.css';
import Sidebar from "./components/Sidebar/Sidebar"
import Recipes from "./pages/Recipes/Recipes"


const Filters = {

  Allergies: [
      {
          Name: "Celery-free",
          Selected: true
      },
      {
          Name: "Crustacean-free",
          Selected: false
      },
      {
          Name: "Gluten-free",
          Selected: false
      },
      {
          Name: "Dairy-free",
          Selected: false
      },
      {
          Name: "Egg-free",
          Selected: false
      },
      {
          Name: "Fish-free",
          Selected: false
      },
  ],

  Diets: [
      {
          Name: "Alcohol-free",
          Selected: false
      },
      {
          Name: "High-Fiber",
          Selected: false
      },
  ]
}


function App() {

  // Mobile Sidebar flag.
  const [sidebar, setSidebar] = useState(false)

  return (
    <>
      <div className="flex flex-row">
        <Sidebar closeSidebar={handleMobileSidebar} isOpen={sidebar} filters={Filters} handleClick={handleSelectFilter} />
        <Recipes openSidebar={handleMobileSidebar} />
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
    console.log(title)
  }
}

export default App
