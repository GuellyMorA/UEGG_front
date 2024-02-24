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
    fecha: '',
    registroAnterior: false,
    comisionCargo: '',
    comisionNombre: '',
    temaDerecho: '',
    temaNorma: '',
    temaDisciplinario: '',
    temaSancion: '',
    temaAdopcion: '',
    temaAlternativo: '',
    temaRemision: '',
    temaTaller: '',
    temaPromover: '',
    temaPromover1: '',
    temaPromover2: '',
    temaPromover3: '',
    temaPromover4: '',
    temaPromover5: '',
    temaPromover6: '',
    temaPromover7: '',
    temaPromover8: '',
    temaPromover9: '',
    temaSeguimiento: '',
    comisionAprobacionCargo: '',
    comisionAprobacionNombre: '',
    fechaAprobacion: '',
    vigenciaAprobacion: '',
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

const onDateInput = (event: any) => {
    // Remove non-numeric characters from the input
    const cleanedInput = event.target.value.replace(/\D/g, '');

    // Format the input as a date (DD-MM-YYYY)
    if (cleanedInput.length <= 2) {
        form.value.fecha = cleanedInput;
    } else if (cleanedInput.length <= 4) {
        form.value.fecha = cleanedInput.slice(0, 2) + '/' + cleanedInput.slice(2);
    } else if (cleanedInput.length <= 8) {
        form.value.fecha = cleanedInput.slice(0, 2) + '/' + cleanedInput.slice(2, 4) + '/' + cleanedInput.slice(4, 8);
    } else {
        form.value.fecha = cleanedInput.slice(0, 2) + '/' + cleanedInput.slice(2, 4) + '/' + cleanedInput.slice(4, 8);
    }
};

const onDateInputAprobacion = (event: any) => {
    // Remove non-numeric characters from the input
    const cleanedInput = event.target.value.replace(/\D/g, '');

    // Format the input as a date (DD-MM-YYYY)
    if (cleanedInput.length <= 2) {
        form.value.fechaAprobacion = cleanedInput;
    } else if (cleanedInput.length <= 4) {
        form.value.fechaAprobacion = cleanedInput.slice(0, 2) + '/' + cleanedInput.slice(2);
    } else if (cleanedInput.length <= 8) {
        form.value.fechaAprobacion = cleanedInput.slice(0, 2) + '/' + cleanedInput.slice(2, 4) + '/' + cleanedInput.slice(4, 8);
    } else {
        form.value.fechaAprobacion = cleanedInput.slice(0, 2) + '/' + cleanedInput.slice(2, 4) + '/' + cleanedInput.slice(4, 8);
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
        departamentoId: null,
        departamentoNombre: '',
        municipioId: null,
        municipioNombre: '',
        unidadEducativa: '',
        nivel: '',
        modalidad: '',
        director: '',
        fecha: '',
        registroAnterior: false,
        comisionCargo: '',
        comisionNombre: '',
        temaDerecho: '',
        temaNorma: '',
        temaDisciplinario: '',
        temaSancion: '',
        temaAdopcion: '',
        temaAlternativo: '',
        temaRemision: '',
        temaTaller: '',
        temaPromover: '',
        temaSeguimiento: '',
        comisionAprobacionCargo: '',
        comisionAprobacionNombre: '',
        fechaAprobacion: '',
        vigenciaAprobacion: '',
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
                                    <span class="bg-surface position-relative text-subtitle-1 text-grey100">Construcción del PCPA</span>
                                </div>
                            </v-col>

                            <v-col cols="12" md="4" >
                                <v-text-field v-model="form.fecha" label="Fecha de registro" @input="onDateInput" placeholder="DD/MM/AAAA" hide-details required></v-text-field>
                            </v-col>

                            <v-col cols="12" md="8" >
                                <!-- <v-checkbox v-model="form.registroAnterior" :error-messages="''" label="¿Se realizó un diagnóstico antes de iniciar la construcción del PCPA?" required></v-checkbox> -->
                                <v-checkbox v-model="form.registroAnterior" label="¿Se realizó un diagnóstico antes de iniciar la construcción del PCPA?" required></v-checkbox>
                            </v-col>

                            <v-col cols="12" md="4" >
                                Miembros de la comisión de construcción del PCPA
                            </v-col>

                            <v-col cols="12" md="4" >
                                <v-text-field v-model="form.comisionCargo" label="Cargo" hide-details required></v-text-field>
                            </v-col>

                            <v-col cols="12" md="4" >
                                <v-text-field v-model="form.comisionNombre" label="Nombre" hide-details required></v-text-field>
                            </v-col>

                            <v-col cols="12" md="12" >
                                Actividades para promover la convivencia pacífica
                            </v-col>

                            <v-col cols="12" md="6" >
                                <v-checkbox v-model="form.temaDerecho" label="  " required></v-checkbox>
                            </v-col>

                            <v-col cols="12" md="6" >
                                <v-checkbox v-model="form.temaNorma" label="Normas y conductas" required></v-checkbox>
                            </v-col>

                            <v-col cols="12" md="6" >
                                <v-checkbox v-model="form.temaDisciplinario" label="Procedimientos disciplinarios" required></v-checkbox>
                            </v-col>

                            <v-col cols="12" md="6" >
                                <v-checkbox v-model="form.temaSancion" label="Sanciones" required></v-checkbox>
                            </v-col>

                            <v-col cols="12" md="6" >
                                <v-checkbox v-model="form.temaAdopcion" label="Procedimiento marco para la adopción de decisiones disciplinarias" required></v-checkbox>
                            </v-col>

                            <v-col cols="12" md="6" >
                                <v-checkbox v-model="form.temaAlternativo" label="Procedimientos alternativos pra la solución de conflictos" required></v-checkbox>
                            </v-col>

                            <v-col cols="12" md="6" >
                                <v-checkbox v-model="form.temaRemision" label="Lineamientos para la remisión de informes sobre casos de violencia" required></v-checkbox>
                            </v-col>

                            <v-col cols="12" md="6" >
                                <v-checkbox v-model="form.temaTaller" label="Programación de talleres de capacitación" required></v-checkbox>
                            </v-col>

                            <v-col cols="12" md="6" >
                                <v-checkbox v-model="form.temaPromover" label="Actividades para promover la convivencia pacífica" required></v-checkbox>
                                <v-row class="pl-10 secondarybg" v-if="form.temaPromover">
                                    <v-col cols="12" md="6" >
                                        <v-checkbox v-model="form.temaPromover1" label="Movilización social" required></v-checkbox>
                                        <v-checkbox v-model="form.temaPromover2" label="Fomento al desarrollo de habilidades y práctica de valores" required></v-checkbox>  
                                        <v-checkbox v-model="form.temaPromover3" label="Capacitación" required></v-checkbox>  
                                        <v-checkbox v-model="form.temaPromover4" label="Medidas de seguridad en la infraestructura" required></v-checkbox>  
                                        <v-checkbox v-model="form.temaPromover5" label="Normas de convivencia en la unidad unidadEducativa" required></v-checkbox>  
                                        <v-checkbox v-model="form.temaPromover6" label="Promoción de la participación de las y los estudiantes" required></v-checkbox>  
                                        <v-checkbox v-model="form.temaPromover7" label="Gestión y articulación con la comunidad educativa" required></v-checkbox>  
                                        <v-checkbox v-model="form.temaPromover8" label="Acción comunal" required></v-checkbox>   
                                        <v-checkbox v-model="form.temaPromover9" label="Acciones para reducción de riesgos en el contexto y en la unidad educativa" required></v-checkbox>
                                    </v-col>
                                </v-row>
                            </v-col>

                            <v-col cols="12" md="6" >
                                <v-checkbox v-model="form.temaSeguimiento" label="Plan de seguimiento y evaluación" required></v-checkbox>
                            </v-col>

                            <v-col cols="12" md="12">
                                <div class="text-h6 w-100 font-weight-regular auth-divider position-relative">
                                    <span class="bg-surface position-relative text-subtitle-1 text-grey100">Aprobación del PCPA</span>
                                </div>
                            </v-col>

                            <v-col cols="12" md="6" >
                                <v-text-field v-model="form.comisionAprobacionCargo" label="Cargo" hide-details required></v-text-field>
                            </v-col>

                            <v-col cols="12" md="6" >
                                <v-text-field v-model="form.comisionAprobacionNombre" label="Nombre" hide-details required></v-text-field>
                            </v-col>

                            <v-col cols="12" md="6" >
                                <v-text-field v-model="form.fechaAprobacion" label="Fecha de aprobación"  @input="onDateInputAprobacion" placeholder="DD/MM/AAAA" hide-details required></v-text-field>
                            </v-col>

                            <v-col cols="12" md="6" >
                                <v-text-field v-model="form.vigenciaAprobacion" label="Tiempo de vigencia" type="number" @input="onDateInput" hide-details required></v-text-field>
                            </v-col>

                            <v-col cols="12" md="12">
                                <div class="text-h6 w-100 font-weight-regular auth-divider position-relative">
                                    <span class="bg-surface position-relative text-subtitle-1 text-grey100">Declaración jurada</span>
                                </div>
                            </v-col>

                            <v-col cols="12" md="12" >
                                <v-checkbox v-model="form.validado" label="Declaro que todos los datos que he registrado son verídicos y que pueden ser validados por las autoridades del Ministerio de Educación" required></v-checkbox>
                            </v-col>

                            <v-col cols="12" md="12" v-if="form.validado" >                                
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
