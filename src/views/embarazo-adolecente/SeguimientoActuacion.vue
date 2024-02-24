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
    codigoRude: '',
    estudiante: '',
    semanaGestacion: null,
    numeroEmbarazo: null,
    fechaEstimadaParto: null,
    recibeControlPrenatal: false,
    requiereBajaMedica: false,
    requierePermisoControl: false,
    requiereCuidadoPostparto: false,
    consideracionActividades: false,
    fechaBajaPrenatal: null,
    fechaConclusionPostnatal: null,
    fechaRetorno: null,
    edadProgenitor: null,
    progenitorMismaUnidadEducativa: false,
    nacidoVivo: false,
    progenitorConoceEmbarazo: false,
    bajaMedica: false,
    permisoControlPrenatal: false,
    fechaInicioBajaPrenatal: null,
    fechaFinBajaPostnatal: null,
    director: '',
    accionesSeguimiento: false
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
    form.value.fechaEstimadaParto = onDateInput(cleanedInput);
};

const onDateInput2 = (event: any) => {
    const cleanedInput = event.target.value.replace(/\D/g, '');
    form.value.fechaBajaPrenatal = onDateInput(cleanedInput);
};

const onDateInput3 = (event: any) => {
    const cleanedInput = event.target.value.replace(/\D/g, '');
    form.value.fechaConclusionPostnatal = onDateInput(cleanedInput);
};

const onDateInput4 = (event: any) => {
    const cleanedInput = event.target.value.replace(/\D/g, '');
    form.value.fechaRetorno = onDateInput(cleanedInput);
};

const onDateInput5 = (event: any) => {
    const cleanedInput = event.target.value.replace(/\D/g, '');
    form.value.fechaInicioBajaPrenatal = onDateInput(cleanedInput);
};

const onDateInput6 = (event: any) => {
    const cleanedInput = event.target.value.replace(/\D/g, '');
    form.value.fechaFinBajaPostnatal = onDateInput(cleanedInput);
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
        codigoRude: '',
        estudiante: '',
        semanaGestacion: null,
        numeroEmbarazo: null,
        fechaEstimadaParto: null,
        recibeControlPrenatal: false,
        requiereBajaMedica: false,
        requierePermisoControl: false,
        requiereCuidadoPostparto: false,
        consideracionActividades: false,
        fechaBajaPrenatal: null,
        fechaConclusionPostnatal: null,
        fechaRetorno: null,
        edadProgenitor: null,
        progenitorMismaUnidadEducativa: false,
        nacidoVivo: false,
        progenitorConoceEmbarazo: false,
        bajaMedica: false,
        permisoControlPrenatal: false,
        fechaInicioBajaPrenatal: null,
        fechaFinBajaPostnatal: null,
        director: '',
        accionesSeguimiento: false
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
                        <v-card-title class="text-h5">Seguimiento y actuación para cumplimiento de derechos</v-card-title>
                    </div>
                    <v-form v-model="valid" class="">
                        <v-container>
                        <v-row>
                            <v-col cols="12" md="12">                                
                                <div class="text-h6 w-100 font-weight-regular auth-divider position-relative">
                                    <span class="bg-surface position-relative text-subtitle-1 text-grey100">Datos de embarazo y bajas</span>
                                </div>
                            </v-col>
                            <v-col cols="12" md="4">
                                <v-text-field v-model="form.sie" :rules="sieRules" :counter="8" label="SIE" required hide-details ></v-text-field>
                            </v-col>

                            <v-col cols="12" md="8" >
                                <v-text-field v-model="form.unidadEducativa" :counter="10" label="Unidad Educativa" hide-details required ></v-text-field>
                            </v-col>

                            <v-col cols="12" md="4">
                                <v-text-field v-model="form.codigoRude" label="Código Rude" required hide-details ></v-text-field>
                            </v-col>

                            <v-col cols="12" md="8" >
                                <v-text-field v-model="form.estudiante" label="Nombres y Apellidos" hide-details required ></v-text-field>
                            </v-col>

                            <v-col cols="12" md="6" >
                                <v-text-field v-model="form.semanaGestacion" type="number" label="Tiempo de gestación al momento de registrar el caso (semanas)" hide-details ></v-text-field>
                            </v-col>

                            <v-col cols="12" md="6" >
                                <v-text-field v-model="form.numeroEmbarazo" type="number" label="Número de embarazos (cuántas veces estuvo embarazada incluyendo este embarazo)" hide-details ></v-text-field>
                            </v-col>
                            
                            <v-col cols="12" md="4" >
                                <v-text-field v-model="form.fechaEstimadaParto" label="Fecha estimada de parto"  @input="onDateInput1" placeholder="DD/MM/AAAA" hide-details required></v-text-field>
                            </v-col>

                            <v-col cols="12" md="4" >
                                <v-checkbox v-model="form.recibeControlPrenatal" label="¿ Recibe control prenatal ?" required></v-checkbox>
                            </v-col>

                            <v-col cols="12" md="4" >
                                <v-checkbox v-model="form.requiereBajaMedica" label="¿ Requiere baja médica ?" required></v-checkbox>
                            </v-col>

                            <v-col cols="12" md="4" >
                                <v-checkbox v-model="form.requierePermisoControl" label="¿ Requiere permiso para asistir a los controles de salud ?" required></v-checkbox>
                            </v-col>

                            <v-col cols="12" md="4" >
                                <v-checkbox v-model="form.requiereCuidadoPostparto" label="¿ Requiere cuidado especial en el embarazo o el postparto ?" required></v-checkbox>
                            </v-col>

                            <v-col cols="12" md="4" >
                                <v-checkbox v-model="form.consideracionActividades" label="¿ Cuenta con medidas a considerar en la U.E. ?" required></v-checkbox>
                            </v-col>

                            <v-col cols="12" md="4" >
                                <v-text-field v-model="form.fechaBajaPrenatal" label="Fecha de baja prenatal"  @input="onDateInput2" placeholder="DD/MM/AAAA" hide-details required></v-text-field>
                            </v-col>

                            <v-col cols="12" md="4" >
                                <v-text-field v-model="form.fechaConclusionPostnatal" label="Fecha de conclusión de baja postnatal"  @input="onDateInput3" placeholder="DD/MM/AAAA" hide-details required></v-text-field>
                            </v-col>

                            <v-col cols="12" md="4" >
                                <v-text-field v-model="form.fechaRetorno" label="Fecha efectiva de retorno a la U.E. de la baja postnatal"  @input="onDateInput4" placeholder="DD/MM/AAAA" hide-details required></v-text-field>
                            </v-col>

                            <v-col cols="12" md="4" >
                                <v-text-field v-model="form.edadProgenitor" type="number" label="Edad del progenitor (años)" hide-details ></v-text-field>
                            </v-col>

                            <v-col cols="12" md="4" >
                                <v-checkbox v-model="form.progenitorMismaUnidadEducativa" label="El progenitor del bebe ¿ Es estudiante de la U.E. ?" required></v-checkbox>
                            </v-col>

                            <v-col cols="12" md="4" >
                                <v-checkbox v-model="form.nacidoVivo" label="¿ El embarazo concluyo con nacido vivo/a ?" required></v-checkbox>
                            </v-col>

                            <v-col cols="12" md="4" >
                                <v-checkbox v-model="form.progenitorConoceEmbarazo" label="Los progenitores/tutores ¿ Están al tanto del embarazo ?" required></v-checkbox>
                            </v-col>

                            <v-col cols="12" md="4" >
                                <v-checkbox v-model="form.bajaMedica" label="¿ Baja médica ?" required></v-checkbox>
                            </v-col>

                            <v-col cols="12" md="4" >
                                <v-checkbox v-model="form.permisoControlPrenatal" label="¿ Permiso para controles prenatales ?" required></v-checkbox>
                            </v-col>

                            <v-col cols="12" md="12" >
                                Baja prenatal y postnatal
                            </v-col>

                            <v-col cols="12" md="6" >
                                <v-text-field v-model="form.fechaInicioBajaPrenatal" label="Inicio de baja prenatal"  @input="onDateInput5" placeholder="DD/MM/AAAA" hide-details required></v-text-field>
                            </v-col>
                            
                            <v-col cols="12" md="6" >
                                <v-text-field v-model="form.fechaFinBajaPostnatal" label="fin de baja postnatal"  @input="onDateInput6" placeholder="DD/MM/AAAA" hide-details required></v-text-field>
                            </v-col>

                            <v-col cols="12" md="12">                                
                                <div class="text-h6 w-100 font-weight-regular auth-divider position-relative">
                                    <span class="bg-surface position-relative text-subtitle-1 text-grey100">Seguimiento y apoyo a niñas y adolescentes embarazadas</span>
                                </div>
                            </v-col>

                            <v-col cols="12" md="12" >
                                <v-text-field v-model="form.director" :counter="10" label="Persona asignada al seguimiento (Nombre del Director de U.E.)" hide-details required ></v-text-field>
                            </v-col>

                            <v-col cols="12" md="12" >
                                <v-checkbox v-model="form.accionesSeguimiento" label="¿ Cuenta con acciones de seguimiento al desarrollo de adecuaciones curriculares y metodologías ?" required></v-checkbox>
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
