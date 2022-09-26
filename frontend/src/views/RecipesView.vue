<template>
    <v-container>
        <h1 class="is-size-1 has-text-black my-10">{{ totalResults }} recipes:</h1>
        <FiltersChips @selected-cuisine="cuisineFilter" />
        <v-row>
            <v-col v-for="card in cards" :key="card.id" cols="4">
                <v-card :to="`/recipe/${card.id}`" exact>
                    <v-img
                        :src="card.image"
                        class="white--text align-stretch"
                        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.6)"
                        height="300px"
                    >
                        <div class="d-flex flex-column h-full">
                            <v-card-actions class="mb-auto">
                                <v-spacer></v-spacer>
                                <v-btn icon @click.prevent="like" color="white">
                                    <v-badge color="green" content="6" overlap>
                                        <v-icon>mdi-heart</v-icon>
                                    </v-badge>
                                </v-btn>
                            </v-card-actions>
                            <v-card-title v-text="card.title" class=""></v-card-title>
                        </div>
                    </v-img>
                </v-card>
            </v-col>
        </v-row>
        <div class="text-center py-10">
            <v-pagination
                v-model="page"
                :length="totalPages"
                :total-visible="6"
                circle
                @input="onPageChanged"
            ></v-pagination>
        </div>
    </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { getAllRecipes } from "@/helpers/ApiHelper";
import FiltersChips from "@/components/recipes/FilterSidebar.vue";
import { Recipe } from "../types/recipes.d";

@Component({
    components: { FiltersChips },
})
export default class RecipesView extends Vue {
    mainTitle = "All recipes";

    page = 1;

    totalPages = 0;

    totalResults = 0;

    cards: Recipe[] = [
        {
            id: 0,
            image: "",
            imageType: "",
            title: "",
            cuisines: [],
        },
    ];

    cuisineFilter(selectedCuisines: string[]) {
        getAllRecipes({
            page: this.page,
            cuisine: selectedCuisines,
        }).then((res) => {
            this.cards = res.results;
            this.totalResults = res.totalResults;
            this.totalPages = Math.ceil(res.totalResults / 9);
        });
    }

    onPageChanged(val: number) {
        getAllRecipes({
            page: val,
        }).then((res) => {
            this.cards = res.results;
        });
    }

    like() {
        console.log("like");
    }

    mounted() {
        getAllRecipes({
            page: this.page,
        }).then((res) => {
            this.cards = res.results;
            this.totalResults = res.totalResults;
            this.totalPages = Math.ceil(res.totalResults / 9);
        });
    }
}
</script>

<style scoped>
.h-full {
    height: 100%;
}
</style>
