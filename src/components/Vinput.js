
app.component('v-input',{
    data(){
        return{
            ipToSearch: '',
        }
    },
    template: 
    `
    <div class="input-container">
        <input type="text" id="input" v-model="ipToSearch" />
        <button 
            id="input-button"
            @click="onBtnClick"
            >
            <img alt="button arrow" src="./src/img/icon-arrow.svg" id="button-img" />
        </button>
    </div>
    `,
    methods: {
        onBtnClick(){
            this.$emit('newIPValue', this.ipToSearch);
        },
    },
});