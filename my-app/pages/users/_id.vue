<template>
    <div class="container">
        <h1>Index User</h1>
        <card-info>
            <p>Usuarios diponibles</p>
        </card-info>
        <p>{{ $route.params }}</p>
        <p>{{ $route.params.id }}</p>
    </div>
</template>

<script>
export default {
    validate(ruta){
        console.log(ruta)
        /* return true */
        /* return ruta.params.id == 2 */
        // Con expresión regular para validar que sea un número
        return /^\d+$/.test(ruta.params.id)
    }
}
</script>