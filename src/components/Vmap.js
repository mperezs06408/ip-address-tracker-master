app.component('v-map', {
    props: {
        ipValue: {
            type: String,
            require: true
        }
    },
    data() {
        return {
            API_KEY: 'at_EeOtS6FiVqmtF9Z919UVqgeVrgKaW',
            mapObj: null,
            locationData: [{
                    label: 'ip address',
                    info: ''
                },
                {
                    label: 'location',
                    info: ''
                },
                {
                    label: 'timezone',
                    info: ''
                },
                {
                    label: 'isp',
                    info: ''
                }
            ],
            latitude: 0,
            longitude: 0,
        }
    },
    template: `
    <section class="map-section" id="map">
    </section>
    `,
    methods: {
        initMap: async function () {
            try {
                const map = L.map('map', {
                    zoomControl: false
                });

                this.mapObj = map;

                await this.getInitialIP();
                await this.getIPLocation(this.locationData[0].info);

                const location = [this.latitude, this.longitude];

                map.setView(location, 13);

                L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                    attribution: '© OpenStreetMap'
                }).addTo(map);

                this.markMap(location, map);

                this.updateCardInfo();


            } catch (e) {
                console.error(`Error generating the map: ${e}`);
            }
        },
        getInitialIP: async function () {
            const API = await fetch('https://api.ipify.org?format=json');

            const result = await API.json();

            this.locationData[0].info = result.ip;

        },
        getIPLocation: async function (ADDRESS, searchParam = 'ipAddress') {
            const ipifyAPI =
                await fetch(
                    `https://geo.ipify.org/api/v2/country,city?apiKey=${this.API_KEY}&${searchParam}=${ADDRESS}`
                );

            const result = await ipifyAPI.json();

            this.latitude = result.location.lat;
            this.longitude = result.location.lng;

            const city = result.location.city;
            const country = result.location.country;
            const postalCode = result.location.postalCode;

            const timeZone = `UTC ${result.location.timezone}`;

            const isp = result.isp;

            this.locationData[1].info = `${city}, ${country} ${postalCode}`;
            this.locationData[2].info = timeZone;
            this.locationData[3].info = isp;
        },
        markMap: async function (coordinates, map) {
            const marker = L.marker([...coordinates]);

            marker.addTo(map);
        },
        updateCardInfo: function () {
            this.$emit('cardData', this.locationData);
        }
    },
    mounted() {
        this.initMap();
    },
    watch: {
        ipValue: async function () {
            if (this.ipValue != null) {
                this.locationData[0].info = this.ipValue;
                try {
                    await this.getIPLocation(this.ipValue);

                    const coordinates = [this.latitude, this.longitude];
                    console.log(coordinates);

                    this.mapObj.setView(coordinates, 13);

                    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                        attribution: '© OpenStreetMap'
                    }).addTo(this.mapObj);

                    this.markMap(coordinates, this.mapObj);

                    this.updateCardInfo();
                } catch (e) {
                    console.log(`Error searching destination IP: ${e}`);
                }

            }
        }
    }
});