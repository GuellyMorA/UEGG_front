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

const form = ref({
    numeroCaso: '',
    inicialVictima: null,
    inicialAgresor: null,
    codigoRude: null,
    codigoRda: null,
    codigoUsuario: null,
    remisionCasoDepartamentoMedidas: false,
    fechaAgresion: null,
    sancion: null,
    sancionCumplimiento: false,
    sancionAvisoProgenitor: false,
    solucionAvisoEstudiante: false
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
        inicialVictima: null,
        inicialAgresor: null,
        codigoRude: null,
        codigoRda: null,
        codigoUsuario: null,
        remisionCasoDepartamentoMedidas: false,
        fechaAgresion: null,
        sancion: null,
        sancionCumplimiento: false,
        sancionAvisoProgenitor: false,
        solucionAvisoEstudiante: false
    };
    dialogSave.value = false;
};

const onDateInput1 = (event: any) => {
    const cleanedInput = event.target.value.replace(/\D/g, '');
    form.value.fechaAgresion = onDateInput(cleanedInput);
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


</script>
<template>
    <v-row>    
        <v-col cols="12" lg="12" sm="12">
            <v-card elevation="10" class="withbg">
                <v-card-item>
                    <div class="d-sm-flex align-center justify-space-between pt-sm-2">
                        <v-card-title class="text-h5">Seguimiento al caso - sanciones por falta leves </v-card-title>
                    </div>
                    <v-form v-model="valid" class="">
                        <v-container>
                        <v-row>
                            <v-col cols="12" md="12">                                
                                <div class="text-h6 w-100 font-weight-regular auth-divider position-relative">
                                    <span class="bg-surface position-relative text-subtitle-1 text-grey100">Seguimmiento del caso</span>
                                </div>
                            </v-col>
                            <v-col cols="12" md="4">
                                <v-text-field v-model="form.numeroCaso" :rules="sieRules" :counter="8" label="Número de caso" required hide-details ></v-text-field>
                            </v-col>                                                                                                                      
                            
                            <v-col cols="12" md="4" >
                                <v-text-field v-model="form.inicialVictima" label="Inicial víctima" required></v-text-field>
                            </v-col>
                            
                            <v-col cols="12" md="4" >
                                <v-text-field v-model="form.inicialAgresor" label="Inicial agresor" required></v-text-field>
                            </v-col>
                            
                            <v-col cols="12" md="4" >
                                <v-text-field v-model="form.codigoRude" label="Código RUDE" required></v-text-field>
                            </v-col>
                            
                            <v-col cols="12" md="4" >
                                <v-text-field v-model="form.codigoRda" label="Código RDA" required></v-text-field>
                            </v-col>
                            
                            <v-col cols="12" md="4" >
                                <v-text-field v-model="form.codigoUsuario" label="Código usuario" required></v-text-field>
                            </v-col>
                            
                            <v-col cols="12" md="12">
                                <div class="text-h6 w-100 font-weight-regular auth-divider position-relative">
                                    <span class="bg-surface position-relative text-subtitle-1 text-grey100">Sanciones por faltas graves</span>
                                </div>
                            </v-col>
                            
                            <v-col cols="12" md="4" >
                                <v-checkbox v-model="form.remisionCasoDepartamentoMedidas" label="¿ Se remitió el caso a la Dirección Departamental para asumir medidas disciplinarias ?" required></v-checkbox>
                            </v-col>

                            <v-col cols="12" md="4" >
                                <v-text-field v-model="form.fechaAgresion" label="Fecha de la agresión" @input="onDateInput1" placeholder="DD/MM/AAAA" hide-details required></v-text-field>
                            </v-col>

                            <v-col cols="12" md="4" >
                                <v-text-field v-model="form.sancion" label="Sanción" hide-details required></v-text-field>
                            </v-col>
                            
                            <v-col cols="12" md="4" >
                                <v-checkbox v-model="form.sancionCumplimiento" label="¿ Se  cumplió la sanción ?" required></v-checkbox>
                            </v-col>
                            
                            <v-col cols="12" md="4" >
                                <v-checkbox v-model="form.sancionAvisoProgenitor" label="¿ Se informó a los progenitores de la sanción ?" required></v-checkbox>
                            </v-col>
                            
                            <v-col cols="12" md="4" >
                                <v-checkbox v-model="form.solucionAvisoEstudiante" label="¿ Se informó al estudiante como se resolvió el caso ?" required></v-checkbox>
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
