import { RootState } from "@/store/types";
import { Recipe } from "@/types/strapi";
import { GetterTree } from "vuex";
import { State } from "./state";

const getters: GetterTree<State, RootState> = {
    getRecipe(state): Recipe | undefined {
        const { recipe } = state;
        return recipe;
    },
};

export default getters;
