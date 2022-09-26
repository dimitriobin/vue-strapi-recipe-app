<template>
    <v-row justify="space-around">
        <v-col cols="12">
            <v-sheet elevation="0" class="py-4 px-1">
                <v-chip-group
                    multiple
                    active-class="primary--text"
                    show-arrows
                    @change="handleChange"
                >
                    <v-chip v-for="tag in tags" :key="tag">
                        {{ tag }}
                    </v-chip>
                </v-chip-group>
            </v-sheet>
        </v-col>
    </v-row>
</template>

<script lang="ts">
import { Component, Emit, Vue } from "vue-property-decorator";
import cuisinesArray from "../../helpers/cuisines";

@Component
export default class FiltersChips extends Vue {
    tags = cuisinesArray;

    selectedTags: string[] = [];

    @Emit("selected-cuisine")
    handleChange(selection: number[]) {
        this.selectedTags = [];
        selection.forEach((item: number) => {
            this.selectedTags.push(this.tags[item]);
        });
        return this.selectedTags;
    }

    mounted() {
        // console.log(this.tags);
    }
}
</script>
