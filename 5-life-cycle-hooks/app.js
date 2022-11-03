const app = Vue.createApp({
    data() {
        return {
            title : "This is the title",
            itemList: []
        }
    },
    beforeCreate() {
        console.log("beforeCreate working")
    },
    created() {
        console.log("created working")

        setTimeout(() => {
            this.itemList = [1,2,3,4,5,6,7,8,234]
        },2000)
    },
    beforeMount() {
        console.log("beforeMount working")
    },
    mounted() {
        console.log("mounted working")
    },
    beforeUpdate() {
        console.log("beforeUpdate working")
    },
    updated() {
        console.log("updated working")
    },
    beforeUnmount() {
        console.log("beforeUnmount working")
    },
    unmounted() {
        console.log("unmounted working")
    }
})

app.mount("#app") 