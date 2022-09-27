import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:1337/api",
    headers: {
        Authorization: `Bearer ${process.env.VUE_APP_STRAPI_API_TOKEN}`,
    },
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getAllRecipes = async (): Promise<any> => {
    try {
        const res = await instance.get("/recipes");
        return res.data.data;
    } catch (error) {
        return error;
    }
};

export const getOneRecipe = async (id: string | number) => {
    try {
        const res = await instance.get(`/recipes/${id}`);
        return res.data.data;
    } catch (error) {
        return error;
    }
};
