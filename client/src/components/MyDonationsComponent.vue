<template>
    <div class="container">
        <h1 style="text-align: center;">My donations</h1>

        <h3>No donations made yet ...</h3>
        <router-link to="/home/donate"><h3>Place your first donation</h3></router-link>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="css" scoped>
    .container{
        text-align: center;
    }
    .container h1{
        margin-bottom: 50px;
    }
</style>