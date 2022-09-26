<template>
    <v-container>
        <h1 class="is-size-1 has-text-black my-10">{{ recipe.title }}</h1>
        <v-img :src="recipe.image"></v-img>
        <ul>
            <li v-for="(cuisine, index) in recipe.cuisines" :key="index">
                <v-chip>
                    {{ cuisine }}
                </v-chip>
            </li>
        </ul>
    </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { getOneRecipe } from "@/helpers/ApiHelper";
import { Recipe } from "../types/recipes.d";

@Component
export default class RecipesView extends Vue {
    recipe: Recipe = {
        id: 0,
        title: "",
        image: "",
        cuisines: [],
    };

    mounted() {
        getOneRecipe(this.$route.params.id).then((res) => {
            this.recipe = res;
        });
    }
}
</script>
