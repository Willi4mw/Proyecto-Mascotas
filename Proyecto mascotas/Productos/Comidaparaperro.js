const store = new Vuex.Store({
    state: {
        carrito: JSON.parse(localStorage.getItem('carrito')) || []
    },
    mutations: {
        agregarAlCarrito(state, producto) {
            state.carrito.push(producto);
            localStorage.setItem('carrito', JSON.stringify(state.carrito));
        },
        eliminarDelCarrito(state, index) {
            state.carrito.splice(index, 1);
            localStorage.setItem('carrito', JSON.stringify(state.carrito));
        }
    },
    getters: {
        totalCarrito(state) {
            return state.carrito.reduce((total, producto) => total + producto.precio, 0);
        }
    }
});

new Vue({
    el: '#app',
    store,
    data() {
        return {
            reseñas: [
                { opinion: "A mi perro le encantó esta comida.", usuario: "DogLover98" },
                { opinion: "Buen producto, pero caro.", usuario: "Cliente123" }
            ],
            nuevaReseña: ''
        };
    },
    computed: {
        carrito() {
            return this.$store.state.carrito;
        },
        totalCarrito() {
            return this.$store.getters.totalCarrito;
        }
    },
    methods: {
        agregarAlCarrito(producto) {
            this.$store.commit('agregarAlCarrito', producto);
        },
        eliminarDelCarrito(index) {
            this.$store.commit('eliminarDelCarrito', index);
        },
        agregarReseña() {
            if (this.nuevaReseña.trim()) {
                this.reseñas.push({ opinion: this.nuevaReseña, usuario: "Usuario Anónimo" });
                this.nuevaReseña = '';
            } else {
                alert("Por favor escribe una reseña.");
            }
        }
    }
});