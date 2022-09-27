/* eslint-disable import/extensions */
import { Recipe } from "@/types/strapi";

export interface State {
    recipe?: Recipe;
    recipeList?: Recipe[];
    error: boolean;
}
