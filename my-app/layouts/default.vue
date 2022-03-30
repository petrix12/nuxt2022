<template>
    <div>
        <div>
            <nav>
                <ul>
                    <li v-for="ruta in rutas" :key="ruta.label">
                        <nuxt-link :to="ruta.ruta">{{ ruta.label }}</nuxt-link>
                    </li>
                </ul>
            </nav>
        </div>
        <Nuxt/>
        <footer>
            <div>
                &copy; 2021 
            </div>
        </footer>
    </div>
</template>

<script scoped>
export default {
    data(){
        return {
            rutas: [
                { ruta: '/', label: 'Inicio' },
                { ruta: '/users/1', label: 'Usuarios' },
                { ruta: '/carros', label: 'Carros' },
                { ruta: '/motos', label: 'Motos' },
                { ruta: '/contacto', label: 'Contacto' }
            ]
        }
    }
}
</script>

<style>

</style>