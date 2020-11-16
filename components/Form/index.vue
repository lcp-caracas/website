<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <v-card dark>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-card-title>
            <span class="headline">Reserva {{ scheduleService }} servicio</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12" sm="6" md="6">
                  <v-text-field
                    v-model="name"
                    :counter="25"
                    :rules="nameRules"
                    label="Nombre"
                    required
                  ></v-text-field>
                </v-col>

                <v-col cols="12" sm="6" md="6">
                  <v-text-field
                    v-model="lastName"
                    :counter="25"
                    :rules="lastNameRules"
                    label="Apellido"
                    required
                  ></v-text-field>
                </v-col>

                <v-col cols="12">
                  <v-text-field
                    v-model="email"
                    :rules="emailRules"
                    type="email"
                    prepend-icon="mdi-email"
                    label="Correo electronico"
                    required
                  ></v-text-field>
                </v-col>

                <v-col cols="12">
                  <v-text-field
                    v-model="phone"
                    type="number"
                    prepend-icon="mdi-phone"
                    prefix="+58"
                    label="Telefono"
                    class="inputNumber"
                  ></v-text-field>
                </v-col>

                <v-col cols="12">
                  <v-text-field
                    prepend-inner-icon="mdi-account-group"
                    :value="companionsComputed"
                    :rules="companionsRules"
                    filled
                    readonly
                    label="Asientos reservados"
                    shaped
                  ></v-text-field>
                </v-col>

                <v-col cols="12">
                  <v-text-field
                    prepend-inner-icon="mdi-ticket"
                    :value="asientosSeleccionados"
                    :rules="asientosRules"
                    filled
                    readonly
                    label="Tickets de Asientos"
                    shaped
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="cancel">
              Cancelar
            </v-btn>

            <v-btn color="blue darken-1" text @click="reserve()">
              Reservar
            </v-btn>
          </v-card-actions>
        </v-form>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<style>
/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: rgb(77, 136, 247);
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: rgb(96, 152, 255);
}

.inputNumber
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;

}

input[type=number] {
  -moz-appearance: textfield;
}
</style>

<script>
import { AddReservations, TotalReservationsUpdateIncrement } from '~/services/firebase/index'
import formConfig from './formConfig'

export default {
  name: 'Form',
  props: {
    dialog: {
      type: Boolean,
      required: true,
      default: false
    },
    asientosSeleccionados: {
      type: Array,
      requried: true,
      default: []
    },
    scheduleService: {
      type: String,
      required: true,
      default: 'primer'
    }
  },
  data: () => ({
    ...formConfig,
  }),

  computed: {
    totalReservationsToSubmit() {
      return this.asientosSeleccionados.length + 1
    },

    companionsComputed() {
      return this.asientosSeleccionados.length
    },
  },

  methods: {
    reserve () {
      const ticketsSeats = this.asientosSeleccionados

      if (this.$refs.form.validate()) {
        AddReservations(
          this.name,
          this.lastName,
          this.email,
          this.phone,
          this.companionsComputed,
          ticketsSeats,
          this.scheduleService,
          this.asientosSeleccionados.length
        )
        .then(() => this.$emit('new-reservation'))

        this.$refs.form.reset();
        this.$emit('close-dialog')
        this.$router.push({ path: '/reservacion-exitosa' });
      } else {
        console.log('Error en el formulario')
      }
    },

    cancel () {
      this.$emit('close-dialog')
    },
  },
}
</script>