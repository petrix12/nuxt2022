export default function({store}) {
    console.log('Middleware en Soluciones++')
    if(store.state.categories.length == 0){
        store.dispatch('nuxtServerInit')
    }
}