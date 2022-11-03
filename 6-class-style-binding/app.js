const app = Vue.createApp({
    data() {
        return {
            redBg : false,
            showBorder: false,
            bgColor: "#167497"
        }
    },
    computed: {
        boxClasses() {
            return {border : this.showBorder, red: this.redBg}
        }
    }
})
app.mount("#app")