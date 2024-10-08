// this is the way to contruct a landing page with DisplayBlocks
// works with i18n
export default () => {
  const {t} = useI18n()
  return [
    {
      "key": "jumbotron-0",
      "value": {
        "title": t('home.jumbotron.title'),
        "description": t('home.jumbotron.description')
      }
    }
  ]
}
