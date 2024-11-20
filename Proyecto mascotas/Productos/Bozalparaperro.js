const store = new Vuex.Store({
    state: {
      carrito: JSON.parse(localStorage.getItem('carrito')) || []  // Asegura que cargue del localStorage si está disponible
    },
    mutations: {
      agregarAlCarrito(state, producto) {
        state.carrito.push(producto);
        localStorage.setItem('carrito', JSON.stringify(state.carrito)); // Actualiza localStorage cada vez que se modifica
      },
      eliminarDelCarrito(state, index) {
        state.carrito.splice(index, 1);
        localStorage.setItem('carrito', JSON.stringify(state.carrito)); // Guarda el estado actualizado en localStorage
      },
      cargarCarrito(state, carrito) {  // Nueva mutación para cargar desde el localStorage
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
          { id: 1, nombre: 'Bozal para perro', precio: 58.63 }, 
          { id: 2, nombre: 'Correa para perro', precio: 30000 }
        ],
        reseñas: [
          { opinion: "Muy buen producto", usuario: "Juan" },
          { opinion: "Calidad aceptable", usuario: "Ana" }
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
        if (this.nuevaReseña) {
          this.reseñas.push({
            opinion: this.nuevaReseña,
            usuario: "Usuario Anónimo"
          });
          this.nuevaReseña = '';
        }
      }
    },
    mounted() {
      const carritoGuardado = JSON.parse(localStorage.getItem('carrito'));
      if (Array.isArray(carritoGuardado) && carritoGuardado.length > 0) {
        this.$store.commit('cargarCarrito', carritoGuardado); // Carga el carrito si ya hay datos guardados
      }
    }
  });  