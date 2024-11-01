// this is the way to construct a landing page with DisplayBlocks
// works with i18n
export default () => {
    const { t } = useI18n();
    const route = useRoute();
    const user = useState('user')

    return [
        {
            "name": t("nav.home"),  // Texto dinámico para el título principal de la página
            "link": "/",  // Enlace a la página de inicio
            "active": route.path === "/",  // Verifica si la ruta actual es la página de inicio
            "visible": true
        },
        {
            "name": t("nav.designSystem"),  // Texto dinámico para el sistema de diseño
            "link": "/design-system",  // Enlace a la página del sistema de diseño
            "active": route.path.includes("/design-system"),  // Verifica si la ruta actual contiene '/design-system'
            "visible": true
        },
        {
            "name": t("nav.authentication"),  // Texto dinámico para autenticación
            "link": "/login",  // Enlace a la página de login
            "active": route.path.includes("/login"),  // Verifica si la ruta actual contiene '/login'
            "visible": !user  // Solo visible si el usuario no ha iniciado sesión
        },
        {
            "name": t("nav.formCreator"),  // Texto dinámico para creador de formularios
            "link": "/formCreator",  // Enlace a la página de creador de formularios
            "active": route.path.includes("/formCreator"),  // Verifica si la ruta actual contiene '/formCreator'
            "visible": true
        },
        // Puedes descomentar o agregar más enlaces según lo necesites:
        // {
        //     "name": t("nav.editBlocks"),
        //     "link": "/edit-blocks",
        //     "active": route.path.includes("/edit-blocks")
        // },
        // {
        //     "name": t("nav.viewTransition"),
        //     "link": "/test",
        //     "active": route.path.includes("/test")
        // }
    ];
};
