<template>
    <v-container>
        <h1 class="is-size-1 has-text-black">{{ message }}</h1>
        <ul>
            <li v-for="recipe in recipes" :key="recipe.id">
                <a href="#" @click.prevent="handleChangeRecipe(recipe.id)">
                    {{ recipe.attributes.title }}
                </a>
            </li>
        </ul>

        <div class="mt-10">
            <h2 class="is-size-1">
                The selected Recipe is "{{ recipe?.attributes.title || "..." }}"
            </h2>
            <div v-if="recipe" v-html="parseMd(recipe?.attributes.content)"></div>
        </div>
    </v-container>
</template>

<script lang="ts">
import { Recipe } from "@/types/strapi";
import { Component, Vue } from "vue-property-decorator";
import { marked } from "marked";

@Component
export default class HomeView extends Vue {
    message = "This is homepage";

    recipe: Recipe | null = null;

    recipes: Recipe[] | undefined = [];

    handleChangeRecipe(id: number) {
        this.$store.dispatch("recipe/getById", id).then((res) => {
            this.recipe = res;
        });
    }

    parseMd(content: string) {
        return marked(content);
    }

    mounted() {
        this.$store.dispatch("recipe/getAll").then((res) => {
            this.recipes = res;
        });
    }
}
</script>
