const app = Vue.createApp({
    data() {
        return {
            btn_name: "Ekle Butonu",
            fullName: "Berker"
        }
    },
    methods: {
        updateValue(e) {
            this.fullName = e.target.value
        }
    }
}).mount("#app")