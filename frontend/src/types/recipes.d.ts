export interface Recipe {
    vegetarian?: boolean;
    vegan?: boolean;
    glutenFree?: boolean;
    dairyFree?: boolean;
    veryHealthy?: boolean;
    cheap?: boolean;
    veryPopular?: boolean;
    sustainable?: boolean;
    lowFodmap?: boolean;
    weightWatcherSmartPoints?: number;
    gaps?: string;
    preparationMinutes?: number;
    cookingMinutes?: number;
    aggregateLikes?: number;
    healthScore?: number;
    creditsText?: string;
    license?: string;
    sourceName?: string;
    pricePerServing?: number;
    extendedIngredients?: {
        id: number;
        aisle: string;
        image: string;
        consistency: string;
        name: string;
        nameClean: string;
        original: string;
        originalName: string;
        amount: number;
        unit: string;
        meta: string[];
        measures: {
            us: {
                amount: number;
                unitShort: string;
                unitLong: string;
            };
            metric: {
                amount: number;
                unitShort: string;
                unitLong: string;
            };
        };
    }[];
    id: number;
    title: string;
    readyInMinutes?: number;
    servings?: number;
    sourceUrl?: string;
    image: string;
    imageType?: string;
    summary?: string;
    cuisines: string[];
    dishTypes?: string[];
    diets?: string[];
    occasions?: [];
    winePairing?: {
        pairedWines: [];
        pairingText: string;
        productMatches: [];
    };
    instructions?: string;
    analyzedInstructions?: {
        name: string;
        steps: {
            number: 1;
            step: string;
            ingredients: {
                id: number;
                name: string;
                localizedName: string;
                image: string;
            }[];

            equipment: {
                id: number;
                name: string;
                localizedName: string;
                image: string;
            }[];
        }[];
    }[];
    originalId?: null;
    spoonacularSourceUrl?: string;
}
