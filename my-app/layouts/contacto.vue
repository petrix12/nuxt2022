<template>
    <div>
        <div>
            <h1>Layout Contacto</h1>
            <ul>
                <li v-for="ruta in rutas" :key="ruta.label">
                    <nuxt-link :to="ruta.ruta">{{ ruta.label }}</nuxt-link>
                </li>
            </ul>
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

<style scoped>
ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
}

li {
    float: none;
}

li a {
    display: block;
    padding: 8px;
    background-color: rgb(36, 3, 5);
    color: #fff;
}

footer{
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    background-color: rgb(36, 3, 5);
    color: #fff;
    text-align: center;
}
</style>