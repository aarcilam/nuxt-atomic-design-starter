export interface FormField {
  type: string;
  name: string;
  id: string;
  validation: string;
  label: string;
  accept?: string;
  options?: Object;
}

export interface FormGroup {
  type: "group";
  name: string;
  fields: FormField[];
}
