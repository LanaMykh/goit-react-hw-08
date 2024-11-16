import { Formik, Field, Form, ErrorMessage } from 'formik';
import { useId } from 'react';
import * as Yup from 'yup';
import styles from './ContactForm.module.css';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';
import { nanoid } from 'nanoid';

const initial_Values = {
  name: '',
  number: '',
};

const ContactForm = () => {
  const frmNameId = useId();
  const frmNumberId = useId();
  const dispatch = useDispatch();

  const ContactFormkSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    number: Yup.string()
      .min(3, 'Too short')
      .max(50, 'Too long')
      .required('Required'),
  });

  const handleSubmit = (values, actions) => {
    dispatch(
      addContact({
        id: nanoid(),
        ...values,
      })
    );

    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initial_Values}
      onSubmit={handleSubmit}
      validationSchema={ContactFormkSchema}
    >
      <Form className={styles.form}>
        <label htmlFor={frmNameId} className={styles.label}>
          Name
          <Field
            id={frmNameId}
            type="text"
            name="name"
            className={styles.input}
          />
          <ErrorMessage name="name" component="span" className={styles.err} />
        </label>
        <label htmlFor={frmNumberId} className={styles.label}>
          Number
          <Field
            id={frmNumberId}
            type="text"
            name="number"
            className={styles.input}
          />
          <ErrorMessage name="number" component="span" className={styles.err} />
        </label>
        <button type="submit" className={styles.btn}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
