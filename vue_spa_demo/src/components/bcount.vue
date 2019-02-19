<template>
    <div @click="count++">
            You clicked me {{ count }} times.
    </div>
</template>

<script>
export default{
    name: "b-count",
    data(){
        return{
            count:0
        }
    }
}
</script>

<style scoped>

</style>
