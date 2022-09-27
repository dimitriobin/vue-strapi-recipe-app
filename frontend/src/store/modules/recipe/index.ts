import { RootState } from "@/store/types";
import { Module } from "vuex";
import { State } from "./state";
import getters from "./getters";
import actions from "./actions";
import mutations from "./mutations";

const state: State = {
    recipe: undefined,
    recipeList: undefined,
    error: false,
};

const namespaced = true;

const recipe: Module<State, RootState> = {
    namespaced,
    state,
    getters,
    actions,
    mutations,
};

export default recipe;
