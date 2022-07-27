const app = Vue.createApp({
    data(){
        return{
            title: 'IP Address Tracker',
            ip: null,
            listData : []
        }
    },    
    template: 
    `
    <main>
        <h1>{{ title }}</h1>
        <v-input
            @newIPValue="updateIP"
        />
        <card
            :listElements='listData'
        />
    </main>    
    <v-map
        :ipValue="ip"
        @cardData="updateListData"    
    />
    `,
    methods: {
        updateListData(e) {
            this.listData = e;
        },
        updateIP(e) {
            this.ip = e;
            console.log(this.ip);
        }
    }
});