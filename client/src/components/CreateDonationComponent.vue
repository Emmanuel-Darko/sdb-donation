<template>
    <div class="container">
        <!-- create donations -->
        <div class="create-donation">
            <h2>CREATE A DONATION</h2>
            <form @submit.prevent="makeDonation()" class="donor-form">
                <select name="receipient" id="receipient" v-model="donation.receipientId">
                    <option value="default">Select a receipient</option>
                    <option v-for="receipient in receipients" :value="receipient.uuid" :key="receipient.uuid">{{ receipient.name }}</option>
                </select>
                <input type="text" v-model="donation.title" placeholder="Give a title">
                <textarea type="text" v-model="donation.description" cols="52" rows="10" placeholder="Describe your donation..."></textarea>
                <input type="number" v-model="donation.amount" placeholder="Enter amount GHS">
                <span>Please add an image or video of donation below</span>
                <input type="file" v placeholder="Add an image">
                <button type="submit">Donate 💰</button>
            </form>
            <img class="donation-icon" src="/images/donation1.svg" alt="donation">
        </div>

        <!-- view donations -->

    </div>
</template>

<script>
    import axios from '../request.js'
    export default {
        data(){
            return{
                receipients: [],
                donation:{
                    receipientId: '',
                    title: '',
                    description: '',
                    amount: '',
                    image: ''
                }
            }
        },
        methods:{
            makeDonation(){
                const token = localStorage.getItem('donortoken')
                const newDonation = {}
                Object.keys(this.donation).forEach(key =>{
                    newDonation[key] = this.donation[key]
                })
                axios.post('http://localhost:4000/donor/donate', newDonation, {headers: {usertoken: token}})
                .then(res => {
                    console.log(res)
                    alert(res.data.message)
                })
                .catch(err =>{
                    console.log(err)
                    alert(err.response.data)
                })
            }
        },
        mounted() {
            const BASE_URL = import.meta.env.VITE_BASE_URL;
            const token = localStorage.getItem('donortoken')
            axios.get(BASE_URL + '/donor/getReceipients')
            .then((res) => {
                console.log('RESPONSE', res);
                // this.receipients = res.data.data
            })
            .catch(err => {
                console.log(err)
                // alert(err.response.data)
            })
        },
    }
</script>

<style lang="css" scoped>
    .container{
        background-color: #fff;
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
    .create-donation h2{
        margin-bottom: 30px;
        color: green;
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
        -20px -20px 60px #f1f1f1;
    }
    .donor-form select, .donor-form input, .donor-form textarea{
        width: 50%;
        padding: 10px;
        border: 0.8px solid green;
        border-radius: 10px;
        font-size: 15px;
    }
    .donor-form button{
        padding: 20px 40px;
        background-color: green;
        border: none;
        border-radius: 10px;
        color: #fff;
        cursor: pointer;
    }
    .donation-icon{
        width: 20%;
        position: absolute;
        right: 0;
        top: 50%;
    }


</style>