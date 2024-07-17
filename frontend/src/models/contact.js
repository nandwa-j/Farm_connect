import * as Yup from "yup";

export const contactUsValuesValidation = Yup.object().shape({
  name: Yup.string()
    .min(2, "Name must be at least 2 characters long")
    .max(50, "Name can't be longer than 50 characters")
    .required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  message: Yup.string()
    .min(10, "Message must be at least 10 characters long")
    .required("Message is required"),
});

export class ContactUsInitials {
  constructor() {
    this.name = "";
    this.email = "";
    this.message = "";
  }
}
