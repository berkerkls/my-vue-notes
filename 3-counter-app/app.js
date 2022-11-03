const app = Vue.createApp({
    data() {
        return {
            counter: 0,
            counter2: 0,
        }
    },
    methods: {
        getCounters() {
            return this.counter > 5 ? "Büyük" : "Küçük"
        }
    },
    computed: {
        getCounterResult() {
            console.log("counter1 works")
            return this.counter > 5 ? "Büyük" : "Küçük"
        },
        getCounter2Result() {
            console.log("counter2 works")
            return this.counter2 > 5 ? "Büyük" : "Küçük"
        },
    },
    watch: {
        getCounterResult(newValue,oldValue) {
            console.log("result", newValue, "=>", oldValue)
        },
        counter(newValue,oldValue) {
            console.log("counter", newValue, "=>", oldValue)
        }
    }
}).mount("#app")