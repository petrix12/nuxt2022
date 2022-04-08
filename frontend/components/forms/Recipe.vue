<template>
    <div>
        <v-card max-width="800" class="mx-auto">
            <v-card-title class="heading">Mi receta</v-card-title>
            <v-card-text>
                <v-form @submit.prevent="onsubmit">
                    <v-container>
                        <v-row>
                            <v-col cols="12">
                                <v-text-field dense label="Nombre de la receta" outlined v-model="recipe.name"></v-text-field>
                            </v-col>
                            <v-col cols="4">
                                <v-text-field dense label="Duración de la receta (minutos)" outlined v-model="recipe.duration" type="number"></v-text-field>
                                <v-icon>mdi-clock</v-icon> {{ formatedTime }}
                            </v-col>
                            <v-col cols="4">
                                <v-text-field dense label="Cantidad de platos" outlined v-model="recipe.servings" type="number"></v-text-field>
                            </v-col>
                            <v-col cols="4">
                                <v-select
                                    dense
                                    outlined
                                    v-model="recipe.category"
                                    label="Categoría"
                                    :items="categories"
                                    item-text="attributes.name"
                                    item-value="id"
                                >

                                </v-select>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field dense label="Foto" outlined v-model="recipe.img" type="url"></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-textarea dense label="Descripción" outlined v-model="recipe.description"></v-textarea>
                            </v-col>
                            
                            <v-col cols="5">
                                <h3 class="mb-5">Ingredientes</h3>
                                <div v-for="(ingredient, i) in recipe.ingredients" :key="'ingrediente-' + i">
                                    <v-text-field 
                                        dense 
                                        :label="`Ingrediente ${i + 1}`" 
                                        outlined 
                                        v-model="recipe.ingredients[i]"
                                    ></v-text-field>
                                </div>
                                <v-btn class="primary" small @click="addItem('ingredients')">Agregar ingrediente</v-btn>
                                <!-- <v-divider class="my-5"></v-divider> -->
                            </v-col>
                            <v-col cols="7">
                                <h3 class="mb-5">Pasos</h3>
                                <div v-for="(step, i) in recipe.steps" :key="'step-' + i">
                                    <v-textarea 
                                        dense 
                                        :label="`Paso ${i + 1}`" 
                                        outlined 
                                        v-model="recipe.steps[i]"
                                        height="100"
                                    ></v-textarea>
                                </div>
                                <v-btn class="primary" small @click="addItem('steps')">Agregar paso</v-btn>
                            </v-col>
                        </v-row>

                        <v-btn type="submit" class="secondary my-5" small>{{ hasId ? 'Actualizar receta' : 'Guardar receta' }}</v-btn>
                    </v-container>
                </v-form>
            </v-card-text>
        </v-card>
    </div>
</template>

<script>
export default {
    props: {
        recipe: {
            type: Object,
            default: () => ({
                name: '',
                duration: 0,
                servings: 0,
                img: '',
                description: '',
                ingredients: [''],
                steps: [''],
                category: 1
            })
        }
    },
    computed: {
        categories() {
            return this.$store.getters.readCategories.data
        },
        hasId() {
            return this.recipe.hasOwnProperty('id')
        },
        formatedTime() {
            let hours = Math.floor(this.recipe.duration / 60)
            let minutes = this.recipe.duration % 60
            let total = ("0" + hours).slice(-2) + ':' + ("0" + minutes).slice(-2)
            return total
        }
    },
    methods: {
        addItem(item) {
            if(this.recipe[item] == null){
                this.recipe[item] = []
            }
            this.recipe[item].push("")
        },
        async onsubmit() {
            const id = this.$auth.user.id
            this.recipe.autor = id
            this.recipe.duration = Number(this.recipe.duration)
            this.recipe.servings = Number(this.recipe.servings)
            const token = this.$auth.strategy.token.get()
            const mutation = this.hasId ? "updateRecipe" : "createRecipe"
            console.log('token: ', token)

            if(typeof this.recipe.category == "object"){
                this.recipe.category = this.recipe.category.id
            }
            await this.$apollo.mutate({
                context: {
                   headers: {
                       Authorization: token
                   } 
                },
                mutation: require('../../graphql/' + mutation + '.gql'),
                variables: this.recipe,
                update: (cache, myrecipe) => {
                    if(mutation == 'createRecipe'){
                        const data = cache.readQuery({
                            query: require("../../graphql/userRecipes.gql"),
                            variables: { id },
                        })
                        console.log('DATA: ', data)
                        data.recipes.push(myrecipe.data[mutation].recipe)
                        cache.writeQuery({
                            query: require("../../graphql/userRecipes.gql"),
                            variables: { id },
                            data
                        })
                    }
                }
            }).then(data => {
                console.log('Datos: ', data)
                this.$router.push({name: 'user'})
                this.$store.dispatch('snackbars/setSnack', {
                    text: 'Receta guardada',
                    color: 'info'
                })
            }).catch(e => {
                console.log(e)
                this.$store.dispatch('snackbars/setSnack', {
                    text: 'No se pudo guardar la receta',
                    color: 'error'
                })
            })
        }
    }
}
</script>