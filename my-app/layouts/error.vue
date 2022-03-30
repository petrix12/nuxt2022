<template>
    <div>
        <h1 v-if="error.statusCode == 404">Página no encontrada</h1>
        <h1 v-else>Algo malo salio</h1>
        <nuxt-link to="/">Volver al inicio</nuxt-link>
    </div>
</template>

<script>
export default {
    props: ['error'],
    layout: 'empty'
}
</script>