<template>
    <div class="container">
        <!--  header -->
        <header-page></header-page>

       <!-- vue route -->
        <router-view></router-view>

        <!-- footer -->
        <footer-page/>


    </div>
</template>

<script>
    import HeaderComponet from "../components/HeaderComponet"
    import FooterComponent from "../components/FooterComponent"
    export default {
        components:{
            "header-page":HeaderComponet,
            "footer-page":FooterComponent
        },
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
