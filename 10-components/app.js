const app = Vue.createApp({
    data(){
    }
})
app.component("counter-item",{
    data(){
        return {
            counter: 0
        }
    },
    template:`
    <div class="container">
        <h3>{{ counter }}</h3>
        <button @click="counter++">+</button>
        <button @click="counter--">-</button>
      </div>
    `
})
app.mount("#app")