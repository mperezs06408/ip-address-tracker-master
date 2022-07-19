app.component('card', {
    props: {
        listElements: {
            type: Array, 
            default: () => [{ label: 'ip address', info: '0.0.0.0'}],
            require: true
        }
    },
    template: 
    `
    <section class="card-container">
        <ul class="card-list">
            <card-info
                v-for="(item, i) in listElements"
                    :label="item.label"
                    :info="item.info"
            />
        </ul>
    </section>
    `
});