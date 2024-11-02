// this is the way to contruct a landing page with DisplayBlocks
// works with i18n
export default () => {
  const { t } = useI18n();
  return [
    {
      key: "jumbotron-0",
      value: {
        title: t("home.jumbotron.title"),
        description: t("home.jumbotron.description"),
        buttonText: "Get Startedddd", // Texto del botón, con un valor por defecto
        buttonLink: "/", // Enlace del botón, ajusta según sea necesario
        alignment: "right", // Alineación, puede ser 'left', 'center' o 'right'
        height: "auto", // Altura, puede ser 'auto', 'screen', 'full', etc.
      },
    },
  ];
};
