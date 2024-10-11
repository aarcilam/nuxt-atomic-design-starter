export const loginFormSchema = [
    {
        type: 'text',
        id: 'email-login',
        name: 'email',
        label: 'Email',
        validation: 'required|email'
    },
    {
        type: 'password',
        id: 'password-login',
        name: 'password',
        label: 'Password',
        validation: 'required'
    }
]