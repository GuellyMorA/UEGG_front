const MainRoutes = {
    path: '/main',
    meta: {
        requiresAuth: true
    },
    redirect: '/main',
    component: () => import('@/layouts/full/FullLayout.vue'),
    children: [
        {
            name: 'Dashboard',
            path: '/',
            component: () => import('@/views/dashboard/index.vue')
        },
        {
            name: 'ConvivenciaPacifica',
            path: '/convivencia/pacifica',
            component: () => import('@/views/convivencia-pacifica/Index.vue'),
        },
        {
            name: 'ConvivenciaPacifica-Desarrollo',
            path: '/convivencia/pacifica/desarrollo',
            component: () => import('@/views/convivencia-pacifica/Desarrollo.vue')
        },
        {
            name: 'ConvivenciaPacifica-Socializacion',
            path: '/convivencia/pacifica/socializacion',
            component: () => import('@/views/convivencia-pacifica/Socializacion.vue')
        },
        {
            name: 'ConvivenciaPacifica-Seguimiento',
            path: '/convivencia/pacifica/seguimiento',
            component: () => import('@/views/convivencia-pacifica/Seguimiento.vue')
        },
        {
            name: 'ConvivenciaPacifica-Dashboard',
            path: '/convivencia/pacifica/dashboard',
            component: () => import('@/views/convivencia-pacifica/Dashboard.vue')
        },
        {
            name: 'EmbarazoAdolecente',
            path: '/embarazo/adolecente',
            component: () => import('@/views/embarazo-adolecente/Index.vue')
        },
        {
            name: 'EmbarazoAdolecente-Registro',
            path: '/embarazo/adolecente/registro',
            component: () => import('@/views/embarazo-adolecente/Registro.vue')
        },
        {
            name: 'EmbarazoAdolecente-SeguimientoActuacion',
            path: '/embarazo/adolecente/seguimiento/actuacion',
            component: () => import('@/views/embarazo-adolecente/SeguimientoActuacion.vue')
        },
        {
            name: 'EmbarazoAdolecente-SeguimientoSituacion',
            path: '/embarazo/adolecente/seguimiento/situacion',
            component: () => import('@/views/embarazo-adolecente/SeguimientoSituacion.vue')
        },
        {
            name: 'EmbarazoAdolecente-Dashboard',
            path: '/embarazo/adolecente/dashboard',
            component: () => import('@/views/embarazo-adolecente/Dashboard.vue')
        },
        {
            name: 'ViolenciaJerarquica',
            path: '/violencia/jerarquica',
            component: () => import('@/views/violencia-jerarquica/Index.vue')
        },
        {
            name: 'ViolenciaJerarquica-RegistroVictima',
            path: '/violencia/jerarquica/registro/victima',
            component: () => import('@/views/violencia-jerarquica/RegistroVictima.vue')
        },
        {
            name: 'ViolenciaJerarquica-RegistroAgresor',
            path: '/violencia/jerarquica/registro/agresor',
            component: () => import('@/views/violencia-jerarquica/RegistroAgresor.vue')
        },
        {
            name: 'ViolenciaJerarquica-RegistroCaso',
            path: '/violencia/jerarquica/registro/caso',
            component: () => import('@/views/violencia-jerarquica/RegistroCaso.vue')
        },
        {
            name: 'ViolenciaJerarquica-ReferenciaCaso',
            path: '/violencia/jerarquica/referencia/caso',
            component: () => import('@/views/violencia-jerarquica/ReferenciaCaso.vue')
        },
        {
            name: 'ViolenciaJerarquica-ComunicacionDistrito',
            path: '/violencia/jerarquica/comunicacion/distrito',
            component: () => import('@/views/violencia-jerarquica/ComunicacionDistrito.vue')
        },
        {
            name: 'ViolenciaJerarquica-ComunicacionDepartamento',
            path: '/violencia/jerarquica/comunicacion/departamento',
            component: () => import('@/views/violencia-jerarquica/ComunicacionDepartamento.vue')
        },
        {
            name: 'ViolenciaJerarquica-SeguimientoSancion',
            path: '/violencia/jerarquica/seguimiento/sancion',
            component: () => import('@/views/violencia-jerarquica/SeguimientoSancion.vue')
        },
        {
            name: 'ViolenciaJerarquica-SeguimientoCasoInfractor',
            path: '/violencia/jerarquica/seguimiento/caso/infractor',
            component: () => import('@/views/violencia-jerarquica/SeguimientoCasoInfractor.vue')
        },
        {
            name: 'ViolenciaJerarquica-SeguimientoCasoDelito',
            path: '/violencia/jerarquica/seguimiento/caso/delito',
            component: () => import('@/views/violencia-jerarquica/SeguimientoCasoDelito.vue')
        },
        {
            name: 'ViolenciaEntrePares',
            path: '/violencia/entre/pares',
            component: () => import('@/views/violencia-entre-pares/Index.vue')
        },
        {
            name: 'ViolenciaFamiliar',
            path: '/violencia/familiar',
            component: () => import('@/views/violencia-familiar/Index.vue')
        },
        {
            name: 'LibreViolencia',
            path: '/libre/violencia',
            component: () => import('@/views/libre-violencia/Index.vue')
        },
        {
            name: 'Cumplimiento',
            path: '/cumplimiento',
            component: () => import('@/views/cumplimiento/Index.vue')
        },
        {
            name: 'Despatriarcalizacion',
            path: '/despatriarcalizacion',
            component: () => import('@/views/despatriarcalizacion/Index.vue')
        },
        {
            name: 'Alert',
            path: '/ui/alerts',
            component: () => import('@/views/ui-components/Alerts.vue')
        },
        {
            name: 'Buttons',
            path: '/ui/buttons',
            component: () => import('@/views/ui-components/Buttons.vue')
        },
        {
            name: 'Cards',
            path: '/ui/cards',
            component: () => import('@/views/ui-components/Cards.vue')
        },
        {
            name: 'Tables',
            path: '/ui/tables',
            component: () => import('@/views/ui-components/Tables.vue')
        },
        {
            name: 'Icons',
            path: '/icons',
            component: () => import('@/views/pages/Icons.vue')
        },
        {
            name: 'Starter',
            path: '/sample-page',
            component: () => import('@/views/pages/SamplePage.vue')
        },
       
    ]
};

export default MainRoutes;
