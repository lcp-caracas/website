export default {
  // dialog: false,
  valid: true,
  // companions: null,
  companionsRules: [
    v => !!v || 'Debe seleccionar algun asiento',
  ],
  asientosRules: [
    v => !!v || 'Debe seleccionar algun asiento',
  ],
  phone: '',
  phoneRules: [
    v => (v && v.length <= 20) || 'El numero de telefono no puede tener mas 20 caracteres',
  ],
  name: '',
  nameRules: [
    v => !!v || 'El nombre es requerido',
    v => (v && v.length <= 25) || 'El nombre no puede tener mas de 25 caracteres',
  ],
  lastName: '',
  lastNameRules: [
    v => !!v || 'El apellido es requerido',
    v => (v && v.length <= 25) || 'El apellido no puede tener mas de 25 caracteres',
  ],
  email: '',
  emailRules: [
    v => !!v || 'El correo es requerido',
    v => /.+@.+\..+/.test(v) || 'El correo debe ser valido',
  ],
}