new Vue({
    el: '#app',
    data: {
        nombre: '',
        tipoDocumento: '',
        cedula: '',
        nacimiento: '',
        sexo: '',
        email: '',
        emailConfirm: '',
        celular: '',
        mascotas: '',
        contraseña: '',
        contraseñaConfirm: ''
    },
    methods: {
        register() {
            if (this.validarFormulario()) {
                alert('Registro exitoso');
                this.navigateTo('Agradecimiento.html');
            } else {
                alert('Por favor, complete todos los campos correctamente.');
            }
        },
        validarFormulario() {
            const camposLlenos = this.nombre && this.tipoDocumento && this.cedula &&
                this.nacimiento && this.sexo && this.email && this.emailConfirm &&
                this.celular && this.mascotas && this.contraseña && this.contraseñaConfirm;

            const contraseñasCoinciden = this.contraseña === this.contraseñaConfirm;
            const correosCoinciden = this.email === this.emailConfirm;

            return camposLlenos && contraseñasCoinciden && correosCoinciden;
        },
        navigateTo(url) {
            window.location.href = url;
        }
    }
});