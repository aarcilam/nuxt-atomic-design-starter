export const registerFormSchema = [
    {
        type: 'text',
        id: 'email-register',
        name: 'email',
        label: 'Email',
        validation: 'required|email'
    },
    {
        type: 'password',
        id: 'password-register',
        name: 'password',
        label: 'Password',
        validation: 'required'
    },
    {
        type: 'text',
        id: 'name-register',
        name: 'name',
        label: 'Name',
        validation: 'required'
    },
    {
        type: 'text',
        id: 'lastname-register',
        name: 'lastname',
        label: 'Lastname',
        validation: 'required'
    },
    {
        type: 'text',
        id: 'phone-register',
        name: 'phone',
        label: 'Phone',
        validation: 'required'
    }
]