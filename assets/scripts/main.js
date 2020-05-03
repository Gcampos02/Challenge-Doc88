

// methods: {
//     formatPrice(value) {
//         let val = (value/1).toFixed(2).replace('.', ',')
//         return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
//     }
// }
// https://stackoverflow.com/questions/50373777/vuejs-custom-currency-mask



var app = new Vue({
    el: '#global',

    data: {
        titulo: '',
        sabor: '',
        valor: '',
        descricao: '',
    },

    methods: {
        sendInfo: function () {
            console.log(item.titulo)
            console.log(item.sabor)
            console.log(item.valor)
            console.log(item.descricao)
        },
        resetForm: function () {

        },
        onFileSelected: function (event) {
            console.log(event.target.files);

        },
    },
})
