// import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { AuthFormField } from '../../UI';
import { loginUser } from './loginSlice.js';

export default () => {
  const dispatch = useDispatch();
  // const [loginError, setLoginError] = useState(null);
  const navigate = useNavigate();
  const { t } = useTranslation();

  const LoginSchema = Yup.object().shape({
    username: Yup.string()
      .min(3, 'min3chars')
      .max(20, 'max20chars')
      .required('required'),
    password: Yup.string()
      .min(6, 'min6chars')
      .max(50, 'max50chars')
      .required('required'),
  });

  const formik = useFormik({
    initialValues: { username: '', password: '' },
    validationSchema: LoginSchema,
    onSubmit: (values) => {
      console.log(JSON.stringify(values), 'submit');
      alert(JSON.stringify(values, null, 2));
      try {
        dispatch(loginUser(values));
      } catch (e) {
        formik.setSubmitting(false);
        console.log('e.message:', e.message);
      }
      navigate('/');
    },
  });

  return (
    <Form onSubmit={formik.handleSubmit} className="col-12 col-md-8 rounded border border-dark p-4 mb-3">
      <h3 className="text-center mb-3">{t('loginPage.header')}</h3>
      <AuthFormField
        type="text"
        fieldName="username"
        handleChange={formik.handleChange}
        fieldValue={formik.values.username}
        errorText={formik.errors.username}
        isTouched={formik.touched.username}
      />
      <AuthFormField
        type="password"
        fieldName="password"
        handleChange={formik.handleChange}
        fieldValue={formik.values.password}
        errorText={formik.errors.password}
        isTouched={formik.touched.password}
      />
      <Button className="col-12 col-md-12" variant="primary" type="submit">
        {t('loginPage.signIn')}
      </Button>
    </Form>
  );
};
