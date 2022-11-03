const app = Vue.createApp({
    data() {
        return {
            showContainer : false,
            counter: 0,
        
        }
    },
    computed : {
        counterBoxClass() {
            return { green : this.counter > 0, red : this.counter < 0}
        }
    }
}).mount("#app")