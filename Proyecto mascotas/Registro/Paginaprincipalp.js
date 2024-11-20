new Vue({
    el: '#app',
    data: {
        isLoggedIn: false
    },
    methods: {
        logout() {
            // Eliminar el usuario de localStorage
            localStorage.removeItem('usuario');
            localStorage.removeItem('isLoggedIn'); // También eliminar el estado de sesión
            this.isLoggedIn = false;
            alert('Has cerrado sesión.');
            window.location.href = 'Registro/Iniciodelsistema.html'; // Redirige a la página de inicio de sesión
        }
    },
    mounted() {
        // Verificar el estado de inicio de sesión al cargar la página
        const isLoggedIn = localStorage.getItem('isLoggedIn');
        this.isLoggedIn = !!isLoggedIn;
    }
});