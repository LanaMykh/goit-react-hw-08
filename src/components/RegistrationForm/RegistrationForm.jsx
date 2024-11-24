import styles from './RegistrationForm.module.css';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { register } from '../../redux/auth/operations';

const initialValues = {
  name: '',
  email: '',
  password: '',
};

const RegistrationFormSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Name is required!'),
  email: Yup.string()
    .email('Invalid email address!')
    .required('Email is required!'),
  password: Yup.string()
    .min(8, 'Too Short! Password must be at least 8 characters.')
    .required('Required!'),
});

const RegistrationForm = () => {
  const dispatch = useDispatch();

  function handleSubmit(values, actions) {
    dispatch(register(values))
      .unwrap()
      .then(() => {
        console.log('Реєстрація успішна!');
      })
      .catch(error => {
        console.error('Помилка реєстрації:', error); // Обробка помилки на рівні компонента
      });

    actions.resetForm();
  }

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={RegistrationFormSchema}
      >
        <Form className={styles.form}>
          <label className={styles.label}>
            <span>Name:</span>
            <Field type="text" name="name" />
            <ErrorMessage name="name" component="span" className={styles.err} />
          </label>

          <label className={styles.label}>
            <span>Email:</span>
            <Field type="text" name="email" />
            <ErrorMessage
              name="email"
              component="span"
              className={styles.err}
            />
          </label>

          <label className={styles.label}>
            <span>Password:</span>
            <Field type="password" name="password" />
            <ErrorMessage
              name="password"
              component="span"
              className={styles.err}
            />
          </label>

          <button className={styles.btn} type="submit">
            Sign up
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationForm;
