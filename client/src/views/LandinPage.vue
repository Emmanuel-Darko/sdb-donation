<template>
    <div class="banner">
        <section class="banner-left">
            <img src="/images/logo.png" alt="logo">
            <h1 class="head-text">Donate</h1>
            <span class="head-sub">to <b>Save</b> </span>
            <span class="head-sub2">the <b>world!</b> </span>
            <button class="start">pass a coin</button>
        </section>
        <section class="banner-right">
            <img src="/images/banner.jpg" alt="banner">
        </section>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="css" scoped>
    *{
        box-sizing: border-box;
        font-family: 'Sono';
    }
    .banner{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        background-color: #f1f1f1;
        height: 100%;
    }
    .banner-left{
        width: 60%;
        padding-left: 40px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .banner-left .head-text{
        font-size: 120px;
        color: orange;
    }
    .banner-left .head-sub{
        font-size: 80px;
        color: green;
        margin-top: -50px;
    }
    .banner-left .head-sub2{
        font-size: 80px;
        color: brown
    }
    .banner-left img{
        width: 200px;
        position: absolute;
        top: 0px;
        left: 20x;
    }
    .banner-left .start{
        padding: 20px;
        border-radius: 10px;
        border: none;
        font-size: 20px;
        box-shadow: 5px 5px 9px orange,
        -5px -5px 9px green;
        margin-top: 20px;
        cursor: pointer;
    }
    .banner-left .start:hover{
        box-shadow: none;
        border: 1px solid green;
        box-shadow:  5px 5px 9px #d1bba1,
        -5px -5px 9px #ffffe7;
    }
    .banner-right{
        width: 40%;
        /* height: 90vh; */
        border: 1px solid red;
    }
    .banner-right img{
        width: 100%;
    }

</style>