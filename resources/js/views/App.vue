<template>
    <div class="container">
        <main-layout/>
    </div>
</template>

<script>
    import MainLayout from "../layout/MainLayout"
    export default {
        components:{
            "main-layout":MainLayout
        },
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
