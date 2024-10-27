// import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { AuthFormField } from '../../UI';
import { registrationUser } from './registrationSlice.js';

export default () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const LoginSchema = Yup.object().shape({
    username: Yup.string()
      .min(6, 'Минимум 6 символов')
      .max(50, 'Максимум 50 символов')
      .required('Обязательное поле'),
    password: Yup.string()
      .min(6, 'Минимум 6 символов')
      .max(50, 'Максимум 50 символов')
      .matches(/[0-9]/, 'Минимум 1 цифра')
      .required('Обязательное поле'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password')], 'errors.notSame')
      .required('Обязательное поле'),
  });

  // обязательное поле заменить на СПИСОК ВСЕХ УСЛОВИЙ поля

  const formik = useFormik({
    initialValues: { username: '', password: '', confirmPassword: '' },
    validationSchema: LoginSchema,
    onSubmit: (values) => {
      console.log(JSON.stringify(values), 'submit');
      alert(JSON.stringify(values, null, 2));
      try {
        dispatch(registrationUser(values));
      } catch (e) {
        formik.setSubmitting(false);
        console.log(e.message);
      }
      navigate('/');
    },
  });

  return (
    <Form onSubmit={formik.handleSubmit} className="col-12 col-md-8 rounded border border-dark p-4 mb-3">
      <h3 className="text-center mb-3">Регистрация</h3>
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
      <AuthFormField
        type="password"
        fieldName="confirm password"
        handleChange={formik.handleChange}
        fieldValue={formik.values.confirmPassword}
        errorText={formik.errors.confirmPassword}
        isTouched={formik.touched.confirmPassword}
      />
      <Button className="col-12 col-md-12" variant="primary" type="submit">
        Отправить
      </Button>
    </Form>
  );
};
