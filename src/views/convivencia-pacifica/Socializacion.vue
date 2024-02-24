<script setup lang="ts">
import { ref } from 'vue';
import UiParentCard from '@/components/shared/UiParentCard.vue';
import { useRouter } from "vue-router";
import { toast } from 'vue3-toastify';
// import { useNavbarStore } from '@/stores/navbar';
// const store = useNavbarStore();  
// store.setPath('/convivencia/pacifica');
const router = useRouter();

const valid = ref(false);
const dialog = ref(false);
const dialogSave = ref(false);

const form = ref({
    sie: null,
    unidadEducativa: '',
    comisionSocializacionEstudiante: false,
    comisionSocializacionDirector: false,
    comisionSocializacionMaestro: false,
    comisionSocializacionPadre: false,
    comisionSocializacionOtro: false,
    comisionSocializacionEstudianteNombre: '',
    comisionSocializacionDirectorNombre: '',
    comisionSocializacionMaestroNombre: '',
    comisionSocializacionPadreNombre: '',
    comisionSocializacionOtroNombre: '',
    comisionImplementacionEstudiante: false,
    comisionImplementacionDirector: false,
    comisionImplementacionMaestro: false,
    comisionImplementacionPadre: false,
    comisionImplementacionOtro: false,
    comisionImplementacionEstudianteNombre: '',
    comisionImplementacionDirectorNombre: '',
    comisionImplementacionMaestroNombre: '',
    comisionImplementacionPadreNombre: '',
    comisionImplementacionOtroNombre: '',
    actividad1: '',
    actividad2: '',
    actividad3: '',
    actividad4: '',
    actividad5: '',
    actividad1Fecha: '',
    actividad2Fecha: '',
    actividad3Fecha: '',
    actividad4Fecha: '',
    actividad5Fecha: '',    
    validado: false
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

const onDateInput1 = (event: any) => {
    const cleanedInput = event.target.value.replace(/\D/g, '');
    form.value.actividad1Fecha = onDateInput(cleanedInput);
};

const onDateInput2 = (event: any) => {
    const cleanedInput = event.target.value.replace(/\D/g, '');
    form.value.actividad2Fecha = onDateInput(cleanedInput);
};


const onDateInput3 = (event: any) => {
    const cleanedInput = event.target.value.replace(/\D/g, '');
    form.value.actividad3Fecha = onDateInput(cleanedInput);
};


const onDateInput4 = (event: any) => {
    const cleanedInput = event.target.value.replace(/\D/g, '');
    form.value.actividad4Fecha = onDateInput(cleanedInput);
};


const onDateInput5 = (event: any) => {
    const cleanedInput = event.target.value.replace(/\D/g, '');
    form.value.actividad5Fecha = onDateInput(cleanedInput);
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
        sie: null,
        unidadEducativa: '',
        comisionSocializacionEstudiante: false,
        comisionSocializacionDirector: false,
        comisionSocializacionMaestro: false,
        comisionSocializacionPadre: false,
        comisionSocializacionOtro: false,
        comisionSocializacionEstudianteNombre: '',
        comisionSocializacionDirectorNombre: '',
        comisionSocializacionMaestroNombre: '',
        comisionSocializacionPadreNombre: '',
        comisionSocializacionOtroNombre: '',
        comisionImplementacionEstudiante: false,
        comisionImplementacionDirector: false,
        comisionImplementacionMaestro: false,
        comisionImplementacionPadre: false,
        comisionImplementacionOtro: false,
        comisionImplementacionEstudianteNombre: '',
        comisionImplementacionDirectorNombre: '',
        comisionImplementacionMaestroNombre: '',
        comisionImplementacionPadreNombre: '',
        comisionImplementacionOtroNombre: '',
        actividad1: '',
        actividad2: '',
        actividad3: '',
        actividad4: '',
        actividad5: '',
        actividad1Fecha: '',
        actividad2Fecha: '',
        actividad3Fecha: '',
        actividad4Fecha: '',
        actividad5Fecha: '',    
        validado: false
    };
    dialogSave.value = false;
};



</script>
<template>
    <v-row>    
        <v-col cols="12" lg="12" sm="12">
            <v-card elevation="10" class="withbg">
                <v-card-item>
                    <div class="d-sm-flex align-center justify-space-between pt-sm-2">
                        <v-card-title class="text-h5">Registro de datos</v-card-title>
                    </div>
                    <v-form v-model="valid" class="">
                        <v-container>
                        <v-row>
                            <v-col cols="12" md="12">                                
                                <div class="text-h6 w-100 font-weight-regular auth-divider position-relative">
                                    <span class="bg-surface position-relative text-subtitle-1 text-grey100">Socialización</span>
                                </div>
                            </v-col>
                            <v-col cols="12" md="4">
                                <v-text-field v-model="form.sie" :rules="sieRules" :counter="8" label="SIE" required hide-details ></v-text-field>
                            </v-col>

                            <v-col cols="12" md="8" >
                                <v-text-field v-model="form.unidadEducativa" :counter="10" label="Unidad Educativa" hide-details required ></v-text-field>
                            </v-col>

                            <v-col cols="12" md="12">
                                Miembros de la comisión de socialización del PCPA ¿ Quiénes conforman la comisión de convivencia pacífica y armónica ?
                            </v-col>

                            <v-col cols="12" md="2" >
                                <v-checkbox v-model="form.comisionSocializacionEstudiante" label="Estudiantes" ></v-checkbox>
                            </v-col>

                            <v-col cols="12" md="4" >
                                <v-text-field v-model="form.comisionSocializacionEstudianteNombre" :counter="10" label="Nombre" hide-details :disabled="!form.comisionSocializacionEstudiante" ></v-text-field>
                            </v-col>

                            <v-col cols="12" md="2" >
                                <v-checkbox v-model="form.comisionSocializacionDirector" label="Director(a)" ></v-checkbox>
                            </v-col>

                            <v-col cols="12" md="4" >
                                <v-text-field v-model="form.comisionSocializacionDirectorNombre" :counter="10" label="Nombre" hide-details :disabled="!form.comisionSocializacionDirector" ></v-text-field>
                            </v-col>

                            <v-col cols="12" md="2" >
                                <v-checkbox v-model="form.comisionSocializacionMaestro" label="Maestro(a)" ></v-checkbox>
                            </v-col>

                            <v-col cols="12" md="4" >
                                <v-text-field v-model="form.comisionSocializacionMaestroNombre" :counter="10" label="Nombre" hide-details :disabled="!form.comisionSocializacionMaestro" ></v-text-field>
                            </v-col>

                            <v-col cols="12" md="2" >
                                <v-checkbox v-model="form.comisionSocializacionPadre" label="Padres/Matres" ></v-checkbox>
                            </v-col>

                            <v-col cols="12" md="4" >
                                <v-text-field v-model="form.comisionSocializacionPadreNombre" :counter="10" label="Nombre" hide-details :disabled="!form.comisionSocializacionPadre" ></v-text-field>
                            </v-col>

                            <v-col cols="12" md="2" >
                                <v-checkbox v-model="form.comisionSocializacionOtro" label="Otros" ></v-checkbox>
                            </v-col>

                            <v-col cols="12" md="4" >
                                <v-text-field v-model="form.comisionSocializacionOtroNombre" :counter="10" label="Nombre" hide-details :disabled="!form.comisionSocializacionOtro" ></v-text-field>
                            </v-col>

                            <v-col cols="12" md="12">                                
                                <div class="text-h6 w-100 font-weight-regular auth-divider position-relative">
                                    <span class="bg-surface position-relative text-subtitle-1 text-grey100">Implementación</span>
                                </div>
                            </v-col>

                            <v-col cols="12" md="12">
                                Miembros de la comisión de implementación del PCPA ¿ Quiénes conforman la comisión de convivencia pacífica y armónica ?
                            </v-col>

                            <v-col cols="12" md="2" >
                                <v-checkbox v-model="form.comisionImplementacionEstudiante" label="Estudiantes" ></v-checkbox>
                            </v-col>

                            <v-col cols="12" md="4" >
                                <v-text-field v-model="form.comisionImplementacionEstudianteNombre" :counter="10" label="Nombre" hide-details :disabled="!form.comisionImplementacionEstudiante" ></v-text-field>
                            </v-col>

                            <v-col cols="12" md="2" >
                                <v-checkbox v-model="form.comisionImplementacionDirector" label="Director(a)" ></v-checkbox>
                            </v-col>

                            <v-col cols="12" md="4" >
                                <v-text-field v-model="form.comisionImplementacionDirectorNombre" :counter="10" label="Nombre" hide-details :disabled="!form.comisionImplementacionDirector" ></v-text-field>
                            </v-col>

                            <v-col cols="12" md="2" >
                                <v-checkbox v-model="form.comisionImplementacionMaestro" label="Maestro(a)" ></v-checkbox>
                            </v-col>

                            <v-col cols="12" md="4" >
                                <v-text-field v-model="form.comisionImplementacionMaestroNombre" :counter="10" label="Nombre" hide-details :disabled="!form.comisionImplementacionMaestro" ></v-text-field>
                            </v-col>

                            <v-col cols="12" md="2" >
                                <v-checkbox v-model="form.comisionImplementacionPadre" label="Padres/Matres" ></v-checkbox>
                            </v-col>

                            <v-col cols="12" md="4" >
                                <v-text-field v-model="form.comisionImplementacionPadreNombre" :counter="10" label="Nombre" hide-details :disabled="!form.comisionImplementacionPadre" ></v-text-field>
                            </v-col>

                            <v-col cols="12" md="2" >
                                <v-checkbox v-model="form.comisionImplementacionOtro" label="Otros" ></v-checkbox>
                            </v-col>

                            <v-col cols="12" md="4" >
                                <v-text-field v-model="form.comisionImplementacionOtroNombre" :counter="10" label="Nombre" hide-details :disabled="!form.comisionImplementacionOtro" ></v-text-field>
                            </v-col>

                            <v-col cols="12" md="12" >
                                Actividades del Plan de Convivencia Pacífica y Armónica ejecutadas
                            </v-col>

                            <v-col cols="12" md="2" >
                                Actividad 1
                            </v-col>

                            <v-col cols="12" md="6" >
                                <v-text-field v-model="form.actividad1" label="Nombre" hide-details required></v-text-field>
                            </v-col>

                            <v-col cols="12" md="4" >
                                <v-text-field v-model="form.actividad1Fecha" label="Fecha"  @input="onDateInput1" placeholder="DD/MM/AAAA" hide-details required></v-text-field>
                            </v-col>

                            <v-col cols="12" md="2" >
                                Actividad 2
                            </v-col>

                            <v-col cols="12" md="6" >
                                <v-text-field v-model="form.actividad2" label="Nombre" hide-details required></v-text-field>
                            </v-col>

                            <v-col cols="12" md="4" >
                                <v-text-field v-model="form.actividad2Fecha" label="Fecha"  @input="onDateInput2" placeholder="DD/MM/AAAA" hide-details required></v-text-field>
                            </v-col>

                            <v-col cols="12" md="2" >
                                Actividad 3
                            </v-col>

                            <v-col cols="12" md="6" >
                                <v-text-field v-model="form.actividad3" label="Nombre" hide-details required></v-text-field>
                            </v-col>

                            <v-col cols="12" md="4" >
                                <v-text-field v-model="form.actividad3Fecha" label="Fecha"  @input="onDateInput3" placeholder="DD/MM/AAAA" hide-details required></v-text-field>
                            </v-col>

                            <v-col cols="12" md="2" >
                                Actividad 4
                            </v-col>

                            <v-col cols="12" md="6" >
                                <v-text-field v-model="form.actividad4" label="Nombre" hide-details required></v-text-field>
                            </v-col>

                            <v-col cols="12" md="4" >
                                <v-text-field v-model="form.actividad4Fecha" label="Fecha"  @input="onDateInput4" placeholder="DD/MM/AAAA" hide-details required></v-text-field>
                            </v-col>

                            <v-col cols="12" md="2" >
                                Actividad 5
                            </v-col>

                            <v-col cols="12" md="6" >
                                <v-text-field v-model="form.actividad5" label="Nombre" hide-details required></v-text-field>
                            </v-col>

                            <v-col cols="12" md="4" >
                                <v-text-field v-model="form.actividad5Fecha" label="Fecha"  @input="onDateInput5" placeholder="DD/MM/AAAA" hide-details required></v-text-field>
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
