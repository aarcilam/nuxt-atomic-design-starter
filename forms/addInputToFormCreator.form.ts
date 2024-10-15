export default (t) => {
  return [
    {
      type: 'text',
      id: 'name-input',
      name: 'name',
      label: "Nombre campo",
      validation: 'required'
    },
    {
      type: 'text',
      id: 'validation-input',
      name: 'validation',
      label: "Validacion",
      validation: ''
    },
    {
      type: 'select',
      id: 'select-type',
      name: 'type',
      label: "Tipo",
      validation: 'required',
      options: {
        text: 'text',
        textarea: 'textarea',
        phone: 'phone',
        select: 'select',
        password: 'password'
      }
    },
  ]
}
