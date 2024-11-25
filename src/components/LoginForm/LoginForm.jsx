import styles from './LoginForm.module.css';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { login } from '../../redux/auth/operations';
import toast from 'react-hot-toast';

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
    dispatch(login(values))
      .unwrap()
      .then(() => {
        // toast.success('Registration successful!');
      })
      .catch(() => {
        toast.error('Please check your registration data.');
      });
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
            Sign in
          </button>
        </Form>
      </Formik>
    </div>
  );
}
