<template>
    <div>
        <a-button type="primary" >
            <router-link to="/ant-col" style="margin-left: 5px" >ant-col</router-link>
        </a-button>
        <a-button>
            <router-link to="/lay-out" style="margin-left: 5px" >lay-out</router-link>
        </a-button>
        <a-button type="dashed">
            <router-link to="/navigation-one" style="margin-left: 5px">navigation-one</router-link>
        </a-button>
        <a-button type="danger">
            <router-link to="/drop-down" style="margin-left: 5px" >drop-down</router-link>
        </a-button>
    </div>
</template>

<script>
    export default {
        name: "ant-button"
    }
</script>

<style scoped>
    button{
        margin: 0 5px;
    }
</style>
