import { useDispatch, useSelector } from 'react-redux';
// import { addContact } from 'redux/contactsSlice';
import { getContacts } from 'redux/selectors';
// import PropTypes from 'prop-types';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import { Label, Button, Form, ErrorMessage } from './ContactForm.styled';
import { toast } from 'react-hot-toast';

const FormSchema = Yup.object().shape({
  name: Yup.string()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      'The name may contain only letters!!!'
    )
    .min(3, 'Too short')
    .max(15, 'Too long')
    .required('Required')
    .trim(),
  number: Yup.string()
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      'Phone number must be digits!!!'
    )
    .min(5, 'Too short')
    .max(10, 'Too long')
    .required('Required')
    .trim(),
});

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleSubmit = (values, { resetForm }) => {
    if (contacts.some(({ name }) => name === values.name)) {
      toast(`${values.name} is alreary in contacts`, {
        style: {
          background: '#ca1616',
          color: '#fff',
        },
      });
      resetForm();
      return;
    }
    // dispatch(addContact(values));
    resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={FormSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <Label htmlFor="name">
          Name:
          <Field type="text" name="name" />
        </Label>
        <ErrorMessage name="name" component="div" />
        <Label htmlFor="number">
          Number:
          <Field type="tel" name="number" />
        </Label>
        <ErrorMessage name="number" component="div" />
        <Button type="submit">ADD CONTACT</Button>
      </Form>
    </Formik>
  );
};

// ContactForm.propTypes = {
//   formSubmit: PropTypes.func.isRequired,
// };

export { ContactForm };
