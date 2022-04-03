<template>
	<v-container>
		<!-- {{ categories }} -->

		<v-divider class="my-5"></v-divider>
		<!-- <div v-if="$fetchState.pending">Cargando datos...</div>
		<div v-else-if="$fetchState.error">{{ $fetchState.error }}</div> -->
		<div>
			<div v-for="category in categories.data" :key="category.id">
				<v-btn 
					:to="{ 
						name: 'category', 
						params: {category: category.attributes.slug}
					}"
					class="my-1"
				>{{category.attributes.name}}</v-btn> 
			</div>
		</div>

		<!-- <ApolloQuery :query="query">
			<template slot-scope="{result:{ data, loading, error }}">
				<div v-if="loading">Cargando datos...</div>
				<div v-else-if="error">{{ error }}</div>
				<div v-else>
					<div v-for="category in data.categories.data" :key="category.id">
						<v-btn 
							:to="{ 
								name: 'category', 
								params: {category: category.attributes.slug},
								query: {category: category.id}
							}"
							class="my-1"
						>{{category.attributes.name}}</v-btn> 
					</div>
				</div>
			</template>
		</ApolloQuery> -->
	</v-container>
</template>

<script>
// import { categorias } from "../graphql/querys"

export default {
	data(){
		return {
			// categories: []
			// query: categorias
		}
	},
	computed: {
		categories(){
			return this.$store.getters.readCategories
		}
	}
	/* async fetch(){
		// const client = this.$apollo.getClient()
		const query = {
			query: require("../graphql/categories.gql")
		}
		await this.$apollo.query(query).then(data => {
			console.log(data)
			this.categories = data.data.categories
		})
	} */
	/* async asyncData(context) {
		const client = context.app.apolloProvider.defaultClient
		// Si se trabaja con Axios la constante client de la instrucción anterior se puede obtener mediante este.
		const query = {
			query: require("../graphql/categories.gql")
		}
		let categories = []
		await client.query(query).then(data => {
			console.log(data)
			categories = data.data.categories
		})
		return {categories}
	}, */

	/* apollo: {
		categories: {
			query: categorias,
			// update: data => data.categories
		}
	} */
}
</script>
