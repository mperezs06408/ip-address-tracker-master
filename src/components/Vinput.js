app.component('v-input', {
    data() {
        return {
            ipToSearch: '',
            errorStyle: [],
        }
    },
    template: `
    <div class="input-container">
        <input type="text" id="input" v-model="ipToSearch" :class="errorStyle" 
            placeholder="Search for any IP address or domain"
        />
        <button 
            id="input-button"
            @click="onBtnClick"
            >
            <img alt="button arrow" src="./src/img/icon-arrow.svg" id="button-img" />
        </button>
    </div>
    `,
    methods: {
        onBtnClick() {
            const type = this.ipValidation();

            if (type != null) {
                if (this.errorStyle.length != 0) {
                    this.errorStyle = [];
                }
                this.$emit('newIPValue', [this.ipToSearch, type]);
            } else {
                this.errorStyle = ['errorInput'];
            };
        },
        ipValidation() {
            const ipVal = /^([01]?[0-9][0-9]?|2[0-4][0-9]|25[0-5])\.([01]?[0-9][0-9]?|2[0-4][0-9]|25[0-5])\.([01]?[0-9][0-9]?|2[0-4][0-9]|25[0-5])\.([01]?[0-9][0-9]?|2[0-4][0-9]|25[0-5])$/;
            const domainVal = /(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z0-9][a-z0-9-]{0,61}[a-z0-9]/;

            return ipVal.test(this.ipToSearch) ? 'ipAddress' : domainVal.test(this.ipToSearch) ? 'domain' : null;
        }
    },
});