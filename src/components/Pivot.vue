<template>
    <section class="dhx_sample-controls pr-3">
        <v-btn rounded="pill" color="primary" class="v-btn--size-large v-btn--variant-elevated mt-4 mb-2 px-7" @click="runExport('xlsx')">Exportar XLSX</v-btn>
        <v-btn rounded="pill" color="primary" class="v-btn--size-large v-btn--variant-elevated mt-4 mb-2 px-7" @click="runExport('csv')">Exportar CSV</v-btn>
    </section>
    <div class="dhx_sample-container__widget" ref="pivot"></div>
</template>
 
<script>
import fromCDN from "from-cdn";
import dataset from "@/assets/datasetPCPA.json";
 
// fields: {
//             rows: ["form", "name"],
//             columns: ["departamento"],
//             values: [
//                 { id: "id", method: "count" },
//                 { id: "oil", method: "sum" },
//             ],
//         },

export default {
    name: "Pivot",
    data: () => ({
        pivot: null,
        fields: {
            rows: ["departamento", "municipio"],
            columns: ["nivel"],
            values: [
                { id: "id", method: "count" }
            ],
        },
        fieldList: [
            { id: "departamento", label: "Departamento" },
            { id: "municipio", label: "Municipio" },
            { id: "nivel", label: "Nivel" },
            { id: "actividad_derecho", label: "Derechos y deberes " },
            { id: "actividad_norma", label: "Normas y conductas " },
            { id: "actividad_procedimiento", label: "Procedimientos disciplinarios " },
            { id: "actividad_sancion", label: "Sanciones " },
            { id: "actividad_proc_marco", label: "Procedimiento marco para la adopción de decisiones disciplinarias " },
            { id: "actividad_proc_solucion", label: "Procedimientos alternativos para la solución de conflictos" },
            { id: "actividad_lineamiento", label: "Lineamientos para la remisión de informes sobre casos de violencia" },
            { id: "actividad_programacion", label: "Programación de talleres de capacitación " },
            { id: "actividad_promocion_movilizacion", label: "Movilización social" },
            { id: "actividad_promocion_fomento", label: "Fomento al desarrollo de habilidades y práctica de valores" },
            { id: "actividad_promocion_capacitacion", label: "Capacitación" },
            { id: "actividad_promocion_medidas", label: "Medidas de seguridad en la infraestructura " },
            { id: "actividad_promocion_normas", label: "Normas de convivencia en la unidad unidadEducativa " },
            { id: "actividad_promocion_promocion", label: "Promoción de la participación de las y los estudiantes " },
            { id: "actividad_promocion_gestion", label: "Gestión y articulación con la comunidad educativa " },
            { id: "actividad_promocion_accion", label: "Acción comunal " },
            { id: "actividad_promocion_reduccion", label: "Acciones para reducción de riesgos en el contexto y en la unidad educativa" }
        ],
        layout: {
            footer: true,
        },    
    }),
    mounted() {
        fromCDN([
            "../../src/assets/js/pivot.js",
            "../../src/assets/css/pivot.css",
            "../../src/assets/css/pivot_auxiliary_controls.css"
        ]).then(() => {
            // eslint-disable-next-line no-undef
            this.pivot = new dhx.Pivot(this.$refs.pivot, {
                data: dataset,
                fields: this.fields,
                fieldList: this.fieldList,
                layout: this.layout
            });
        });
    },
    methods: {
        runExport(type){
            if (type === "xlsx") {
                this.pivot.export.xlsx({
                    url: "//export.dhtmlx.com/excel"
                });
            }
            if (type === "csv") {
                this.pivot.export.csv();
            }
        }
    },
    beforeDestroy() {
        if (this.pivot) {
            this.pivot.destructor();
        }
    }
};
</script>
 
<style scoped>
.dhx_sample-container__widget {
    height: 100vh;
    width: 100vw;
}
</style>