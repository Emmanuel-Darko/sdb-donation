<template>
    <div class="container">
        <!-- <div class="l-image">
            <img src="/images/logo.png" alt="logo">
        </div> -->

        <ul class="nav">
            <li><router-link :to="{name:'home', params:{id:'donate'}}"> Donate </router-link></li>
            <li><router-link  :to="{name:'home', params:{id:'receipients'}}"> Receipients </router-link></li>
            <li><router-link  :to="{name:'home', params:{id:'mydonations'}}"> My donations </router-link></li>
            <!-- <button v-if="postRoute=='profile'" @click="logoutUser()">Log out</button> -->
        </ul>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="css" scoped>
    .l-image{
        width: 50px;
        height: 50px;
        margin: auto;
        border-radius: 50%;
        margin-bottom: 10px;
        overflow: hidden;
        /* background: #ffce6c; */
        box-shadow:  5px 5px 9px #d1bba1,
        -5px -5px 9px #ffffe7;
    }
    .l-image img{
        width: auto;
        height: 100%;
        /* margin-left: -60%; */
    }
    ul.nav{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
        list-style: none;
        margin: 20px;
        padding: 10px;
        /* border: 1px solid; */
        /* box-shadow:  20px 20px 60px #bebebe,
        -20px -20px 60px #ffffff; */
    }
    ul.nav li a{
        font-size: large; 
        font-weight: 600;
        text-decoration: none;
        color: black;
        padding: 10px;
        transition: 0.2s;
        border: 2px solid green;
        box-shadow:  20px 20px 60px #bebebe,
        -20px -20px 60px #ffffff;
    }
    ul.nav li a:hover{
        box-shadow: none;
        border-width: 3px;
    }
    .router-link-exact-active{
        background-color: green;
        color: #fff;
        box-shadow: none;
        text-decoration: none;
    }
    .nav button{
        font-family: 'Sono';
        position: absolute;
        right: 50px;
        margin-top: -3px;
        width: 100px;
        padding: 10px;
        font-size: 16px;
        cursor: pointer;
        border: none;
        border-radius: 5px;
        background: orange;
        box-shadow: 20px 20px 60px #bebebe,
        -20px -20px 60px #ffffff;
    }
    .nav button:hover{
        box-shadow: none;
    }
</style>