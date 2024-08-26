import { useState } from "react";
import axios from "axios";

function RecipeChat() {
    const [dish, setDish] = useState("");
    const [recipe, setRecipe] = useState("");

    async function generateRecipes() {
        setRecipe("loading recipes")
        const response = await axios({
            url:"https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyDZTfZh4JJujkQjRX60uYVAKvkwhb8pVaY",
            method:"post" ,
            data: {contents:[{parts:[{text: dish }]}]}
        })
        setRecipe(response["data"]["candidates"][0]["content"]["parts"][0]["text"]
        );
    }

    return (
        <div style={{ 
            backgroundColor: 'white', 
            minHeight: '100vh', 
            padding: '20px', 
            fontFamily: 'Arial, sans-serif',
            margin: '0'
        }}>
            <h1 style={{ 
                color: '#333', 
                marginBottom: '20px' 
            }}>
                Ask away your recipes
            </h1>
            <textarea value={dish} onChange={(e)=>setDish(e.target.value)} cols="150" rows="5"> </textarea>
            <button 
                onClick={generateRecipes} 
                style={{ 
                    backgroundColor: '#007bff', 
                    color: 'white', 
                    border: 'none', 
                    borderRadius: '4px', 
                    padding: '10px 20px', 
                    cursor: 'pointer',
                    fontSize: '16px'
                }}
            >
                Generate Recipes

                <p> {recipe} </p>
            </button>

        </div>
    );
}

export default RecipeChat;
