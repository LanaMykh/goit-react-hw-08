import { ErrorMessage, Field, Form, Formik } from 'formik';
import styles from '../LoginForm/LoginForm.module.css';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { login } from '../../redux/auth/operations';

const initialValues = {
  email: '',
  password: '',
};

const LoginFormSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email address!')
    .required('Email is required!'),
  password: Yup.string()
    .min(8, 'Too Short! Password must be at least 8 characters.')
    .required('Required!'),
});

export default function LoginForm() {
  const dispatch = useDispatch();

  function handleSubmit(values, actions) {
    dispatch(login(values));
    actions.resetForm();
  }

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={LoginFormSchema}
      >
        <Form className={styles.form}>
          <label className={styles.input}>
            <span>Email:</span>
            <Field type="text" name="email" />
            <ErrorMessage name="email" component="span" />
          </label>

          <label className={styles.input}>
            <span>Password:</span>
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="span" />
          </label>

          <button className={styles.btn} type="submit">
            Sign in
          </button>
        </Form>
      </Formik>
    </div>
  );
}
