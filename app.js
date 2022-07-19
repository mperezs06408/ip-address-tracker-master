const app = Vue.createApp({
    data(){
        return{
            title: 'IP Address Tracker',
            listData : [
                {
                    label: 'ip address',
                    info: '192.212.174.101'
                },
                {
                    label: 'location',
                    info: 'Brooklyn, NY 10001'
                },
                {
                    label : 'timezone',
                    info: 'UTC-05:00'
                },
                {
                    label: 'isp',
                    info: 'Space X Starlink'
                }
            ]
        }
    },    
    template: 
    `
    <main>
        <h1>{{ title }}</h1>
        <v-input/>
        <card
            :listElements='listData'
        />
    </main>    
    <v-map/>
    `
});