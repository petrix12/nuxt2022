<template>
    <div>
        <h1>Usuarios principales!!!</h1>
        <div>
            <ul>
                <li v-for="user in users" :key="user.id">
                    <nuxt-link :to="{name: 'users-id', params: {id: user.id}}">{{ user.name }}</nuxt-link>
                </li>
            </ul>
        </div>
        <nuxt-child />
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
            ]
        }
    }
}
</script>