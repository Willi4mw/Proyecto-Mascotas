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
      },
      cargarCarrito(state, carrito) {
        state.carrito = carrito;
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
        busqueda: '',
        productos: [
          { id: 1, nombre: 'Comida para gato premium', precio: 50.00 },
          { id: 2, nombre: 'Comida para gato estándar', precio: 30.00 }
        ],
        reseñas: [
          { opinion: "No le gustó a mi gato.", usuario: "AmantePerruno2772" },
          { opinion: "Buen producto, demasiado caro.", usuario: "IloveAnimales" },
          { opinion: "Excelente producto, le encanta a mi gato.", usuario: "Gatolover" }
        ],
        nuevaReseña: ''
      };
    },
    computed: {
      productosFiltrados() {
        return this.productos.filter(producto =>
          producto.nombre.toLowerCase().includes(this.busqueda.toLowerCase())
        );
      },
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
    },
    created() {
      const reseñasGuardadas = localStorage.getItem('reseñasComidaGato');
      if (reseñasGuardadas) {
        this.reseñas = JSON.parse(reseñasGuardadas);
      }
    },
    mounted() {
      const carritoGuardado = JSON.parse(localStorage.getItem('carrito'));
      if (Array.isArray(carritoGuardado) && carritoGuardado.length > 0) {
        this.$store.commit('cargarCarrito', carritoGuardado);
      }
    }
  });  