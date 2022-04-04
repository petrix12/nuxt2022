<template>
    <v-conteiner>
        <h1 class="secondary--text">{{ recipe.attributes.name }}</h1>
        <h5 class="secondary--text">{{ recipe.attributes.category.data.attributes.name }}</h5>
        <v-card class="mt-3">
            <v-card-title>
                <v-icon class="mr-3">mdi-information</v-icon>
                Información
            </v-card-title>

            <v-card-text class="black--text">
                <v-row>
                    <v-col col="6">
                        <v-chip color="primary" outlined>
                            <v-icon left>mdi-account-group</v-icon>
                            Servicios: {{ recipe.attributes.servings }}
                        </v-chip>
                        <v-chip color="primary" outlined>
                            <v-icon left>mdi-clock</v-icon>
                            Tiempo: {{ recipe.attributes.duration }}
                        </v-chip>
                        <v-chip color="primary" outlined>
                            <v-icon left>mdi-account-edit</v-icon>
                            Autor: Leticia Rodríguez
                        </v-chip>

                        <v-divider class="my-3"></v-divider>

                        <h4 class="body-1">Descripción</h4>
                        <div v-html=" recipe.attributes.description"></div>
                    </v-col>
                    <v-col col="6">
                        <v-img :src="recipe.attributes.img" max-height="500"></v-img>
                    </v-col> 
                </v-row>
            </v-card-text>
        </v-card>

        <div class="mt-3">

        </div>
        
        <div class="mt-3">
            <app-ui-back-btn label="Volver a recetas"></app-ui-back-btn>
        </div>
    </v-conteiner>
</template>

<script>
export default {
    async asyncData({app, route}){
        const client = app.apolloProvider.defaultClient
        const id = route.params.recipe
        const query = {
            query: require('../../../graphql/recipe.gql'),
            variables: {id}
        }
        let recipe = null
        await client.query(query).then(data => {
            recipe = data.data.recipe.data
        }).catch(e => console.log(e))
        return {recipe}
    }
}
</script>