import { MutationTree } from "vuex";
import { State } from "./state";
import { Recipe } from "../../../types/strapi";

const mutations: MutationTree<State> = {
    getById(state, payload: Recipe) {
        state.error = false;
        state.recipe = payload;
    },
    getAll(state, payload: Recipe[]) {
        state.error = false;
        state.recipeList = payload;
    },
};

export default mutations;
