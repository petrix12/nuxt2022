# Nuxt.js - Framework de Vue.js con Strapi GraphQL
+ [URL del curso en Udemy](https://www.udemy.com/course/nuxtjs-framework-de-vuejs-con-strapi-graphql)
+ [URL del repositorio en GitHub](https://github.com/petrix12/nuxt2022.git)


## Antes de iniciar:
1. Crear proyecto en la página de [GitHub](https://github.com) con el nombre: **nuxt2022**.
    + **Description**: Proyecto para seguir el curso de "Nuxt.js - Framework de Vue.js con Strapi GraphQL", creado por Juan Fernando Urrego y Santiago Catano Arango en Udemy.
    + **Public**.
2. En la ubicación raíz del proyecto en la terminal de la máquina local:
    + $ git init
    + $ git add .
    + $ git commit -m "Antes de iniciar"
    + $ git branch -M main
    + $ git remote add origin https://github.com/petrix12/nuxt2022.git
    + $ git push -u origin main


## Sección 1: Introducción
### 1. Introducción
+ **Contenido**: presentación del curso.

### 2. Canales de comunicación y aprendizaje
+ **Canales de comunicación y aprendizaje**:
    + 📑 Facebook: https://facebook.com/tutorialesatualcance
    + 📷 Instagram: https://instagram.com/tutorialesatualcance
    + 👨‍💼 LinkedIn: https://www.linkedin.com/in/juanfernandourrego
    + https://tutorialesatualcance.com
    + YouTube: https://youtube.com/c/tutorialesatualcance

### 3. ¿ Qué es NuxtJS ?
+ **Contenido**: sobre NuxtJS.

### 4. Strapi
+ **Contenido**: sobre Strapi.

### 5. ¿ Qué es GraphQL ?
+ **Contenido**: sobre GraphQL.

### 6. Instalación Node JS
1. Instalar [Node.js](https://nodejs.org/es)
   
### 7. Instalación Visual Studio Code
1. Instalar [Visual Studio Code](https://code.visualstudio.com)
2. Instalar las siguientes extensiones de VSCode:
    + Vetur
        + Pine Wu
        + Vue tooling for VS Code
    + GraphQL for VSCode
        + Kumar Harsh
        + GraphQL syntax highlighting, linting, auto-complete, and more!
    + Material Icon Theme
        + Philipp Kief
        + Material Design Icons for Visual Studio Code
    + htmltagwrap
        + Brad Gashler
        + Wraps selected code with HTML tags
    + Vue 3 Support - All In One
        + Eno Yao
        + Vue 2/3 Code Syntax Highlight, Snippets, Template Generator And Code Formatters Into Visual Studio Code.
3. Crear **index.html**:
    ```html
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <div id="container">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis animi minima facilis explicabo cupiditate at perspiciatis laborum eos vitae, alias atque ut. Laborum sequi natus facere iure quod voluptatibus sed?</p>
            <p>Incidunt a inventore quisquam, dolores nemo quasi quos iure qui eligendi sapiente culpa! Facere quaerat porro nam deserunt aut in tempore dignissimos ipsa beatae, aliquam, ut architecto id nisi voluptate?</p>
            <p>Iure minima a aut architecto nesciunt ab autem, enim asperiores consectetur tempore, id eius quia dicta temporibus omnis reiciendis nam vitae! Expedita nulla cum porro? Libero ad cupiditate iure magnam.</p>
            <ul>
                <li>item 1</li>
                <li>item 2</li>
                <li>item 3</li>
                <li>item 4</li>
                <li>item 5</li>
            </ul>
        </div>
    </body>
    </html>
    ```
    + **Nota 1**: se puede generar el cuerpo inicial del body con **div#container>(p*3>lorem)+ul>li*5>{item $}**.
    + **Nota 2**: al seleccionar algo y presionar **Alt+W** la selección queda encerrada en una etiqueta html.
4. Borrar **index.html**.

### 8. Modos de Renderizado Nuxt JS
+ **Contenido**: sobre los tipos de aplicaciones que podemos crear con Nuxt.js.

### 9. ¿Qué es renderizado del lado del servidor SSR ?
+ **Contenido**: sobre el renderizado del lado del servidor SSR.

### 10. ¿Qué es el generador de sitios estáticos SSG ?
+ **Contenido**: sobre el generador de sitios estáticos SSG.

### 11. SSR vs SSG
+ **Contenido**: sobre SSR vs SSG.

### 12. Crear un proyecto Nuxt JS
1. Crear proyecto Nuxt:
    + $ npx create-nuxt-app my-app
    + Ok to proceed? (y): **y**
    + ? Project name: (my-app): **ENTER**
    + Seleccionar: **> JavaScript**
    + Seleccionar: **> Npm**
    + Seleccionar: **> None**
    + Seleccionar: **>( ) Axios - Promise based HTTP client**
    + ? Linting tools: **ENTER**
    + ? Testing framework: **> None**
    + ? Rendering mode: **> Universal (SSR / SSG)**
    + ? Deployment target: **> Server (Node.js hosting)**
    + ? Development tools: **ENTER**
    + ? What is your GitHub username? (Pedro Bazó): **ENTER**
    + ? Version control system: **> Git**
2. Ejecutar el nuevo proyecto:
    + $ cd my-app
    + $ npm run dev

### 13. Diferencias entre 2.15 y 2.14
+ **Contenido**: sobre las diferencias en la estructura de un proyecto Nuxt.js entre las versiones 2.15 y 2.14.

### 14. Agregar la carpeta layout
1. Modificar **my-app\pages\index.vue**:
    ```vue
    <template>
        <div>Soluciones++</div>
    </template>

    <script>
    export default {
        name: 'IndexPage'
    }
    </script>
    ```
2. Crear layout **my-app\layouts\default.vue**:
    ```vue
    <template>
        <div>
            <header>Título</header>
                <Nuxt/>
            <footer>Pie</footer>
        </div>
    </template>
    ```

## Sección 2: Rutas con Nuxt JS
### 15. Cambios entre versiones
+ Proyecto del autor: **00recursos\my-app.zip**.
    + Para instalar las dependencias:
        + $ npm i
    + Para ejecutar proyecto:
        + $ npm run dev

### 16. Estructura de un proyecto Nuxt JS
+ **Contenido**: sobre la estructura de un proyecto en Nuxt.js.

### 17. Router Nuxt
+ **Contenido**: sobre como administra las rutas (name, path, component) Nuxt.js.

### 18. Carpeta Páginas
1. Modificar vista **my-app\pages\index.vue**:
    ```vue
    <template>
        <div class="container">
            <h1>Index</h1>
        </div>
    </template>
    ```
2. Crear vista **my-app\pages\users\index.vue**:
    ```vue
    <template>
        <div class="container">
            <h1>Index User</h1>
        </div>
    </template>
    ```
    + **Nota**: para acceder a la vista: http://localhost:3000/users
3. Crear vista **my-app\pages\users\one.vue**:
    ```vue
    <template>
        <div class="container">
            <h1>One</h1>
        </div>
    </template>
    ```
    + **Nota**: para acceder a la vista: http://localhost:3000/users/one
4. Crear vista **my-app\pages\contacto.vue**:
    ```vue
    <template>
        <div class="container">
            <h1>Contacto</h1>
        </div>
    </template>
    ```
    + **Nota**: para acceder a la vista: http://localhost:3000/contacto

### 19. Nuxt-link
1. Modificar vista **my-app\pages\index.vue**:
    ```vue
    <template>
        <div class="container">
            <h1>Index</h1>
            <div>
                <!-- Navegación por path -->
                <p>Navegación por path</p>
                <nuxt-link to='/users'>Users</nuxt-link>
                <nuxt-link to='/users/one'>One</nuxt-link>
                <nuxt-link to='/contacto'>Contacto</nuxt-link>
                <!-- Navegación por name -->
                <p>Navegación por name</p>
                <nuxt-link :to="{name: 'users'}">Users</nuxt-link>
                <nuxt-link :to="{name: 'users-one'}">One</nuxt-link>
                <nuxt-link :to="{name: 'contacto'}">Contacto</nuxt-link>
            </div>
        </div>
    </template>
    ```

### 20. Navegación por métodos
1. Modificar vista **my-app\pages\index.vue**:
    ```vue
    <template>
        <div class="container">
            <h1>Index</h1>
            <div>
                <!-- Navegación por path -->
                <p>Navegación por path</p>
                <nuxt-link to='/users'>Users</nuxt-link>
                <nuxt-link to='/users/one'>One</nuxt-link>
                <nuxt-link to='/contacto'>Contacto</nuxt-link>
                <!-- Navegación por name -->
                <p>Navegación por name</p>
                <nuxt-link :to="{name: 'users'}">Users</nuxt-link>
                <nuxt-link :to="{name: 'users-one'}">One</nuxt-link>
                <nuxt-link :to="{name: 'contacto'}">Contacto</nuxt-link>
            </div>
            <!-- Navegación por métodos -->
            <div>
                <button @click="goto()">Users</button>
                <button @click="gotoObjeto()">One</button>
                <button @click="gotoObjetoParametro({name: 'contacto'})">Contacto</button>
            </div>
        </div>
    </template>

    <script>
    export default {
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
    ```

### 21. Rutas dinámicas teoría
+ **Contenido**: sobre rutas dinámicas.

### 22. Rutas dinámicas práctica
1. Renombrar vista **my-app\pages\users\index.vue** a **my-app\pages\users\\_id.vue**.
2. Modificar vista **my-app\pages\users\\_id.vue**:
    ```vue
    <template>
        <div class="container">
            <h1>Index User</h1>
            <p>{{ $route.params }}</p>
            <p>{{ $route.params.id }}</p>
        </div>
    </template>
    ```
3. Crear vista **my-app\pages\\_products\index.vue**:
    ```vue
    <template>
        <div>
            <h1>Productos {{ $route.params.products }}</h1>
        </div>
    </template>
    ```
4. Crear vista **my-app\pages\\_products\list.vue**:
    ```vue
    <template>
        <div>
            <h1>Lista de {{ $route.params.products }}</h1>
            <ul>
                <li>item</li>
                <li>item</li>
                <li>item</li>
                <li>item</li>
                <li>item</li>
            </ul>
        </div>
    </template>
    ```
5. Para probar la vista anterior, en el navegador ir a:
    + http://localhost:3000/productos/list

### 23. Nuxt link rutas dinámicas
1. Modificar vista **my-app\pages\index.vue**:
    ```vue
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
    ```

### 24. Nuxt link rutas dinámicas parte 2
1. Modificar vista **my-app\pages\index.vue**:
    ```vue
    <template>
        <div class="container">
            ≡
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
                ≡
                products: [
                    { categoria: 'Carros', id: 1 },
                    { categoria: 'Motos', id: 2 }
                ]
            }
        },
        methods: {
            ≡
        }
    }
    </script>
    ```
2. Modificar vista **my-app\pages\\_products\index.vue**:
    ```vue
    <template>
        <div>
            <h1>Productos</h1>
            <p>
                <nuxt-link :to="`/${$route.params.products}/list`">Ver lista de {{ $route.params.products }}</nuxt-link>
            </p>
        </div>
    </template>
    ```

### 25. Navegación por métodos con parámetros
1. Modificar **my-app\pages\\_products\index.vue**:
    ```vue
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
    ```

### 26. Nuxt validate
1. Modificar vista **my-app\pages\users\\_id.vue**:
    ```vue
    ≡
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
    ```

### 27. Páginas anidadas
1. Crear vista **my-app\pages\users.vue**:
    ```vue
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
    ```

## Sección 3: Layouts, páginas y componentes
### 28. Sitios web visitados en la sección
1. Sitios web de interes:
    + https://fonts.google.com/specimen/Noto+Sans+JP?query=noto
    + https://developers.google.com/fonts/docs/css2

### 29. Layouts, páginas y componentes
+ **Contenido**: sobre layouts, páginas y componentes en Nuxt.js.

### 30. Carpeta layout
1. Modificar layout **my-app\layouts\default.vue**:
    ```vue
    <template>
        <div>
            <div>
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

    <script>
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
        float: left;
    }

    li a {
        display: block;
        padding: 8px;
        background-color: rgb(109, 109, 182);
        color: #fff;
    }

    footer{
        position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;
        background-color: rgb(109, 109, 182);
        color: #fff;
        text-align: center;
    }
    </style>
    ```

### 31. Agregar un nuevo layout
1. Crear layout **my-app\layouts\contacto.vue**:
    ```vue
    <template>
        <div class="container">
            <h1>Layout Contacto</h1>
        </div>
    </template>
    ```
2. Modificar viista **my-app\pages\contacto.vue**:
    ```vue
    ≡
    <script>
    export default {
        layout: "contacto"
    }
    </script>
    ```

### 32. CSS en diferentes layouts
1. Modificar layout **my-app\layouts\contacto.vue**:
    ```vue
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
    ```
    + **Nota**: partir del layout **my-app\layouts\default.vue**.

### 33. Página de error
1. Crear layout **my-app\layouts\error.vue**:
    ```vue
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
    ```
2. Crear layout **my-app\layouts\empty.vue**:
    ```vue
    <template>
        <div>
            <Nuxt/>
        </div>
    </template>
    ```

### 34. CSS global
1. Crear archivo de estilo **my-app\assets\main.css**:
    ```css
    body {
        background-color: rgb(214, 216, 224);
    }

    ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        overflow: hidden;
    }

    li {
        float: left;
    }

    li a {
        display: block;
        padding: 8px;
        background-color: rgb(109, 109, 182);
        color: #fff;
    }

    footer{
        position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;
        background-color: rgb(109, 109, 182);
        color: #fff;
        text-align: center;
    }

    nav {
        background-color: rgb(109, 109, 182);
        min-height: 40px;
        line-height: 40px;
    }
    ```
2. Vicular el nuevo archivo de estilo con el proyecto **my-app** en **my-app\nuxt.config.js**:
    ```js
    ≡
    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        '@/assets/main.css'
    ],
    ≡
    ```
3. Modificar layout **my-app\layouts\default.vue**:
    ```vue
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
    ```

### 35. Importar fuentes en la configuración Nuxt
1. Ir a [Google Fonts](https://fonts.google.com) y seleccionar una fuente y obtener un link cualquiera:
    ```html
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Palette+Mosaic&family=Roboto:wght@100&display=swap" rel="stylesheet">
    ```
2. Agregar la fuente seleccionada en **my-app\nuxt.config.js**:
    ```js
    ≡
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        ≡
        link: [
            ≡
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Palette+Mosaic&family=Roboto:wght@100&display=swap' }
        ]
    },
    ≡
    ```
3. Modificar archivo de estilos **my-app\assets\main.css**:
    ```css
    ≡
    h1 {
        text-align: center;
        margin: 20px 0px;
        font-family: 'Palette Mosaic', 'sans-serif';
    }
    ```

### 36. Transiciones de páginas
1. Modificar archivo de estilos **my-app\assets\main.css**:
    ```css
    ≡
    .page-enter,
    .page-leave-to {
        opacity: 0;
    }

    .page-enter-active,
    .page-leave-active {
        transition: opacity 0.5s;
    }
    ```
2. Modificar **my-app\nuxt.config.js**:
    ```js
    ≡
    pageTransition: 'page',
    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        '@/assets/main.css'
    ],
    ≡
    ```

### 37. Transiciones de layout
1. Modificar archivo de estilos **my-app\assets\main.css**:
    ```css
    ≡
    .slide-enter,
    .slide-leave-to {
        opacity: 0;
        transform: translateX(10px);
    }

    .slide-enter-active,
    .slide-leave-active {
        transition: all 0.5s ease;
    }
    ≡
    ```
2. Modificar **my-app\nuxt.config.js**:
    ```js
    ≡
    pageTransition: 'page',
    layoutTransition: 'slide',
    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        '@/assets/main.css'
    ],
    ≡
    ```

### 38. Carpeta Componentes
1. Crear componente **my-app\components\cardInfo.vue**:
    ```vue
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
    ```
2. Modificar vista **my-app\pages\index.vue**:
    ```vue
    <template>
        <div class="container">
            ≡
            <div>
                <card-info>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, dolor hic voluptas aut numquam vel quo repudiandae quos exercitationem, voluptate earum ut consequatur quisquam error culpa libero ullam? Labore, nobis!</p>
                    <p>Tempora animi omnis praesentium, maiores excepturi minus esse modi harum temporibus tenetur corporis, fuga hic atque. Adipisci neque voluptates maiores omnis, molestiae odit impedit harum voluptatibus, labore nisi, quos deserunt!</p>
                </card-info>
            </div>
        </div>
    </template>
    ≡
    ```
3. Modificar vista **my-app\pages\users\\_id.vue**:
    ```vue
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
    ≡
    ```

### 39. Archivos del proyecto sección 3
+ Proyecto autor: **00recursos\test-nuxt.zip**.


## Sección 4: Strapi GraphQL
### 40. Sitios web visitados en la sección
1. Páginas de interes:
    + https://swapi.dev
    + https://hoppscotch.io/es
    + https://graphql.org/swapi-graphql
    + https://strapi.io

### 41. introducción a GraphQL
+ **Contenido**: introducción a GraphQL.

### 42. Nuevas versiones de Strapi
+ No utilizar plantilla.
+ En las últimas versiones de Strapi, al momento de crear el proyecto en el tipo de instalación quickStart, strapi preguntará si quieres utilizar una plantilla. Debes responder NO, ya que nosotros crearemos nuestras propias colecciones.

### 43. Instalación de Strapi
1. Crear proyecto **backend** de strapi:
    + $ npx create-strapi-app backend
    + Ok to proceed? (y): **y**.
    + ? Choose your installation type: **> Quickstart (recommended)**.

### 44. Admin panel de Strapi
1. Luego de la instalación del proyecto **backend** se desplegará una página (http://localhost:1337/admin/auth/register-admin) para registrarse.
2. Credenciales obtenidas:
    + URL: http://localhost:1337/admin
    + Usuario: bazo.pedro@gmail.com
    + Clave: *****
3. Para levantar el servicio:
    + cd backend
    + yarn develop

### 45. Categorías archivo txt
1. Recurso **00recursos\categories.txt**:
    ```json
    {
        "data": {
            "categories": [
                {
                    "name": "Aperitivos",
                    "icon": "mdi-silverware-fork-knife",
                    "img": "https://cdn.pixabay.com/photo/2020/02/11/15/41/shrimp-4839919_960_720.jpg",
                    "description": "Para abrir el apetito",
                    "slug": "aperitivos"
                },
                {
                    "name": "Platos principales",
                    "icon": "mdi-pasta",
                    "img": "https://live.staticflickr.com/65535/51016907195_4460dcfd50_z.jpg",
                    "description": "Para invitar buenos amigos",
                    "slug": "platos-principales"
                },
                {
                    "name": "Desayunos",
                    "icon": "mdi-food-croissant",
                    "img": "https://live.staticflickr.com/65535/51016925505_36f9013ccd_z.jpg",
                    "description": "Dan ganas de madrugar",
                    "slug": "desayunos"
                },
                {
                    "name": "Postres",
                    "icon": "mdi-cookie",
                    "img": "https://live.staticflickr.com/65535/51082651598_7a69ed6e83_z.jpg",
                    "description": "El postre es obligatorio no importa la dieta!",
                    "slug": "postres"
                },
                {
                    "name": "Sopas",
                    "icon": "mdi-bowl-mix",
                    "img": "https://live.staticflickr.com/65535/51086110886_d236fc6fe9_z.jpg",
                    "description": "Siempre cae bien igual si hace 36 grados a la sombra.",
                    "slug": "sopas"
                },
                {
                    "name": "Bebidas",
                    "icon": "mdi-glass-cocktail",
                    "img": "https://live.staticflickr.com/65535/51086110856_bd6330d3bf_z.jpg",
                    "description": "Pide un taxi! si bebes mucho.",
                    "slug": "bebidas"
                },
                {
                    "name": "Veganas",
                    "icon": "mdi-leaf",
                    "img": "https://cdn.pixabay.com/photo/2021/02/18/23/29/avocado-6028656_960_720.jpg",
                    "description": "Contra el calentamiento global! al menos una vez a la semana.",
                    "slug": "veganas"
                },
                {
                    "name": "Rapidas",
                    "icon": "mdi-hamburger",
                    "img": "https://live.staticflickr.com/65535/51082653073_b8f86c8634_z.jpg",
                    "description": "Lo ideal es no morir de hambre.",
                    "slug": "rapidas"
                }
            ]
        }
    }
    ```

### 46. Versión V4 strapi
+ **Importante si tienes la versión V4 de Strapi**: En el siguiente video vamos a probar un endPoint de Strapi, a partir de la versión V4 hay 2 pequeñas modificaciones, aquí tienes la lista de cambios en caso tal que estes utilizando esta versión V4.
1. Al momento de crear la colección debes determinar el nombre del campo en singular y plural ya que al hacer consultas si utilizas el plural (trae como respuesta un array de objetos con todas las entradas) y si quieres un dato especifico el singular (trae como respuesta un solo objeto con una entrada). Tu decides como quires nombrar el campo en singular o plural.
2. El endpoint cambia se debe agregar la palabra api al url (http://localhost:1337/api/categories), el url lo puedes observar al momento de cambiar los permisos.
+ **Nota final**: La versión V4 no tiene cambio de idioma por el momento, siempre estará en inglés.

### 47. Tipo de colección de Strapi
1. Ir a **http://localhost:1337/admin**.
2. Click en **Create your first Content type**.
3. Click en **Create new collection type**.
4. En **Display name** ingresar **categories** y click en **Continuar**.
    + En caso de ser necesario establecer:
        + API ID (Singular): **category**
        + API ID (Plural): **categories**
5. En **Select a field for your collection type** seleccionar **Text** y luego en **Name** ingresar **name** y click en **Add another field**.
6. En **Select a field for your collection type** seleccionar **Text** y luego en **Name** ingresar **icon** y click en **Add another field**.
7. En **Select a field for your collection type** seleccionar **Text** y luego en **Name** ingresar **img** y click en **Add another field**.
8. En **Select a field for your collection type** seleccionar **Text** y luego en **Name** ingresar **description**, seleccionar **Long text** y click en **Add another field**.
9. En **Select a field for your collection type** seleccionar **UID** y luego en **Name** ingresar **slug**, en **Attached field
** enlazar a **name** y click en **Finish**.
10. Click en **Save**.
11. Seleccionar la nueva calección **categorias** e ingresar los siguientes documentos dando click en **Create new entry**:
    ```json
    {
        "name": "Test categoría",
        "icon": "icon",
        "img": "no hay",
        "description": "bla bla bla bla",
    },
    {
        "name": "Otra",
        "icon": "otra",
        "img": "no hay",
        "description": "bla bla bla bla",
    }
    ```
    + **Nota**: para registrarlos definitivamente dar click en **Save** y luego en **Publish**.
12. Click en **Settings** luego en **Roles** (USERS & PERMISSIONS PLUGIN).
13. Editar **Public** y establecer los siguientes permisos:
    + Category:
        + find
        + findOne
14. Click en **Save**.
15. Ir a **https://hoppscotch.io/es**.
16. En **GET** ingresar **http://localhost:1337/api/categories** y click en **Enviar**.
17. En **GET** ingresar **http://localhost:1337/api/categories/1** y click en **Enviar**.

### 48. Versión V4 strapi GraphQL
1. Link de referencia:
    + https://docs.strapi.io/developer-docs/latest/plugins/graphql.html#usage
2. Para la version V4 de strapi el marketplace no ha sido habilitado, entonces se debe hacer la instalación manual de GraphQL.
3. En la carpeta raíz de tu proyecto (**backend**) debes ingresar el siguiente comando:
    + $ npm run strapi install graphql
    + **Nota**: Asegúrate que el servidor no este corriendo.
4. En el siguiente video haremos la instalación por código.

### 49. Instalación de GraphQL en Strapi
1. Parar el servidor **backend**.
2. Ejecutar:
    + $ npm run strapi install graphql
3. Si el servidor no inicia solo luego de la instalación de grphql, ejecutar:
    + $ npm run develop

### 50. Versión V3 vs V4 strapi GraphQL
+ En la versión V4 de Strapi se adjuntan nuevas indexaciones (data y attributes) por lo que el GraphQL cambia un poco.
+ Aquí puedes ver el comparativo:
    + V3 => Es directa y adjunta todos los datos en un solo index
    ```graphql
    query{
        categories{
            id
            name
            icon
        }
    }
    ```
    + V4 => Añade un data como hijo que puede devolver el id y los atributos como valores
    ```graphql
    query{
        categories{
            data{
                id
                attributes{
                    name
                    slug
                }
            }
        }
    }
    ```
+ En el curso se utiliza la versión V3, no hay ningún problema si tu utilizas la versión V4, tendrás que hacer pequeñas modificaciones que estarán escritas antes o despuésde cada video.
+ Recuerda que si tienes problemas puedes preguntarnos y con gusto te ayudaremos.
+ **Nota**: La versión 4 de Strapi salió oficialmente el 30 de Noviembre de 2021, es bastante buena y estable pero, lastimosamente en el GraphQL han hecho unos cambios que complican un poco los querys.
+ La comunidad de programadores ha empezado a enviar sus quejas, esperamos la evolución de la comunidad. Por el momento el curso se ha actualizado también para dar soporte a la Versión 4.

### 51. Playground de GraphQL
1. En un navegador ir al playground de GraphQL:
    + http://localhost:1337/graphql
2. Realizar las siguientes consultas:
    ```graphql
    query{
        categories{
            data{
                id
                attributes{
                    name
                    icon
                }
            }
        }
    }
    ```

### 52. Recetas archivos txt
+ Recurso con información dummy de las recetas **00recursos\recipes.txt**:
    ```json
    {
        "data": {
            "recipes": [
                {
                    "name": "Cazuela dulce",
                    "duration": 15,
                    "servings": 2,
                    "description": "Es como una cazuela pero con helado y chocolate",
                    "ingredients": [
                        "400 gramos de plátanos para el helado",
                        "Congul gratis, que bien!",
                        "100 gramos de fresas, que mal!",
                        "3 cucharadas soperas de cacao en polvo, que bien!",
                        "benzoato de potasio..............que mal!",
                        "Frutas de nuestra preferencia"
                    ],
                    "steps": [
                        "El platano se pela ... in consequuntur ullam, assumenda temporibus error quis vitae enim voluptates aut illo cupiditate minima, unde sint quia nostrum inventore saepe velit labore corrupti. Libero maxime non fuga illum cumque.",
                        "Voluptatibus quidem natus reprehenderit dicta officia dolor veritatis incidunt qui, sit nisi fuga soluta. Vero deleniti autem et adipisci nisi voluptates dolores eos ipsam! Consequuntur iure eos nam repudiandae vero?"
                    ],
                    "img": "https://live.staticflickr.com/65535/51082652518_dfed9ede83_c.jpg"
                },
                {
                    "name": "Goulash",
                    "duration": 30,
                    "servings": 4,
                    "description": "El goulash o gulash o wulashhh es Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias maxime blanditiis laboriosam, esse sapiente ad iste dolores, beatae accusamus cum eaque ex quibusdam. Inventore quam quas vel officia porro asperiores?",
                    "ingredients": [
                        "1 kg de ….",
                        "4 dientes de dragón",
                        "2 cebollas grande o cebolletas",
                        "1 puerro",
                        "4 tomates grandes",
                        "1 ramita de perejil fresco",
                        "1 cucharada de comino en polvo",
                        "1 cucharada sopera de huevo de dodo"
                    ],
                    "steps": [
                        "Primero tienes nimi in consequuntur ullam, assumenda temporibus error quis vitae enim voluptates aut illo cupiditate minima, unde sint quia nostrum inventore saepe velit labore corrupti. Libero maxime non fuga illum cumque.",
                        "Voluptatibus quidem natus reprehenderit dicta officia dolor veritatis incidunt qui, sit nisi fuga soluta. Vero deleniti autem et adipisci nisi voluptates dolores eos ipsam! Consequuntur iure eos nam repudiandae vero?",
                        "Una vez tienes el unicornio de las piernas consequatur repellat error, repudiandae vel necessitatibus praesentium a cum, quae similique mollitia ipsum numquam aliquam fugiat vero. Facere delectus aspernatur explicabo quas omnis quisquam, voluptates cum maiores.",
                        "Hic, dolores reiciendis laborum veritatis nisi recusandae labore cupiditate vero quos asperiores dolor dolorem architecto laudantium voluptatem, sequi possimus ad, illo in incidunt praesentium obcaecati sed quasi! Alias, at reprehenderit."
                    ],
                    "img": "https://cdn.pixabay.com/photo/2021/02/27/10/05/goulash-6054124_960_720.jpg"
                },
                {
                    "name": "Galletas",
                    "duration": 20,
                    "servings": 78,
                    "description": "Las galletas de la abuela, dolor sit amet consectetur adipisicing elit. Officiis illo fugit nulla officia dicta, cum reprehenderit voluptatem sunt veritatis consequuntur deleniti. Sed explicabo suscipit fugit perspiciatis corporis enim ea dolor.",
                    "ingredients": [
                        "2 tazas de harina (280 gramos)",
                        "5 taza de azúcar ¡cuidado!",
                        "125 gramos de mantequilla.",
                        "1 huevo.",
                        "1 cucharadita de esencia de vainilla (opcional)",
                        "1 tarro de dulce de leche o virutas de colores para decorar."
                    ],
                    "steps": [
                        "por internet, consectetur adipisicing elit. Voluptate doloribus nemo eaque consequuntur laudantium amet recusandae, in autem! Beatae quos assumenda consequuntur modi a sed quasi architecto deserunt cumque porro.",
                        "Voluptatem non sunt sint! Deleniti, hic culpa, voluptate sequi qui, architecto blanditiis voluptates nobis incidunt commodi in. Ipsam non mollitia pariatur minus odio dolor nisi ab, a voluptatibus odit itaque.",
                        "Deserunt vel reprehenderit dicta atque praesentium in omnis sint ex sit adipisci totam aliquid quae ullam dignissimos minus voluptates eum beatae voluptatum quam, tempore itaque ut explicabo quo? Fugiat, quos.",
                        "Quisquam, nesciunt magni perspiciatis non amet delectus molestias eos culpa explicabo magnam consequatur earum officia harum beatae natus, esse qui. Provident neque harum accusantium nostrum veniam, iste quaerat hic similique?",
                        "Repudiandae modi laborum ut, similique vel neque rem, et adipisci magnam commodi maiores, nihil possimus reiciendis vitae quae iste corporis expedita magni? Ex, ad cum aliquam sequi beatae expedita soluta."
                    ],
                    "img": "https://cdn.pixabay.com/photo/2020/11/16/17/03/cookies-5749589_960_720.jpg"
                },
                {
                    "name": "Costillas",
                    "duration": 5,
                    "servings": 1,
                    "description": "Las costillas vienen de un animal mas pequeno con mas patas consectetur adipisicing elit. Sequi suscipit accusantium saepe aliquam deleniti voluptate est veniam praesentium voluptatem repellendus nostrum, debitis delectus eligendi, quidem dolores ducimus nam provident asperiores?",
                    "ingredients": [
                        "Costilla de Cerdo",
                        "Salsa Barbacoa al gusto",
                        "Pimentón dulce ",
                        "Hierbas"
                    ],
                    "steps": [
                        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus ut at, quasi ad quam, sed blanditiis a totam, eius ratione maiores corrupti reprehenderit quis ullam aliquam ex iusto! Nostrum, excepturi?",
                        "Los Mamuts ya no existen. Ipsum impedit, magnam mollitia eos repellendus veniam necessitatibus iste, unde saepe ex tempore facilis neque odio asperiores, fugiat repellat. Impedit reiciendis vitae exercitationem numquam consequuntur aperiam vel."
                    ],
                    "img": "https://cdn.pixabay.com/photo/2020/06/25/21/24/spare-ribs-5340942_960_720.jpg"
                },
                {
                    "name": "Pollo",
                    "duration": 20,
                    "servings": 4,
                    "description": "El pollo maiores totam saepe voluptate quibusdam ipsum. Provident deserunt dignissimos debitis ut sequi, qui dolores.",
                    "ingredients": [
                        "1 cucharadita de ajo en polvo, para el marinado.",
                        "1 cucharadita de mostaza, para el marinado.",
                        "suficiente de sal.",
                        "suficiente de pimienta.",
                        "6 muslos de pollo, con piel."
                    ],
                    "steps": [
                        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus ut at, quasi ad quam, sed blanditiis a totam, eius ratione maiores corrupti reprehenderit quis ullam aliquam ex iusto! Nostrum, excepturi?",
                        "Los Mamuts ya no existen. Ipsum impedit, magnam mollitia eos repellendus veniam necessitatibus iste, unde saepe ex tempore facilis neque odio asperiores, fugiat repellat. Impedit reiciendis vitae exercitationem numquam consequuntur aperiam vel."
                    ],
                    "img": "https://cdn.pixabay.com/photo/2021/01/27/13/08/chicken-5954894_960_720.jpg"
                },
                {
                    "name": "Pasta",
                    "duration": 180,
                    "servings": 20,
                    "description": "La típica pasta de soltero pero con camarones",
                    "ingredients": [
                        "1 lb de pasta",
                        "2 cucharadas de aceite de oliva",
                        "4 dientes de ajo, finamente picados",
                        "1 cebolla blanca, finamente picada",
                        "1 lb de camarones",
                        "2 cucharadas de pasta de tomate"
                    ],
                    "steps": [
                        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus ut at, quasi ad quam, sed blanditiis a totam, eius ratione maiores corrupti reprehenderit quis ullam aliquam ex iusto! Nostrum, excepturi?",
                        "Los Mamuts ya no existen. Ipsum impedit, magnam mollitia eos repellendus veniam necessitatibus iste, unde saepe ex tempore facilis neque odio asperiores, fugiat repellat. Impedit reiciendis vitae exercitationem numquam consequuntur aperiam vel."
                    ],
                    "img": "https://cdn.pixabay.com/photo/2018/07/18/19/12/spaghetti-3547078_960_720.jpg"
                },
                {
                    "name": "Sopa de calabaza",
                    "duration": 20,
                    "servings": 3,
                    "description": "blab bla bla",
                    "ingredients": [
                        "calabaza",
                        "agua",
                        "sal"
                    ],
                    "steps": [
                        "Temporibus ipsum, facere cumque officia cum nostrum nemo a. Molestias maiores consequuntur atque possimus accusantium velit pariatur minima at modi enim inventore, saepe aspernatur perspiciatis mollitia facilis, praesentium suscipit voluptates!",
                        "litia molestias. Nemo illum id minima! Consequuntur libero pariatur ipsum obcaecati, expedita veniam? Totam, consequatur."
                    ],
                    "img": "https://cdn.pixabay.com/photo/2020/09/26/20/37/soup-5605053_960_720.jpg"
                },
                {
                    "name": "Avena con frutas",
                    "duration": 15,
                    "servings": 1,
                    "description": "es avena",
                    "ingredients": [
                        "avena",
                        "fresas",
                        "bananos"
                    ],
                    "steps": [
                        "Temporibus ipsum, facere cumque officia cum nostrum nemo a. Molestias maiores consequuntur atque possimus accusantium velit pariatur minima at modi enim inventore, saepe aspernatur perspiciatis mollitia facilis, praesentium suscipit voluptates!"
                    ],
                    "img": "https://cdn.pixabay.com/photo/2018/02/27/18/41/muesli-3186256_960_720.jpg"
                }
            ]
        }
    }
    ```

### 53. Tipo de Colección recetas
+ https://materialdesignicons.com
+ https://www.instagram.com/olivia.orrego.ph/?hl=es
1. Ir a Strapi en **Content-Type Builder** (http://localhost:1337/admin/plugins/content-type-builder/content-types) y crear una nueva colección con la siguiente estructura:
    ```json
    "recipes": {
        "name": {
            "collection type": "Text",
            "Type": "Short text"
        },
        "duration": {
            "collection type": "Number",
            "Number format": "integer"
        },
        "servings": {
            "collection type": "Number",
            "Number format": "integer"
        },
        "img": {
            "collection type": "Text",
            "Type": "Short text"
        },
        "description": {
            "collection type": "Text",
            "Type": "Long text"
        },
        "ingredients": {
            "collection type": "JSON"
        },
        "steps": {
            "collection type": "JSON"
        },
        "likes": {
            "collection type": "Number",
            "Number format": "big integer"
        }
    },
    ```
2. Establecer relación:
    + Luego de añadir la colección anterior dar click **Add another field to this collection type**.
    + En **Select a field for your collection type** seleccionar **Relation**.
    + Establecer la relación con **Categories**.
    + En tipo de ralación seleccionar: **category has many recipes**.
    + Dar click en **Finish**.
    + Dar click en **Save**.

### 54. Borrador y Publicado
1. Cargar las colecciones **categories** y **recipes** con los datos de prueba suministrados anteriormente.
2. Agregar un nuevo documento a la colección **recipes** con el panel de Strapi:
    ```json
    {
        "name": "Sopas Calientes"
    }
    ```
3. Presionar el botón **Save**.
4. Para quitar la condición de **Draft** (Borrador):
    + Ir a **Content-Type Builder**.
    + En **COLLECTION TYPES** seleccionar **Categories** y luego editar.
    + En configuración avanzada desactivar la opción del sistema de borrador.

### 55. Valores por defecto de Strapi
1. Realizar consulta en http://localhost:1337/graphql:
    ```graphql
    query {
        recipes {
            data {
                attributes{
                    name
                    description
                    duration
                    ingredients
                }
            }
        }
    }
    ```
2. Establecer permisos en Strapi de:
    + find
    + findOne
3. En el atributo **likes** establecer 0 como valor por defecto en configuración avanzada.


## Sección 5: GraphQL
### 56. Esquemas y tipos
+ **Contenido**: sobre esquemas y tipos en GraphQL.

### 57. Queries (Pedidos)
1. Realizar la siguiente consulta en http://localhost:1337/graphql:
    ```graphql
    query {
        categories {
            data {
                id
                attributes{
                    name
                    recipes {
                        data {
                            id
                            attributes{
                                name
                            }
                        }
                    }
                }
            }
        }
    }
    ```

### 58. Strapi V4 (Pedidos) GraphQL
+ Con las nuevas indexaciones que se adjuntan en la versión 4 nuestro GraphQL quedaría de la siguiente forma.
    ```graphql
    query{
        categories{
            data{
                id
                attributes{
                    name
                    recipes{
                        data{
                            id
                            attributes{
                                name
                            }
                        }
                    }
                }
            }
        }
    }
    ```
+ Recuerda que en el playground siempre puedes mirar la documentación para ver que tipo de datos y la estructura de tu GraphQL

### 59. Argumentos y variables
+ **Contenido**: sobre argumentos y variables en GraphQL.

### 60. Pedidos de una sola entrada
1. Realizar petición GraphQL:
    ```graphql
    query {
        recipe(id:1) {
            data {
                attributes{
                    name
                    steps
                    ingredients
                }
            }
        }
    }
    ```
2. Realizar petición GraphQL:
    ```graphql
    query($id:ID!) {
        recipe(id:$id) {
            data {
                attributes{
                    name
                    steps
                    ingredients
                }
            }
        }
    }
    ```
    Query variables:
    ```json
    {"id":3}
    ```

### 61. Strapi V4 (Pedido de una sola entrada) GraphQL
+ Con las nuevas indexaciones que se adjuntan en la versión 4 nuestro GraphQL quedaría de la siguiente forma:
    ```graphql
    query($id:ID!){
        recipe(id:$id){
            data{
                id
                attributes{
                    name
                    steps
                    ingredients
                }
            }
        }
    }
    ```
    Query variables: {id:1}
+ **Nota**: Recuerda utilizar el nombre en singular que agregaste al momento de crear la colección. Recuerda que en el playground siempre puedes mirar la documentación para ver que tipo de datos y la estructura de tu GraphQL

### 62. Mutaciones
1. Crear un usuario en Strapi:
    + Ir a **Content Manager** y luego a la colección **User**.
    + Crear un usuario:
        + username: prueba1
        + email: prueba1@gmail.com
        + password: 12345678
        + confirmed: true
        + blocked: false
    + ggg
2. Realizar la siguiente transacción GraphQL:
    ```graphql
    mutation{
        login(
            input:{
                identifier:"prueba1"
                password:"12345678"
            }
        ){
            jwt
        }
    }
    ```
3. Obtener token:
    ```json
    {
        "data": {
            "login": {
                "jwt": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjQ4ODIwODM4LCJleHAiOjE2NTE0MTI4Mzh9.C_dzYPRkB1rk8tpxKizWxuNsMA4_1wpVD_kbodOPWis"
            }
        }
    }
    ```
+ **Nota**: el tipo de token de Strapi en **Bearer**.

### 63. Mutaciones V3 vs V4 Strapi GrapQL
+ En la versión 4 de Strapi se remueve el input y queda solo el data.
+ Siempre que ejecutamos una mutación debemos notificar que valores queremos en la respuesta, en la versión 4 solo debemos especificar data, aquí puedes ver un comparativo.
    + V3 => Tiene un input que contiene un data con los valores a crear y devuelve el query de receta:
    ```graphql
    mutation($name:String!, $duration:Int!){
        createRecipe(
            input:{
                data:{
                    name:$name
                    duration:$duration
                }
            }
        ){
            recipe{
                id
                name
                duration
            }
        }
    }
    ```
    + V4 => Se remueve el input y en los valores de retorno se agrega el data
    ```graphql
    mutation($name:String!, $duration:Int!){
        createRecipe(
            data:{
                name:$name
                duration:$duration
            }
        ){
            data{
                id
                attributes{
                    name
                    duration
                }
            }
        }
    }
    ```

### 64. Creación de contenido
1. Establecer permisos de usuarios en Strapi:
    + Ir a **Settings**.
    + En **USERS & PERMISSIONS PLUGIN** seleccionar **Roles**.
    + Seleccionar **Authenticated**.
    + En **Users-permissions** dar todos los permisos.
2. Realizar la siguiente petición GraphQL:
    ```graphql
    mutation{
        createRecipe(
            data:{
                name:"Pan"
                duration:10
            }
        ){
            data{
                id
                attributes{
                    name
                    duration
                }
            }
        }
    }
    ```
    HTTP Headers:
    ```json
    {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjQ4ODIwODM4LCJleHAiOjE2NTE0MTI4Mzh9.C_dzYPRkB1rk8tpxKizWxuNsMA4_1wpVD_kbodOPWis"
    }
    ```
3. Realizar la siguiente petición GraphQL:
    ```graphql
    mutation($name:String!, $duration:Int!){
        createRecipe(
            data:{
                name:$name
                duration:$duration
            }
        ){
            data{
                id
                attributes{
                    name
                    duration
                }
            }
        }
    }
    ```
    HTTP Headers:
    ```json
    {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjQ4ODIwODM4LCJleHAiOjE2NTE0MTI4Mzh9.C_dzYPRkB1rk8tpxKizWxuNsMA4_1wpVD_kbodOPWis"
    }
    ```
    Query Variables:
    ```json
    {
        "name": "Perro",
        "duration": 2
    }
    ```

### 65. Modificación de contenido
1. Realizar la siguiente petición GraphQL:
    ```graphql
    mutation {
        updateRecipe(
            id: 8, 
            data: { 
                name: "Hot dog"
            }
        ) {
            data {
                id
                attributes {
                    name
                    duration
                }
            }
        }
    }
    ```
    HTTP Headers:
    ```json
    {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjQ4ODIwODM4LCJleHAiOjE2NTE0MTI4Mzh9.C_dzYPRkB1rk8tpxKizWxuNsMA4_1wpVD_kbodOPWis"
    }
    ```

### 66. Modificación de contenido Strapi V4 GraphQL
+ En la versión 4, se elimina el input y la palabra where ya no es necesaria. Para indicar donde quieres hacer los cambios debes simplemente indicar el id de la entrada con id. El retorno de los datos sigue igual en todas las mutaciones.
+ Ejemplo:
    ```graphql
    mutation($id:ID!,$name:String!, $duration:Int!){
        updateRecipe(
            id:$id,
            data:{
                name:$name
                duration:$duration
            }
        ){
            data{
                id
                attributes{
                    name
                    duration
                }
            }
        }
    }
    ```

### 67. Borrar
1. Realizar la siguiente petición GraphQL:
    ```graphql
    mutation {
        deleteRecipe(
            id: 7
        ) {
            data {
                id
                attributes {
                    name
                }
            }
        }
    }
    ```
    HTTP Headers:
    ```json
    {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjQ4ODIwODM4LCJleHAiOjE2NTE0MTI4Mzh9.C_dzYPRkB1rk8tpxKizWxuNsMA4_1wpVD_kbodOPWis"
    }
    ```

### 68. Borrar en Strapi V4 GraphQL
+ En la versión 4, borrar es mucho más fácil ya que simplemente se pide el id de la entrada a borrar.
+ El retorno de datos es el mismo en las mutaciones.
+ Ejemplo:
    ```graphql
    mutation{
        deleteRecipe(id:5){
            data{
                id
                attributes{
                    name
                }
            }
        }
    }
    ```


## Sección 6: Proyecto Nuxt + Vuetify
### 69. Sitios web visitados en la sección
+ Material de apoyo:
    + Vuetify: https://vuetifyjs.com/en
    + Nuxt modules: https://modules.nuxtjs.org
    + Material Design Icons: https://materialdesignicons.com
    + Apollo: https://github.com/nuxt-community/apollo-module
    + Api Vuetify:
        + https://vuetifyjs.com/en/api/v-navigation-drawer
        + https://vuetifyjs.com/en/api/v-app-bar
        + https://vuetifyjs.com/en/styles/display
        + https://vuetifyjs.com/en/components/footer
        + https://vuetifyjs.com/en/styles/text-and-typography
        + https://vuetifyjs.com/en/api/v-row

### 70. Nuxt y Vuetify
1. Crear proyecto Nuxt **frontend**:
    + $ npx create-nuxt-app frontend
    + ? Project name: (frontend): **ENTER**.
    + ? Programming language: **> JavaScript**.
    + ? Package manager: **> Npm**.
    + ? UI framework: **> Vuetify.js**.
    + ? Nuxt.js modules: **ENTER**.
    + ? Linting tools: **ENTER**.
    + ? Testing framework: **> None**.
    + ? Rendering mode: **> Universal (SSR / SSG)**.
    + ? Deployment target: **Static (Static/Jamstack hosting)**.
    + ? Development tools: **ENTER**.
    + ? What is your GitHub username? (pedro bazó): **ENTER**.
    + ? Version control system: **> Git**.

### 71. Configurar el proyecto
1. Modificar **frontend\nuxt.config.js**:
    ```js
    ≡
    // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
    vuetify: {
        ≡
        theme: {
            dark: false,
            themes: {
                dark: {
                    ≡
                }
            }
        }
    },
    ≡
    ```
2. Modificar layout **frontend\layouts\default.vue**:
    ```vue
    <template>
        <v-app>
            ≡
        </v-app>
    </template>
    ≡
    ```

### 72. Vuetify
1. Eliminar página **frontend\pages\inspire.vue**.
2. Modificar página **frontend\pages\index.vue**:
    ```vue

    ```
3. Modificar layout **frontend\layouts\default.vue**:
    ```vue
    <template>
        <v-app>
            <v-main>
                <nuxt/>
            </v-main>
        </v-app>
    </template>

    <script>
    export default {
        name: 'DefaultLayout',
        data () {
            return {

            }
        }
    }
    </script>
    ```
4. Modificar **frontend\nuxt.config.js** para establecer los colores principales:
    ```js
    ≡
    // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
    vuetify: {
        customVariables: ['~/assets/variables.scss'],
        theme: {
            dark: false,
            themes: {
                light: {
                    primary: '#8A9337',
                    accent: '#EFF4C3',
                    secondary: '#3D4058',
                    info: colors.teal.lighten1,
                    warning: colors.amber.base,
                    error: colors.deepOrange.accent4,
                    success: colors.green.accent3
                }
            }
        }
    },
    ≡
    ```

### 73. Módulos de Nuxt
+ Módulos de Nuxt.js: https://modules.nuxtjs.org

### 74. Componente de navegación vuetify
1. Modificar layout **frontend\layouts\default.vue**:
    ```vue
    <template>
        <v-app>
            <v-navigation-drawer 
                app
                v-model="drawer"
                :clipped="$vuetify.breakpoint.lgAndUp"
            >
                <div>
                    botones
                </div>
            </v-navigation-drawer>
            <v-app-bar app :clipped-left="$vuetify.breakpoint.lgAndUp">
                <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
                <v-toobar-title v-text="title"></v-toobar-title>
            </v-app-bar>
            <v-main>
                <nuxt/>
            </v-main>
        </v-app>
    </template>

    <script>
    export default {
        name: 'DefaultLayout',
        data () {
            return {
                drawer: false,
                title: "Soluciones++"
            }
        }
    }
    </script>
    ```

### 75. Componente footer vuetify
1. Modificar layout **frontend\layouts\default.vue**:
    ```vue
    <template>
        <v-app>
            ≡
            <v-footer padless>
                <v-row justify="center" no-gutters>
                    <v-btn color="primary" small icon><v-icon>mdi-facebook</v-icon></v-btn>
                    <v-btn color="primary" small icon><v-icon>mdi-instagram</v-icon></v-btn>
                    <v-btn color="primary" small icon><v-icon>mdi-pinterest</v-icon></v-btn>
                    <v-btn color="primary" small icon><v-icon>mdi-twitter</v-icon></v-btn>
                    <v-col class="text-center primary--text" cols="12">
                        &copy; {{ new Date().getFullYear() + '-' + title }}
                    </v-col>
                </v-row>
            </v-footer>
        </v-app>
    </template>
    ≡
    ```

### 76. Instalación de APOLLO y GraphQL tag
+ https://github.com/nuxt-community/apollo-module
1. En una terminal de Microsoft Windows y ubicados en la raíz del proyecto **frontend** ejecutar la siguiente instrucción para instalar el módulo de Apollo:
    + $ npm install --save @nuxtjs/apollo
2. Modificar archivo de configuración de Nuxt.js **frontend\nuxt.config.js**:
    ```js
    ≡
    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        '@nuxtjs/apollo'
    ],

    apollo: {
        clientConfigs: {
            default: {
                httpEndpoint: 'http://localhost:1337/graphql',
            }
        }
    },
    ≡
    ```
3. Instalar graphql-tag para poder leer archivo *.graphql:
    + $ npm install --save graphql-tag

### 77. Archivos del proyecto sección 6
+ Repositorio de esta sección: **00recursos\Section_06_inicio_proyecto.zip**.


## Sección 7: Comunicación Nuxt con Strapi (Apollo + GraphQL)
### 78. Sitios web visitados en la sección
+ Material de apoyo:
    + https://apollo.vuejs.org/guide/apollo
    + https://nuxtjs.org/docs/concepts/context-helpers
    + https://nuxtjs.org/docs/2.x/features/data-fetching#async-data
    + https://nuxtjs.org/docs/2.x/concepts/nuxt-lifecycle
    + https://docs.strapi.io/developer-docs/latest/developer-resources/database-apis-reference/graphql-api.html

### 79. Preparar el pedido
1. En el Playground realizar petición GraphQL:
    ```graphql
    query {
        categories {
            data {
                id
                attributes {
                    name
                    icon
                    slug
                    img
                }
            }
        }
    }
    ```

### 80. Componente ApolloQuery
1. Modificar página **frontend\pages\index.vue**:
    ```vue
    <template>
        <v-container>
            <ApolloQuery :query="query">
                <template slot-scope="{result:{ data, loading, error }}">
                    <div v-if="loading">Cargando datos...</div>
                    <div v-else-if="error">{{ error }}</div>
                    <div v-else>
                        <div v-for="category in data.categories.data" :key="category.id">
                            Nombre: {{category.attributes.name}}
                        </div>
                    </div>
                </template>
            </ApolloQuery>
        </v-container>
    </template>

    <script>
    import gql from "graphql-tag"

    export default {
        data(){
            return {
                query: gql`
                    query {
                        categories {
                            data {
                                id
                                attributes {
                                    name
                                    icon
                                    slug
                                    img
                                }
                            }
                        }
                    }
                `
            }
        }
    }
    </script>
    ```

### 81. Cambios Query V4 Strapi
+ Como la indexación de GraphQL ha cambiado en la versión 4 de Strapi debemos cambiar un poco el código para poder acceder a los valores que queremos.
+ El GraphQL (recuerda que en la documentación de tu playground puedes ver cómo hacer el pedido):
    ```graphql
    query{
        categories{
            data{
                id
                attributes{
                    name
                    icon
                    slug
                    img
                }
            }
        }
    }
    ```
+ Con esta nueva forma el id y los atributos están separados por lo que se debe hacer un cambio en el bucle:
    ```vue
    ≡
    <ApolloQuery :query="query">
        <template slot-scope="{result:{data}}">
            <div v-for="category in data.categories.data" :key="category.id">
                nombre: {{category.attributes.name}}
            </div>
        </template>
    </ApolloQuery>
    ≡
    ```

### 82. Objeto apollo
1. Modificar página **frontend\pages\index.vue**:
    ```vue
    <template>
        <v-container>
            {{ categories }}

            <v-divider class="my-5"></v-divider>

            <ApolloQuery :query="query">
                ≡
            </ApolloQuery>
        </v-container>
    </template>

    <script>
    ≡

    export default {
        data(){
            ≡
        },
        apollo: {
            categories: {
                query: gql`
                    query {
                        categories {
                            data {
                                id
                                attributes {
                                    name
                                    icon
                                    slug
                                    img
                                }
                            }
                        }
                    }
                `,
                // En caso de que por una extraña razon se desee cambiar 
                // el nombre a categories por cat o cualquier otro, se deberá 
                // agregar la siguiente línea de código:
                // update: data => data.categories
            }
        }
    }
    </script>
    ≡
    ```

### 83. Centralizar pedidos GraphQL
1. Crear archivo **frontend\graphql\querys.js** para centralizar los querys del proyecto:
    ```js
    import gql from 'graphql-tag'

    export const categorias = gql`
        query {
            categories {
                data {
                    id
                    attributes {
                        name
                        icon
                        slug
                        img
                    }
                }
            }
        }
        `
    ```
2. Modificar página **frontend\pages\index.vue**:
    ```vue
    <template>
        <v-container>
            <!-- {{ categories }} -->

            <v-divider class="my-5"></v-divider>

            <ApolloQuery :query="query">
                <template slot-scope="{result:{ data, loading, error }}">
                    <div v-if="loading">Cargando datos...</div>
                    <div v-else-if="error">{{ error }}</div>
                    <div v-else>
                        <div v-for="category in data.categories.data" :key="category.id">
                            <v-btn 
                                :to="{ name: 'category', params: {category: category.attributes.slug}}"
                                class="my-1"
                            >{{category.attributes.name}}</v-btn> 
                        </div>
                    </div>
                </template>
            </ApolloQuery>
        </v-container>
    </template>

    <script>
    import { categorias } from "../graphql/querys"

    export default {
        data(){
            return {
                query: categorias
            }
        },
        /* apollo: {
            categories: {
                query: categorias,
                // update: data => data.categories
            }
        } */
    }
    </script>
    ```
3. Crear página **frontend\pages\\_category\index.vue**:
    ```vue
    <template>
        <div>
            {{ $route.params.category }}
        </div>
    </template>
    ```

### 84. Pasar variables con Apollo
1. Realizar petición GraphQL en Playground:
    ```graphql
    query($id:ID!) {
        category (id: $id){
            data {
                id
                attributes {
                    description
                }
            }
        }
    }
    ```
    Query Variables:
    ```json
    {
        "id": 2
    }
    ```
2. Modificar página **frontend\pages\index.vue**:
    ```vue
    <template>
        <v-container>

            <v-divider class="my-5"></v-divider>

            <ApolloQuery :query="query">
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
            </ApolloQuery>
        </v-container>
    </template>

    <script>
    import { categorias } from "../graphql/querys"

    export default {
        data(){
            return {
                query: categorias
            }
        }
    }
    </script>
    ```
3. Modificar página **frontend\pages\\_category\index.vue**:
    ```vue
    <template>
        <div>
            {{ $route.params.category }}
            {{ category }}
        </div>
    </template>

    <script>
    import { category } from "../../graphql/querys"

    export default {
        data() {
            return{
                query: ''
            }
        },
        apollo: {
            category:{
                query:category,
                variables(){
                    return { id: this.$route.query.category }
                }
            }
        }
    }
    </script>
    ```
4. Modificar **frontend\graphql\querys.js**:
    ```js
    ≡
    export const category = gql`
        query($id:ID!) {
            category (id: $id){
                data {
                    id
                    attributes {
                        description
                    }
                }
            }
        }
        `
    ```

### 85. Pasar Variables V4 Strapi
+ Recuerda que la estructura cambia ya que se debe agregar la propiedad de atributos.
+ El id se sigue llamando en primera línea:
    ```graphql
    query($id:ID!){
        category(id:$id){
            data{
                id
                attributes{
                    description
                }
            }
        }
    }
    ```

### 86. Carpeta Store / Vuex
1. Crear tienda **frontend\store\index.js**:
    ```js
    export const state = () => ({
        counter: 0 
    })

    export const getters = {
        readCounter(state){
            return state.counter
        }
    }

    export const mutations = {
        increment(state){
            state.counter++
        }
    }

    export const actions = {
        increment(context){
            setTimeout(() => {
                context.commit("increment")
            }, 1000)
        }
    }
    ```

### 87. Store
1. Modificar layout **frontend\layouts\default.vue**:
    ```vue
    <template>
        <v-app>
            <v-navigation-drawer 
                ≡
            >
                <div>
                    botones {{ counter }}
                </div>
            </v-navigation-drawer>
            ≡
        </v-app>
    </template>

    <script>
    export default {
        ≡
        computed: {
            counter() {
                return this.$store.getters.readCounter
            }
        }
    }
    </script>
    ≡
    ```
2. Modificar página **frontend\pages\\_category\index.vue**:
    ```vue
    <template>
        <div>
            ≡
            <div>
                {{ counter }}
                <v-btn @click="callMutation()">Mutation</v-btn>
                <v-btn @click="callAction()">Action</v-btn>
            </div>
        </div>
    </template>

    <script>
    import { category } from "../../graphql/querys"

    export default {
        ≡
        methods: {
            callMutation(){
                this.$store.commit("increment")
            },
            callAction(){
                this.$store.dispatch("increment")
            }
        },
        apollo: {
            ≡
        }
    }
    </script>
    ```

### 88. El contexto de Nuxt
+ **Contenido**: sobre el contexto de Nuxt.js.

### 89. Pedidos con AsynData
1. Crear archivo GraphQL **frontend\graphql\categories.gql**:
    ```graphql
    query {
        categories{
            data {
                id
                attributes {
                    name
                    icon
                    img
                    description
                    slug
                }
            }
        }
    }
    ```
2. Modificar page **frontend\pages\index.vue**:
    ```vue
    <template>
        <v-container>
            <!-- {{ categories }} -->

            <v-divider class="my-5"></v-divider>

            <div v-for="category in categories.data" :key="category.id">
                <v-btn 
                    :to="{ 
                        name: 'category', 
                        params: {category: category.attributes.slug},
                        query: {category: category.id}
                    }"
                    class="my-1"
                >{{category.attributes.name}}</v-btn> 
            </div>
        </v-container>
    </template>

    <script>
    export default {
        data(){
            return {
            }
        },
        async asyncData(context) {
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
        }
    }
    </script>
    ```

### 90. Organizar datos versión 4 de Strapi
+ Comentarios del autor: 
    + En la versión 3 tenemos todos los datos en un mismo nivel del objeto y en la versión 4 los tenemos anidados.
    + Personalmente me gusta más utilizar los datos como en la versión 3. Una vez tengo la respuesta puedo organizar los datos para utilizarlos más fácil:
    ```js
    ≡
    async asyncData(context) {
        const client = context.app.apolloProvider.defaultClient
        const query = {
            query:require("../graphql/categories.gql")
        }
        let categories = []
        await client.query(query).then(res => {
            //en consola puedes ver el resultado de tu query
            console.log(res)
            //quiero entrar hasta el array que contiene toda la información
            //y hacer un bucle en cada uno de los resultados
            res.data.categories.data.forEach(category => {
                //agrego a mi array de categorias cada uno de los valores
                //organizandolos al mismo nivel con ayuda del spread operator donde copio todos los atributos
                categories.push({id:category.id, ...category.attributes })
            })
        })
        return {categories}
    }
    ≡
    ```
+ **Nota**: Esto es solo una opción recuerda que en tu código tu eres el que elige como trabajar con los datos.

### 91. Pedidos con fetch
1. Modificar page **frontend\pages\index.vue**:
    ```vue
    <template>
        <v-container>
            <v-divider class="my-5"></v-divider>
            {{ $fetchState }}
            <div v-if="$fetchState.pending">Cargando datos...</div>
            <div v-else-if="$fetchState.error">{{ $fetchState.error }}</div>
            <div v-else>
                <div v-for="category in categories.data" :key="category.id">
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
        </v-container>
    </template>

    <script>
    export default {
        data(){
            return {
                categories: []
            }
        },
        async fetch(){
            // const client = this.$apollo.getClient()
            const query = {
                query: require("../graphql/categories.gql")
            }
            await this.$apollo.query(query).then(data => {
                console.log(data)
                this.categories = data.data.categories
            })
        }
    }
    </script>
    ```

### 92. Función NuxtServerInit
1. Modificar page **frontend\pages\index.vue**:
    ```vue
    <template>
        <v-container>
            <v-divider class="my-5"></v-divider>
            <div>
                <div v-for="category in categories.data" :key="category.id">
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
        </v-container>
    </template>

    <script>
    export default {
        data(){
            return {
            }
        },
        computed: {
            categories(){
                return this.$store.getters.readCategories
            }
        }
    }
    </script>
    ```
2. Modificar tienda **frontend\store\index.js**:
    ```js
    export const state = () => ({
        ≡
        categories: []
    })

    export const getters = {
        readCategories(state){
            return state.categories
        },
        ≡
    }

    export const mutations = {
        addCategories(state, payload){
            state.categories = payload
        },
        ≡
    }

    export const actions = {
        async nuxtServerInit({commit}){
            console.log('Hola Nuxt Server')
            // return new Promise((resolve, reject) => {
            const client = this.app.apolloProvider.defaultClient
            const query = {
                query: require('../graphql/categories.gql')
            }
            await client.query(query).then(data => {
                commit('addCategories', data.data.categories)
                console.log(data)
                // resolve()
            }).catch(error => {
                console.log(error)
                // reject()
            })
            // })
        },
        ≡
    }
    ```

### 93. Organizar datos Mutación Versión 4 Strapi
+ En el store(vuex) voy a organizar los datos para ponerlos en el mismo nivel de indexación.
+ En la función de nuxtServerInit una vez tengo la respuesta y llamo la mutación, le voy a pasar directamente el array que contiene cada una de las categorías:
    ```js
    ≡
    ....          
    await client.query(query).then(data => {
            //llamo la mutación y envio solo el array como payload
            commit('addCategories', data.data.categories.data)
    })......
    ≡
    ```
+ En la mutación como recibo un array voy a hacer un bucle para organizar cada uno de los datos, de esta forma en mis getters puedo obtener y utilizar los datos de la forma que yo quiero:
    ```js
    ≡
    addCategories(state, payload){
        const categories = []
        payload.forEach(element => {
            categories.push({id:element.id, ...element.attributes})
        });
        state.categories = categories
    }
    ≡
    ```

### 94. Ciclo de vida de Nuxt
+ **Contenido**: sobre el ciclo de vida de Nuxt.js.

### 95. Crear el GraphQL para recetas
1. Modificar page **frontend\pages\index.vue**:
    ```vue
    <template>
        <v-container>
            <v-divider class="my-5"></v-divider>
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
        </v-container>
    </template>

    <script>
    export default {
        ≡
    }
    </script>
    ```
2. Realizar petición GraphQL en Playground:
    ```graphql
    query($slug:String!) {
        recipes(filters:{category:{slug:{eq:$slug}}}){
            data {
                id
                attributes {
                    name
                  	likes
                    img
                  	category{
                      data{
                        id
                        attributes {
                          name
                          slug
                        }
                      }
                    }
                }
            }
        }
    }
    ```
    Query Variables:
    ```json
    {
        "slug": "aperitivos"
    }
    ```
3. Crear archivo GraphQL **frontend\graphql\recipes.gql**:
    ```graphql
    query($slug:String!) {
        recipes(filters:{category:{slug:{eq:$slug}}}){
            data {
                id
                attributes {
                    name
                    likes
                    img
                    category{
                        data{
                        id
                        attributes {
                            name
                            slug
                        }
                        }
                    }
                }
            }
        }
    }
    ```

### 96. GraphQL filtro receta por slug versión 4 de Strapi
+ Filtros en la versión 4:
    + El where es remplazado por la palabra clave filters que tiene como valor un objeto con las especificaciones del filtro.
    + filters: { field: { operator: value } }
    + GraphQL filtro por slug en recetas, recuerda que en la V4 se agrega data y attributes:
        ```graphql
        query($slug:String!){
            recipes(filters:{category:{slug:{eq:$slug}}}){
                data{
                    id
                    attributes{
                        name
                        likes
                        img
                        category{
                            data{
                                id
                                attributes{
                                    name
                                    slug
                                }
                            }
                        }
                    }
                }
            }
        }
        ```
    + Filtramos por la colección categoría donde el campo slug sea igual al valor del $slug que estamos pasando en una variable. La palabra eq significa igual.
+ **Nota**: En la sección 9 Opción de Búsqueda en el cliente, vamos a profundizar en los filtros de Strapi/GraphQL en la versiones 3 y 4

### 97. Cargar las recetas
1. Modificar page **frontend\pages\\_category\index.vue**:
    ```vue
    <template>
        <div>
            {{ recipes }}
            <div v-for="recipe in recipes" :key="recipe.id">
                {{ recipe.attributes.name }}
            </div>
            <v-divider></v-divider>
            <nuxt-link to="/">Volver</nuxt-link>
        </div>
    </template>

    <script>

    export default {
        data() {
            return{
            }
        },
        async asyncData({app, route}){
            const slug = route.params.category
            const client = app.apolloProvider.defaultClient
            const query = {
                query: require('../../graphql/recipes.gql'),
                variables: { slug }
            }
            let recipes = []
            await client.query(query).then(data => {
                recipes = data.data.recipes.data
            }).catch(e => console.log(e))
            return { recipes }
        }
    }
    </script>
    ```

### 98. Organizar datos de la respuesta Version 4 Strapi/GraphQL
+ Como estamos haciendo un pedido con relaciones (Receta y al interior la categoría) obtenemos un doble objeto con propiedades data y attributes.
+ Para mejorar la utilización, voy a poner los datos al mismo nivel:
    ```js
    async asyncData({app, route}){
        const slug = route.params.category
        const client = app.apolloProvider.defaultClient
        const query = {
            query:require("../../graphql/recipes.gql"),
            variables:{slug}
        }
        let recipes = []
        await client.query(query).then(res => {
            //en consola puedes ver el resultado de tu query y analizar su estructura
            console.log(res)
            res.data.recipes.data.forEach(element => {
                //creo un nuevo objeto con el formato deseado
                const recipe = {
                    id:element.id,
                    name:element.attributes.name,
                    likes:element.attributes.likes,
                    //en la propiedad category conservo un objeto
                    //pero filtro las propiedades data y attributos para facil uso
                    category:{id:element.attributes.category.data.id, 
                        ...element.attributes.category.data.attributes}
                }
                //recuerda analizar los datos que recibes en la respuesta
                recipes.push(recipe)
            });
        }).catch(e => console.log(e))
    
        return { recipes }
    }
    ```
+ El resultado es algo como esto:
    ```js
    [ 
        { 
            "id": "4",
            "name": "Galletas", 
            "likes": 0, 
            "category": { "id": "1", "name": "Aperitivos", "slug": "aperitivos", "__typename": "Category" } 
        } 
    ]
    ```

### 99. Cargar una sola entrada
1. Realizar petición GraphQL en Playground:
    ```graphql
    query($id:ID!) {
        recipe(id:$id){
            data {
                id
                attributes {
                    name
                  	duration
                  	servings
                  	img
                  	description
                  	ingredients
                  	steps
                  	likes
                  	category{
                        data{
                            id
                            attributes {
                                name
                                slug
                            }
                        }
                    }
                }
            }
        }
    }
    ```
    Query Variables:
    ```json
    {
        "id": 3
    }
    ```

2. Crear archivo GraphQL **frontend\graphql\recipe.gql**:
    ```graphql
    query($id:ID!) {
        recipe(id:$id){
            data {
                id
                attributes {
                    name
                  	duration
                  	servings
                  	img
                  	description
                  	ingredients
                  	steps
                  	likes
                  	category{
                        data{
                            id
                            attributes {
                                name
                                slug
                            }
                        }
                    }
                }
            }
        }
    }
    ```

### 100. GraphQL Strapi V4
+ Consulta para receta en Strapi V4

    ```graphql
    query($id:ID!){
        recipe(id:$id){
            data{
                id
                attributes{
                    name
                    duration
                    servings
                    img
                    description
                    ingredients
                    steps
                    likes
                    category{
                        data{
                            id
                            attributes{
                                name
                                slug
                            }
                        }
                    }
                }
            }
        }
    }
    ```

### 101. Detalles de la receta
1. Crear page **frontend\pages\\_category\\_recipe\index.vue**:
    ```vue
    <template>
        <div>
            Receta: {{recipe}}
        </div>
    </template>

    <script>
    export default {
        async asyncData({app, route}){
            const client = app.apolloProvider.defaultClient
            const id = route.params.recipe
            const query = {
                query: require('../../../graphql/recipe.gql'),
                variables: {id}
            }
            let recipe = null
            await client.query(query).then(data => {
                recipe = data.data.recipe.data
            }).catch(e => console.log(e))
            return {recipe}
        }
    }
    </script>
    ```
2. Modificar page **frontend\pages\\_category\index.vue**:
    ```vue
    <template>
        <div>
            {{ recipes }}
            <div v-for="recipe in recipes" :key="recipe.id">
                <nuxt-link
                    :to="{
                        name: 'category-recipe',
                        params: { 
                            category: $route.params.category,
                            recipe: recipe.id
                        }
                    }"
                >
                    {{ recipe.attributes.name }}
                </nuxt-link>
            </div>
            <v-divider></v-divider>
            <nuxt-link to="/">Volver</nuxt-link>
        </div>
    </template>

    <script>

    export default {
        data() {
            return{
            }
        },
        async asyncData({app, route}){
            const slug = route.params.category
            const client = app.apolloProvider.defaultClient
            const query = {
                query: require('../../graphql/recipes.gql'),
                variables: { slug }
            }
            let recipes = []
            await client.query(query).then(data => {
                recipes = data.data.recipes.data
            }).catch(e => console.log(e))
            return { recipes }
        }
    }
    </script>
    ```

### 102. Organizar datos de la respuesta Version 4 Strapi/GraphQL
+ Nota del autor: Tu puedes utilizar los datos como los trae la respuesta en la versión 4, solo recuerda que al momento de acceder a los datos en el template tu estructura será diferente a la mía en los videos.
+ O aplicar esta modificación y utilizar la misma estructura:
    ```js
    ≡
    async asyncData({ app, route }) {
        const client = app.apolloProvider.defaultClient;
        const id = route.params.recipe;
        const query = {
            query: require("../../../graphql/recipe.gql"),
            variables: { id },
        };
        let recipe = null;
        await client
            .query(query)
            .then((res) => {
                //recuerda analizar los datos en consola
                console.log(res.data.recipe.data)
                //capturo el id de recipe data
                const id = res.data.recipe.data.id
                //separo los attributos
                const attributes = res.data.recipe.data.attributes
                //a recipe le doy un nuevo valor organizando el objeto a mi medida
                //este es el objeto utilizado para renderizar la UI
                recipe = {
                    id,
                    name:attributes.name,
                    duration:attributes.duration,
                    servings:attributes.servings,
                    img:attributes.img,
                    description:attributes.description,
                    ingredients:attributes.ingredients,
                    steps:attributes.steps,
                    likes:attributes.likes,
                    category:{id:attributes.category.data.id, ...attributes.category.data.attributes}
                }
            })
            .catch((e) => console.log(e));
        return { recipe };
    }
    ≡
    ```

### 103. Archivos del proyecto sección 7
+ Repositorio autor: **00recursos\Section_07_querys.zip**.


## Sección 8: Estilos gráficos con Vuetify y Componentes Nuxt
### 104. Sitios web visitados en la sección
+ Material de apoyo.
    + https://vuetifyjs.com/en/components/lists
    + https://vuetifyjs.com/en/components/cards
    + https://vuetifyjs.com/en/components/chips
    + https://vuetifyjs.com/en/components/timelines


### 105. Componente v-list de vuefify
+ https://vuetifyjs.com/en/components/lists
1. Modificar layout **frontend\layouts\default.vue**:
    ```vue
    <template>
        <v-app>
            <v-navigation-drawer 
                app
                v-model="drawer"
                :clipped="$vuetify.breakpoint.lgAndUp"
                color="grey lighten-4"
            >
                <v-list color="primary--text">
                    <v-list-item to="/">
                        <v-list-item-icon>
                            <v-icon>mdi-home</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-title>
                                Inicio
                            </v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                    <v-list-item
                        v-for="link in links.data"
                        :key="link.id"
                        :to="{name:'category', params: {category: link.attributes.slug}}"
                    >
                        <v-list-item-icon>
                            <v-icon>{{ link.attributes.icon }}</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-title>
                                {{ link.attributes.name }}
                            </v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>
            </v-navigation-drawer>

            <v-app-bar app :clipped-left="$vuetify.breakpoint.lgAndUp"  color="grey lighten-4" flat>
                <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
                <v-toolbar-title v-text="title"></v-toolbar-title>
            </v-app-bar>
            

            <v-main class="grey lighten-4">
                <nuxt/>
            </v-main>

            <v-footer padless>
                <v-row justify="center" no-gutters>
                    <v-btn color="primary" small icon> <v-icon>mdi-facebook</v-icon> </v-btn>
                    <v-btn color="primary" small icon> <v-icon>mdi-instagram</v-icon> </v-btn>
                    <v-btn color="primary" small icon> <v-icon>mdi-pinterest</v-icon> </v-btn>
                    <v-btn color="primary" small icon> <v-icon>mdi-twitter</v-icon> </v-btn>
                    <v-col class="text-center primary--text" cols="12">
                        &copy; {{new Date().getFullYear()}} - {{ title }}
                    </v-col>
                </v-row>
            </v-footer>
        </v-app>
    </template>

    <script>
    export default {
        name: 'DefaultLayout',
        data () {
            return {
                drawer: false,
                title: "Soluciones++"
            }
        },
        computed: {
            links(){
                return this.$store.getters.readCategories
            }
        }
    }
    </script>
    ```

### 106. Auto importación de componentes
1. Crear componente **frontend\components\ui\NavCard.vue**:
    ```vue
    <template>
        <div>
            Sol++ Navcard
        </div>
    </template>
    ```
2. Modificar página	**frontend\pages\index.vue**:
    ```vue
    <template>
        <v-container>
            <app-ui-nav-card></app-ui-nav-card>
            <app-forms-login></app-forms-login>

            <v-divider class="my-5"></v-divider>
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
        </v-container>
    </template>

    <script>
    export default {
        data(){
            return {
            }
        },
        computed: {
            categories(){
                return this.$store.getters.readCategories
            }
        }
    }
    </script>
    ```
3. Crear componente **frontend\components\forms\Login.vue**:
    ```vue
    <template>
        <div>
            Login
        </div>
    </template>
    ```
4. Modificar **frontend\nuxt.config.js**:
    ```js
    ≡
    // Auto import components: https://go.nuxtjs.dev/config-components
    components: [
        {path: '~/components', prefix: 'app'}
    ],
    ≡
    ```
    **Nota**: ahora todos los componente de la aplicación se deberán llamar como **<app-XXXXXXX>**.

### 107. Componente V-card
+ https://vuetifyjs.com/en/components/cards
1. Modificar page **frontend\pages\index.vue**:
    ```vue
    <template>
        <v-container>
            <v-row>
                <v-col cols="3" v-for="category in categories.data" :key="category.id">
                    <app-ui-nav-card :category="category"></app-ui-nav-card>
                </v-col>
            </v-row>
        </v-container>
    </template>

    <script>
    export default {
        data(){
            return {
            }
        },
        computed: {
            categories(){
                return this.$store.getters.readCategories
            }
        }
    }
    </script>
    ```
2. Modificar componente **frontend\components\ui\NavCard.vue**:
    ```vue
    <template>
        <v-card :to="{name: 'category', params: {category: category.attributes.slug }}">
            <v-img :src="category.attributes.img || 'https://cdn.pixabay.com/photo/2020/02/11/15/41/shrimp-4839919_960_720.jpg'" height="170"></v-img>
            <v-card-title class="body-1">
                {{ category.attributes.name }}
                <v-icon class="ml-2" color="primary">{{ category.attributes.icon }}</v-icon>
            </v-card-title>
        </v-card>
    </template>

    <script>
    export default {
        props: {
            category: {
                type: Object,
                required: true
            }
        }
    }
    </script>
    ```

### 108. Tarjetas de recetas
1. Modificar page **frontend\pages\\_category\index.vue**:
    ```vue
    <template>
        <v-container>
            <h1 class="secondary--text">
                {{ category.attributes.name }}
                <v-icon large class="secondary--text">{{ category.attributes.icon }}</v-icon>
            </h1>
            <p class="secondary--text">{{ category.attributes.description }}</p>
            <v-row>
                <v-col cols="4" v-for="recipe in recipes" :key="recipe.id">
                    <app-ui-nav-card-recipe></app-ui-nav-card-recipe>
                </v-col>
            </v-row>

            <v-divider></v-divider>

            <nuxt-link to="/">Volver</nuxt-link>
        </v-container>
    </template>

    <script>

    export default {
        ≡
        computed: {
            category() {
                const slug = this.$route.params.category
                return this.$store.getters.readCategories.data.find(item => item.attributes.slug == slug)
            }
        },
        ≡
    }
    </script>
    ≡
    ```
2. Crear componente **frontend\components\ui\NavCardRecipe.vue**:
    ```vue
    <template>
        <div>
            Receta
        </div>
    </template>
    ```

### 109. Tarjeta receta
1. Modificar componente **frontend\components\ui\NavCardRecipe.vue**:
    ```vue
    <template>
        <v-card 
            :to="{
                name: 'category-recipe',
                params: { 
                    category: recipe.attributes.category.data.attributes.slug,
                    recipe: recipe.id
                }
            }"
        >
            <v-img :src="recipe.attributes.img" height="170"></v-img>
            <v-card-text>
                <v-row>
                    <v-col cols="7"><h3>{{ recipe.attributes.name }}</h3></v-col>
                    <v-col cols="5" class="d-flex justify-end">
                        <div>
                            <v-icon>mdi-heart</v-icon>
                            <span>{{ recipe.attributes.likes }}</span>
                        </div>
                    </v-col>
                </v-row>
            </v-card-text>
        </v-card>
    </template>

    <script>
    export default {
        props: {
            recipe: {
                type: Object,
                required: true
            }
        }
    }
    </script>
    ```
2. Modificar page **frontend\pages\\_category\index.vue**:
    ```vue
    ≡
    <p class="secondary--text">{{ category.attributes.description }}</p>
    <v-row>
        <v-col cols="4" v-for="recipe in recipes" :key="recipe.id">
            <app-ui-nav-card-recipe :recipe="recipe"></app-ui-nav-card-recipe>
        </v-col>
    </v-row>
    ≡
    ```

### 110. Botón volver
1. Crear componente **frontend\components\ui\BackBtn.vue**:
    ```vue
    <template>
        <v-btn small color="primary" @click="back()">{{ label }}</v-btn>
    </template>

    <script>
    export default {
        props: {
            label: {
                type: String,
                default: 'Volver'
            }
        },
        methods: {
            back(){
                this.$router.go(-1)
            }
        }
    }
    </script>
    ```
2. Modificar page **frontend\pages\\_category\index.vue**:
    ```vue
    <template>
        <v-container>
            ≡
            <div class="mt-3">
                <v-alert type="info" v-if="recipes.length == 0">
                    <p>No hay recetas disponibles</p>
                </v-alert>
            </div>

            <div class="mt-3">
                <app-ui-back-btn></app-ui-back-btn>
            </div>
        </v-container>
    </template>
    ≡
    ```
3. Modificar page **frontend\pages\\_category\\_recipe\index.vue**:
    ```vue
    <template>
        <div>
            ≡
            <div class="mt-3">
                <app-ui-back-btn label="Volver a recetas"></app-ui-back-btn>
            </div>
        </div>
    </template>
    ≡
    ```

### 111. Detalles de la receta parte 1
1. Modificar page **frontend\pages\\_category\\_recipe\index.vue**:
    ```vue
    <template>
        <v-conteiner>
            <h1 class="secondary--text">{{ recipe.attributes.name }}</h1>
            <h5 class="secondary--text">{{ recipe.attributes.category.data.attributes.name }}</h5>
            <v-card class="mt-3">
                <v-card-title>
                    <v-icon class="mr-3">mdi-information</v-icon>
                    Información
                </v-card-title>

                <v-card-text class="black--text">
                    <v-row>
                        <v-col col="6">
                            <v-chip color="primary" outlined>
                                <v-icon left>mdi-account-group</v-icon>
                                Servicios: {{ recipe.attributes.servings }}
                            </v-chip>
                            <v-chip color="primary" outlined>
                                <v-icon left>mdi-clock</v-icon>
                                Tiempo: {{ recipe.attributes.duration }}
                            </v-chip>
                            <v-chip color="primary" outlined>
                                <v-icon left>mdi-account-edit</v-icon>
                                Autor: Leticia Rodríguez
                            </v-chip>

                            <v-divider class="my-3"></v-divider>

                            <h4 class="body-1">Descripción</h4>
                            <div v-html=" recipe.attributes.description"></div>
                        </v-col>
                        <v-col col="6">
                            <v-img :src="recipe.attributes.img" max-height="500"></v-img>
                        </v-col> 
                    </v-row>
                </v-card-text>
            </v-card>
            <div class="mt-3">
                <app-ui-back-btn label="Volver a recetas"></app-ui-back-btn>
            </div>
        </v-conteiner>
    </template>
    ≡
    ```

### 112. Detalles de la receta parte 2
1. Modificar page **frontend\pages\\_category\\_recipe\index.vue**:
    ```vue
    <template>
        <v-container>
            <h1 class="secondary--text">{{ recipe.attributes.name }}</h1>
            <h5 class="secondary--text">{{ recipe.attributes.category.data.attributes.name }}</h5>

            <v-card class="mt-3">
                <v-card-title>
                    <v-icon class="mr-3">mdi-information</v-icon>
                        Información
                    </v-card-title>
                <v-card-text class="black--text">
                    <v-row>
                        <v-col cols="6">
                            <v-chip color="primary" outlined>
                                <v-icon left>mdi-account-group</v-icon>
                                Servicios :  {{ recipe.attributes.servings }}
                            </v-chip>
                            <v-chip color="primary" outlined>
                                <v-icon left>mdi-clock</v-icon>
                                Tiempo :  {{ recipe.attributes.duration }}
                            </v-chip>
                            <v-chip color="primary" outlined>
                                <v-icon left>mdi-account-edit</v-icon>
                                Autor: autor
                            </v-chip>

                            <v-divider class="my-3"></v-divider>

                            <h4 class="body-1">Descripción</h4>
                            <div v-html="recipe.description"></div>
                        </v-col>
                        <v-col cols="6">
                            <v-img :src="recipe.attributes.img" max-height="500"></v-img>
                        </v-col>
                    </v-row>
                </v-card-text>
            </v-card>

            <div class="mt-3">
            <v-row>
                <v-col cols="5">
                    <v-card>
                        <v-card-title>
                            <v-icon class="mr-3">mdi-fridge</v-icon>
                            Ingredientes
                        </v-card-title>
                        <v-list>
                            <v-list-item v-for="(ingredient,i) in recipe.attributes.ingredients" :key="i">
                                {{ ingredient }}
                            </v-list-item>
                        </v-list>
                    </v-card>
                </v-col>
                <v-col cols="7">
                <v-card>
                    <v-card-title>
                        <v-icon class="mr-3">mdi-stove</v-icon>
                        Pasos
                    </v-card-title>
                    <v-timeline dense>
                        <v-timeline-item v-for="(step,k) in recipe.attributes.steps" :key="k+Math.random()" color="secondary" small>
                            {{ step }}
                        </v-timeline-item>
                    </v-timeline>
                </v-card>
                </v-col>
            </v-row>
            </div>
            <div class="mt-3">
                <app-ui-back-btn label="Volver a recetas"></app-ui-back-btn>
            </div>
        </v-container>
    </template>
    ≡
    ```

### 113. Formato duración
1. Modificar page **frontend\pages\\_category\\_recipe\index.vue**:
    ```vue
    <template>
        <v-container>
            ≡
            <v-card class="mt-3">
                ≡
                <v-card-text class="black--text">
                    <v-row>
                        <v-col cols="6">
                            ≡
                            <v-chip color="primary" outlined>
                                <v-icon left>mdi-clock</v-icon>
                                Tiempo :  {{ formatedTime }}
                            </v-chip>
                            ≡
                        </v-col>
                        ≡
                    </v-row>
                </v-card-text>
            </v-card>
            ≡
        </v-container>
    </template>

    <script>
    export default {
        computed: {
            formatedTime() {
                let hours = Math.floor(this.recipe.attributes.duration / 60)
                let minutes = this.recipe.attributes.duration % 60
                let total = ("0" + hours).slice(-2) + ':' + ("0" + minutes).slice(-2)
                return total
            } 
        },
        ≡
    }
    </script>
    ```

### 114. Archivos del proyecto sección 8
+ **Repositorio**: 00recursos\Section_08_frontend_vuetify.zip


## Sección 9: Opción de Búsqueda en el cliente
### 115. Sitios web visitados en la sección
+ Material de apoyo:
    + https://vuetifyjs.com/en/components/forms
    + https://vuetifyjs.com/en/components/menus
    + https://docs.strapi.io/developer-docs/latest/developer-resources/database-apis-reference/graphql-api.html#unified-response-format

### 116. Campo de búsqueda
1. Modificar layout **frontend\layouts\default.vue**:
    ```vue
    <template>
        <v-app>
            ≡
            <v-app-bar app :clipped-left="$vuetify.breakpoint.lgAndUp"  color="grey lighten-4" flat>
                <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
                <v-toolbar-title v-text="title"></v-toolbar-title>
                <v-spacer></v-spacer>
                <v-menu v-model="search" :close-on-content-click="false" offset-y>
                    <template v-slot:activator="{on}">
                        <v-btn v-on="on" color="primary" icon>
                            <v-icon>mdi-magnify</v-icon>
                        </v-btn>
                    </template>
                    <v-card>
                        <v-card-title>Buscar receta</v-card-title>
                        <v-card-text>
                            <v-text-field outlined label="Nombre receta" dense v-model="findRecipe"></v-text-field>
                            {{ findRecipe }}
                        </v-card-text>
                    </v-card>
                </v-menu>
            </v-app-bar>
            ≡
        </v-app>
    </template>

    <script>
    export default {
        ≡
        data () {
            return {
                ≡
                search: false,
                findRecipe: ''
            }
        },
        ≡
    }
    </script>
    ```

### 117. Precarga de resultados
1. Realizar petición GraphQL en Playground:
    ```graphql
    query {
        categories {
            data {
                id
                attributes {
                    name
                    icon
                    img
                    description
                    slug
                }
            }
        }
        recipes {
            data {
                id
                attributes {
                    name
                    category {
                        data {
                            id
                            attributes {
                                slug
                            }
                        }
                    }
                }
            }
        }
    }
    ```
2. Modificar query **frontend\graphql\categories.gql**:
    ```graphql
    query {
        categories {
            data {
                id
                attributes {
                    name
                    icon
                    img
                    description
                    slug
                }
            }
        }
        recipes {
            data {
                id
                attributes {
                    name
                    category {
                        data {
                            id
                            attributes {
                                slug
                            }
                        }
                    }
                }
            }
        }
    }
    ```
3. Modificar tienda **frontend\store\index.js**:
    ```js
    export const state = () => ({
        counter: 0,
        categories: [],
        loadedRecipes: []
    })

    export const getters = {
        readCategories(state) {
            return state.categories
        },
        readLoadedRecipes(state) {
            return state.loadedRecipes
        },
        ≡
    }

    export const mutations = {
        addCategories(state, payload) {
            state.categories = payload
        },
        addLoadedRecipes(state, payload) {
            state.loadedRecipes = payload
        },
        ≡
    }

    export const actions = {
        async nuxtServerInit({
            commit
        }) {
            ≡
            await client.query(query).then(data => {
                commit('addCategories', data.data.categories)
                commit('addLoadedRecipes', data.data.recipes)
                ≡
            }).catch(error => {
                ≡
            })
            // })
        },
        ≡
    }
    ```
4. Modificar layout **frontend\layouts\default.vue**:
    ```vue
    <template>
        <v-app>
            ≡
            <v-app-bar app :clipped-left="$vuetify.breakpoint.lgAndUp"  color="grey lighten-4" flat>
                ≡
                <v-menu v-model="search" :close-on-content-click="false" offset-y>
                    ≡
                    <v-card>
                        <v-card-title>Buscar receta</v-card-title>
                        <v-card-text>
                            ≡
                            {{ recipes }}
                        </v-card-text>
                    </v-card>
                </v-menu>
            </v-app-bar>
            ≡
        </v-app>
    </template>

    <script>
    import { mapGetters } from 'vuex'
    export default {
        name: 'DefaultLayout',
        data () {
            return {
                drawer: false,
                title: "Soluciones++",
                search: false,
                findRecipe: ''
            }
        },
        computed: {
            ...mapGetters({
                links: "readCategories",
                recipes: "readLoadedRecipes"
            })
        }
    }
    </script>
    ≡
    ```

### 118. Modificaciones V4 Strapi/GraphQL
+ Archivo gql:
    ```graphql
    query{
        categories{
            data{
                id
                attributes{
                    name
                    icon
                    slug
                    img
                }
            }
        }
        recipes{
            data{
                id
                attributes{
                    name
                    category{
                        data{
                            id
                            attributes{
                                slug
                            }
                        }
                    }
                }
            }
        }
    }
    ```
+ Archivo Store index.js:
    ```js
    ≡
    //mutation
    const recipes = []
    payload.forEach(element =>{
        recipes.push({
            id:element.id, 
            name:element.attributes.name,
            category:{
                id:element.attributes.category.data.id, 
                ...element.attributes.category.data.attributes
            }
        })
    })
    state.loadedRecipes = recipes
    ≡
    //action
    async nuxtServerInit({commit}) {
        console.log("Hola nuxt server")
        // return new Promise((resolve, reject) => {
        const client = this.app.apolloProvider.defaultClient
        const query = {
            query: require("../graphql/categories.gql")
        }

        await client.query(query).then(data => {
            commit('addCategories', data.data.categories.data)
            commit('addLoadedRecipes', data.data.recipes.data)
            // resolve()
        }).catch(error => {
            console.log(error)
            // reject()
        })
        // })
    }
    ≡
    ```

### 119. Precarga de resultados con filtro
1. Modificar layout **frontend\layouts\default.vue**:
    ```vue
    ≡
    <template>
        <v-app>
            ≡
            <v-app-bar app :clipped-left="$vuetify.breakpoint.lgAndUp"  color="grey lighten-4" flat>
                ≡
                <v-menu v-model="search" :close-on-content-click="false" offset-y>
                    ≡
                    <v-card>
                        <v-card-title>Buscar receta</v-card-title>
                        <v-card-text>
                            <v-text-field outlined label="Nombre receta" dense v-model="findRecipe"></v-text-field>
                            <v-list v-if="findRecipe.length != 0">
                                <v-list-item 
                                    v-for="recipe in filterRecipe" 
                                    :key="recipe.id" 
                                    @click="seeRecipe(recipe.attributes.category.data.attributes.slug, recipe.id)"
                                >
                                    {{ recipe.attributes.name }}
                                </v-list-item>
                            </v-list>
                        </v-card-text>
                    </v-card>
                </v-menu>
            </v-app-bar>
            ≡
        </v-app>
    </template>

    <script>
    import { mapGetters } from 'vuex'
    export default {
        ≡
        data () {
            return {
                drawer: false,
                title: "Soluciones++",
                search: false,
                findRecipe: ''
            }
        },
        computed: {
            ...mapGetters({
                links: "readCategories",
                recipes: "readLoadedRecipes"
            }),
            filterRecipe() {
                return this.recipes.data.filter(recipe => recipe.attributes.name.toLowerCase().match(this.findRecipe.toLowerCase()))
            }
        },
        methods: {
            seeRecipe(category, recipe) {
                this.findRecipe = ""
                this.search = false
                this.$router.push({name: 'category-recipe', params: {category, recipe}})
            }
        }
    }
    </script>
    ≡
    ```

### 120. Filtros Strapi/GraphQL
1. Realizar la siguientes peticiones GraphQL:
    ```graphql
    query {
        recipes (pagination: {limit: 2, start: 3}) {
            data {
                id
                attributes {
                    name
                }
            }
        }
    }
    ```
    ```graphql
    query {
        recipes (sort: "name:asc") {
            data {
                id
                attributes {
                    name
                }
            }
        }
    }
    ```
    ```graphql
    query {
        recipes (filters:{id:{eq:5}}) {
            data {
                id
                attributes {
                    name
                }
            }
        }
    }
    ```
    ```graphql
    query {
        recipes (filters:{id:{in:[1, 3, 5]}}) {
            data {
                id
                attributes {
                    name
                }
            }
        }
    }
    ```
    ```graphql
    query {
        recipes (filters:{name:{contains:"a"}}) {
            data {
                id
                attributes {
                    name
                }
            }
        }
    }
    ```
2. Crear query **frontend\graphql\searchRecipe.gql**:
    ```graphql
    query($term:String!) {
        recipes (filters:{name:{contains:$term}}) {
            data {
                id
                attributes {
                    name
                }
            }
        }
    }
    ```

### 121. Filtros Strapi/GraphQL V4
+ En la versión 4 la forma de hacer filtros cambia y hay tres nuevas formas de filtrar la información:
    + Filters (Filtros)
    + Sorting (Organizar)
    + Pagination (Paginación)
+ Se deben ejecutar entre paréntesis después de la colección donde queremos hacer el filtro:
+ Muestra:
```graphql
query {
    collection(tipoFiltro: {valor}) {
        data {
            id
            attributes {
                name
            }
        }
    }
}
```
+ Ejemplo:
```graphql
query {
    recipes(pagination: {limit: 2, start: 2}) {
        data {
            id
            attributes {
                name
            }
        }
    }
}
```

### 122. Filters Strapi/GraphQL V4
+ Filters, los filtros deben ir con la siguiente sintaxis:
    ```graphql
    ≡
    filters: { field: { operator: value } }
    //Español filtros: { campo: { operador: valor } }
    ≡
    ```
+ Ejemplos 1
    + Quiero filtrar recetas por duración debo entonces remplazar el campo por duración y en el operador voy a poner lt que significa menos que, por ultimo el valor que será la referencia, mi código quedaría así.
        ```graphql
        query{
            recipes(filters:{duration:{lt:30}}){
                data{
                    id
                    attributes{
                        name
                    }
                }
            }
        }
        ```
    + De esta forma GraphQL solo traerá las recetas de menos de 30 minutos.
+ Ejemplo 2
    + Supongamos que quiero filtrar solo las recetas que tengan la palabra pollo al interior en este caso el campo será name, el operador contains (contiene) y el valor pollo
        ```graphql
        query{
            recipes(filters:{name:{contains:"pollo"}}){
                data{
                    id
                    attributes{
                        name
                    }
                }
            }
        }
        ```
+ Aquí tienes la una parte de la lista de operadores:
    + eq: Igual
    + ne: No es igual
    + lt: Menor que
    + lte: Menor o igual que
    + gt: Mayor que
    + gte: Mayor o igual que
    + in: Incluido en el array
    + notIn: No se encuentra en el array
    + contains: Contiene, sensible a mayúsculas
    + notContains: No contiene, sensible a mayúsculas
    + containsi: Contiene, insensible a mayúsculas
    + notContainsi: No contiene, insensible a mayúsculas
+ https://docs.strapi.io/developer-docs/latest/developer-resources/database-apis-reference/graphql-api.html#filters

### 123. Sort Strapi/GraphQL V4
+ Sort: Los pedidos aceptan la palabra sort para organizarlos.
+ Se puede organizar por un valor simple o múltiple:
    + Sort: ”valor”
    + Sort: [“valor”, “valor”]
+ El orden puede ser definido con :asc (orden ascendiente) o con :desc (orden descendiente).
+ Ejemplo: quiero obtener las recetas en orden de duration descendente:
    ```graphql
    query{
        recipes(sort:"duration:desc"){
            data{
                id
                attributes{
                    name
                    duration
                }
            }
        }
    }
    ```
+ O por nombre en orden alfabético
    ```graphql
    query{
        recipes(sort:"name"){
            data{
                id
                attributes{
                    name
                    duration
                }
            }
        }
    }
    ```

### 124. Pagination Strapi/GraphQL V4
+ Pagination: Las consultas pueden aceptar un parámetro de pagination. Que pueden llevar dos pares de valores que no se pueden usar juntos (siempre debe ser uno de los dos pares).
    + Page, pageSize
    + Start, limit
+ Ejemplo quiero pedir simplemente 3 entradas, utilizo el valor limit (al utilizar el limit no lo puedo mezclar con page o pageSize):
    ```graphql
    query{
        recipes(pagination:{limit:3}){
            data{
                id
                attributes{
                    name
                    duration
                }
            }
        }
    }
    ```
+ Ahora quiero pedir solo 3 pero empezando en el index 3, me traerá hasta 3 valores que encuentre a partir del index 3:
    ```graphql
    query{
        recipes(pagination:{limit:3, start:3}){
            data{
                id
                attributes{
                    name
                    duration
                }
            }
        }
    }
    ```
+ Referencia completa: https://docs.strapi.io/developer-docs/latest/developer-resources/database-apis-reference/graphql-api.html#sorting
+ Mezclar elementos: Yo puedo mezclar mis filtros separándolos por coma por ejemplo quiero las recetas en orden donde la duración sea mayo de 25 minutos y solo 2 resultados:
    ```graphql
    query{
        recipes(filters:{duration:{gt:25}},sort:"name",pagination:{limit:2}){
            data{
                id
                attributes{
                    name
                    duration
                }
            }
        }
    }
    ```

### 125. Sugerencia
+ Recuerda que siempre puedes explorar la documentation en tu playground de GraphQL y ver que tipo de valores puede recibir y como podrías utilizarlo en tus proyectos.
+ Por ejemplo, filtrar por fecha de creación.

### 126. Filtros en el pedido
1. Modificar query **frontend\graphql\categories.gql**:
    ```graphql
    query {
        categories {
            data {
                id
                attributes {
                    name
                    icon
                    img
                    description
                    slug
                }
            }
        }
    }
    ```
2. Modificar tienda **frontend\store\index.js**:
    ```js
    ≡
    export const actions = {
        async nuxtServerInit({
            commit
        }) {
            console.log('Hola Nuxt Server')
            // return new Promise((resolve, reject) => {
            const client = this.app.apolloProvider.defaultClient
            const query = {
                query: require('../graphql/categories.gql')
            }
            await client.query(query).then(data => {
                commit('addCategories', data.data.categories)
                // commit('addLoadedRecipes', data.data.recipes)
                console.log(data)
                // resolve()
            }).catch(error => {
                console.log(error)
                // reject()
            })
            // })
        },
        searchRecipe({commit}, payload) {
            let client = this.app.apolloProvider.defaultClient
            const query = {
                query: require('../graphql/searchRecipe.gql'),
                variables: { term: payload }
            }
            client.query(query).then(data => {
                // console.log(data)
                commit('addLoadedRecipes', data.data.recipes.data)
            }).catch(e => console.log(e))
        },
        ≡
    }
    ```
3. Modificar layout **frontend\layouts\default.vue**:
    ```vue
    <template>
        <v-app>
            ≡
            <v-app-bar app :clipped-left="$vuetify.breakpoint.lgAndUp"  color="grey lighten-4" flat>
                <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
                <v-toolbar-title v-text="title"></v-toolbar-title>
                <v-spacer></v-spacer>
                <v-menu v-model="search" :close-on-content-click="false" offset-y>
                    <template v-slot:activator="{on}">
                        <v-btn v-on="on" color="primary" icon>
                            <v-icon>mdi-magnify</v-icon>
                        </v-btn>
                    </template>
                    <v-card>
                        <v-card-title>Buscar receta</v-card-title>
                        <v-card-text>
                            <v-text-field 
                                outlined 
                                label="Nombre receta" 
                                dense 
                                v-model="findRecipe"
                                @input="searchRecipe()"
                            ></v-text-field>
                            <v-list v-if="findRecipe.length != 0">
                                <v-list-item 
                                    v-for="recipe in recipes" 
                                    :key="recipe.id" 
                                    @click="seeRecipe(recipe.attributes.category.data.attributes.slug, recipe.id)"
                                >
                                    {{ recipe.attributes.name }}
                                </v-list-item>
                            </v-list>
                        </v-card-text>
                    </v-card>
                </v-menu>
            </v-app-bar>
            ≡
        </v-app>
    </template>

    <script>
    import { mapGetters } from 'vuex'
    export default {
        ≡
        computed: {
            ...mapGetters({
                links: "readCategories",
                recipes: "readLoadedRecipes"
            }),
            filterRecipe() {
                return this.recipes.data.filter(recipe => recipe.attributes.name.toLowerCase().match(this.findRecipe.toLowerCase()))
            }
        },
        methods: {
            seeRecipe(category, recipe) {
                this.findRecipe = ""
                this.search = false
                this.$router.push({name: 'category-recipe', params: {category, recipe}})
            },
            searchRecipe() {
                this.$store.dispatch('searchRecipe', this.findRecipe)
            }
        }
    }
    </script>
    ```
4. Modificar query **frontend\graphql\searchRecipe.gql**:
    ```graphql
    query($term:String!){
        recipes(filters:{name:{contains:$term}}){
            data{
                id
                attributes{
                    name
                    category{
                        data{
                            id
                            attributes{
                                name
                                slug
                            }
                        }
                    }
                }
            }
        }
    }
    ```

### 127. Modificaciones V4 Strapi/GraphQL
+ Debemos modificar el archivo GraphQL y la acción, como la mutación ya tenía la modificación se puede dejar como estaba.
+ Archivo gql:
    ```graphql
    query($term:String!){
        recipes(filters:{name:{contains:$term}}){
            data{
                id
                attributes{
                    name
                    category{
                        data{
                            id
                            attributes{
                                name
                                slug
                            }
                        }
                    }
                }
            }
        }
    }
    ```
+ Acciones:
    + Nuxt server init // poner en comentarios el llamado a la antigua mutation:
    ```js
    await client.query(query).then(data => {
        commit('addCategories', data.data.categories.data)
        // commit('addLoadedRecipes', data.data.recipes.data)
        // resolve()
    }).catch(error => {
        console.log(error)
        // reject()
    })
    ```
+ Pasar el valor del array a la mutation:
    ```js
    searchRecipe({commit}, payload){
        let client = this.app.apolloProvider.defaultClient
        const query = {
            query:require('../graphql/searchRecipe.gql'),
            variables:{term:payload}
        }
        client.query(query).then(data => {
            //console.log(data)
            commit('addLoadedRecipes', data.data.recipes.data)
        }).catch(e => console.log(e))
    },
    ```

### 128. Archivos del proyecto sección 9
+ **Repositorio**: 00recursos\Section_09_buscador.zip


## Sección 10: Iniciar sesion con Nuxt Auth
### 129. Sitios web visitados en la sección
+ Material de apoyo:
    + https://auth.nuxtjs.org
    + https://strapi.io/documentation/developer-docs/latest/development/plugins/users-permissions.html
+ Vuetify Components:
    + https://vuetifyjs.com/en/components/dialogs
    + https://vuetifyjs.com/en/components/snackbars
    + https://vuetifyjs.com/en/components/forms
    + https://vuetifyjs.com/en/components/avatars
    + https://vuetifyjs.com/en/components/forms
    + https://vuetifyjs.com/en/components/menus

### 130. Componente de dialogo V-dialog
1. Modificar layout **frontend\layouts\default.vue**:
    ```vue
    <template>
        <v-app>
            ≡
            <v-app-bar app :clipped-left="$vuetify.breakpoint.lgAndUp"  color="grey lighten-4" flat>
                ≡
                <v-btn text color="primary" @click="dialog = true; type='app-forms-login'">Iniciar sesión</v-btn>
                <v-btn text color="primary" @click="dialog = true; type='app-forms-register'">Registro</v-btn>
            </v-app-bar>
            

            <v-main class="grey lighten-4">
                <nuxt/>
            </v-main>

            <v-dialog v-model="dialog">
                <component :is="type" />
            </v-dialog>
            ≡
        </v-app>
    </template>

    <script>
    import { mapGetters } from 'vuex'
    export default {
        name: 'DefaultLayout',
        data () {
            return {
                ≡
                dialog: false,
                type: 'app-forms-login'
            }
        },
        ≡
    }
    </script>
    ```
2. Crear componente **frontend\components\forms\Register.vue**:
    ```vue
    <template>
        <div>
            Registro
        </div>
    </template>
    ```

### 131. Creación del componente de inicio de sesión
1. Diseñar componente **frontend\components\forms\Login.vue**:
    ```vue
    <template>
        <v-card>
            <v-card-title>
                <v-icon class="mr-3">mdi-account-key</v-icon>
                Iniciar sesión
            </v-card-title>
            <v-card-text>
                <v-text-field dense outlined label="Nombre de usuario"></v-text-field>
                <v-text-field dense outlined label="Contraseña"></v-text-field>
                <div class="d-flex justify-space-between">
                    <v-btn color="primary" small>Entrar</v-btn>
                    <v-btn color="primary" small outlined @click="close()">Cerrar</v-btn>
                </div>
            </v-card-text>
        </v-card>
    </template>

    <script>
    export default {
        methods: {
            close() {
                this.$emit('close', false)
            }
        }
    }
    </script>
    ```
2. Modificar layout **frontend\layouts\default.vue**:
    ```vue
    ≡
    <v-dialog v-model="dialog" max-width="600">
        <component :is="type" @close="dialog = $event" />
    </v-dialog>
    ≡
    ```
3. Diseñar componente **frontend\components\forms\Register.vue**:
    ```vue
    <template>
        <v-card>
            <v-card-title class="title secondary white--text">
                <v-icon class="mr-3" dark>mdi-account-plus</v-icon>
                Formulario de registro
            </v-card-title>
            <v-card-text>
                <v-container>
                    <v-text-field dense outlined label="Nombre de usuario"></v-text-field>
                    <v-text-field dense outlined label="E-mail"></v-text-field>
                    <v-text-field dense outlined label="Contraseña"></v-text-field>
                    <v-text-field dense outlined label="Confirmar contraseña"></v-text-field>
                    <div class="d-flex justify-space-between">
                        <v-btn color="secondary" small>Entrar</v-btn>
                        <v-btn color="secondary" small outlined @click="close()">Cerrar</v-btn>
                    </div>
                </v-container>
            </v-card-text>
        </v-card>
    </template>

    <script>
    export default {
        methods: {
            close() {
                this.$emit('close', false)
            }
        }
    }
    </script>
    ```

### 132. Componente snackbar
1. Modificar layout **frontend\layouts\default.vue**:
    ```vue
    <template>
        <v-app>
            ≡
            <v-app-bar app :clipped-left="$vuetify.breakpoint.lgAndUp"  color="grey lighten-4" flat>
                ≡
                <v-btn @click="snack = true">Temporal</v-btn>
            </v-app-bar>
            

            <v-main class="grey lighten-4">
                <nuxt/>
                <v-snackbar 
                    v-model="snack"
                    color="info"
                    :timeout="3000"
                    top
                    right
                >
                    Soluciones++
                    <v-btn slot="action" small icon @click="snack = false">
                        <v-icon small>mdi-close</v-icon>
                    </v-btn>
                </v-snackbar>
            </v-main>
            ≡
        </v-app>
    </template>

    <script>
    import { mapGetters } from 'vuex'
    export default {
        ≡
        data () {
            return {
                ≡
                snack: false
            }
        },
        ≡
    }
    </script>
    ```

### 133. Mensaje al usuario con snackbars
1. Crear tienda **frontend\store\snackbars.js**:
    ```js
    export const state = () => ({
        snackbars: []
    })

    export const getters = {
        readSnackbars(state){
            return state.snackbars
        }
    }

    export const mutations = {
        setSnack(state, payload) {
            state.snackbars = state.snackbars.concat(payload)
        }
    }

    export const actions = {
        setSnack({commit}, payload) {
            payload.showing = true
            payload.timeout = payload.timeout || 3000
            payload.color = payload.color || 'info'
            commit('setSnack', payload)
        }
    }
    ```
2. Modificar layout **frontend\layouts\default.vue**:
    ```vue
    <template>
        <v-app>
            ≡
            <v-app-bar app :clipped-left="$vuetify.breakpoint.lgAndUp"  color="grey lighten-4" flat>
                ≡
                <v-btn @click="test()">Temporal</v-btn>
            </v-app-bar>
            

            <v-main class="grey lighten-4">
                <nuxt/>
                {{ snacks }}
                <v-snackbar 
                    v-for="(snack, i) in snacks.filter((s) => s.showing)"
                    :key="i + Math.random()"
                    v-model="snack.showing"
                    :color="snack.color"
                    :timeout="snack.timeout"
                    :style="`bottom: ${i * 60 + 8}px`"
                    right
                >
                    {{ snack.text }}
                    <v-btn slot="action" small icon @click="snack.showing = false">
                        <v-icon small>mdi-close</v-icon>
                    </v-btn>
                </v-snackbar>
            </v-main>
            ≡
        </v-app>
    </template>

    <script>
    ≡
    export default {
        ≡
        ≡
        computed: {
            ...mapGetters({
                links: "readCategories",
                recipes: "readLoadedRecipes",
                snacks: "snackbars/readSnackbars"
            }),
            ≡
        },
        methods: {
            ≡
            test() {
                this.$store.dispatch('snackbars/setSnack', {
                    text: 'Prueba en Soluciones++',
                    color: 'error'
                })
            }
        }
    }
    </script>
    ```
3. Modificar tienda **frontend\store\index.js**:
    ```js
    export const strict = false
    ≡
    ```

### 134. Remover elementos temporales (Video opcional)
1. Modificar layout **frontend\layouts\default.vue**:
    ```vue
    <template>
        <v-app>
            ≡
            <v-app-bar app :clipped-left="$vuetify.breakpoint.lgAndUp"  color="grey lighten-4" flat>
                ≡
                <v-btn text color="primary" @click="dialog = true; type='app-forms-login'">Iniciar sesión</v-btn>
                <v-btn text color="primary" @click="dialog = true; type='app-forms-register'">Registro</v-btn>
            </v-app-bar>
            

            <v-main class="grey lighten-4">
                <nuxt/>
                <v-snackbar 
                    v-for="(snack, i) in snacks.filter((s) => s.showing)"
                    :key="i + Math.random()"
                    v-model="snack.showing"
                    :color="snack.color"
                    :timeout="snack.timeout"
                    :style="`bottom: ${i * 60 + 8}px`"
                    right
                >
                    {{ snack.text }}
                    <v-btn slot="action" small icon @click="snack.showing = false">
                        <v-icon small>mdi-close</v-icon>
                    </v-btn>
                </v-snackbar>
            </v-main>
            ≡
        </v-app>
    </template>

    <script>
    ≡
    export default {
        ≡
        ≡
        computed: {
            ...mapGetters({
                links: "readCategories",
                recipes: "readLoadedRecipes",
                snacks: "snackbars/readSnackbars"
            }),
            ≡
        },
        methods: {
            ≡
            searchRecipe() {
                this.$store.dispatch('searchRecipe', this.findRecipe)
            }
        }
    }
    </script>
    ```

### 135. Instalación del módulo NuxtAuth
+ https://auth.nuxtjs.org
1. Instalar dependencia NuxtAuth en el proyecto **frontend**:
    + $ npm install --save-exact @nuxtjs/auth-next
    + $ npm install @nuxtjs/axios
2. Modificar el archivo de configuración de Nuxt.js **frontend\nuxt.config.js**:
    ```js
    ≡
    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        '@nuxtjs/apollo',
        '@nuxtjs/axios',
        '@nuxtjs/auth-next'
    ],
    
    auth: {
        // Options
    },
    ≡
    ```

### 136. Configuración del módulo NuxtAuth
1. Modificar el archivo de configuración de Nuxt.js **frontend\nuxt.config.js**:
    ```js
    ≡
    auth: {
        strategies: {
        local: {
            token: {
                property: 'jwt',
                /* global: true, */
                type: 'Bearer'
            },
            user: {
                property: false
            },
            endpoints: {
                login: { url: 'api/auth/local', method: 'post' },
                logout: false,
                user: { url: 'api/users/me', method: 'get' }
            }
        }
        },
        redirect: {
            login: '/',
            logout: '/',
            callback: '/',
            home: '/user'
        }
    },
    ≡
    ```
2. Crear página **frontend\pages\user\index.vue**:
    ```vue
    <template>
        <div>
            Bienvenido!!!
        </div>
    </template>

    <script>
    export default {
        middleware: 'auth'
    }
    </script>
    ```
3. Crear carpeta:
    + frontend\middleware

### 137. Cambios en la V4 de Strapi
+ Por la version V4 debemos simplemente modificar los endpoints de Strapi, agregando la palabra api.
    + Quedaría así:
        + login: api/auth/local
        + user: api/users/me
        ```js
        ≡
        auth: {
            strategies: {
                local: {
                    token: {
                        property: 'jwt',
                        type: 'Bearer'
                    },
                    user: {
                        property: false,
                    },
                    endpoints: {
                        login: { url: 'api/auth/local', method: 'post' },
                        logout: false,
                        user: { url: 'api/users/me', method: 'get' }
                    }
                }
            },
        ≡
        ```
+ Recuerda mirar la documentación oficial de Strapi o de tu backend.

### 138. Nuxt 2.15 Carpeta middleware
+ A partir de la versión 2.15 de Nuxt la carpeta middleware debe adjuntarse de forma manual.
+ Debes crear una carpeta en el directorio raíz de tu proyecto. Con el siguiente nombre:
    + middleware

### 139. Carpeta Middleware
1. Crear middleware **frontend\middleware\initData.js**:
    ```js
    export default function({store}) {
        console.log('Middleware en Soluciones++')
        if(store.state.categories.length == 0){
            store.dispatch('nuxtServerInit')
        }
    }
    ```
2. Agregar el middleware anterior en el page **frontend\pages\index.vue**:
    ```vue
    ≡
    <script>
    export default {
        middleware: "initData",
        ≡
    }
    </script>
    ```

### 140. Estrategia LoginWith
1. Modificar el archivo de configuración de Nuxt.js **frontend\nuxt.config.js**:
    ```js
    ≡
    auth: {
            ≡
        }
    },

    axios: {
        baseURL: 'http://localhost:1337/'
    },
    ≡
    ```
2. Modificar componente **frontend\components\forms\Login.vue**:
    ```vue
    <template>
        <v-card>
            ≡
            <v-card-text>
                <v-form @submit.prevent="onsubmit">
                    <v-text-field dense outlined label="Nombre de usuario" v-model="userInfo.identifier"></v-text-field>
                    <v-text-field dense outlined label="Contraseña" v-model="userInfo.password"></v-text-field>
                    <div class="d-flex justify-space-between">
                        <v-btn color="primary" small type="submit">Entrar</v-btn>
                        <v-btn color="primary" small outlined @click="close()">Cerrar</v-btn>
                    </div>
                </v-form>
            </v-card-text>
        </v-card>
    </template>

    <script>
    export default {
        data() {
            return {
                userInfo: {
                    identifier: '',
                    password: ''
                }
            }
        },
        methods: {
            ≡
            async onsubmit() {
                await this.$auth.loginWith('local', {data: this.userInfo}).then(() => {
                    console.log(this.$auth)
                    this.$emit('close', false)
                }).catch(e => console.log(e))
            }
        }
    }
    </script>
    ```

### 141. Objeto $auth y logout
1. Modificar layout **frontend\layouts\default.vue**:
    ```vue
    <template>
        <v-app>
            ≡
            <v-app-bar app :clipped-left="$vuetify.breakpoint.lgAndUp"  color="grey lighten-4" flat>
                ≡
                <div v-if="$auth.loggedIn">
                    {{ $auth.user.username }}
                    <v-btn text color="primary" @click="logout()">Cerrar sesión</v-btn>
                </div>
                <div v-else>
                    <v-btn text color="primary" @click="dialog = true; type='app-forms-login'">Iniciar sesión</v-btn>
                    <v-btn text color="primary" @click="dialog = true; type='app-forms-register'">Registro</v-btn>
                </div>
            </v-app-bar>
            ≡
        </v-app>
    </template>

    <script>
    ≡
    export default {
        ≡
        methods: {
            ≡
            logout() {
                this.$auth.logout()
            }
        }
    }
    </script>
    ```

### 142. Estilos menú modal y avatar
1. Modificar layout **frontend\layouts\default.vue**:
    ```vue
    <template>
        <v-app>
            ≡
            <v-app-bar app :clipped-left="$vuetify.breakpoint.lgAndUp"  color="grey lighten-4" flat>
                ≡
                <div v-if="$auth.loggedIn">
                    <v-menu
                        v-model="loginmenu"
                        :close-on-content-click="false"
                        offset-y
                    >
                        <template v-slot:activator="{on}">
                            <v-btn v-on="on" icon>
                                <v-avatar class="secondary">
                                    <span class="white--text headline">{{ $auth.user.username[0] }}</span>
                                </v-avatar>
                            </v-btn>
                        </template>
                        <v-card>
                            <v-list>
                                <v-list-item>
                                    <v-list-content>
                                        <v-list-item-title>{{ $auth.user.username }}</v-list-item-title>
                                        <v-list-item-subtitle>{{ $auth.user.email }}</v-list-item-subtitle>
                                    </v-list-content>
                                    <v-list-item-action>
                                        <v-btn to="/user" small>Admin</v-btn>
                                    </v-list-item-action>
                                </v-list-item>
                            </v-list>
                            <v-card-actions>
                                <v-btn text color="primary" @click="loginmenu = false">Cerrar</v-btn>
                                <v-btn color="primary" @click="logout()" small>Cerrar sesión</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-menu>
                </div>
                <div v-else>
                    <v-btn text color="primary" @click="dialog = true; type='app-forms-login'">Iniciar sesión</v-btn>
                    <v-btn text color="primary" @click="dialog = true; type='app-forms-register'">Registro</v-btn>
                </div>
            </v-app-bar>
            ≡
        </v-app>
    </template>

    <script>
    ≡
    export default {
        ≡
        data () {
            return {
                ≡
                loginmenu: false
            }
        },
        ≡
    }
    </script>
    ```

### 143. Contraseña y mensajes
1. Modificar componente **frontend\components\forms\Login.vue**:
    ```vue
    <template>
        <v-card>
            ≡
            <v-card-text>
                <v-form @submit.prevent="onsubmit">
                    <v-text-field dense outlined label="Nombre de usuario" v-model="userInfo.identifier"></v-text-field>
                    <v-text-field 
                        dense 
                        outlined 
                        label="Contraseña" 
                        v-model="userInfo.password"
                        :type="show ? 'text' : 'password'"
                        :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                        @click:append="show = !show"
                    ></v-text-field>
                    ≡
                </v-form>
            </v-card-text>
        </v-card>
    </template>

    <script>
    export default {
        data() {
            return {
                show: false,
                userInfo: {
                    identifier: '',
                    password: ''
                }
            }
        },
        methods: {
            ≡
            async onsubmit() {
                await this.$auth.loginWith('local', {data: this.userInfo}).then(() => {
                    console.log(this.$auth)
                    this.$emit('close', false)
                    const msg = `Bienvenido ${this.$auth.user.username}`
                    this.$store.dispatch('snackbars/setSnack', {
                        text: msg,
                        color: 'success'
                    })
                }).catch(e => {
                    this.$store.dispatch('snackbars/setSnack', {
                        text: 'Verificar nombre de usuario o contraseña',
                        color: 'error'
                    })
                })
            }
        }
    }
    </script>
    ```

### 144. Registro mutación
1. Crear archivo de mutación GraphQL **frontend\graphql\register.gql**:
    ```graphql
    mutation(
        $username: String!
        $email: String!
        $password: String!
    ) {
        register (
            input: {
                username: $username
                email: $email
                password: $password
            }
        ){
            user {
                username
                email
            }
        }
    }
    ```

### 145. Registro
1. Modificar componente **frontend\components\forms\Register.vue**:
    ```vue
    <template>
        <v-card>
            <v-card-title class="title secondary white--text">
                <v-icon class="mr-3" dark>mdi-account-plus</v-icon>
                Formulario de registro
            </v-card-title>
            <v-card-text>
                <v-container>
                    <v-form @submit.prevent="onsubmit">
                        <v-text-field dense outlined label="Nombre de usuario" v-model="userInfo.username"></v-text-field>
                        <v-text-field dense outlined label="E-mail" v-model="userInfo.email"></v-text-field>
                        <v-text-field dense outlined label="Contraseña" v-model="userInfo.password"></v-text-field>
                        <v-text-field dense outlined label="Confirmar contraseña"></v-text-field>
                        <div class="d-flex justify-space-between">
                            <v-btn color="secondary" small type="submit">Registrarse</v-btn>
                            <v-btn color="secondary" small outlined @click="close()">Cerrar</v-btn>
                        </div>
                    </v-form>
                </v-container>
            </v-card-text>
        </v-card>
    </template>

    <script>
    export default {
        data() {
            return {
                show: false,
                userInfo: {
                    username: '',
                    email: '',
                    password: ''
                }
            }
        },
        methods: {
            close() {
                this.$emit('close', false)
            },
            onsubmit() {
                this.userInfo.identifier = this.userInfo.username
                this.$apollo.mutate({
                    mutation: require('../../graphql/register.gql'),
                    variables: this.userInfo
                }).then(res => {
                    this.$auth.loginWith('local', {data: this.userInfo}).then(() => {
                        this.$emit('close', false)
                        const msg = `Bienvenido ${this.$auth.user.username}`
                        this.$store.dispatch('snackbars/setSnack', {
                            text: msg,
                            color: 'success'
                        }).catch(e => {
                            this.$store.dispatch('snackbars/setSnack', {
                                text: 'Verificar nombre de usuario o contraseña',
                                color: 'error'
                            })
                        })
                    })
                })
            }
        }
    }
    </script>
    ```

### 146. Validación de formulario
1. Modificar componente **frontend\components\forms\Register.vue**:
    ```vue
    <template>
        <v-card>
            ≡
            <v-card-text>
                <v-container>
                    <v-form @submit.prevent="onsubmit" ref="form">
                        <v-text-field 
                            dense 
                            outlined 
                            label="Nombre de usuario" 
                            v-model="userInfo.username"
                            :rules="[rules.required]"
                        ></v-text-field>
                        <v-text-field 
                            dense 
                            outlined 
                            label="E-mail" 
                            v-model="userInfo.email"
                            :rules="[rules.required, rules.email]"
                        ></v-text-field>
                        <v-text-field 
                            dense 
                            outlined 
                            label="Contraseña" 
                            v-model="userInfo.password"
                            :rules="[rules.required, rules.min, rules.match]"
                            counter
                        ></v-text-field>
                        <v-text-field 
                            dense 
                            outlined 
                            label="Confirmar contraseña" 
                            v-model="userInfo.repassword"
                            :rules="[rules.required, rules.min, rules.match]"
                            counter
                        ></v-text-field>
                        ≡
                    </v-form>
                </v-container>
            </v-card-text>
        </v-card>
    </template>

    <script>
    export default {
        data() {
            return {
                show: false,
                rules: {
                    required: (value) => !!value || "Este campo es obligatorio",
                    min: (v) => (v||'').length >= 8 || "Minimo 8 caracteres",
                    email: (v) => /.+@/.test(v) || "Deber ser un email",
                    match: () => this.userInfo.password === this.userInfo.repassword || "Las contrasenas deben ser iguales",
                },
                ≡
            }
        },
        methods: {
            ≡
            onsubmit() {
                if(this.$refs.form.validate()){
                    this.userInfo.identifier = this.userInfo.username
                    this.$apollo.mutate({
                        mutation: require('../../graphql/register.gql'),
                        variables: this.userInfo
                    }).then(res => {
                        this.$auth.loginWith('local', {data: this.userInfo}).then(() => {
                            this.$emit('close', false)
                            const msg = `Bienvenido ${this.$auth.user.username}`
                            this.$store.dispatch('snackbars/setSnack', {
                                text: msg,
                                color: 'success'
                            }).catch(e => {
                                this.$store.dispatch('snackbars/setSnack', {
                                    text: 'Verificar nombre de usuario o contraseña',
                                    color: 'error'
                                })
                            })
                        })
                    })
                }
            }
        }
    }
    </script>
    ```

### 147. Últimos detalles
1. Modificar componente **frontend\components\forms\Register.vue**:
    ```vue
    <template>
        <v-card>
            <v-card-title class="title secondary white--text">
                <v-icon class="mr-3" dark>mdi-account-plus</v-icon>
                Formulario de registro
            </v-card-title>
            <v-card-text>
                <v-container>
                    <v-form @submit.prevent="onsubmit" ref="form">
                        <v-text-field 
                            dense 
                            outlined 
                            label="Nombre de usuario" 
                            v-model="userInfo.username"
                            :rules="[rules.required]"
                        ></v-text-field>
                        <v-text-field 
                            dense 
                            outlined 
                            label="E-mail" 
                            v-model="userInfo.email"
                            :rules="[rules.required, rules.email]"
                        ></v-text-field>
                        <v-text-field 
                            dense 
                            outlined 
                            label="Contraseña" 
                            v-model="userInfo.password"
                            :rules="[rules.required, rules.min, rules.match]"
                            counter
                            :type="show ? 'text' : 'password'"
                            :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                            @click:append="show = !show"
                        ></v-text-field>
                        <v-text-field 
                            dense 
                            outlined 
                            label="Confirmar contraseña" 
                            v-model="userInfo.repassword"
                            :rules="[rules.required, rules.min, rules.match]"
                            counter
                            :type="show2 ? 'text' : 'password'"
                            :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
                            @click:append="show2 = !show"
                        ></v-text-field>
                        <div class="d-flex justify-space-between">
                            <v-btn color="secondary" small type="submit">Registrarse</v-btn>
                            <v-btn color="secondary" small outlined @click="close()">Cerrar</v-btn>
                        </div>
                    </v-form>
                </v-container>
            </v-card-text>
        </v-card>
    </template>

    <script>
    export default {
        data() {
            return {
                show: false,
                show2: false,
                rules: {
                    required: (value) => !!value || "Este campo es obligatorio",
                    min: (v) => (v||'').length >= 8 || "Minimo 8 caracteres",
                    email: (v) => /.+@/.test(v) || "Deber ser un email",
                    match: () => this.userInfo.password === this.userInfo.repassword || "Las contrasenas deben ser iguales",
                },
                userInfo: {
                    username: '',
                    email: '',
                    password: '',
                    repassword: ''
                }
            }
        },
        methods: {
            close() {
                this.$emit('close', false)
                this.$refs.form.reset()
            },
            onsubmit() {
                if(this.$refs.form.validate()){
                    this.userInfo.identifier = this.userInfo.username
                    this.$apollo.mutate({
                        mutation: require('../../graphql/register.gql'),
                        variables: this.userInfo
                    }).then(res => {
                        this.$auth.loginWith('local', {data: this.userInfo}).then(() => {
                            this.$emit('close', false)
                            const msg = `Bienvenido ${this.$auth.user.username}`
                            this.$refs.form.reset()
                            this.$store.dispatch('snackbars/setSnack', {
                                text: msg,
                                color: 'success'
                            }).catch(e => {
                                this.$store.dispatch('snackbars/setSnack', {
                                    text: 'Verificar nombre de usuario o contraseña',
                                    color: 'error'
                                })
                            })
                        })
                    })
                }
            }
        }
    }
    </script>
    ```
2. Modifcar page **frontend\layouts\default.vue**:
    ```vue
    ≡
    <template>
        <v-app>
            ≡
            <v-app-bar app :clipped-left="$vuetify.breakpoint.lgAndUp"  color="grey lighten-4" flat>
                ≡
                <div v-if="$auth.loggedIn">
                    <v-menu
                        ≡
                    >
                        ≡
                        <v-card>
                            <v-list>
                                <v-list-item>
                                    <v-list-item-content>
                                        <v-list-item-title>{{ $auth.user.username }}</v-list-item-title>
                                        <v-list-item-subtitle>{{ $auth.user.email }}</v-list-item-subtitle>
                                    </v-list-item-content>
                                    <v-list-item-action>
                                        <v-btn to="/user" small>Admin</v-btn>
                                    </v-list-item-action>
                                </v-list-item>
                            </v-list>
                            <v-card-actions>
                                <v-btn text color="primary" @click="loginmenu = false">Cerrar</v-btn>
                                <v-btn color="primary" @click="logout()" small>Cerrar sesión</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-menu>
                </div>
                ≡
            </v-app-bar>
            ≡
        </v-app>
    </template>

    <script>
    ≡
    export default {
        ≡
        methods: {
            ≡
            logout() {
                this.$auth.logout()
                this.loginmenu = false
            }
        }
    }
    </script>
    ≡
    ```
3. Modificar componente **frontend\components\forms\Login.vue**:
    ```vue
    <template>
        <v-card>
            <v-card-title>
                <v-icon class="mr-3">mdi-account-key</v-icon>
                Iniciar sesión
            </v-card-title>
            <v-card-text>
                <v-form @submit.prevent="onsubmit">
                    <v-text-field dense outlined label="Nombre de usuario" v-model="userInfo.identifier"></v-text-field>
                    <v-text-field 
                        dense 
                        outlined 
                        label="Contraseña" 
                        v-model="userInfo.password"
                        :type="show ? 'text' : 'password'"
                        :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                        @click:append="show = !show"
                    ></v-text-field>
                    <div class="d-flex justify-space-between">
                        <v-btn color="primary" small type="submit">Entrar</v-btn>
                        <v-btn color="primary" small outlined @click="close()">Cerrar</v-btn>
                    </div>
                </v-form>
            </v-card-text>
        </v-card>
    </template>

    <script>
    export default {
        data() {
            return {
                show: false,
                userInfo: {
                    identifier: '',
                    password: ''
                }
            }
        },
        methods: {
            close() {
                this.$emit('close', false)
            },
            async onsubmit() {
                await this.$auth.loginWith('local', {data: this.userInfo}).then(() => {
                    console.log(this.$auth)
                    this.$emit('close', false)
                    this.userInfo.identifier = ''
                    this.userInfo.password = ''
                    const msg = `Bienvenido ${this.$auth.user.username}`
                    this.$store.dispatch('snackbars/setSnack', {
                        text: msg,
                        color: 'success'
                    })
                }).catch(e => {
                    this.$store.dispatch('snackbars/setSnack', {
                        text: 'Verificar nombre de usuario o contraseña',
                        color: 'error'
                    })
                })
            }
        }
    }
    </script>
    ```

### 148. Archivos del proyecto sección 10
+ **Repositorio**: 00recursos\Section_10_auth


## Sección 11: Crear, modificar y borrar con GraphQL desde Nuxt
### 149. Sitios web visitados en la sección
+ Material de apoyo:
    + https://www.apollographql.com/docs/react/data/queries/

### 150. Nueva relación User/Autor
1. En Strapi agregar relación a la colección recipes:
    + Ir a **Content-Type Builder**.
    + Seleccionar **Recipes** y luego **Add another field to this collection type**.
    + Seleccionar **Relation** y establecer ralación con **User (from users-permission)**.
    + Tipo de relación: **User has many recipes**.
    + Field name: autor.
    + Preionar **Finish** y luego en **Save**.
2. Reiniciar el servidor **backend**.

### 151. Otorgar los permisos de edición del autor en Strapi
+ Para otorgar permisos de edición del autor:
    + Posiblemente vas a obtener un mensaje de prohibido para acceder o editar los datos del usuario (autor) desde recetas, para esto debemos activar los permisos, como habíamos hecho anteriormente.
    + Debemos ir a settings / roles / public /user-permission / user / y activar el campo find, luego guardar.
    + Luego en el campo Authenticated / user-permission / user / y activar find, findoOne y update.
    + Ya podrás obtener y editar los datos de user (autor) en recipes

### 152. Autor recetas
1. Modificar query **frontend\graphql\recipe.gql**:
    ```graphql
    query($id:ID!) {
        recipe(id:$id){
            data {
                id
                attributes {
                    name
                    duration
                    servings
                    img
                    description
                    ingredients
                    steps
                    likes
                    category{
                        data{
                            id
                            attributes {
                                name
                                slug
                            }
                        }
                    }
                    autor{
                        data{
                            id
                            attributes {
                                username
                            }
                        }
                    }
                }
            }
        }
    }
    ```
2. Modificar query **frontend\graphql\recipes.gql**:
    ```graphql
    query($slug:String!) {
        recipes(filters:{category:{slug:{eq:$slug}}}){
            data {
                id
                attributes {
                    name
                    likes
                    img
                    category{
                        data{
                        id
                        attributes {
                            name
                            slug
                        }
                        }
                    }
                    autor{
                        data{
                            id
                            attributes {
                                username
                            }
                        }
                    }
                }
            }
        }
    }
    ```
3. Modificar componente **frontend\components\ui\NavCardRecipe.vue**:
    ```vue
    <template>
        <v-card 
           ≡
        >
            ≡
            <v-card-text>
                <v-row>
                    <v-col cols="7">
                        <h3>{{ recipe.attributes.name }}</h3>
                        {{ recipe.attributes.autor.data.attributes.username }}
                        
                    </v-col>
                    ≡
                </v-row>
            </v-card-text>
        </v-card>
    </template>
    ≡
    ```
4. Modificar page **frontend\pages\\_category\\_recipe\index.vue**:
    ```vue
    ≡
    <v-chip color="primary" outlined>
        <v-icon left>mdi-account-edit</v-icon>
        Autor: {{ recipe.attributes.autor.data.attributes.username }}
    </v-chip>
    ≡
    ```

### 153. Modificaciones Strapi V4
+ repices.gql:
    ```graphql
    query($id:ID!){
        recipe(id:$id){
            data{
                id
                attributes{
                    name
                    duration
                    servings
                    img
                    description
                    ingredients
                    steps
                    likes
                    category{
                        data{
                            id
                            attributes{
                                name
                                slug
                            }
                        }
                    }
                    autor{
                        data{
                            attributes{
                                username
                            }
                        }
                    }
                }
            }
        }
    }
    ```
+ Modificamos el objeto de respuesta en category/index:
    ```js
    const recipe = {
        id:element.id,
        name:element.attributes.name,
        likes:element.attributes.likes,
        img:element.attributes.img,
        //en la propiedad category conservo un objeto
        //pero filtro las propiedades data y attributos para facil uso
        category:{id:element.attributes.category.data.id, 
        ...element.attributes.category.data.attributes},
        //autor 
            autor:element.attributes.autor.data.attributes.username
    }
    ```
+ Modificamos el navcardrecipe:
    ```html
    <v-card-text>
        <v-row>
            <v-col cols="7">
                <h3>{{recipe.name}}</h3>
                {{recipe.autor}}
            </v-col>
            <v-col cols="5" class="d-flex justify-end">
                <div>
                    <v-icon>mdi-heart</v-icon>
                    <span>{{recipe.likes}}</span>
                </div>
            </v-col>
        </v-row>
    </v-card-text>
    ```
+ recipe.gql
    ```graphql
    query($id:ID!){
        recipe(id:$id){
            data{
                id
                attributes{
                    name
                    duration
                    servings
                    img
                    description
                    ingredients
                    steps
                    likes
                    category{
                        data{
                            id
                            attributes{
                                name
                                slug
                            }
                        }
                    }
                    autor{
                        data{
                            attributes{
                                username
                            }
                        }
                    }
                }
            }
        }
    }
    ```
+ Modificamos el objeto de respuesta en category/recipe/index
    ```js
    recipe = {
        id,
        name:attributes.name,
        duration:attributes.duration,
        servings:attributes.servings,
        img:attributes.img,
        description:attributes.description,
        ingredients:attributes.ingredients,
        steps:attributes.steps,
        likes:attributes.likes,
        category:{id:attributes.category.data.id, ...attributes.category.data.attributes},
        //add autor to recipe
        autor:attributes.autor.data.attributes.username
    }
    ```

### 154. Página de usuario
1. Crear query **frontend\graphql\userRecipes.gql**:
    ```graphql
    query($id:ID!){
        recipes(filters:{autor:{id:{eq:$id}}}){
            data{
                id
                attributes{
                    name
                    category{
                        data{
                            id
                            attributes{
                                name
                            }
                        }
                    }
                }
            }
        }
    }
    ```
2. Modificar page **frontend\pages\user\index.vue**:
    ```vue
    <template>
        <div>
            Bienvenido!!!
            <div>
                {{ recipes }}
            </div>
        </div>
    </template>

    <script>
    export default {
        middleware: 'auth',
        async asyncData({ app }) {
            let client = app.apolloProvider.defaultClient
            let id = app.$auth.user.id
            let query = {
                query: require("../../graphql/userRecipes.gql"),
                variables: { id },
            }
            let recipes = null
            await client.query(query).then((res) => {
                //recuarda analizar los datos que trae tu servidor
                console.log(res)
                //convierto a recipes de un nulo a un array
                recipes = []
                //hago un bucle para crear obtener los datos de manera sencilla
                res.data.recipes.data.forEach((element) => {
                    //creo un nuevo objeto con el formato deseado
                    const recipe = {
                        id: element.id,
                        name: element.attributes.name,
                        category: {
                            id: element.attributes.category.data.id,
                            name:element.attributes.category.data.attributes.name
                        },
                    };
                    //recuerda analizar los datos que recibes en la respuesta
                    recipes.push(recipe)
                })
            })
            return { recipes }
        }
    }
    </script>
    ```

### 155. Modificaciones Strapi V4
+ userRecipes.gql:
    ```graphql
    query($id:ID!){
        recipes(filters:{autor:{id:{eq:$id}}}){
            data{
                id
                attributes{
                    name
                    category{
                        data{
                            id
                            attributes{
                                name
                            }
                        }
                    }
                }
            }
        }
    }
    ```
+ user/index:
    ```js
    ≡
    async asyncData({ app }) {
        let client = app.apolloProvider.defaultClient;
        let id = app.$auth.user.id;
        let query = {
            query: require("../../graphql/userRecipes.gql"),
            variables: { id },
        };
        let recipes = null;
        await client.query(query).then((res) => {
            //recuarda analizar los datos que trae tu servidor
            console.log(res);
            //convierto a recipes de un nulo a un array
            recipes = [];
            //hago un bucle para crear obtener los datos de manera sencilla
            res.data.recipes.data.forEach((element) => {
                //creo un nuevo objeto con el formato deseado
                const recipe = {
                    id: element.id,
                    name: element.attributes.name,
                    category: {
                        id: element.attributes.category.data.id,
                        name:element.attributes.category.data.attributes.name
                    },
                };
                //recuerda analizar los datos que recibes en la respuesta
                recipes.push(recipe);
            });
        });
        return { recipes };
    },
    ≡
    ```

### 156. Lista de recetas del usuario
1. Modificar page **frontend\pages\user\index.vue**:
    ```vue
    <template>
        <v-container>
            <h2>Bienvenido {{ $auth.user.username }}!!!</h2>
            <v-divider class="my-5"></v-divider>
            <h3>Lista de recetas</h3>
            <v-btn color="primary" small class="my-3">Agregar receta</v-btn>
            <div v-if="recipes">
                <app-ui-list-recipes :recipes="recipes"></app-ui-list-recipes>
            </div>
            <div v-else>Cargando...</div>
        </v-container>
    </template>
    ≡
    ```
2. Crear componente **frontend\components\ui\listRecipes.vue**:
    ```vue
    <template>
        <div>
            <div v-if="recipes.length != 0">
                <v-list>
                    <v-list-item-group>
                        <template v-for="recipe in recipes">
                            <v-list-item two-line :key="recipe.id">
                                <v-list-item-content>
                                    <v-list-item-title>
                                        {{ recipe.name }}
                                    </v-list-item-title>
                                    <v-list-item-subtitle>
                                        {{ recipe.category.name }}
                                    </v-list-item-subtitle>
                                </v-list-item-content>
                                <v-list-item-action>
                                    <v-row align="center" justify="center">
                                        <v-btn icon><v-icon>mdi-pencil</v-icon></v-btn>
                                        <v-btn icon><v-icon>mdi-delete</v-icon></v-btn>
                                    </v-row>
                                </v-list-item-action>
                            </v-list-item>
                        </template>
                    </v-list-item-group>
                </v-list>
            </div>
            <div v-else>
                No hay recetas disponibles
            </div>
        </div>
    </template>

    <script>
    export default {
        props: {
            recipes: {
                type: Array,
                default: () => ([])
            }
        }
    }
    </script>
    ```

### 157. Mutación de crear receta
1. Crear query ****:
    ```graphql
    mutation(
        $name: String!
        $duration: Int!
        $servings: Int!
        $img: String!
        $description: String!
        $ingredients: JSON!
        $steps: JSON!
        $category: ID!
        $autor: ID!
    ){
        createRecipe(
            data:{
                name: $name
                duration: $duration
                servings: $servings
                img: $img
                description: $description
                ingredients: $ingredients
                steps: $steps
                category: $category
                autor: $autor
            }
        ){
            data{
                id
                attributes{
                    name
                    autor{
                        data{
                            id
                        }
                    }
                    category{
                        data{
                            id
                            attributes{
                                name
                            }
                        }
                    }
                }
            }
        }
    }
    ```
    Query variables de prueba:
    ```json
    {
        "name": "Agua",
        "duration": 1,
        "servings": 1,
        "img": "",
        "description": "Solo es agua",
        "ingredients": ["agua"],
        "steps": ["servir el agua"],
        "category": 1,
        "autor": 2
    }
    ```
    HTTP Headers:
    ```json
    {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjQ5Mjg2NDY0LCJleHAiOjE2NTE4Nzg0NjR9.6O7cmZ064yV2MyMAFmLdbPTrjbKxGCiVarcPs5CF9WA"
    }
    ```
    Para obtener un token:
    ```graphql
    mutation {
        login(
            input: {
                identifier: "prueba2"
                password: "12345678"
            }
        ){
            jwt
        }
    }
    ```

### 158. Mutación de crear receta Strapi V4
+ Mutación para crear receta:
    ```graphql
    mutation(
        $name: String!
        $duration: Int!
        $servings: Int!
        $img: String!
        $description: String!
        $ingredients: JSON!
        $steps: JSON!
        $category: ID!
        $autor: ID!
    ){
        createRecipe(
            data:{
                name: $name
                duration: $duration
                servings: $servings
                img: $img
                description: $description
                ingredients: $ingredients
                steps: $steps
                category: $category
                autor: $autor
            }
        ){
            data{
                id
                attributes{
                    name
                    autor{
                        data{
                            id
                        }
                    }
                    category{
                        data{
                            id
                            attributes{
                                name
                            }
                        }
                    }
                }
            }
        }
    }
    ```

### 159. Componente añadir receta
1. Crear page **frontend\pages\user\newRecipe.vue**:
    ```vue
    <template>
        <v-container>
            <h2>Agregar nueva receta</h2>
            <v-divider class="my-5"></v-divider>
            <h3>Mi receta</h3>
            <app-forms-recipe></app-forms-recipe>
        </v-container>
    </template>

    <script>
    export default {
        middleware: 'auth'
    }
    </script>
    ```
2. Crear componente **frontend\components\forms\Recipe.vue**:
    ```vue
    <template>
        <div>
            <v-form>
                <p>{{ recipe.name }}</p>
                <p>{{ recipe.duration }}</p>
                <p>{{ recipe.servings }}</p>
                <p>{{ recipe.img }}</p>
                <p>{{ recipe.description }}</p>
                <p>{{ recipe.ingredients }}</p>
                <p>{{ recipe.steps }}</p>
                <p>{{ recipe.category }}</p>
            </v-form>
        </div>
    </template>

    <script>
    export default {
        props: {
            recipe: {
                type: Object,
                default: () => ({
                    name: '',
                    duration: 0,
                    servings: 0,
                    img: '',
                    description: '',
                    ingredients: [''],
                    steps: [''],
                    category: 1
                })
            }
        }
    }
    </script>
    ```
3. Modificar page **frontend\pages\user\index.vue**:
    ```vue
    ≡
    <v-btn color="primary" small class="my-3" to="user/newRecipe">Agregar receta</v-btn>
    ≡
    ```

### 160. Formulario añadir receta parte 1
1. Modificar componente **frontend\components\forms\Recipe.vue**:
    ```vue
    <template>
        <div>
            <v-form>
                <v-text-field dense label="Nombre de la receta" outlined v-model="recipe.name"></v-text-field>
                <v-text-field dense label="Duración de la receta" outlined v-model="recipe.duration" type="number"></v-text-field>
                <v-text-field dense label="Cantidad de platos" outlined v-model="recipe.servings" type="number"></v-text-field>
                <v-text-field dense label="Foto" outlined v-model="recipe.img" type="url"></v-text-field>
                <v-textarea dense label="Descripción" outlined v-model="recipe.description"></v-textarea>
                <div v-for="(ingredient, i) in recipe.ingredients" :key="'ingrediente-' + i">
                    <v-text-field 
                        dense 
                        :label="`Ingrediente ${i + 1}`" 
                        outlined 
                        v-model="recipe.ingredients[i]"
                    ></v-text-field>
                </div>
                <v-btn class="primary" small @click="addItem('ingredients')">Agregar ingrediente</v-btn>
                <div v-for="(step, i) in recipe.steps" :key="'step-' + i">
                    <v-text-field 
                        dense 
                        :label="`Paso ${i + 1}`" 
                        outlined 
                        v-model="recipe.steps[i]"
                    ></v-text-field>
                </div>
                <v-btn class="primary" small @click="addItem('steps')">Agregar paso</v-btn>
                ≡
            </v-form>
        </div>
    </template>

    <script>
    export default {
        ≡
        methods: {
            addItem(item) {
                if(this.recipe[item] == null){
                    this.recipe[item] = []
                }
                this.recipe[item].push("")
            }
        }
    }
    </script>
    ```

### 161. Formulario añadir receta parte 2
1. Modificar componente **frontend\components\forms\Recipe.vue**:
    ```vue
    <template>
        <div>
            <v-card max-width="800" class="mx-auto">
                <v-card-title class="heading">Mi receta</v-card-title>
                <v-card-text>
                    <v-form>
                        <v-container>
                            <v-row>
                                <v-col cols="12">
                                    <v-text-field dense label="Nombre de la receta" outlined v-model="recipe.name"></v-text-field>
                                </v-col>
                                <v-col cols="4">
                                    <v-text-field dense label="Duración de la receta" outlined v-model="recipe.duration" type="number"></v-text-field>
                                </v-col>
                                <v-col cols="4">
                                    <v-text-field dense label="Cantidad de platos" outlined v-model="recipe.servings" type="number"></v-text-field>
                                </v-col>
                                <v-col cols="4">
                                    <v-select
                                        dense
                                        outlined
                                        v-model="recipe.category"
                                        label="Categoría"
                                        :items="categories"
                                        item-text="attributes.name"
                                        item-value="id"
                                    >

                                    </v-select>
                                </v-col>
                                <v-col cols="12">
                                    <v-text-field dense label="Foto" outlined v-model="recipe.img" type="url"></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-textarea dense label="Descripción" outlined v-model="recipe.description"></v-textarea>
                                </v-col>
                                
                                <v-col cols="5">
                                    <h3 class="mb-5">Ingredientes</h3>
                                    <div v-for="(ingredient, i) in recipe.ingredients" :key="'ingrediente-' + i">
                                        <v-text-field 
                                            dense 
                                            :label="`Ingrediente ${i + 1}`" 
                                            outlined 
                                            v-model="recipe.ingredients[i]"
                                        ></v-text-field>
                                    </div>
                                    <v-btn class="primary" small @click="addItem('ingredients')">Agregar ingrediente</v-btn>
                                    <!-- <v-divider class="my-5"></v-divider> -->
                                </v-col>
                                <v-col cols="7">
                                    <h3 class="mb-5">Pasos</h3>
                                    <div v-for="(step, i) in recipe.steps" :key="'step-' + i">
                                        <v-textarea 
                                            dense 
                                            :label="`Paso ${i + 1}`" 
                                            outlined 
                                            v-model="recipe.steps[i]"
                                            height="100"
                                        ></v-textarea>
                                    </div>
                                    <v-btn class="primary" small @click="addItem('steps')">Agregar paso</v-btn>
                                </v-col>
                            </v-row>
                        </v-container>
                        <p>{{ recipe.name }}</p>
                        <p>{{ recipe.duration }}</p>
                        <p>{{ recipe.servings }}</p>
                        <p>{{ recipe.img }}</p>
                        <p>{{ recipe.description }}</p>
                        <p>{{ recipe.ingredients }}</p>
                        <p>{{ recipe.steps }}</p>
                        <p>{{ recipe.category }}</p>
                    </v-form>
                </v-card-text>
            </v-card>
        </div>
    </template>

    <script>
    export default {
        ≡
        computed: {
            categories() {
                return this.$store.getters.readCategories.data
            }
        },
        methods: {
            ≡
        }
    }
    </script>
    ```
2. Modificar page **frontend\pages\user\newRecipe.vue**:
    ```vue
    <template>
        <v-container>
            <h2>Agregar nueva receta</h2>
            <v-divider class="my-5"></v-divider>
            <app-forms-recipe></app-forms-recipe>
        </v-container>
    </template>
    ≡
    ```

### 162. Tiempo en minutos (Video opcional)
1. Modificar componente **frontend\components\forms\Recipe.vue**:
    ```vue
    <template>
        <div>
            <v-card max-width="800" class="mx-auto">
                <v-card-title class="heading">Mi receta</v-card-title>
                <v-card-text>
                    <v-form>
                        <v-container>
                            <v-row>
                                ≡
                                <v-col cols="4">
                                    <v-text-field dense label="Duración de la receta (minutos)" outlined v-model="recipe.duration" type="number"></v-text-field>
                                    <v-icon>mdi-clock</v-icon> {{ formatedTime }}
                                </v-col>
                                ≡
                            </v-row>
                        </v-container>
                        ≡
                    </v-form>
                </v-card-text>
            </v-card>
        </div>
    </template>

    <script>
    export default {
        ≡
        computed: {
            ≡
            formatedTime() {
                let hours = Math.floor(this.recipe.duration / 60)
                let minutes = this.recipe.duration % 60
                let total = ("0" + hours).slice(-2) + ':' + ("0" + minutes).slice(-2)
                return total
            }
        },
        ≡
    }
    </script>
    ```

### 163. Apollo mutate
1. Modificar componente **frontend\components\forms\Recipe.vue**:
    ```vue
    <template>
        <div>
            <v-card max-width="800" class="mx-auto">
                <v-card-title class="heading">Mi receta</v-card-title>
                <v-card-text>
                    <v-form @submit.prevent="onsubmit">
                        <v-container>
                            <v-row>
                                <v-col cols="12">
                                    <v-text-field dense label="Nombre de la receta" outlined v-model="recipe.name"></v-text-field>
                                </v-col>
                                <v-col cols="4">
                                    <v-text-field dense label="Duración de la receta (minutos)" outlined v-model="recipe.duration" type="number"></v-text-field>
                                    <v-icon>mdi-clock</v-icon> {{ formatedTime }}
                                </v-col>
                                <v-col cols="4">
                                    <v-text-field dense label="Cantidad de platos" outlined v-model="recipe.servings" type="number"></v-text-field>
                                </v-col>
                                <v-col cols="4">
                                    <v-select
                                        dense
                                        outlined
                                        v-model="recipe.category"
                                        label="Categoría"
                                        :items="categories"
                                        item-text="attributes.name"
                                        item-value="id"
                                    >

                                    </v-select>
                                </v-col>
                                <v-col cols="12">
                                    <v-text-field dense label="Foto" outlined v-model="recipe.img" type="url"></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-textarea dense label="Descripción" outlined v-model="recipe.description"></v-textarea>
                                </v-col>
                                
                                <v-col cols="5">
                                    <h3 class="mb-5">Ingredientes</h3>
                                    <div v-for="(ingredient, i) in recipe.ingredients" :key="'ingrediente-' + i">
                                        <v-text-field 
                                            dense 
                                            :label="`Ingrediente ${i + 1}`" 
                                            outlined 
                                            v-model="recipe.ingredients[i]"
                                        ></v-text-field>
                                    </div>
                                    <v-btn class="primary" small @click="addItem('ingredients')">Agregar ingrediente</v-btn>
                                    <!-- <v-divider class="my-5"></v-divider> -->
                                </v-col>
                                <v-col cols="7">
                                    <h3 class="mb-5">Pasos</h3>
                                    <div v-for="(step, i) in recipe.steps" :key="'step-' + i">
                                        <v-textarea 
                                            dense 
                                            :label="`Paso ${i + 1}`" 
                                            outlined 
                                            v-model="recipe.steps[i]"
                                            height="100"
                                        ></v-textarea>
                                    </div>
                                    <v-btn class="primary" small @click="addItem('steps')">Agregar paso</v-btn>
                                </v-col>
                            </v-row>

                            <v-btn type="submit" class="secondary my-5" small>Guardar receta</v-btn>
                        </v-container>
                        <p>{{ recipe.name }}</p>
                        <p>{{ recipe.duration }}</p>
                        <p>{{ recipe.servings }}</p>
                        <p>{{ recipe.img }}</p>
                        <p>{{ recipe.description }}</p>
                        <p>{{ recipe.ingredients }}</p>
                        <p>{{ recipe.steps }}</p>
                        <p>{{ recipe.category }}</p>
                    </v-form>
                </v-card-text>
            </v-card>
        </div>
    </template>

    <script>
    export default {
        props: {
            recipe: {
                type: Object,
                default: () => ({
                    name: '',
                    duration: 0,
                    servings: 0,
                    img: '',
                    description: '',
                    ingredients: [''],
                    steps: [''],
                    category: 1
                })
            }
        },
        computed: {
            categories() {
                return this.$store.getters.readCategories.data
            },
            formatedTime() {
                let hours = Math.floor(this.recipe.duration / 60)
                let minutes = this.recipe.duration % 60
                let total = ("0" + hours).slice(-2) + ':' + ("0" + minutes).slice(-2)
                return total
            }
        },
        methods: {
            addItem(item) {
                if(this.recipe[item] == null){
                    this.recipe[item] = []
                }
                this.recipe[item].push("")
            },
            async onsubmit() {
                const id = this.$auth.user.id
                this.recipe.autor = id
                this.recipe.duration = Number(this.recipe.duration)
                this.recipe.servings = Number(this.recipe.servings)
                const token = this.$auth.strategy.token.get()
                console.log('token: ', token)

                await this.$apollo.mutate({
                    context: {
                    headers: {
                        Authorization: token
                    } 
                    },
                    mutation: require('../../graphql/createRecipe.gql'),
                    variables: this.recipe
                }).then(data => {
                    console.log('Datos: ', data)
                }).catch(e => {console.log(e)})
            }
        }
    }
    </script>
    ```

### 164. Redirección y mensajes
1. Modificar componente **frontend\components\forms\Recipe.vue**:
    ```vue
    ≡
    methods: {
        ≡
        async onsubmit() {
            const id = this.$auth.user.id
            this.recipe.autor = id
            this.recipe.duration = Number(this.recipe.duration)
            this.recipe.servings = Number(this.recipe.servings)
            const token = this.$auth.strategy.token.get()
            console.log('token: ', token)

            await this.$apollo.mutate({
                context: {
                   headers: {
                       Authorization: token
                   } 
                },
                mutation: require('../../graphql/createRecipe.gql'),
                variables: this.recipe
            }).then(data => {
                console.log('Datos: ', data)
                this.$router.push({name: 'user'})
                this.$store.dispatch('snackbars/setSnack', {
                    text: 'Receta guardada',
                    color: 'info'
                })
            }).catch(e => {
                console.log(e)
                this.$store.dispatch('snackbars/setSnack', {
                    text: 'No se pudo guardar la receta',
                    color: 'error'
                })
            })
        }
    }
    ≡
    ```

### 165. Cache de Apollo
1. Modificar page **frontend\pages\user\index.vue**:
    ```vue
    ≡
    async asyncData({ app }) {
        let client = app.apolloProvider.defaultClient
        let id = app.$auth.user.id
        let query = {
            query: require("../../graphql/userRecipes.gql"),
            variables: { id },
            // fetchPolicy: 'no-cache'
        }
        ≡
    }
    ≡
    ```

### 166. Actualizar el cache
1. Modificar componente **frontend\components\forms\Recipe.vue**:
    ```vue
    ≡
    async onsubmit() {
        const id = this.$auth.user.id
        this.recipe.autor = id
        this.recipe.duration = Number(this.recipe.duration)
        this.recipe.servings = Number(this.recipe.servings)
        const token = this.$auth.strategy.token.get()
        console.log('token: ', token)

        await this.$apollo.mutate({
            context: {
                headers: {
                    Authorization: token
                } 
            },
            mutation: require('../../graphql/createRecipe.gql'),
            variables: this.recipe,
            update: (cache, {data: {createRecipe}}) => {
                const data = cache.readQuery({
                    query: require("../../graphql/userRecipes.gql"),
                    variables: { id },
                })
                console.log('DATA: ', data)
                data.recipes.push(createRecipe.recipe)
                cache.writeQuery({
                    query: require("../../graphql/userRecipes.gql"),
                    variables: { id },
                    data
                })
            }
        }).then(data => {
            console.log('Datos: ', data)
            this.$router.push({name: 'user'})
            this.$store.dispatch('snackbars/setSnack', {
                text: 'Receta guardada',
                color: 'info'
            })
        }).catch(e => {
            console.log(e)
            this.$store.dispatch('snackbars/setSnack', {
                text: 'No se pudo guardar la receta',
                color: 'error'
            })
        })
    }
    ≡
    ```

### 167. Actualizar cache Strapi V4
+ Recuerda que la estructura de la respuesta cambia en la versión 4,
+ Siempre puedes imprimir en consola para analizar los datos que devuelve el servidor.
+ Estas son las modificaciones en la parte del cache:
    ```js
    await this.$apollo.mutate({
        context: {
            headers: {
                authorization: token,
            },
        },
        mutation: require("../../graphql/" + mutation + ".gql"),
        variables: this.recipe,
        update: (cache, myrecipe) => {
            if (mutation == "createRecipe") {
                const data = cache.readQuery({
                    query: require("../../graphql/userRecipes.gql"),
                    variables: { id },
                });
                data.recipes.data.push(myrecipe.data[mutation].data);
                cache.writeQuery({
                    query: require("../../graphql/userRecipes.gql"),
                    variables: { id },
                    data,
                });
            }
        },
    })
    ```

### 168. Mutación modificar receta
1. Crear query **frontend\graphql\updateRecipe.gql**:
    ```graphql
    mutation(
        $id: ID!
        $name: String!
        $duration: Int!
        $servings: Int!
        $img: String!
        $description: String!
        $ingredients: JSON!
        $steps: JSON!
        $category: ID!
        $autor: ID!
    ){
        updateRecipe(
            id: $id
            data:{
                name: $name
                duration: $duration
                servings: $servings
                img: $img
                description: $description
                ingredients: $ingredients
                steps: $steps
                category: $category
                autor: $autor
            }
        ){
            data{
                id
                attributes{
                    name
                    category{
                        data{
                            id
                            attributes{
                                name
                            }
                        }
                    }
                }
            }
        }
    }
    ```

### 169. Mutación modificar receta Strapi V4
+ Las mutaciones en la versión 4 están un poco simplificadas al contrario de los querys.
+ Es simplemente indicar el id y los datos a cambiar.
+ Recuerda mirar siempre la documentación y tu playground ya que siempre será nuestra guía.
+ updateRecipe.gql
    ```graphql
    mutation(
        $id: ID!
        $name: String!
        $duration: Int!
        $servings: Int!
        $img: String!
        $description: String!
        $ingredients: JSON!
        $steps: JSON!
        $category: ID!
        $autor: ID!
    ){
        updateRecipe(
            id: $id
            data:{
                name: $name
                duration: $duration
                servings: $servings
                img: $img
                description: $description
                ingredients: $ingredients
                steps: $steps
                category: $category
                autor: $autor
            }
        ){
            data{
                id
                attributes{
                    name
                    category{
                        data{
                            id
                            attributes{
                                name
                            }
                        }
                    }
                }
            }
        }
    }
    ```

### 170. Editar receta parte 1
1. Crear page **frontend\pages\user\edit\\_id.vue**:
    ```vue
    <template>
        <v-container>
            <h2>Editar receta</h2>
            <v-divider class="my-5"></v-divider>
            <div v-if="recipe">
                <app-forms-recipe :recipe="recipe"></app-forms-recipe>
            </div>
        </v-container>
    </template>

    <script>
    export default {
        middleware: 'auth',
        async asyncData({ app, route }) {
            const client = app.apolloProvider.defaultClient
            const id = route.params.id
            const query = {
                query: require("../../../graphql/recipe.gql"),
                variables: { id },
                fetchPolicy: "no-cache",
            }
            let recipe = null
            await client.query(query).then((res) => {
                const id = res.data.recipe.data.id;
                //separo los attributos
                const attributes = res.data.recipe.data.attributes;
                //a recipe le doy un nuevo valor organizando el objeto a mi medida
                //este es el objeto utilizado para renderizar la UI
                recipe = {
                    id,
                    name: attributes.name,
                    duration: attributes.duration,
                    servings: attributes.servings,
                    img: attributes.img,
                    description: attributes.description,
                    ingredients: attributes.ingredients,
                    steps: attributes.steps,
                    likes: attributes.likes,
                    category: {
                        id: attributes.category.data.id,
                        ...attributes.category.data.attributes,
                    },
                    //add autor to recipe
                    autor: attributes.autor.data.attributes.username,
                }
            })
            return { recipe }
        }
    }
    </script>
    ```
2. Modificar componente **frontend\components\ui\listRecipes.vue**:
    ```html
    ≡
    <v-row align="center" justify="center">
        <v-btn icon :to="{ name: 'user-edit-id', params: { id: recipe.id } }"><v-icon>mdi-pencil</v-icon></v-btn>
        <v-btn icon><v-icon>mdi-delete</v-icon></v-btn>
    </v-row>
    ≡
    ```
3. Modificar componente **frontend\components\forms\Recipe.vue**:
    ```vue
    <template>
        <div>
            {{ hasId }}
            ≡
        </div>
    </template>

    <script>
    export default {
        ≡
        computed: {
            categories() {
                return this.$store.getters.readCategories.data
            },
            hasId() {
                return this.recipe.hasOwnProperty('id')
            },
            ≡
        },
        ≡
    }
    </script>
    ```

### 171. Editar Receta Strapi V4
+ Con el cambio del query de la versión 4 se debe adaptar la información una vez obtenida la respuesta, también se recomienda utilizar el fetchPolicy: "no-cache", en el archivo _id de edición para evitar problemas con los múltiples querys:
    ```js
    async asyncData({ app, route }) {
        const client = app.apolloProvider.defaultClient;
        const id = route.params.id;
        const query = {
            query: require("../../../graphql/recipe.gql"),
            variables: { id },
            fetchPolicy: "no-cache",
        };
        let recipe = null;
        await client.query(query).then((res) => {
            const id = res.data.recipe.data.id;
            //separo los attributos
            const attributes = res.data.recipe.data.attributes;
            //a recipe le doy un nuevo valor organizando el objeto a mi medida
            //este es el objeto utilizado para renderizar la UI
            recipe = {
                id,
                name: attributes.name,
                duration: attributes.duration,
                servings: attributes.servings,
                img: attributes.img,
                description: attributes.description,
                ingredients: attributes.ingredients,
                steps: attributes.steps,
                likes: attributes.likes,
                category: {
                    id: attributes.category.data.id,
                    ...attributes.category.data.attributes,
                },
                //add autor to recipe
                autor: attributes.autor.data.attributes.username,
            };
        });
        return { recipe };
    },
    ```

### 172. Editar receta parte 2
1. Modificar componente **frontend\components\forms\Recipe.vue**:
    ```vue
    <template>
        <div>
            <v-card max-width="800" class="mx-auto">
                <v-card-title class="heading">Mi receta</v-card-title>
                <v-card-text>
                    <v-form @submit.prevent="onsubmit">
                        <v-container>
                            <v-row>
                                <v-col cols="12">
                                    <v-text-field dense label="Nombre de la receta" outlined v-model="recipe.name"></v-text-field>
                                </v-col>
                                <v-col cols="4">
                                    <v-text-field dense label="Duración de la receta (minutos)" outlined v-model="recipe.duration" type="number"></v-text-field>
                                    <v-icon>mdi-clock</v-icon> {{ formatedTime }}
                                </v-col>
                                <v-col cols="4">
                                    <v-text-field dense label="Cantidad de platos" outlined v-model="recipe.servings" type="number"></v-text-field>
                                </v-col>
                                <v-col cols="4">
                                    <v-select
                                        dense
                                        outlined
                                        v-model="recipe.category"
                                        label="Categoría"
                                        :items="categories"
                                        item-text="attributes.name"
                                        item-value="id"
                                    >

                                    </v-select>
                                </v-col>
                                <v-col cols="12">
                                    <v-text-field dense label="Foto" outlined v-model="recipe.img" type="url"></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-textarea dense label="Descripción" outlined v-model="recipe.description"></v-textarea>
                                </v-col>
                                
                                <v-col cols="5">
                                    <h3 class="mb-5">Ingredientes</h3>
                                    <div v-for="(ingredient, i) in recipe.ingredients" :key="'ingrediente-' + i">
                                        <v-text-field 
                                            dense 
                                            :label="`Ingrediente ${i + 1}`" 
                                            outlined 
                                            v-model="recipe.ingredients[i]"
                                        ></v-text-field>
                                    </div>
                                    <v-btn class="primary" small @click="addItem('ingredients')">Agregar ingrediente</v-btn>
                                    <!-- <v-divider class="my-5"></v-divider> -->
                                </v-col>
                                <v-col cols="7">
                                    <h3 class="mb-5">Pasos</h3>
                                    <div v-for="(step, i) in recipe.steps" :key="'step-' + i">
                                        <v-textarea 
                                            dense 
                                            :label="`Paso ${i + 1}`" 
                                            outlined 
                                            v-model="recipe.steps[i]"
                                            height="100"
                                        ></v-textarea>
                                    </div>
                                    <v-btn class="primary" small @click="addItem('steps')">Agregar paso</v-btn>
                                </v-col>
                            </v-row>

                            <v-btn type="submit" class="secondary my-5" small>{{ hasId ? 'Actualizar receta' : 'Guardar receta' }}</v-btn>
                        </v-container>
                    </v-form>
                </v-card-text>
            </v-card>
        </div>
    </template>

    <script>
    export default {
        props: {
            recipe: {
                type: Object,
                default: () => ({
                    name: '',
                    duration: 0,
                    servings: 0,
                    img: '',
                    description: '',
                    ingredients: [''],
                    steps: [''],
                    category: 1
                })
            }
        },
        computed: {
            categories() {
                return this.$store.getters.readCategories.data
            },
            hasId() {
                return this.recipe.hasOwnProperty('id')
            },
            formatedTime() {
                let hours = Math.floor(this.recipe.duration / 60)
                let minutes = this.recipe.duration % 60
                let total = ("0" + hours).slice(-2) + ':' + ("0" + minutes).slice(-2)
                return total
            }
        },
        methods: {
            addItem(item) {
                if(this.recipe[item] == null){
                    this.recipe[item] = []
                }
                this.recipe[item].push("")
            },
            async onsubmit() {
                const id = this.$auth.user.id
                this.recipe.autor = id
                this.recipe.duration = Number(this.recipe.duration)
                this.recipe.servings = Number(this.recipe.servings)
                const token = this.$auth.strategy.token.get()
                const mutation = this.hasId ? "updateRecipe" : "createRecipe"
                console.log('token: ', token)

                if(typeof this.recipe.category == "object"){
                    this.recipe.category = this.recipe.category.id
                }
                await this.$apollo.mutate({
                    context: {
                    headers: {
                        Authorization: token
                    } 
                    },
                    mutation: require('../../graphql/' + mutation + '.gql'),
                    variables: this.recipe,
                    update: (cache, myrecipe) => {
                        if(mutation == 'createRecipe'){
                            const data = cache.readQuery({
                                query: require("../../graphql/userRecipes.gql"),
                                variables: { id },
                            })
                            console.log('DATA: ', data)
                            data.recipes.push(myrecipe.data[mutation].recipe)
                            cache.writeQuery({
                                query: require("../../graphql/userRecipes.gql"),
                                variables: { id },
                                data
                            })
                        }
                    }
                }).then(data => {
                    console.log('Datos: ', data)
                    this.$router.push({name: 'user'})
                    this.$store.dispatch('snackbars/setSnack', {
                        text: 'Receta guardada',
                        color: 'info'
                    })
                }).catch(e => {
                    console.log(e)
                    this.$store.dispatch('snackbars/setSnack', {
                        text: 'No se pudo guardar la receta',
                        color: 'error'
                    })
                })
            }
        }
    }
    </script>
    ```

### 173. Mutación borrar receta
1. Crear query **frontend\graphql\deleteRecipe.gql**:
    ```graphql
    mutation($id:ID!){
    deleteRecipe(
            id:$id
        ){
            data{
                id
                attributes{
                    name
                }
            }
        }
    }
    ```

### 174. Mutación borrar receta Strapi V4
    ```graphql
    mutation($id:ID!){
    deleteRecipe(
            id:$id
        ){
            data{
                id
                attributes{
                    name
                }
            }
        }
    }
    ```

### 175. Modal borrar
1. Crear componente **frontend\components\ui\DeleteItem.vue**:
    ```vue
    <template>
        <div>
            <v-btn icon @click="dialog = true"><v-icon>mdi-delete</v-icon></v-btn>
            <v-dialog v-model="dialog" max-width="590">
                <v-card>
                    <v-card-title class="headline">Borrar receta</v-card-title>
                    <v-card-text>
                        ¿Realmente quieres borrar esta receta?
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="error" @click="returnChoice(true)">Borrar</v-btn>
                        <v-btn color="primary"  @click="returnChoice(false)">Volver</v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </div>
    </template>

    <script>
    export default {
        data(){
            return{
                dialog: false
            }
        },
        methods:{
            returnChoice(choice){
                this.dialog = false
                this.$emit("choice", choice)
            }
        }
    }
    </script>
    ```
2. Modificar componente **frontend\components\ui\listRecipes.vue**:
    ```vue
    ≡
    <template>
        <div>
            <div v-if="recipes.length != 0">
                <v-list>
                    <v-list-item-group>
                        <template v-for="recipe in recipes">
                            <v-list-item two-line :key="recipe.id">
                                ≡
                                <v-list-item-action>
                                    <v-row align="center" justify="center">
                                        ≡
                                        <app-ui-delete-item @choice="deleteItem($event)"></app-ui-delete-item>
                                    </v-row>
                                </v-list-item-action>
                            </v-list-item>
                        </template>
                    </v-list-item-group>
                </v-list>
            </div>
            ≡
        </div>
    </template>

    <script>
    export default {
        ≡
        methods: {
            deleteItem(choice) {
                console.log(choice)
            }
        }
    }
    </script>
    ```

### 176. Borrar receta
1. Modificar componente **frontend\components\ui\listRecipes.vue**:
    ```vue
    <template>
        <div>
            <div v-if="recipes.length != 0">
                <v-list>
                    <v-list-item-group>
                        <template v-for="recipe in recipes">
                            <v-list-item two-line :key="recipe.id">
                                ≡
                                <v-list-item-action>
                                    <v-row align="center" justify="center">
                                        ≡"><v-icon>mdi-pencil</v-icon></v-btn>
                                        <app-ui-delete-item @choice="deleteItem($event, recipe.id)"></app-ui-delete-item>
                                    </v-row>
                                </v-list-item-action>
                            </v-list-item>
                        </template>
                    </v-list-item-group>
                </v-list>
            </div>
            ≡
        </div>
    </template>

    <script>
    export default {
        ≡
        methods: {
            deleteItem(choice, id) {
                console.log(choice)
                if(choice){
                    this.$apollo.mutate({
                        context:{
                            headers:{
                                authorization:this.$auth.strategy.token.get()
                            }
                        },
                        mutation:require("../../graphql/deleteRecipe.gql"),
                        variables:{id}
                    }).then(res =>{
                        console.log("borrado")
                        const miRecipe = this.recipes.find(recipe => recipe.id == id)
                        const index = this.recipes.indexOf(miRecipe)
                        this.recipes.splice(index, 1)
                    })
                }
            }
        }
    }
    </script>
    ```

### 177. Archivos del proyecto sección 11
+ **Respositorio**: 00recursos\Section_11_CRUD


## Sección 12: Sistema de favoritos y likes
### 178. Favoritos y likes
1. Crear nueva relación en la colección **user**:
    + Ir a **Strapi** -> **Content-Type Builder** -> **User**.
    + Click en **Add another field to this collection type**.
    + Seleccionar **Relation** en **Select a field for your collection type**.
    + Establecer relación con la colección **recipe**.
    + Establecer tipo de relación: **User has many recipes**.
    + Establecer **Field name** en **favorites**.
    + Click en **Finish** y luego en **Save**.
2. Reiniciar el servidor **backend**.
3. Crear query **frontend\graphql\userFavorites.gql**:
    ```graphql
    query($id:ID!){
        usersPermissionsUser(id:$id){
            data{
                attributes{
                    favorites{
                        data{
                            id
                            attributes{
                                name
                            }
                        }
                    }
                }
            }
        }
    }
    ```

### 179. GraphQL favorites V4 Strapi
    ```graphql
    query($id:ID!){
        usersPermissionsUser(id:$id){
            data{
                attributes{
                    favorites{
                        data{
                            id
                            attributes{
                                name
                            }
                        }
                    }
                }
            }
        }
    }
    ```

### 180. Doble mutación
1. Crear mutation **frontend\graphql\updateLikes.gql**:
    ```graphql
    mutation($id:ID!, $likes:Long!, $idUser:ID!, $favorites:[ID!]){
        updateRecipe(
            id:$id
            data:{
                likes:$likes
            } 
        ){
            data{
                id
                attributes{
                    likes
                }
            }
        }
        updateUsersPermissionsUser(
            id:$idUser
            data:{
                favorites:$favorites
            }  
        )
        {
            data{
                id
                attributes{
                    favorites{
                        data{
                            id
                            attributes{
                                name
                            }
                        }
                    }
                }
            }
        }
    }
    ```

### 181. Doble mutation V4 Strapi
    ```graphql
    mutation($id:ID!, $likes:Long!, $idUser:ID!, $favorites:[ID!]){
        updateRecipe(
            id:$id
            data:{
                likes:$likes
            } 
        ){
            data{
                id
                attributes{
                    likes
                }
            }
        }
        updateUsersPermissionsUser(
            id:$idUser
            data:{
                favorites:$favorites
            }  
        )
        {
            data{
                id
                attributes{
                    favorites{
                        data{
                            id
                            attributes{
                                name
                            }
                        }
                    }
                }
            }
        }
    }
    ```

### 182. Recetas favoritas
1. Crear page **frontend\pages\user\favorites.vue**:
    ```vue
    <template>
        <v-container>
            <h1 class="secondary--text">
                Recetas favoritas
                <v-icon large class="secondary--text">mdi-heart</v-icon>
            </h1>
            <p class="secondary--text">Tus recetas favoritas</p>
            <v-row>
                <v-col cols="4" v-for="favorite in favorites" :key="favorite.id">
                    <app-ui-nav-card-recipe :recipe="favorite" origen='favorite'></app-ui-nav-card-recipe>
                </v-col> 
            </v-row>

            <div class="mt-3">
                <v-alert type="info" v-if="favorites.length == 0">
                    <p>No hay recetas favoritas</p>
                </v-alert>
            </div>

            <div class="mt-3">
                <app-ui-back-btn></app-ui-back-btn>
            </div>
        </v-container>
    </template>

    <script>
    export default {
        middleware: 'auth',
        async asyncData({ app, store }) {
            console.log("sale")
            let client = app.apolloProvider.defaultClient;
            let id = app.$auth.user.id;
            let query = {
                context: {
                    headers: {
                        authorization: app.$auth.strategy.token.get(),
                    },
                },
                query: require("../../graphql/userFavorites.gql"),
                fetchPolicy: "no-cache",
                variables: { id },
            };
            let favorites = [];
            await client
                .query(query)
                .then((res) => {
                    //esto es rediculo, esperemos que Strapi cambie su esquema de graphql de la V4
                    console.log(res.data.usersPermissionsUser.data.attributes.favorites.data)
                    //vamos a organizar los datos para usarlos rapidamente
                    res.data.usersPermissionsUser.data.attributes.favorites.data.forEach(element => {
                        console.log(element)
                        const recipe = {
                            id:element.id,
                            name:element.attributes.name,
                            likes:element.attributes.likes,
                            img:element.attributes.img,
                            //en la propiedad category conservo un objeto
                            //pero filtro las propiedades data y attributos para facil uso
                            category:{id:element.attributes.category.data.id, 
                            ...element.attributes.category.data.attributes},
                            //autor 
                            autor:element.attributes.autor.data.attributes.username
                        }
                        favorites.push(recipe)
                    }) 
                    // favorites = data.data.user.favorites;
                    // store.commit("user/setFavorites", favorites)
                })
                .catch((e) => console.log(e));
            return { favorites };
        }
    }
    </script>
    ```
2. Modificar layout **frontend\layouts\default.vue**:
    ```html
    ≡
    <v-navigation-drawer 
        ≡
    >
        <v-list color="primary--text">
            ≡
            <v-list-item to="/user/favorites" v-if="$auth.loggedIn">
                <v-list-item-icon>
                    <v-icon>mdi-heart</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                    <v-list-item-title>
                        Recetas favoritas
                    </v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
    ≡
    ```
3. Modificaar query **frontend\graphql\userFavorites.gql**:
    ```graphql
    query($id:ID!){
        usersPermissionsUser(id:$id){
            data{
                attributes{
                    favorites{
                        data{
                            id
                            attributes{
                                name
                                likes
                                img
                                category{
                                    data{
                                        id
                                        attributes{
                                            name
                                            slug
                                        }
                                    }
                                }
                                autor{
                                    data{
                                        attributes{
                                            username
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    ```
4. Modificar componente **frontend\components\ui\NavCardRecipe.vue**:
    ```vue
    <template>
        <v-card 
            :to="{
                name: 'category-recipe',
                params: { 
                    category: origen == 'favorite' ? recipe.category.slug : recipe.attributes.category.data.attributes.slug,
                    recipe: recipe.id
                }
            }"
        >
            <v-img :src="origen == 'favorite' ? recipe.img : recipe.attributes.img" height="170"></v-img>
            <v-card-text>
                <v-row>
                    <v-col cols="7">
                        <h3>{{ origen == 'favorite' ? recipe.name : recipe.attributes.name }}</h3>
                        {{ origen == 'favorite' ? recipe.autor : recipe.attributes.autor.data.attributes.username }}
                        
                    </v-col>
                    <v-col cols="5" class="d-flex justify-end">
                        <div>
                            <v-icon>mdi-heart</v-icon>
                            <span>{{ origen == 'favorite' ? recipe.likes : recipe.attributes.likes }}</span>
                        </div>
                    </v-col>
                </v-row>
            </v-card-text>
        </v-card>
    </template>

    <script>
    export default {
        props: {
            recipe: {
                type: Object,
                required: true
            },
            origen: null
        }
    }
    </script>
    ```

### 183. Modificaciones Strapi V4
+ userFavorites.gql
    ```graphql
    query($id:ID!){
        usersPermissionsUser(id:$id){
            data{
                attributes{
                    favorites{
                        data{
                            id
                            attributes{
                                name
                                likes
                                img
                                category{
                                    data{
                                        id
                                        attributes{
                                            name
                                            slug
                                        }
                                    }
                                }
                                autor{
                                    data{
                                        attributes{
                                            username
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    ```
+ user/favorites //
    ```js
    async asyncData({ app, store }) {
        console.log("sale")
        let client = app.apolloProvider.defaultClient;
        let id = app.$auth.user.id;
        let query = {
            context: {
                headers: {
                    authorization: app.$auth.strategy.token.get(),
                },
            },
            query: require("../../graphql/userFavorites.gql"),
            fetchPolicy: "no-cache",
            variables: { id },
        };
        let favorites = [];
        await client
            .query(query)
            .then((res) => {
                //esto es rediculo, esperemos que Strapi cambie su esquema de graphql de la V4
                console.log(res.data.usersPermissionsUser.data.attributes.favorites.data)
                //vamos a organizar los datos para usarlos rapidamente
                res.data.usersPermissionsUser.data.attributes.favorites.data.forEach(element => {
                    console.log(element)
                    const recipe = {
                        id:element.id,
                        name:element.attributes.name,
                        likes:element.attributes.likes,
                        img:element.attributes.img,
                        //en la propiedad category conservo un objeto
                        //pero filtro las propiedades data y attributos para facil uso
                        category:{id:element.attributes.category.data.id, 
                        ...element.attributes.category.data.attributes},
                        //autor 
                        autor:element.attributes.autor.data.attributes.username
                    }
                    favorites.push(recipe)
                }) 
                // favorites = data.data.user.favorites;
                // store.commit("user/setFavorites", favorites)
            })
            .catch((e) => console.log(e));
        return { favorites };
    },
    ```

### 184. Store recetas favoritas
1. Crear store **frontend\store\user.js**:
    ```js
    export const state = () => ({
        favorites: null
    })


    export const getters = {
        favorites(state){
            return state.favorites
        }
    }

    export const mutations = {
        setFavorites(state, payload){
            state.favorites = payload
        }
    }

    export const actions = {
        async getFavorites({commit}){
            let client = this.app.apolloProvider.defaultClient
            let id = this.$auth.user.id
            const query = {
                context:{
                    headers:{
                        authorization:this.$auth.strategy.token.get()
                    }
                },
                query:require("../graphql/userFavorites.gql"),
                fetchPolicy:"no-cache",
                variables:{id}
            }
            await client.query(query).then(res =>{
                const favorites = []
                res.data.usersPermissionsUser.data.attributes.favorites.data.forEach(element => {
                    console.log(element)
                    const recipe = {
                        id:element.id,
                        name:element.attributes.name,
                        likes:element.attributes.likes,
                        img:element.attributes.img,
                        //en la propiedad category conservo un objeto
                        //pero filtro las propiedades data y attributos para facil uso
                        category:{id:element.attributes.category.data.id, 
                        ...element.attributes.category.data.attributes},
                        //autor 
                        autor:element.attributes.autor.data.attributes.username
                    }
                    favorites.push(recipe)
                })
                commit("setFavorites", favorites)
            }).catch(e => console.log(e))
        }
    }
    ```

### 185. Store Rectas Strapi V4
+ store/user/actions:
    ```js
    export const actions = {
        async getFavorites({commit}){
            let client = this.app.apolloProvider.defaultClient
            let id = this.$auth.user.id
            const query = {
                context:{
                    headers:{
                        authorization:this.$auth.strategy.token.get()
                    }
                },
                query:require("../graphql/userFavorites.gql"),
                fetchPolicy:"no-cache",
                variables:{id}
            }
            await client.query(query).then(res =>{
                const favorites = []
                res.data.usersPermissionsUser.data.attributes.favorites.data.forEach(element => {
                    console.log(element)
                    const recipe = {
                        id:element.id,
                        name:element.attributes.name,
                        likes:element.attributes.likes,
                        img:element.attributes.img,
                        //en la propiedad category conservo un objeto
                        //pero filtro las propiedades data y attributos para facil uso
                        category:{id:element.attributes.category.data.id, 
                        ...element.attributes.category.data.attributes},
                        //autor 
                        autor:element.attributes.autor.data.attributes.username
                    }
                    favorites.push(recipe)
                })
                commit("setFavorites", favorites)
            }).catch(e => console.log(e))
        }
    }
    ```
    + user/favorites
    ```js
    await client
        .query(query)
        .then((res) => {
            //esto es rediculo, esperemos que Strapi cambie su esquema de graphql
            console.log(res.data.usersPermissionsUser.data.attributes.favorites.data)
            //vamos a organizar los datos para usarlos rapidamente
            res.data.usersPermissionsUser.data.attributes.favorites.data.forEach(element => {
                console.log(element)
                const recipe = {
                    id:element.id,
                    name:element.attributes.name,
                    likes:element.attributes.likes,
                    img:element.attributes.img,
                    //en la propiedad category conservo un objeto
                    //pero filtro las propiedades data y attributos para facil uso
                    category:{id:element.attributes.category.data.id, 
                    ...element.attributes.category.data.attributes},
                    //autor 
                    autor:element.attributes.autor.data.attributes.username
                }
                favorites.push(recipe)
            }) 
            store.commit("user/setFavorites", favorites)
        })
    ```

### 186. Cargar recetas favoritas
1. Modificar page **frontend\pages\user\favorites.vue**:
    ```vue
    <template>
        <v-container>
            <h1 class="secondary--text">
                Recetas favoritas
                <v-icon large class="secondary--text">mdi-heart</v-icon>
            </h1>
            <p class="secondary--text">Tus recetas favoritas</p>
            <v-row>
                <v-col cols="4" v-for="favorite in favorites" :key="favorite.id">
                    <app-ui-nav-card-recipe :recipe="favorite" origen='favorite'></app-ui-nav-card-recipe>
                </v-col> 
            </v-row>

            <div class="mt-3">
                <v-alert type="info" v-if="favorites.length == 0">
                    <p>No hay recetas favoritas</p>
                </v-alert>
            </div>

            <div class="mt-3">
                <app-ui-back-btn></app-ui-back-btn>
            </div>
        </v-container>
    </template>

    <script>
    export default {
        middleware: 'auth',
        async asyncData({ app, store }) {
            console.log("sale")
            let client = app.apolloProvider.defaultClient;
            let id = app.$auth.user.id;
            let query = {
                context: {
                    headers: {
                        authorization: app.$auth.strategy.token.get(),
                    },
                },
                query: require("../../graphql/userFavorites.gql"),
                fetchPolicy: "no-cache",
                variables: { id },
            };
            let favorites = [];
            await client
                .query(query)
                .then((res) => {
                    //esto es rediculo, esperemos que Strapi cambie su esquema de graphql
                    console.log(res.data.usersPermissionsUser.data.attributes.favorites.data)
                    //vamos a organizar los datos para usarlos rapidamente
                    res.data.usersPermissionsUser.data.attributes.favorites.data.forEach(element => {
                        console.log(element)
                        const recipe = {
                            id:element.id,
                            name:element.attributes.name,
                            likes:element.attributes.likes,
                            img:element.attributes.img,
                            //en la propiedad category conservo un objeto
                            //pero filtro las propiedades data y attributos para facil uso
                            category:{id:element.attributes.category.data.id, 
                            ...element.attributes.category.data.attributes},
                            //autor 
                            autor:element.attributes.autor.data.attributes.username
                        }
                        favorites.push(recipe)
                    }) 
                    store.commit("user/setFavorites", favorites)
                })
                .catch((e) => console.log(e));
            return { favorites };
        }
    }
    </script>
    ```
2. Modificar page **frontend\pages\\_category\\_recipe\index.vue**:
    ```vue
    <template>
        <v-container>
            {{ userFavorites }}
            <h1 class="secondary--text">{{ recipe.attributes.name }}</h1>
            <h5 class="secondary--text">{{ recipe.attributes.category.data.attributes.name }}</h5>

            <v-card class="mt-3">
                <v-card-title>
                    <v-icon class="mr-3">mdi-information</v-icon>
                    Información
                </v-card-title>
                <v-card-text class="black--text">
                    <v-row>
                        <v-col cols="6">
                            <v-chip color="primary" outlined>
                                <v-icon left>mdi-account-group</v-icon>
                                Servicios :  {{ recipe.attributes.servings }}
                            </v-chip>
                            <v-chip color="primary" outlined>
                                <v-icon left>mdi-clock</v-icon>
                                Tiempo :  {{ formatedTime }}
                            </v-chip>
                            <v-chip color="primary" outlined>
                                <v-icon left>mdi-account-edit</v-icon>
                                Autor: {{ recipe.attributes.autor.data.attributes.username }}
                            </v-chip>

                            <v-divider class="my-3"></v-divider>

                            <h4 class="body-1">Descripción</h4>
                            <div v-html="recipe.description"></div>
                        </v-col>
                        <v-col cols="6">
                            <v-img :src="recipe.attributes.img" max-height="500"></v-img>
                        </v-col>
                    </v-row>
                </v-card-text>
            </v-card>

            <div class="mt-3">
            <v-row>
                <v-col cols="5">
                    <v-card>
                        <v-card-title>
                            <v-icon class="mr-3">mdi-fridge</v-icon>
                            Ingredientes
                        </v-card-title>
                        <v-list>
                            <v-list-item v-for="(ingredient,i) in recipe.attributes.ingredients" :key="i">
                                {{ ingredient }}
                            </v-list-item>
                        </v-list>
                    </v-card>
                </v-col>
                <v-col cols="7">
                <v-card>
                    <v-card-title>
                        <v-icon class="mr-3">mdi-stove</v-icon>
                        Pasos
                    </v-card-title>
                    <v-timeline dense>
                        <v-timeline-item v-for="(step,k) in recipe.attributes.steps" :key="k+Math.random()" color="secondary" small>
                            {{ step }}
                        </v-timeline-item>
                    </v-timeline>
                </v-card>
                </v-col>
            </v-row>
            </div>
            <div class="mt-3">
                <app-ui-back-btn label="Volver a recetas"></app-ui-back-btn>
            </div>
        </v-container>
    </template>

    <script>
    export default {
        computed: {
            formatedTime() {
                let hours = Math.floor(this.recipe.attributes.duration / 60)
                let minutes = this.recipe.attributes.duration % 60
                let total = ("0" + hours).slice(-2) + ':' + ("0" + minutes).slice(-2)
                return total
            },
            userFavorites(){
                return this.$store.getters['user/favorites']
            },
        },
        async asyncData({app, route}){
            const client = app.apolloProvider.defaultClient
            const id = route.params.recipe
            const query = {
                query: require('../../../graphql/recipe.gql'),
                variables: {id}
            }
            let recipe = null
            await client.query(query).then(data => {
                recipe = data.data.recipe.data
            }).catch(e => console.log(e))
            return {recipe}
        },
        async mounted() {
            if(this.$auth.loggedIn && this.$store.getters['user/favorites'] == null){
                console.log('call favorites')
                await this.$store.dispatch('user/getFavorites')
            }
        }
    }
    </script>
    ```

### 187. Botón like
1. Modificar page **frontend\pages\\_category\\_recipe\index.vue**:
    ```vue
    <template>
        <v-container>
            {{ userFavorites }}
            {{ recipeIsLiked }}
            <h1 class="secondary--text">{{ recipe.attributes.name }}</h1>
            <h5 class="secondary--text">{{ recipe.attributes.category.data.attributes.name }}</h5>

            <v-card class="mt-3">
                <v-card-title>
                    <v-icon class="mr-3">mdi-information</v-icon>
                    Información
                </v-card-title>
                <v-card-text class="black--text">
                    <v-row>
                        <v-col cols="6">
                            <v-chip color="primary" outlined>
                                <v-icon left>mdi-account-group</v-icon>
                                Servicios :  {{ recipe.attributes.servings }}
                            </v-chip>
                            <v-chip color="primary" outlined>
                                <v-icon left>mdi-clock</v-icon>
                                Tiempo :  {{ formatedTime }}
                            </v-chip>
                            <v-chip color="primary" outlined>
                                <v-icon left>mdi-account-edit</v-icon>
                                Autor: {{ recipe.attributes.autor.data.attributes.username }}
                            </v-chip>

                            <v-divider class="my-3"></v-divider>

                            <h4 class="body-1">Descripción</h4>
                            <div v-html="recipe.description"></div>
                        </v-col>
                        <v-col cols="6">
                            <v-img :src="recipe.attributes.img" max-height="500"></v-img>
                        </v-col>
                    </v-row>
                </v-card-text>
                <v-card-actions>
                    <v-btn icon v-if="$auth.loggedIn" large>
                        <v-icon :color="recipeIsLiked ? 'error' : 'grey'" large>mdi-heart</v-icon>
                    </v-btn>
                    <v-icon v-else class="mr-3">mdi-heart</v-icon>
                    <span class="overline">Likes {{ recipe.attributes.likes }}</span>
                </v-card-actions>
            </v-card>

            <div class="mt-3">
            <v-row>
                <v-col cols="5">
                    <v-card>
                        <v-card-title>
                            <v-icon class="mr-3">mdi-fridge</v-icon>
                            Ingredientes
                        </v-card-title>
                        <v-list>
                            <v-list-item v-for="(ingredient,i) in recipe.attributes.ingredients" :key="i">
                                {{ ingredient }}
                            </v-list-item>
                        </v-list>
                    </v-card>
                </v-col>
                <v-col cols="7">
                <v-card>
                    <v-card-title>
                        <v-icon class="mr-3">mdi-stove</v-icon>
                        Pasos
                    </v-card-title>
                    <v-timeline dense>
                        <v-timeline-item v-for="(step,k) in recipe.attributes.steps" :key="k+Math.random()" color="secondary" small>
                            {{ step }}
                        </v-timeline-item>
                    </v-timeline>
                </v-card>
                </v-col>
            </v-row>
            </div>
            <div class="mt-3">
                <app-ui-back-btn label="Volver a recetas"></app-ui-back-btn>
            </div>
        </v-container>
    </template>

    <script>
    export default {
        computed: {
            formatedTime() {
                let hours = Math.floor(this.recipe.attributes.duration / 60)
                let minutes = this.recipe.attributes.duration % 60
                let total = ("0" + hours).slice(-2) + ':' + ("0" + minutes).slice(-2)
                return total
            },
            userFavorites(){
                return this.$store.getters['user/favorites']
            },
            recipeIsLiked() {
                let liked = false
                if(this.userFavorites){
                    const id = this.recipe.id
                    liked = this.userFavorites.some((fav) => fav.id === id)
                }
                return liked
            }
        },
        async asyncData({app, route}){
            const client = app.apolloProvider.defaultClient
            const id = route.params.recipe
            const query = {
                query: require('../../../graphql/recipe.gql'),
                variables: {id}
            }
            let recipe = null
            await client.query(query).then(data => {
                recipe = data.data.recipe.data
            }).catch(e => console.log(e))
            return {recipe}
        },
        async mounted() {
            if(this.$auth.loggedIn && this.$store.getters['user/favorites'] == null){
                console.log('call favorites')
                await this.$store.dispatch('user/getFavorites')
            }
        }
    }
    </script>
    ```
 
### 188. Añadir y remover recetas del store
1. Modificar page **frontend\pages\\_category\\_recipe\index.vue**:
    ```vue
    <template>
        <v-container>
            {{ userFavorites }}
            {{ recipeIsLiked }}
            <h1 class="secondary--text">{{ recipe.attributes.name }}</h1>
            <h5 class="secondary--text">{{ recipe.attributes.category.data.attributes.name }}</h5>

            <v-card class="mt-3">
                ≡
                <v-card-actions>
                    <v-btn icon v-if="$auth.loggedIn" large @click="toggleLiked()">
                        <v-icon :color="recipeIsLiked ? 'error' : 'grey'" large>mdi-heart</v-icon>
                    </v-btn>
                    <v-icon v-else class="mr-3">mdi-heart</v-icon>
                    <span class="overline">Likes {{ recipe.attributes.likes }}</span>
                </v-card-actions>
            </v-card>

            ≡
        </v-container>
    </template>

    <script>
    export default {
        data() {
            return {
                likedRecipe: false
            }
        }, 
        computed: {
            formatedTime() {
                let hours = Math.floor(this.recipe.attributes.duration / 60)
                let minutes = this.recipe.attributes.duration % 60
                let total = ("0" + hours).slice(-2) + ':' + ("0" + minutes).slice(-2)
                return total
            },
            userFavorites(){
                return this.$store.getters['user/favorites']
            },
            recipeIsLiked() {
                let liked = false
                if(this.userFavorites){
                    const id = this.recipe.id
                    liked = this.userFavorites.some((fav) => fav.id === id)
                }
                this.likedRecipe = liked
                return liked
            }
        },
        methods: {
            toggleLiked() {
                this.likedRecipe = !this.likedRecipe
                if(this.likedRecipe){
                    this.likeRecipe()
                } else {
                    this.unlikeRecipe()
                }
            },
            likeRecipe(){
                this.$store.commit('user/addRecipe', this.recipe)
            },
            unlikeRecipe(){
                this.$store.commit('user/removeRecipe', this.recipe.id)
            }
        },
        ≡
    }
    </script>
    ```
2. Modificar store **frontend\store\user.js**:
    ```js
    ≡
    export const mutations = {
        setFavorites(state, payload){
            state.favorites = payload
        },
        addRecipe(state, payload){
            state.favorites.push(payload)
        },
        removeRecipe(state, id){
            const miRecipe = state.favorites.find(recipe => recipe.id == id)
            const index = state.favorites.indexOf(miRecipe)
            state.favorites.splice(index, 1)
        }
    }
    ≡
    ```

### 189. Like de la receta parte 1
1. Crear query **frontend\graphql\getLikes.gql**:
    ```graphql
    query($id:ID!){
        recipe(id:$id){
            data{
                id
                attributes{
                    likes
                }
            }
        }
    }
    ```
2. Modificar page **frontend\pages\\_category\\_recipe\index.vue**:
    ```js
    ≡
    likeRecipe(){
        this.$store.commit("user/addRecipe", this.recipe)
        let userFav = this.$store.getters['user/favoritesGQL']
        const variables = {
            id: this.recipe.id,
            idUser: this.$auth.user.id,
            favorites: userFav
        }
        this.$apollo.query({
            query:require("../../../graphql/getLikes.gql"),
            variables:{id:this.recipe.id}
        }).then(res =>{
            let likes = res.data.recipe.data.attributes.likes + 1
            // let likes = res.data.recipe.like + 1
            this.recipe.likes = likes
            variables.likes = likes
            this.$apollo.mutate({
                context: {
                    headers: {
                        authorization: this.$auth.strategy.token.get()
                    }
                },
                mutation: require("../../../graphql/updateLikes.gql"),
                variables: variables
            })
        })
    },
    ≡
    ```

### 190. GraphQL getLikes Strapi V4
+ getLikes.gql
    ```graphql
    query($id:ID!){
        recipe(id:$id){
            data{
                id
                attributes{
                    likes
                }
            }
        }
    }
    ```
+ _Category/_recipe/index
    ```js
    likeRecipe(){
        this.$store.commit("user/addRecipe", this.recipe)
        let userFav = this.$store.getters['user/favoritesGQL']
        const variables = {
            id: this.recipe.id,
            idUser: this.$auth.user.id,
            favorites: userFav
        }
        this.$apollo.query({
            query:require("../../../graphql/getLikes.gql"),
            variables:{id:this.recipe.id}
        }).then(res =>{
            let likes = res.data.recipe.data.attributes.likes + 1
            this.recipe.likes = likes
            variables.likes = likes
            this.$apollo.mutate({
                context:{
                    headers:{
                        authorization: this.$auth.strategy.token.get()
                    }
                },
                mutation:require("../../../graphql/updateLikes.gql"),
                variables:variables
            })
        })
    }
    ```

### 191. Like de la receta parte 2
1. Modificar store **frontend\store\user.js**:
    ```js
    ≡
    export const getters = {
        ≡
        favoritesGQL(state){
            let favorites = []
            if(Array.isArray(state.favorites)){
                favorites = state.favorites.map(fav => fav.id)
            }
            return favorites
        }
    }

    export const mutations = {
        ≡
        resetFav(state){
            state.favorites = null
        }
    }
    ≡
    ```

### 192. Unlike de la receta
1. Modificar page **frontend\pages\\_category\\_recipe\index.vue**:
    ```js
    ≡
    unlikeRecipe(){
        this.$store.commit("user/removeRecipe", this.recipe.id)
        let userFav = this.$store.getters['user/favoritesGQL']
        const variables = {
            id: this.recipe.id,
            idUser: this.$auth.user.id,
            favorites: userFav
        }
    
        this.$apollo.query({
            query:require("../../../graphql/getLikes.gql"),
            variables:{id:this.recipe.id}
        }).then(res =>{
            let likes = res.data.recipe.data.attributes.likes - 1
            this.recipe.likes = likes
            variables.likes = likes
            this.$apollo.mutate({
                context:{
                    headers:{
                        authorization:this.$auth.strategy.token.get()
                    }
                },
                mutation:require("../../../graphql/updateLikes.gql"),
                variables:variables
            })
        })
    }
    ≡
    ```
2. Modificar layout **frontend\layouts\default.vue**:
    ```js
    ≡
    logout() {
        this.$auth.logout()
        this.loginmenu = false
        this.$store.commit('user/resetFav')
    }
    ≡
    ```

### 193. Unlike recipe Strapi V4
    ```js
    unlikeRecipe(){
        this.$store.commit("user/removeRecipe", this.recipe.id)
        let userFav = this.$store.getters['user/favoritesGQL']
        const variables = {
            id: this.recipe.id,
            idUser: this.$auth.user.id,
            favorites: userFav
        }
    
        this.$apollo.query({
            query:require("../../../graphql/getLikes.gql"),
            variables:{id:this.recipe.id}
        }).then(res =>{
            let likes = res.data.recipe.data.attributes.likes - 1
            this.recipe.likes = likes
            variables.likes = likes
            this.$apollo.mutate({
            context:{
                headers:{
                    authorization:this.$auth.strategy.token.get()
                }
            },
            mutation:require("../../../graphql/updateLikes.gql"),
            variables:variables
            })
        })
    }
    ```

### 194. Archivos del proyecto sección 12
+ **Respositorio**: 00recursos\Section_12_favorites


## Sección 13: Despliegue/deployment
### 195. Sitios web visitados en la sección
+ Material de apoyo:
    + Si estas utilizando la V4 de strapi estos son los pasos a seguir (son muy similares a los del video, pero debes copiar las diferencias):
        + https://docs-v3.strapi.io/developer-docs/latest/setup-deployment-guides/deployment/hosting-guides/heroku.html
    + Aquí encontrarás la lista de sitios a visitar en la sección:
        + https://strapi.io/documentation/developer-docs/latest/setup-deployment-guides/deployment/hosting-guides/heroku.html#heroku
        + https://github.com/git-guides/install-git
        + https://github.com/
        + https://app.netlify.com/
    + Otros:
        + https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#services
        + https://nuxtjs.org/docs/2.x/deployment/netlify-deployment

### 196. Preparación para el despliegue
2 min





    ```vue
    ≡
    ≡
    ```


    ```graphql
    ≡
    ≡
    ```








### 197. Strapi => Heroku
8 min
### 198. Modificar permisos y autorizaciones
1 min
### 199. Importar categorías (video opcional)
6 min
### 200. Importar recetas (video opcional)
7 min
### 201. Crear repositorio GitHub
4 min
### 202. Despliegue en Netfify
3 min
### 203. Archivos del proyecto sección 13
+ **Repositorio**: 00recursos\backend-recetas.zip


## Sección 14: Nuxt 3
### 204. Sección de desarrollo
+ Hola, Nuxt 3 en su versión beta fue lanzado el 12 de octubre del 2021.
+ Ya estoy estudiando la documentación y en los próximos meses se estarán adjuntando nuevos videos sobre:
    + Que son las novedades.
    + Como hacer la migración nuxt 2 => 3 con Nuxt bridge.
    + Un pequeño ejercicio REST con firebase.
+ Estoy trabajando para darte un contenido actual y de calidad, 😊 ¡muchas gracias por tu apoyo!

### 205. Clase Extra
+ No dejes de visitar nuestro catálogo de cursos donde encontrarás los mejores precios disponible todo el tiempo:
    + https://tutorialesatualcance.com/cursos


## Comandos comunes:
1. Ejecutar **my-app** en desarrollo:
    + $ cd my-app
    + $ npm run dev
2. Ejecutar **my-app** en producción:
    + $ cd my-app
    + $ npm run build
    + $ npm run start
3. Ejecutar **frontend** en desarrollo:
    + $ cd frontend
    + $ npm run dev
4. Ejecutar **frontend** en producción:
    + $ cd frontend
    + $ npm run build
    + $ npm run start
5. Para levantar el **backend**:
    + $ cd backend
    + $ npm run develop
6. Para ingresar al panel administrativo de **Starpi**:
    + http://localhost:1337/admin
    + **Nota**: el servidor **backend** debe estar levantado.
