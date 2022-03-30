<template>
    <div>
        <button @click="active = !active" v-text="active ? 'Ocultar' : 'Ver'">Ver</button>
        <transition name="slide">
            <div v-show="active">
                <slot/>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    data() {
        return {
            active: false
        }
    }
}
</script>