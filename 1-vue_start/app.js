const app = Vue.createApp({
    data() {
        return {
            title : "Vue Learning Day 1",
            desc: "This is just a trial",
            twitter: {
                title: "My Twitter",
                url: "https://twitter.com/lgslkrkrb",
                target: "_blank",
                alt:"my-twitter"
            },
            coords: {
                x: 0,
                y: 0 
            }
        }
    },
    methods: {
        changeTitle(param) {
            this.title = param
        },
        changeCoords(message,e) {
            this.title = message
            this.coords.x = e.x
            this.coords.y = e.y
        }
    }
}).mount("#app")