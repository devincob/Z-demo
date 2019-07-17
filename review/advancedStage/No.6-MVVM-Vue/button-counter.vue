<template>
    
</template>

<script>
    export default {
        name: "button-counter" ,
        Vue.component('button-counter', {
            data: function () {
                return {
                    count: 0
                }
            },
            template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
        })
    }
</script>

<style scoped>

</style>