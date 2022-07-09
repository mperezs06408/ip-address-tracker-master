const app = Vue.createApp({
    data(){
        return{
            title: 'IP Address Tracker'
        }
    },    
    template: 
    `
    <main>
        <h1>{{ title }}</h1>
        <v-input/>
        <card/>
    </main>    
    <v-map/>
    `
});