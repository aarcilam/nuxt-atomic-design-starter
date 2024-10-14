export default () => {
    // const {t} = useI18n()
    return  [
        {
            type: 'text',
            id: 'email-login',
            name: 'email',
            label: "",
            validation: 'required|email'
        },
        {
            type: 'password',
            id: 'password-login',
            name: 'password',
            label: "",
            validation: 'required'
        }
    ]
  }