import React from "react";

const RecipeForm = ( ) => {
    return (
        <div>
            <p>
                Are there any recipes you would like to suggest for others to use ?
            </p>
            <form>
                <input type="text" placeholder="Recipe suggestion" />
                <input type="submit" value="Submit" />
            </form>


        </div>
    )
}

export default RecipeForm;