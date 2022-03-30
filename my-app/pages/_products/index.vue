<template>
    <div>
        <h1>Productos</h1>
        <p>
            <nuxt-link :to="`/${$route.params.products}/list`">Ver lista de {{ $route.params.products }}</nuxt-link>
        </p>
        <button @click="goto()">Ir a ver {{ $route.params.products }}</button>
    </div>
</template>

<script>
export default {
    methods: {
        goto(){
            this.$router.push(this.$route.params.products + '/list')
        }
    }
}
</script>