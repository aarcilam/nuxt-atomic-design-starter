export default (t) => {
  return [
    {
      type: 'text',
      id: 'email-login',
      name: 'email',
      label: t('auth.email'),
      validation: 'required|email'
    },
    {
      type: 'password',
      id: 'password-login',
      name: 'password',
      label: t('auth.pass'),
      validation: 'required'
    }
  ]
}
