import { MagnifyingGlassIcon, FunnelIcon } from '@heroicons/react/24/outline'
import LogoBlack from '../../assets/logo-black.png'
import Logo from '../../assets/logo-no-background.png'
import Recipe from "../../components/Recipe/Recipe"

import React, { useState, useEffect } from 'react';
import * as RecipeService from "../../services/recipes"

export default function Recipes() {

    const [recipes, setRecipes] = useState([]);
    const [query, setQuery] = useState('')
    const [keywords, setKeywords] = useState('')

    async function handleSearch() {
        
        // Validate required paarams.
        if (!keywords) {
            setRecipes([])
            return
        }
        
        // Get recipes.
        let response = await RecipeService.getRecipes(keywords) 
        
        // Handle api exception.
        if (response === null) {
            setRecipes([])
            alert("not handled exception") //TODO
            return
        }

        // Update content.
        setQuery(keywords)
        setRecipes(response.hits)
    }
    
    return (
        <> 
            <div className="flex flex-col w-full h-screen">
                <div className="sticky w-full top-0 z-10 sm:flex-row flex-col flex py-2 bg-gray-100 divide-x-2 shadow-lg">
                    <div className="flex flex-shrink-0 justify-center items-center py-2 px-4 cursor-pointer"
                        onClick={() => {
                            setKeywords('')
                            setRecipes([])
                        }}>
                        <img className="h-12 w-auto" src={Logo} alt="Cookify "/>
                    </div>

                    <div className="w-full py-2 px-4 text-gray-400 focus-within:text-gray-600 flex flex-row justify-between gap-4">
                        <div className="pointer-events-none hidden sm:flex items-center">
                            <MagnifyingGlassIcon className="h-8 w-8 text-gray-600"/>
                        </div>
                        <input autoFocus 
                            id="search-field"
                            value={keywords}
                            className="h-full p-2 w-full text-lg font-medium border rounded-md border-gray-400 text-gray-900 placeholder-gray-400 focus:border-gray-400 outline-none focus:ring-1"
                            placeholder="Type one o more keywords"
                            onKeyDown={(e) => { 
                                if(e.key === 'Enter') handleSearch()
                            }}
                            onInput={(e) => {setKeywords(e.target.value)}}/>
                        <button className='text-white font-medium hover:bg-green-800 bg-green-cookify p-2 rounded-md'
                                onClick={() => handleSearch()}>
                            Search
                        </button>
                    </div>
                </div>

                <main className="w-full h-[calc(100vh_-_136px)] sm:h-[calc(100vh_-_80px)] p-4 overflow-auto">
                    <div className="max-w-7xl h-full">

                        {/* Empty state */}
                        <div className={(recipes.length === 0 ? 'flex': 'hidden')+ ' h-full w-full flex-col gap-2 justify-center items-center'}>
                            <img className="grayscale  h-40 w-auto opacity-60" src={LogoBlack} alt="Cookify "/>

                            <div className="text-2xl font-bangers text-gray-700 text-center">
                                No value entered yet, <br />
                                how about starting with a teriyaki chicken? 🍗
                            </div>
                        </div>

                        {/* Query results */}
                        <div className={recipes.length !== 0 ? 'flex flex-col gap-4': 'hidden'}>

                            <div className='flex justify-center items-center'>
                                <img className="grayscale  h-12 w-auto opacity-60" src={LogoBlack} alt="Cookify "/>
                                <div className='text-lg font-medium font-bangers text-green-cookify'>Results for {query}:</div>
                            </div>

                            <div className='flex flex-wrap justify-center gap-4 '>
                                {recipes.map(obj => (
                                    <Recipe 
                                    //key={obj.recipe.label}
                                    healthLabels={obj.recipe.healthLabels}
                                    title={obj.recipe.label} 
                                    calories={obj.recipe.calories} 
                                    image={obj.recipe.image}
                                    ingredients={obj.recipe.ingredients}
                                    servings={obj.recipe.yield} 
                                    sourceUrl={obj.recipe.url}/>
                                ))}
                            </div>
                            
                        </div>
                    </div>
                </main>
            </div>   
        </>
    )
}