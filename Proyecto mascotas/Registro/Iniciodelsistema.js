new Vue({
    el: '#app',
    data: {
        usuario: '',
        contraseña: '',
        recordar: false
    },
    methods: {
        login() {
            if (this.usuario && this.contraseña) {
                // Guardar el nombre de usuario en localStorage
                localStorage.setItem('usuario', this.usuario);
                localStorage.setItem('isLoggedIn', 'true'); // Guardar el estado de sesión
                alert(`Bienvenido, ${this.usuario}`);
                this.navigateTo('../Paginaprincipalp.html');
            } else {
                alert('Por favor ingrese todos los campos.');
            }
        },
        navigateTo(page) {
            window.location.href = page;
        }
    }
});