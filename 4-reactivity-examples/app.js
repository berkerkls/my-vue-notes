const app = Vue.createApp({
    data() {
        return {
            search: "",
            itemList: ["elma", "armut", "kiraz", "kayısı"],
            // filteredList: []
        }
    },
    methods: {
        searchFilter() {
            // this.filteredList = this.itemList.filter(item => item.includes(this.search))
            // console.log(filtered)
        }
    },
    computed : {
        filteredList() {
            return this.itemList.filter(item => item.includes(this.search))
        }
    }
}).mount("#app")