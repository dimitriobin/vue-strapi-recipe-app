import { getAllRecipes, getOneRecipe } from "@/helpers/strapi";
import { RootState } from "@/store/types";
import { ActionTree } from "vuex";
import { State } from "./state";

const actions: ActionTree<State, RootState> = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async getById({ commit }, id: string | number): Promise<any> {
        try {
            const recipe = await getOneRecipe(id);
            commit("getById", recipe);
            return Promise.resolve(recipe);
        } catch (error) {
            return Promise.reject(error);
        }
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async getAll({ commit }): Promise<any> {
        try {
            const recipeList = await getAllRecipes();
            commit("getAll", recipeList);
            return Promise.resolve(recipeList);
        } catch (error) {
            return Promise.reject(error);
        }
    },
};

export default actions;
