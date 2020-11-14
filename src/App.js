import './App.css';
import React,{useEffect,useState} from "react";
import Recipe from './Recipe';

const App = () =>{

  const APP_ID = 'd2d590de';
  const APP_KEY = '2742bc7643cafea15ebdf1649f9bdfc9';
  const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query,setQuery] = useState('chicken');
  useEffect( () => {
    getRecipes();
    console.log(recipes);
  },[query]);

  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search)
    setSearch("");
  }

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`).then(response => response.json()).then(data => setRecipes(data.hits));
  }
  return (
    <div className="App">
      <form className="search-form" onSubmit={getSearch}>
        <input className="search-bar"type="text" value={search} onChange={updateSearch}/>
        <button className="search-button" type="submit">Search</button>
      </form>
      {recipes.map(recipe => (
        <Recipe title={recipe.recipe.label} calories={recipe.recipe.calories} image={recipe.recipe.image} key={recipe.recipe.title} ingredients={recipe.recipe.ingredients} url={recipe.recipe.url}/>
      ))}
    </div>
  )
}

export default App;
