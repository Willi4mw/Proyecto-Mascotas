new Vue({
    el: '#app',
    data: {
        email: ''
    },
    methods: {
        enviarCorreo() {
            if (this.email) {
                alert('Correo enviado');
            } else {
                alert('Por favor ingrese su correo electrónico.');
            }
        },
        navigateTo(page) {
            window.location.href = page;
        }
    }
});