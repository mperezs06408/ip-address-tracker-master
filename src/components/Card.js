app.component('card', {
    data() {
        return {
            listPrueba:[
                {
                    label: 'IP Addres',
                    info: 1234
                },
                {
                    label: 'Location',
                    info:'Brooklyn, NY 10001'
                }
            ]
        }
    },
    template: 
    `
    <section class="card-container">
        <ul class="card-list">
            <card-info
                v-for="(item, i) in listPrueba"
                    :label="item.label"
                    :info="item.info"
            />
        </ul>
    </section>
    `
});