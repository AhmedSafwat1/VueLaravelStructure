<template>
    <div class="container">
        header
        <li>
            <router-link to="/">Home</router-link>
            <router-link to="/about">About</router-link>
        </li>

        <v-app>
            <v-content>
                <v-container>Hello world</v-container>
            </v-content>
        </v-app>
    </div>
    
</template>

<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
