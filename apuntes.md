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
1 min






    ```vue
    ≡
    ≡
    ```






### 79. Preparar el pedido
1 min
### 80. Componente ApolloQuery
5 min
### 81. Cambios Query V4 Strapi
1 min
### 82. Objeto apollo
3 min
### 83. Centralizar pedidos GraphQL
4 min
### 84. Pasar variables con Apollo
6 min
### 85. Pasar Variables V4 Strapi
1 min
### 86. Carpeta Store / Vuex
4 min
### 87. Store
4 min
### 88. El contexto de Nuxt
2 min
### 89. Pedidos con AsynData
5 min
### 90. Organizar datos versión 4 de Strapi
1 min
### 91. Pedidos con fetch
5 min
### 92. Función NuxtServerInit
7 min
### 93. Organizar datos Mutación Versión 4 Strapi
1 min
### 94. Ciclo de vida de Nuxt
2 min
### 95. Crear el GraphQL para recetas
3 min
### 96. GraphQL filtro receta por slug versión 4 de Strapi
1 min
### 97. Cargar las recetas
5 min
### 98. Organizar datos de la respuesta Version 4 Strapi/GraphQL
1 min
### 99. Cargar una sola entrada
2 min
### 100. GraphQL Strapi V4
1 min
### 101. Detalles de la receta
5 min
### 102. Organizar datos de la respuesta Version 4 Strapi/GraphQL
1 min
### 103. Archivos del proyecto sección 7
1 min
### 104. Sitios web visitados en la sección
1 min
### 105. Componente v-list de vuefify
6 min
### 106. Auto importación de componentes
5 min
### 107. Componente V-card
5 min
### 108. Tarjetas de recetas
5 min
### 109. Tarjeta receta
4 min
### 110. Botón volver
4 min
### 111. Detalles de la receta parte 1
7 min
### 112. Detalles de la receta parte 2
5 min
### 113. Formato duración
3 min
### 114. Archivos del proyecto sección 8
1 min
### 115. Sitios web visitados en la sección
1 min
### 116. Campo de búsqueda
5 min
### 117. Precarga de resultados
4 min
### 118. Modificaciones V4 Strapi/GraphQL
1 min
### 119. Precarga de resultados con filtro
6 min
### 120. Filtros Strapi/GraphQL
4 min
### 121. Filtros Strapi/GraphQL V4
1 min
### 122. Filters Strapi/GraphQL V4
1 min
### 123. Sort Strapi/GraphQL V4
1 min
### 124. Pagination Strapi/GraphQL V4
1 min
### 125. Sugerencia
1 min
### 126. Filtros en el pedido
6 min
### 127. Modificaciones V4 Strapi/GraphQL
1 min
### 128. Archivos del proyecto sección 9
1 min
### 129. Sitios web visitados en la sección
1 min
### 130. Componente de dialogo V-dialog
4 min
### 131. Creación del componente de inicio de sesión
6 min
### 132. Componente snackbar
3 min
### 133. Mensaje al usuario con snackbars
10 min
### 134. Remover elementos temporales (Video opcional)
1 min
### 135. Instalación del módulo NuxtAuth
2 min
### 136. Configuración del módulo NuxtAuth
6 min
### 137. Cambios en la V4 de Strapi
1 min
### 138. Nuxt 2.15 Carpeta middleware
1 min
### 139. Carpeta Middleware
4 min
### 140. Estrategia LoginWith
5 min
### 141. Objeto $auth y logout
3 min
### 142. Estilos menú modal y avatar
5 min
### 143. Contraseña y mensajes
4 min
### 144. Registro mutación
3 min
### 145. Registro
6 min
### 146. Validación de formulario
7 min
### 147. Últimos detalles
5 min
### 148. Archivos del proyecto sección 10
1 min
### 149. Sitios web visitados en la sección
1 min
### 150. Nueva relación User/Autor
2 min
### 151. Otorgar los permisos de edición del autor en Strapi
1 min
### 152. Autor recetas
1 min
### 153. Modificaciones Strapi V4
1 min
### 154. Página de usuario
4 min
### 155. Modificaciones Strapi V4
1 min
### 156. Lista de recetas del usuario
7 min
### 157. Mutación de crear receta
7 min
### 158. Mutación de crear receta Strapi V4
1 min
### 159. Componente añadir receta
4 min
### 160. Formulario añadir receta parte 1
6 min
### 161. Formulario añadir receta parte 2
7 min
### 162. Tiempo en minutos (Video opcional)
1 min
### 163. Apollo mutate
7 min
### 164. Redirección y mensajes
3 min
### 165. Cache de Apollo
3 min
### 166. Actualizar el cache
5 min
### 167. Actualizar cache Strapi V4
1 min
### 168. Mutación modificar receta
2 min
### 169. Mutación modificar receta Strapi V4
1 min
### 170. Editar receta parte 1
6 min
### 171. Editar Receta Strapi V4
1 min
### 172. Editar receta parte 2
6 min
### 173. Mutación borrar receta
2 min
### 174. Mutación borrar receta Strapi V4
1 min
### 175. Modal borrar
6 min
### 176. Borrar receta
4 min
### 177. Archivos del proyecto sección 11
1 min
### 178. Favoritos y likes
4 min
### 179. GraphQL favorites V4 Strapi
1 min
### 180. Doble mutación
5 min
### 181. Doble mutation V4 Strapi
1 min
### 182. Recetas favoritas
8 min
### 183. Modificaciones Strapi V4
1 min
### 184. Store recetas favoritas
5 min
### 185. Store Rectas Strapi V4
1 min
### 186. Cargar recetas favoritas
4 min
### 187. Botón like
5 min
### 188. Añadir y remover recetas del store
6 min
### 189. Like de la receta parte 1
4 min
### 190. GraphQL getLikes Strapi V4
1 min
### 191. Like de la receta parte 2
5 min
### 192. Unlike de la receta
3 min
### 193. Unlike recipe Strapi V4
1 min
### 194. Archivos del proyecto sección 12
1 min
### 195. Sitios web visitados en la sección
1 min
### 196. Preparación para el despliegue
2 min
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
1 min
### 204. Sección de desarrollo
1 min
### 205. Clase Extra



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
