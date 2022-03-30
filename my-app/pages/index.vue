<template>
    <div class="container">
        <h1>Index</h1>
        <!-- NAVEGACIÓN ESTÁTICA -->
        <div>
            <!-- Navegación por path -->
            <hr>
            <p>Navegación por path</p>
            <nuxt-link to='/users'>Users</nuxt-link>
            <nuxt-link to='/users/one'>One</nuxt-link>
            <nuxt-link to='/contacto'>Contacto</nuxt-link>

            <!-- Navegación por name -->
            <hr>
            <p>Navegación por name</p>
            <nuxt-link :to="{name: 'users'}">Users</nuxt-link>
            <nuxt-link :to="{name: 'users-one'}">One</nuxt-link>
            <nuxt-link :to="{name: 'contacto'}">Contacto</nuxt-link>
        </div>

        <!-- Navegación por métodos -->
        <hr>
        <p>Navegación por métodos</p>
        <div>
            <button @click="goto()">Users</button>
            <button @click="gotoObjeto()">One</button>
            <button @click="gotoObjetoParametro({name: 'contacto'})">Contacto</button>
        </div>

        <!-- NAVEGACIÓN DINÁMICA -->

        <!-- Navegación de lista de usuario por path -->
        <hr>
        <p>Navegación de lista de usuario por path</p>
        <div>
            <ul>
                <li v-for="user in users" :key="user.id">
                    <nuxt-link :to="`users/${user.id}`">{{ user.name }}</nuxt-link>
                </li>
            </ul>
        </div>

        <!-- Navegación de lista de usuario por name -->
        <hr>
        <p>Navegación de lista de usuario por name</p>
        <div>
            <ul>
                <li v-for="user in users" :key="user.id">
                    <nuxt-link :to="{name: 'users-id', params: {id: user.id}}">{{ user.name }}</nuxt-link>
                </li>
            </ul>
        </div>

        <!-- Navegación de lista de usuario por path -->
        <hr>
        <p>Navegación de lista de usuario por path</p>
        <div>
            <ul>
                <li v-for="product in products" :key="'product-' + product.id">
                    <nuxt-link :to="`/${product.categoria}`">{{ product.categoria }}</nuxt-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            users: [
                { name: 'Leticia', id: 1 },
                { name: 'Isabel', id: 2 },
                { name: 'María', id: 3 },
                { name: 'Rebeca', id: 4 }
            ],
            products: [
                { categoria: 'Carros', id: 1 },
                { categoria: 'Motos', id: 2 }
            ]
        }
    },
    methods: {
        goto() {
            this.$router.push('/users')
        },
        gotoObjeto() {
            this.$router.push({name: 'users-one'})
        },
        gotoObjetoParametro(parametro) {
            this.$router.push(parametro)
        }
    }
}
</script>