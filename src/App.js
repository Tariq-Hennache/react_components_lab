import Header from "./Header"
import Search from "./Search";
import Recipes from "./Recipes";
import RecipeForm from "./recipeForm";

function App() {
  return (
    <div>
      <Header/>
      <Search/>
      <Recipes/>
      <RecipeForm/>
    </div>
  )

  //const button = Search.getElementById("1")
  //button.addEventListener("Click", () => {
    //let rand = Math.random().floor
   //console.log("hello")
  //})


}

export default App;
