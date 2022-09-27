import Vue from "vue";
import Vuex, { StoreOptions } from "vuex";
import recipe from "./modules/recipe";
import { RootState } from "./types";

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
    state: {
        version: "1.0.0",
    },
    modules: {
        recipe,
    },
};

export default new Vuex.Store<RootState>(store);
