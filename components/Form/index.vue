<template>
  <v-row justify="center">
    <v-card light min-width="300px" >
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-card-title>
          <span class="headline">Reserva servicio</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="12" md="6" xs="12">
                <v-text-field
                  v-model="name"
                  :counter="25"
                  :rules="nameRules"
                  label="Nombre"
                  required
                ></v-text-field>
              </v-col>

              <v-col cols="12" sm="12" md="6" xs="12">
                <v-text-field
                  v-model="lastName"
                  :counter="25"
                  :rules="lastNameRules"
                  label="Apellido"
                  required
                ></v-text-field>
              </v-col>

              <v-col cols="12" sm="12" md="6" xs="12">
                <v-text-field
                  v-model="email"
                  :rules="emailRules"
                  type="email"
                  prepend-icon="mdi-email"
                  label="Correo electronico"
                  required
                ></v-text-field>
              </v-col>

              <v-col cols="12" sm="12" md="6" xs="12">
                <v-text-field
                  v-model="phone"
                  :rules="phoneRules"
                  type="number"
                  prepend-icon="mdi-phone"
                  prefix="+58"
                  label="Telefono"
                  class="inputNumber"
                  required
                ></v-text-field>
              </v-col>

              <v-col cols="12" sm="12" md="6" xs="12">
                <v-select
                  filled
                  hide-details
                  :items="seats"
                  menu-props="auto"
                  prepend-inner-icon="mdi-account-group"
                  :rules="companionsRules"
                  single-line
                  shaped
                  label="Reservar Asientos"
                  v-model="reservedSeating"
                  light
                ></v-select>
              </v-col>

              <v-col cols='12'>
                <v-radio-group v-model="scheduleService" mandatory>
                    <v-row class="my-2">
                      <v-radio
                        :disabled="totalReservationsFirstService === 100 ? true : false "
                        label="1er Servicio"
                        value="1er Servicio - 9:00am"
                      />
                      <v-chip class="mx-4" color="indigo" text-color="white">
                        <v-avatar left>
                          <v-icon>mdi-alarm</v-icon>
                        </v-avatar>
                        9:00am a 10:00am
                      </v-chip>
                    </v-row>

                    <v-row class="my-2">
                      <v-radio
                        :disabled="totalReservationsSecondService === 100 ? true : false "
                        label="2do Servicio"
                        value="2do Servicio - 11:00am"
                      />
                      <v-chip class="mx-4" color="indigo" text-color="white">
                        <v-avatar left>
                          <v-icon>mdi-alarm</v-icon>
                        </v-avatar>
                        11:00am a 12:00pm
                      </v-chip>
                    </v-row>
                </v-radio-group>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>

        <v-card-actions>
          <v-spacer />
          <v-btn color="blue darken-1" text @click="reserve()">
            Reservar
          </v-btn>
        </v-card-actions>
      </v-form>
    </v-card>
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
import { AddReservation } from '~/services/GoogleSheetApi/index'
import { TotalReservationsUpdateIncrement } from '~/services/firebase/index'
import { db } from '~/services/firebase/index'
import formConfig from './formConfig'

export default {
  name: 'Form',
  props: {
    totalReservationsFirstService: {
      type: Number,
    },
    totalReservationsSecondService: {
      type: Number,
    }
  },
  data: () => ({
    ...formConfig,
    reservedSeating: 0,
    seats: [1,2,3,4,5,6,7,8,9,10],
    scheduleService: '',
  }),

  methods: {
    reserve () {
      if (this.$refs.form.validate()) {
        const date = new Date();
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const dateLocal = date.toLocaleDateString("es-ES", options)

        AddReservation([[
          dateLocal,
          `${this.name} ${this.lastName}`,
          this.phone,
          this.email,
          this.reservedSeating,
          this.scheduleService,
        ]]).then(() => TotalReservationsUpdateIncrement(this.scheduleService, this.reservedSeating))

        this.$refs.form.reset();
        this.$router.push({ path: '/reservacion-exitosa' });
      } else {
        console.log('Error en el formulario')
      }
    }
  },
}
</script>