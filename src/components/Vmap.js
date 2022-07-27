app.component('v-map', {
    data(){
        return {
            API_KEY: 'at_EeOtS6FiVqmtF9Z919UVqgeVrgKaW',
            latitude: 0,
            longitude: 0,
            currentIP: '0.0.0.0'
        }
    },
    template: `
    <section class="map-section" id="map">
    </section>
    `,
    methods: {
        getIPLocation: async function(IP_ADDRESS) {
            const ipifyAPI = 
                await fetch(
                    `https://geo.ipify.org/api/v2/country,city?apiKey=${this.API_KEY}&ipAddress=${IP_ADDRESS}`
                );
            
            const result = await ipifyAPI.json();

            this.latitude = result.location.lat;
            this.longitude = result.location.lng;

        },
        initMap: async function() {
            const map = L.map('map', {
                zoomControl: false
            });
            
            await this.getInitialIP();
            await this.getIPLocation(this.currentIP);

            const location = [this.latitude, this.longitude];

            map.setView(location, 13);

            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '© OpenStreetMap'
            }).addTo(map);



            const markerLayer = L.marker(location);

            markerLayer.addTo('map');
        },
        getInitialIP: async function() {
            const API = await fetch('https://api.ipify.org?format=json');

            const result = await API.json();

            this.currentIP = result.ip;
        },
    },
    mounted() {
        this.initMap();
    },
});