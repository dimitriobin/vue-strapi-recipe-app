import axios from "axios";

export async function getAllRecipes(queryObject: { page: number; cuisine?: string[] }) {
    const { page, cuisine } = queryObject;
    const itemsNumber = 9;
    try {
        const res = await axios.get("https://api.spoonacular.com/recipes/complexSearch/", {
            params: {
                apiKey: process.env.VUE_APP_SPOONACULAR_API_KEY,
                offset: page * itemsNumber,
                number: itemsNumber,
                cuisine: cuisine?.join(","),
            },
        });
        return res.data;
    } catch (error) {
        return {
            error,
        };
    }
}

export async function getOneRecipe(id: string) {
    try {
        const res = await axios.get(`https://api.spoonacular.com/recipes/${id}/information`, {
            params: {
                apiKey: process.env.VUE_APP_SPOONACULAR_API_KEY,
            },
        });
        return res.data;
    } catch (error) {
        return {
            error,
        };
    }
}
