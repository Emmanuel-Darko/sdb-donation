<template>
    <div class="container">
        <h1>All receipients</h1>
        <!-- <div v-for="receipient in receipients"> -->
            <button class="accordion">{{ receipient.name }}</button>
            <div class="panel">
                <h5>About</h5>
                <h6>About</h6>
                {{ receipient.size }}
                <p>{{ receipient.cause }}</p>
                <h5>Contact</h5>
                <p>{{ receipient.email }}</p>
                <p>{{ receipient.location }}</p>
            </div> 
            <button class="accordion">{{ receipient.name }}</button>
            <div class="panel">
                <h5>About</h5>
                <h6>About</h6>
                {{ receipient.size }}
                <p>{{ receipient.cause }}</p>
                <h5>Contact</h5>
                <p>{{ receipient.email }}</p>
                <p>{{ receipient.location }}</p>
            </div> 
            <button class="accordion">{{ receipient.name }}</button>
            <div class="panel">
                <h5>About</h5>
                <h6>About</h6>
                {{ receipient.size }}
                <p>{{ receipient.cause }}</p>
                <h5>Contact</h5>
                <p>{{ receipient.email }}</p>
                <p>{{ receipient.location }}</p>
            </div> 
            <button class="accordion">{{ receipient.name }}</button>
            <div class="panel">
                <h5>About</h5>
                <h6>About</h6>
                {{ receipient.size }}
                <p>{{ receipient.cause }}</p>
                <h5>Contact</h5>
                <p>{{ receipient.email }}</p>
                <p>{{ receipient.location }}</p>
            </div> 
        <!-- </div> -->


    </div>
</template>

<script setup>
    const props = defineProps({
        receipients:String
    })
    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
        } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
        } 
    });
    }
</script>

<style lang="css" scoped>
    .container{
        padding: 20px;
    }
    .accordion {
    background-color: #eee;
    color: #444;
    cursor: pointer;
    padding: 18px;
    width: 100%;
    border: none;
    text-align: left;
    outline: none;
    font-size: 15px;
    transition: 0.4s;
    }

    .active, .accordion:hover {
    background-color: #ccc;
    }

    .accordion:after {
    content: '\002B';
    color: #777;
    font-weight: bold;
    float: right;
    margin-left: 5px;
    }

    .active:after {
    content: "\2212";
    }

    .panel {
    padding: 0 18px;
    background-color: white;
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.2s ease-out;
    }


</style>