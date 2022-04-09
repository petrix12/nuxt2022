<template>
    <v-card 
        :to="{
            name: 'category-recipe',
            params: { 
                category: origen == 'favorite' ? recipe.category.slug : recipe.attributes.category.data.attributes.slug,
                recipe: recipe.id
            }
        }"
    >
        <v-img :src="origen == 'favorite' ? recipe.img : recipe.attributes.img" height="170"></v-img>
        <v-card-text>
            <v-row>
                <v-col cols="7">
                    <h3>{{ origen == 'favorite' ? recipe.name : recipe.attributes.name }}</h3>
                    {{ origen == 'favorite' ? recipe.autor : recipe.attributes.autor.data.attributes.username }}
                    
                </v-col>
                <v-col cols="5" class="d-flex justify-end">
                    <div>
                        <v-icon>mdi-heart</v-icon>
                        <span>{{ origen == 'favorite' ? recipe.likes : recipe.attributes.likes }}</span>
                    </div>
                </v-col>
            </v-row>
        </v-card-text>
    </v-card>
</template>

<script>
export default {
    props: {
        recipe: {
            type: Object,
            required: true
        },
        origen: null
    }
}
</script>