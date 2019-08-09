<template>
    <div>
        <a-dropdown-button @click="handleButtonClick">
            Dropdown
            <a-menu slot="overlay" @click="handleMenuClick">
                <a-menu-item key="1"><a-icon type="user" />1st menu item</a-menu-item>
                <a-menu-item key="2"><a-icon type="user" />2nd menu item</a-menu-item>
                <a-menu-item key="3"><a-icon type="user" />3rd item</a-menu-item>
            </a-menu>
        </a-dropdown-button>
        <a-dropdown-button
                @click="handleButtonClick"
                disabled
                style="margin-left: 8px"
        >
            Dropdown
            <a-menu slot="overlay" @click="handleMenuClick">
                <a-menu-item key="1"><a-icon type="user" />1st menu item</a-menu-item>
                <a-menu-item key="2"><a-icon type="user" />2nd menu item</a-menu-item>
                <a-menu-item key="3"><a-icon type="user" />3rd item</a-menu-item>
            </a-menu>
        </a-dropdown-button>
        <a-dropdown>
            <a-menu slot="overlay" @click="handleMenuClick">
                <a-menu-item key="1"><a-icon type="user" />1st menu item</a-menu-item>
                <a-menu-item key="2"><a-icon type="user" />2nd menu item</a-menu-item>
                <a-menu-item key="3"><a-icon type="user" />3rd item</a-menu-item>
            </a-menu>
            <a-button style="margin-left: 8px">
                Button <a-icon type="down" />
            </a-button>
        </a-dropdown>
    </div>
</template>

<script>
export default {
    name: "drop-down",
    methods:{
        handleButtonClick(){
            console.log(1)
        },
        handleMenuClick(){
            console.log(2)
        },
        handleMenuClick(){
            console.log(3)
        }
    }
}
</script>

<style scoped>

</style>
