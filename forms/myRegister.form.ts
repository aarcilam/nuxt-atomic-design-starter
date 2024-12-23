import type { FormField, FormGroup } from "@/interfaces/FormConfig";

export default (t): (FormGroup | FormField)[] => {
  return [
    {
      type: "text",
      id: "email-register",
      name: "email",
      label: t("auth.email"),
      validation: "required|email",
    },
    {
      type: "password",
      id: "password-register",
      name: "password",
      label: t("auth.pass"),
      validation: "required",
    },
    {
      type: "text",
      id: "name-register",
      name: "name",
      label: "Name",
      validation: "required",
    },
    {
      type: "text",
      id: "lastname-register",
      name: "lastname",
      label: "Lastname",
      validation: "required",
    },
    {
      type: "text",
      id: "phone-register",
      name: "phone",
      label: "Phone",
      validation: "required",
    },
  ];
};
