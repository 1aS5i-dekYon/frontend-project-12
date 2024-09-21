// import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { Form, Button } from 'react-bootstrap';

import { AuthFormField } from '../../UI';
// import { loginUser } from './loginSlice.js';

export default () => {
  // const [loginError, setLoginError] = useState(null);

  const LoginSchema = Yup.object().shape({
    username: Yup.string()
      .min(6, 'Минимум 6 букв')
      .max(50, 'Максимум 50 букв')
      .required('Обязательное поле'),
    password: Yup.string()
      .min(12, 'Минимум 12 букв')
      .max(50, 'Максимум 50 букв')
      .matches(/[0-9]/, 'Минимум 1 цифра')
      .required('Обязательное поле'),
  });

  // обязательное поле заменить на СПИСОК ВСЕХ УСЛОВИЙ поля

  const formik = useFormik({
    initialValues: { username: '', password: '' },
    validationSchema: LoginSchema,
    onSubmit: (values) => {
      console.log(JSON.stringify(values), 'submit');
      alert(JSON.stringify(values, null, 2));
      // try {
      //   loginUser(values);
      // } catch (e) {
      //   formik.setSubmitting(false);
      //   console.log(e.message);
      //   setLoginError(e.message);
      //   // fn из useState для показа алерта с ошибкой валидации и самой ошибки
      // }
    },
  });

  return (
    <Form onSubmit={formik.handleSubmit} className="col-12 col-md-8 rounded border border-dark p-4 mb-3">
      <h3 className="text-center mb-3">Логин</h3>
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
        Submit
      </Button>
    </Form>
  );
};

// в AuthFormField можно прокинуть проп errorText для отображения ошибки под полем
// поломаная форма. Нужно нашаманить как-то с formik.values. ... нужно понять что за что отвечает

//  в каждом элементе формы должнен быть проп с disabled={formik.isSubmitting} видимо
// - это скорее всего отвечает за блокировку формы при setSubmitting

/* <Form.Group className="mb-3">
        <Form.Label className="col-md-2">
          Логин
        </Form.Label>
        <Form.Control
          controlid="username"
          className="col-12 col-md-10"
          type="text"2
          name="username"
          placeholder={`Введите ${formik.values.username.toLowerCase()}`}
          onChange={formik.handleChange}
          value={formik.values.username}
          isInvalid={formik.errors.username && formik.touched.username}
        />
        <Form.Control.Feedback type="invalid">
          {formik.errors.username}
        </Form.Control.Feedback>
      </Form.Group>
*/