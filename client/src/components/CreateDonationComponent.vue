<template>
    <div class="container">
        <!-- create donations -->
        <div class="create-donation">
            <h3>CREATE A DONATION</h3>
            <form action="" class="donor-form">
                <select name="receipient" id="receipient">
                    <option value="default">Select a receipient</option>
                    <option v-for="receipient in receipients" :value="receipient">{{ receipient.name }}</option>
                </select>
                <input type="text" placeholder="Give a title">
                <textarea type="text" cols="52" rows="10" placeholder="Describe your donation..."></textarea>
                <input type="number" placeholder="Enter amount GHS">
                <span>Please add an image or video of donation below</span>
                <input type="file" placeholder="Add an image">
                <button @click.prevent="makeDonation()">Donate 💰</button>
            </form>
        </div>

        <!-- view donations -->

    </div>
</template>

<script>
    export default {
        props:[
            "receipients"
        ],
        data(){
            return{
                receipients: this.receipients
            }
        },
        methods:{
            makeDonation(){
                
            }
        }
    }
</script>

<style lang="css" scoped>
    .container{
        background-color: #f1f1f1;
        display: flex;
        flex-direction: column;
    }
    .create-donation{
        display: flex;
        flex-direction: column;
        justify-content:flex-start;
        align-items: center;
        height: 100vh;
    }
    .donor-form{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 20px;
        width: 50%;
        padding: 40px 20px;
        border: 1px solid green;
        border-radius: 20px;
        background-color: #fff;
        box-shadow:  20px 20px 60px #bebebe,
        -20px -20px 60px #ffffff;
    }
    .donor-form select, .donor-form input, .donor-form textarea{
        width: 50%;
        padding: 10px;
        border: 0.8px solid green;
        border-radius: 10px;
        font-size: 15px;
    }
    .donor-form button{
        padding: 10px 20px;
        background-color: green;
        border: none;
        border-radius: 10px;
        color: #fff;
        cursor: pointer;
    }



</style>