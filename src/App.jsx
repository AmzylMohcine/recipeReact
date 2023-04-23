import { useEffect, useState } from "react"
import "./App.css"
import RecipeCard from "./Components/RecipeCard"

function App() {
  const APP_ID = "4c258139"
  const APP_key = "57356e3abef288019dd19756a00d45e8"

  const [recipe, setRecipe] = useState([])
  const [search, setSearch] = useState("")
  const [query, setQuery] = useState("banana")
  useEffect(() => {
    const fetchResponse = async () => {
      const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${APP_ID}&app_key=${APP_key}
      `)
      const data = await response.json()
      console.log(data.hits)
      setRecipe(data.hits)
    }
    fetchResponse()
  }, [query])

  const updateSearch = e => {
    setSearch(e.target.value)
  }

  const getSearch = e => {
    e.preventDefault()
    setQuery(search)
    setSearch("")
  }
  return (
    <>
      <form onSubmit={getSearch}>
        {" "}
        <input type="text" placeholder="search.." onChange={updateSearch} />
        <button type="submit"> Search </button>
      </form>
      {recipe.map(recipe => (
        <RecipeCard label={recipe.recipe.label} picture={recipe.recipe.image} calories={recipe.recipe.calories} key={recipe.recipe.label} />
      ))}
    </>
  )
}

export default App
