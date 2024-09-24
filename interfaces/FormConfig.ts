export interface FormField {
    type: string;
    name: string;
    id: string;
    validation: string;
    label: string;
}

export interface FormGroup {
    type: 'group';
    name: string;
    fields: FormField[];
}
