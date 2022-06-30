
<template>
    <div id="event-handling">
    <p>{{message}}</p>
    <button v-on:click="reverseMessage">fanzhuan</button>
    </div>
</template>


<script>
    export default {
        name:'SystemIn',
        data() {
            return {
                message:'Hello Vue.js',
            };
        },

        methods:{
            reverseMessage(){
                this.message = this.message.split('').reverse().join('')
            }
        }

    }
</script>