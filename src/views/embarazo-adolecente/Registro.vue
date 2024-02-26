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
    departamentoId: null,
    departamentoNombre: '',
    municipioId: null,
    municipioNombre: '',
    unidadEducativa: '',
    nivel: '',
    modalidad: '',
    director: '',
    reporteNombre1: '',
    reporteNombre2: '',
    reporteNombre3: '',
    estudianteCodigoRude: '',
    estudianteCedulaIdentidad: '',
    estudianteComplemento: '',
    estudiantePaterno: '',
    estudianteMaterno: '',
    estudianteNombre: '',
    estudianteFechaNacimiento: null,
    estudianteEdad: '',
    estudianteGrado: '',
    estudianteNivel: '',
    dispacidad: false,
    dispacidadCognitiva: false,
    dispacidadVisual: false,
    dispacidadAuditiva: false,
    dispacidadMotriz: false,
    dispacidadOtro: false,
    unionTemprana: false,
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
        departamentoId: null,
        departamentoNombre: '',
        municipioId: null,
        municipioNombre: '',
        unidadEducativa: '',
        nivel: '',
        modalidad: '',
        director: '',
        reporteNombre1: '',
        reporteNombre2: '',
        reporteNombre3: '',
        estudianteCodigoRude: '',
        estudianteCedulaIdentidad: '',
        estudianteComplemento: '',
        estudiantePaterno: '',
        estudianteMaterno: '',
        estudianteNombre: '',
        estudianteFechaNacimiento: null,
        estudianteEdad: '',
        estudianteGrado: '',
        estudianteNivel: '',
        dispacidad: false,
        dispacidadCognitiva: false,
        dispacidadVisual: false,
        dispacidadAuditiva: false,
        dispacidadMotriz: false,
        dispacidadOtro: false,
        unionTemprana: false,
        validado: false
    };
    dialogSave.value = false;
};

const onDateInput1 = (event: any) => {
    const cleanedInput = event.target.value.replace(/\D/g, '');
    form.value.estudianteFechaNacimiento = onDateInput(cleanedInput);
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

const personaReporteTipo = [
    { id: 1, name: 'Estudiante embarazada' },  
    { id: 2, name: 'Pareja de estudiante' },  
    { id: 3, name: 'Familia de estudiante' },  
    { id: 4, name: 'Otro estudiante' },  
    { id: 5, name: 'Maestro/Maestra' },  
    { id: 6, name: 'Personal administrativo' },
    { id: 6, name: 'Director' },
    { id: 6, name: 'Otros' }
]

</script>
<template>
    <v-row>    
        <v-col cols="12" lg="12" sm="12">
            <v-card elevation="10" class="withbg">
                <v-card-item>
                    <div class="d-sm-flex align-center justify-space-between pt-sm-2">
                        <v-card-title class="text-h5">Registro de estudiante embarazada</v-card-title>
                    </div>
                    <v-form v-model="valid" class="">
                        <v-container>
                        <v-row>
                            <v-col cols="12" md="12">                                
                                <div class="text-h6 w-100 font-weight-regular auth-divider position-relative">
                                    <span class="bg-surface position-relative text-subtitle-1 text-grey100">Datos de Unidad Educativa</span>
                                </div>
                            </v-col>
                            <v-col cols="12" md="4">
                                <v-text-field v-model="form.sie" :rules="sieRules" :counter="8" label="SIE" required hide-details ></v-text-field>
                            </v-col>

                            <v-col cols="12" md="8" >
                                <v-text-field v-model="form.unidadEducativa" :counter="10" label="Unidad Educativa" hide-details required ></v-text-field>
                            </v-col>

                            <v-col cols="12" md="4" >
                                <v-text-field v-model="form.departamentoNombre" label="Departamento" hide-details required></v-text-field>
                            </v-col>

                            <v-col cols="12" md="4" >
                                <v-text-field v-model="form.municipioNombre" label="Municipio" hide-details required></v-text-field>
                            </v-col>

                            <v-col cols="12" md="4" >
                                <v-text-field v-model="form.nivel" label="Nivel" hide-details required></v-text-field>
                            </v-col>

                            <v-col cols="12" md="4" >
                                <v-text-field v-model="form.modalidad" label="Modalidad" hide-details required></v-text-field>
                            </v-col>

                            <v-col cols="12" md="8" >
                                <v-text-field v-model="form.director" label="Director" hide-details required></v-text-field>
                            </v-col>

                            <v-col cols="12" md="12">
                                <div class="text-h6 w-100 font-weight-regular auth-divider position-relative">
                                    <span class="bg-surface position-relative text-subtitle-1 text-grey100">¿ Quién informa el embarazo ?</span>
                                </div>
                            </v-col>

                            <!-- <v-col cols="12" md="4" >
                                <v-text-field v-model="form.reporteNombre1" label="Reporte 1" hide-details required></v-text-field>
                            </v-col>

                            <v-col cols="12" md="4" >
                                <v-text-field v-model="form.reporteNombre2" label="Reporte 2" hide-details required></v-text-field>
                            </v-col>

                            <v-col cols="12" md="4" >
                                <v-text-field v-model="form.reporteNombre3" label="Reporte 3" hide-details required></v-text-field>
                            </v-col> -->

                            <v-col cols="12" md="4" >
                                <v-select v-model="form.reporteNombre1" :items="personaReporteTipo" item-title="name" item-value="id" label="Reporte 1" return-object></v-select>
                            </v-col>

                            <v-col cols="12" md="4" >
                                <v-select v-model="form.reporteNombre2" :items="personaReporteTipo" item-title="name" item-value="id" label="Reporte 2" return-object></v-select>
                            </v-col>

                            <v-col cols="12" md="4" >
                                <v-select v-model="form.reporteNombre3" :items="personaReporteTipo" item-title="name" item-value="id" label="Reporte 3" return-object></v-select>
                            </v-col>
                           
                            <v-col cols="12" md="12">
                                <div class="text-h6 w-100 font-weight-regular auth-divider position-relative">
                                    <span class="bg-surface position-relative text-subtitle-1 text-grey100">Datos de la estudiante embarazada</span>
                                </div>
                            </v-col>

                            <v-col cols="12" md="4" >
                                <v-text-field v-model="form.estudianteCodigoRude" label="Código RUDE" hide-details required></v-text-field>
                            </v-col>

                            <v-col cols="12" md="2" >
                                <v-text-field v-model="form.estudianteCedulaIdentidad" label="Cédula de Identidad" hide-details required></v-text-field>
                            </v-col>

                            <v-col cols="12" md="2" >
                                <v-text-field v-model="form.estudianteComplemento" label="Complemento" hide-details required></v-text-field>
                            </v-col>

                            <v-col cols="12" md="4" >
                                <v-text-field v-model="form.estudianteFechaNacimiento" label="DD/MM/AAAA" @input="onDateInput1" placeholder="DD/MM/AAAA" hide-details required></v-text-field>
                            </v-col>

                            <v-col cols="12" md="4" >
                                <v-text-field v-model="form.estudiantePaterno" label="Apellido Paterno" hide-details required></v-text-field>
                            </v-col>

                            <v-col cols="12" md="4" >
                                <v-text-field v-model="form.estudianteMaterno" label="Apellido Materno" hide-details required></v-text-field>
                            </v-col>

                            <v-col cols="12" md="4" >
                                <v-text-field v-model="form.estudianteNombre" label="Nombre(s)" hide-details required></v-text-field>
                            </v-col>

                            <v-col cols="12" md="4" >
                                <v-text-field v-model="form.estudianteNivel" label="Nivel" hide-details required></v-text-field>
                            </v-col>

                            <v-col cols="12" md="4" >
                                <v-text-field v-model="form.estudianteGrado" label="Grado" hide-details required></v-text-field>
                            </v-col>

                            <v-col cols="12" md="4" >
                                <v-text-field v-model="form.estudianteEdad" label="Edad" hide-details required></v-text-field>
                            </v-col>

                            <v-col cols="12" md="6" >
                                <v-checkbox v-model="form.dispacidad" label="¿ La adolescente tiene discapacidad ?" required></v-checkbox>
                            </v-col>

                            <v-col cols="12" md="6" v-if="form.dispacidad" >
                                <v-row class="pl-10 pt-5 secondarybg" >
                                    ¿ Qué tipo de discapacidad tiene ?
                                    <v-col cols="12" md="6" >
                                        <v-checkbox v-model="form.dispacidadCognitiva" label="Cognitiva" required></v-checkbox>
                                        <v-checkbox v-model="form.dispacidadVisual" label="Visual" required></v-checkbox>  
                                        <v-checkbox v-model="form.dispacidadAuditiva" label="Auditiva" required></v-checkbox> 
                                    </v-col>
                                    <v-col cols="12" md="6" > 
                                        <v-checkbox v-model="form.dispacidadMotriz" label="Motriz" required></v-checkbox>  
                                        <v-checkbox v-model="form.dispacidadOtro" label="Otro" required></v-checkbox>  
                                    </v-col>
                                </v-row>
                            </v-col>

                            <v-col cols="12" md="12">
                                <div class="text-h6 w-100 font-weight-regular auth-divider position-relative">
                                    <span class="bg-surface position-relative text-subtitle-1 text-grey100">Unión a temprana edad</span>
                                </div>
                            </v-col>

                            <v-col cols="12" md="12" >
                                <v-checkbox v-model="form.unionTemprana" label="La adolescente actualmente está casada o convive en pareja" required></v-checkbox>
                            </v-col>

                            <v-col cols="12" md="12"  >                                
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
