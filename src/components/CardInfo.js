app.component('card-info', {
    props: [
        'label',
        'info'
    ],
    template: 
    `
    <li class="card-info_elem">
        <h2 class="card-info_elem-title">{{label}}</h2>
        <p class="card-info_elem-desc">{{info}}</p>
    </li>
    `
});