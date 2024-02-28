<script setup lang="ts">
import { ref } from 'vue';
import UiParentCard from '@/components/shared/UiParentCard.vue';
import { useRouter } from "vue-router";
import { toast } from 'vue3-toastify';
import { VDataTable } from 'vuetify/labs/VDataTable';
// import { useNavbarStore } from '@/stores/navbar';
// const store = useNavbarStore();  
// store.setPath('/convivencia/pacifica');
const router = useRouter();

const valid = ref(false);
const dialog = ref(false);
const list = ref();
const dialogSave = ref(false);

const formSearch = ref({
    codigoRude: '',
    codigoRda: '',
    usuario: ''
});

const form = ref({
    numeroCaso: '',
    fechaAgresion: null,
    fechaComunicacion: null,
    codigoSie: null,
    departamento: null,
    municipio: null,
    nivel: null,
    unidadEducativa: null,
    director: null,
    victimaPaterno: null,
    victimaMaterno: null,
    victimaNombre: null,
    victimaEdad: null,
    victimaSexo: null,
    victimaCodigoRude: null,
    victimaCarnetIdentidad: null,
    victimaComplemento: null,
    agresorPaterno: null,
    agresorMaterno: null,
    agresorNombre: null,
    agresorEdad: null,
    agresorSexo: null,
    agresorCodigoRude: null,
    agresorCarnetIdentidad: null,
    agresorComplemento: null,
    tipoViolencia: null,
    descripcionHechoDano: null,
    accionRealizada: null,
    instanciaReferida: null,
    fechaComunicacionDistrito: null
});

const sieRules = [
    (value: any) => {
        if (value) return true
        return 'El SIE es requerido'
    },
    (value: any) => {
        if (value?.length === 8) return true
        return 'El código SIE requiere 8 dígitos.'
    },
];

const save = () => {
    console.log(form.value);
    toast.info('Registro guardado correctamente', {
        autoClose: 3000,
        position: toast.POSITION.TOP_RIGHT,
    });
    dialog.value = false;  
    dialogSave.value = true;   
};

const reset = () => {
    form.value = {
        numeroCaso: '',
        fechaAgresion: null,
        fechaComunicacion: null,
        codigoSie: null,
        departamento: null,
        municipio: null,
        nivel: null,
        unidadEducativa: null,
        director: null,
        victimaPaterno: null,
        victimaMaterno: null,
        victimaNombre: null,
        victimaEdad: null,
        victimaSexo: null,
        victimaCodigoRude: null,
        victimaCarnetIdentidad: null,
        victimaComplemento: null,
        agresorPaterno: null,
        agresorMaterno: null,
        agresorNombre: null,
        agresorEdad: null,
        agresorSexo: null,
        agresorCodigoRude: null,
        agresorCarnetIdentidad: null,
        agresorComplemento: null,
        tipoViolencia: null,
        descripcionHechoDano: null,
        accionRealizada: null,
        instanciaReferida: null,
        fechaComunicacionDistrito: null
    };
    dialogSave.value = false;
};

const onDateInput1 = (event: any) => {
    const cleanedInput = event.target.value.replace(/\D/g, '');
    form.value.fechaAgresion = onDateInput(cleanedInput);
};

const onDateInput2 = (event: any) => {
    const cleanedInput = event.target.value.replace(/\D/g, '');
    form.value.fechaComunicacion = onDateInput(cleanedInput);
};

const onDateInput3 = (event: any) => {
    const cleanedInput = event.target.value.replace(/\D/g, '');
    form.value.fechaComunicacionDistrito = onDateInput(cleanedInput);
};

const onDateInput = (cleanedInput: any) => {
    if (cleanedInput.length <= 2) {
        return cleanedInput;
    } else if (cleanedInput.length <= 4) {
        return cleanedInput.slice(0, 2) + '/' + cleanedInput.slice(2);
    } else if (cleanedInput.length <= 8) {
        return cleanedInput.slice(0, 2) + '/' + cleanedInput.slice(2, 4) + '/' + cleanedInput.slice(4, 8);
    } else {
        return cleanedInput.slice(0, 2) + '/' + cleanedInput.slice(2, 4) + '/' + cleanedInput.slice(4, 8);
    }
};

const searchVictimaCodigoRude = () => {
    list.value = plants;
    console.log(formSearch);
};

const searchVictimaCodigoRda = () => {
    list.value = plants;
    console.log(formSearch);
};

const searchVictimaUsuario = () => {
    list.value = plants;
    console.log(formSearch);
};

const viewItem = (item: any) => {
    console.log(item);
};

const violenciaTipo = [
    { id: 1, name: 'Física' },  
    { id: 2, name: 'Psicológica' },  
    { id: 3, name: 'Sexual' }
]

const headers = [
    { title: 'Plant', align: 'start', sortable: false, key: 'name' },
    { title: 'Light', align: 'end', key: 'light' },
    { title: 'Height', align: 'end', key: 'height' },
    { title: 'Pet Friendly', align: 'end', key: 'petFriendly' },
    { title: 'Price ($)', align: 'end', key: 'price' },
    { title: 'Actions', key: 'actions', sortable: false, align:'center' },
];

const plants = [
      {
        id: 1,
        name: 'Fern',
        light: 'Low',
        height: '20cm',
        petFriendly: 'Yes',
        price: 20,
      },
      {
        id: 1,
        name: 'Snake Plant',
        light: 'Low',
        height: '50cm',
        petFriendly: 'No',
        price: 35,
      },
      {
        id: 1,
        name: 'Monstera',
        light: 'Medium',
        height: '60cm',
        petFriendly: 'No',
        price: 50,
      },
      {
        id: 1,
        name: 'Pothos',
        light: 'Low to medium',
        height: '40cm',
        petFriendly: 'Yes',
        price: 25,
      },
      {
        id: 1,
        name: 'ZZ Plant',
        light: 'Low to medium',
        height: '90cm',
        petFriendly: 'Yes',
        price: 30,
      },
      {
        id: 1,
        name: 'Pothos',
        light: 'Low to medium',
        height: '40cm',
        petFriendly: 'Yes',
        price: 25,
      },
      {
        id: 1,
        name: 'ZZ Plant',
        light: 'Low to medium',
        height: '90cm',
        petFriendly: 'Yes',
        price: 30,
      }
];

</script>
<template>
    <v-row>    
        <v-col cols="12" lg="12" sm="12">
            <v-card elevation="10" class="withbg">
                <v-card-item>
                    <div class="d-sm-flex align-center justify-space-between pt-sm-2">
                        <v-card-title class="text-h5">Búsqueda de comunicación</v-card-title>
                    </div>
                    <v-form v-model="valid" class="">
                        <v-container>
                        <v-row>
                            <v-col cols="12" md="4">
                                <v-text-field v-model="formSearch.codigoRude" density="compact" variant="solo" label="Código RUDE" append-inner-icon="mdi-magnify" single-line hide-details  @click:append-inner="searchVictimaCodigoRude" ></v-text-field>
                            </v-col>
                            <v-col cols="12" md="4">
                                <v-text-field v-model="formSearch.codigoRda" density="compact" variant="solo" label="Código RDA" append-inner-icon="mdi-magnify" single-line hide-details  @click:append-inner="searchVictimaCodigoRda" ></v-text-field>
                            </v-col>
                            <v-col cols="12" md="4">
                                <v-text-field v-model="formSearch.usuario" density="compact" variant="solo" label="Usuario" append-inner-icon="mdi-magnify" single-line hide-details  @click:append-inner="searchVictimaUsuario" ></v-text-field>
                            </v-col>
                        </v-row>
                        </v-container>
                    </v-form>
                </v-card-item>
            </v-card>
        </v-col>
    </v-row>
    <v-row v-if="list">    
        <v-col cols="12" lg="12" sm="12">
            <v-card elevation="10" class="withbg">
                <v-card-item>
                    <div class="d-sm-flex align-center justify-space-between pt-sm-2 mb-3">
                        <v-card-title class="text-h5">Casos</v-card-title>
                    </div>
                    <v-data-table :headers="headers" :items-per-page="5" :items="list" density="comfortable" item-key="name">
                        <template v-slot:item.actions="{ item }">
                            <v-icon size="small" class="me-2" @click="viewItem(item)">mdi-eye</v-icon>
                        </template>
                    </v-data-table>
                </v-card-item>
            </v-card>
        </v-col>
    </v-row>
    <v-row>    
        <v-col cols="12" lg="12" sm="12">
            <v-card elevation="10" class="withbg">
                <v-card-item>
                    <div class="d-sm-flex align-center justify-space-between pt-sm-2">
                        <v-card-title class="text-h5">Registro de la comunicación </v-card-title>
                    </div>
                    <v-form v-model="valid" class="">
                        <v-container>
                        <v-row>
                            <v-col cols="12" md="12">                                
                                <div class="text-h6 w-100 font-weight-regular auth-divider position-relative">
                                    <span class="bg-surface position-relative text-subtitle-1 text-grey100">Datos de la Unidad Educativa</span>
                                </div>
                            </v-col>
                            <v-col cols="12" md="4">
                                <v-text-field v-model="form.numeroCaso" :rules="sieRules" :counter="8" label="Número de caso" required hide-details ></v-text-field>
                            </v-col>

                            <v-col cols="12" md="4" >
                                <v-text-field v-model="form.fechaAgresion" label="Fecha de la agresión" @input="onDateInput1" placeholder="DD/MM/AAAA" hide-details required></v-text-field>
                            </v-col>

                            <v-col cols="12" md="4" >
                                <v-text-field v-model="form.fechaComunicacion" label="Fecha de comunicación" @input="onDateInput2" placeholder="DD/MM/AAAA" hide-details required></v-text-field>
                            </v-col>
                            
                            <v-col cols="12" md="4" >
                                <v-text-field v-model="form.codigoSie" label="Código SIE" required></v-text-field>
                            </v-col>
                            
                            <v-col cols="12" md="4" >
                                <v-text-field v-model="form.departamento" label="Departamento" required></v-text-field>
                            </v-col>
                            
                            <v-col cols="12" md="4" >
                                <v-text-field v-model="form.municipio" label="Municipio" required></v-text-field>
                            </v-col>
                            
                            <v-col cols="12" md="4" >
                                <v-text-field v-model="form.nivel" label="Nivel" required></v-text-field>
                            </v-col>
                            
                            <v-col cols="12" md="4" >
                                <v-text-field v-model="form.unidadEducativa" label="Nombre de la Unidad Educativa" required></v-text-field>
                            </v-col>
                            
                            <v-col cols="12" md="4" >
                                <v-text-field v-model="form.director" label="Nombre del director(a)" required></v-text-field>
                            </v-col>
                            
                            <v-col cols="12" md="12">
                                <div class="text-h6 w-100 font-weight-regular auth-divider position-relative">
                                    <span class="bg-surface position-relative text-subtitle-1 text-grey100">Datos de la víctima</span>
                                </div>
                            </v-col>

                            <v-col cols="12" md="3" >
                                <v-text-field v-model="form.victimaPaterno"  label="Apellido paterno" hide-details required></v-text-field>
                            </v-col>

                            <v-col cols="12" md="3" >
                                <v-text-field v-model="form.victimaMaterno" label="Apellido materno" hide-details required></v-text-field>
                            </v-col>

                            <v-col cols="12" md="3">
                                <v-text-field v-model="form.victimaNombre" label="Nombre(s)" hide-details required ></v-text-field>
                            </v-col>

                            <v-col cols="12" md="3" >
                                <v-text-field v-model="form.victimaEdad"  label="Edad" hide-details required></v-text-field>
                            </v-col>

                            <v-col cols="12" md="3" >
                                <v-text-field v-model="form.victimaSexo" label="Sexo" hide-details required></v-text-field>
                            </v-col>

                            <v-col cols="12" md="3">
                                <v-text-field v-model="form.victimaCodigoRude" label="Código RUDE" hide-details required ></v-text-field>
                            </v-col>

                            <v-col cols="12" md="3" >
                                <v-text-field v-model="form.victimaCarnetIdentidad"  label="Carnet de Identidad" hide-details required></v-text-field>
                            </v-col>

                            <v-col cols="12" md="3" >
                                <v-text-field v-model="form.victimaComplemento" label="Complemento" hide-details required></v-text-field>
                            </v-col>

                            <v-col cols="12" md="12">
                                <div class="text-h6 w-100 font-weight-regular auth-divider position-relative">
                                    <span class="bg-surface position-relative text-subtitle-1 text-grey100">Datos del(a) agresor(a)</span>
                                </div>
                            </v-col>

                            <v-col cols="12" md="3" >
                                <v-text-field v-model="form.agresorPaterno"  label="Apellido paterno" hide-details required></v-text-field>
                            </v-col>

                            <v-col cols="12" md="3" >
                                <v-text-field v-model="form.agresorMaterno" label="Apellido materno" hide-details required></v-text-field>
                            </v-col>

                            <v-col cols="12" md="3">
                                <v-text-field v-model="form.agresorNombre" label="Nombre(s)" hide-details required ></v-text-field>
                            </v-col>

                            <v-col cols="12" md="3" >
                                <v-text-field v-model="form.agresorEdad"  label="Edad" hide-details required></v-text-field>
                            </v-col>

                            <v-col cols="12" md="3" >
                                <v-text-field v-model="form.agresorSexo" label="Sexo" hide-details required></v-text-field>
                            </v-col>

                            <v-col cols="12" md="3">
                                <v-text-field v-model="form.agresorCodigoRude" label="Código RUDE" hide-details required ></v-text-field>
                            </v-col>

                            <v-col cols="12" md="3" >
                                <v-text-field v-model="form.agresorCarnetIdentidad"  label="Carnet de Identidad" hide-details required></v-text-field>
                            </v-col>

                            <v-col cols="12" md="3" >
                                <v-text-field v-model="form.agresorComplemento" label="Complemento" hide-details required></v-text-field>
                            </v-col>

                            <v-col cols="12" md="12">
                                <div class="text-h6 w-100 font-weight-regular auth-divider position-relative">
                                    <span class="bg-surface position-relative text-subtitle-1 text-grey100">Datos del caso</span>
                                </div>
                            </v-col>

                            <v-col cols="12" md="4" >
                                <v-select v-model="form.tipoViolencia" :items="violenciaTipo" item-title="name" item-value="id" label="Tipo de violencia" return-object></v-select>
                            </v-col>

                            <v-col cols="12" md="8" >
                                <v-text-field v-model="form.descripcionHechoDano" label="Descripción del hecho y daño" hide-details required></v-text-field>
                            </v-col>

                            <v-col cols="12" md="4" >
                                <v-text-field v-model="form.accionRealizada" label="Acciones que se realizaron" hide-details required></v-text-field>
                            </v-col>

                            <v-col cols="12" md="4" >
                                <v-text-field v-model="form.instanciaReferida" label="Instancias a las que se refirió" hide-details required></v-text-field>
                            </v-col>

                            <v-col cols="12" md="4" >
                                <v-text-field v-model="form.fechaComunicacionDistrito" label="Fecha de comunicación a la Dirección Distrital" @input="onDateInput3" placeholder="DD/MM/AAAA" hide-details required></v-text-field>
                            </v-col>

                            <v-col cols="12" md="12" >                                
                                <v-dialog v-model="dialog" persistent width="auto" >
                                    <template v-slot:activator="{ props }">                                    
                                        <v-btn size="large" rounded="pill" color="primary" class="rounded-pill" block type="button" flat v-bind="props">Registrar</v-btn>
                                    </template>
                                    <v-card>
                                        <v-card-title class="text-h5">
                                        Confirmar
                                        </v-card-title>
                                        <v-card-text>¿ Esta seguro de guardar el registro ?</v-card-text>
                                        <v-card-actions>
                                            <v-spacer></v-spacer>
                                            <v-btn color="green-darken-1" variant="text" @click="dialog = false"> Cancelar </v-btn>
                                            <v-btn color="green-darken-1" variant="text" @click="save"> Aceptar </v-btn>
                                        </v-card-actions>
                                    </v-card>
                                </v-dialog>
                            </v-col>
                        </v-row>
                        </v-container>
                    </v-form>
                </v-card-item>
            </v-card>
        </v-col>
    </v-row>
                                    
    <v-dialog v-model="dialogSave" persistent width="auto" >
        <v-card>
            <v-card-title class="text-h5">
            Mensaje
            </v-card-title>
            <v-card-text>¿ Nuevo registro ?</v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="green-darken-1" variant="text" @click="router.push('/convivencia/pacifica')"> NO </v-btn>
                <v-btn color="green-darken-1" variant="text" @click="reset"> SI </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>
