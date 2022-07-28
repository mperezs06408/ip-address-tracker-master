const app = Vue.createApp({
    data(){
        return{
            title: 'IP Address Tracker',
            ip: null,
            ipType: null,
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
        :type="ipType"
        @cardData="updateListData"    
    />
    `,
    methods: {
        updateListData(e) {
            this.listData = e;
        },
        updateIP(e) {
            this.ip = e[0];
            this.ipType = e[1];
        }
    }
});