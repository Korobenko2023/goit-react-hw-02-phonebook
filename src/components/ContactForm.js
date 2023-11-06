import { nanoid } from 'nanoid';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { ContactFormButton, ContactFormError, ContactFormField, ContactFormForm, ContactFormLabel } from './ContactForm.style';

export const ContactForm = ({ addContact, contacts }) => {
  const handleSubmit = (values, { resetForm }) => {
    const { name, number } = values;
    if (contacts.some(contact => contact.name === name)) {
        alert(`${name} is already in contacts.`);
        resetForm();
      return;
      }
       const newContact = {
      id: nanoid(),
      name,
      number,
    };
    addContact(newContact);
    resetForm();
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Name must be at least 2 characters')
      .required('Name is required'),
    number: Yup.string()
      .matches(/^\d+$/, 'Invalid phone number')
      .required('Phone number is required'),
  });

  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
        <ContactFormForm>
            <ContactFormLabel htmlFor="name">Name</ContactFormLabel>
              <ContactFormField id="name" type="text" name="name" />
              
              <ContactFormError name="name" component="div" />      
              
            <ContactFormLabel htmlFor="number">Number</ContactFormLabel>
              <ContactFormField id="number" type="tel" name="number" />
              
            <ContactFormError name="number" component="div" />

            <ContactFormButton type="submit">Add contact</ContactFormButton>
        </ContactFormForm>
    </Formik>
  );
};

