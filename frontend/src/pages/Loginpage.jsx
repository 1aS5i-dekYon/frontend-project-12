import React from 'react';
import { Formik, Form, Field } from 'formik';
// import * as Yup from 'yup';

export function Loginpage() {
  return (
    <Formik
      initialValues={{ username: "", password: "" }}
      onSubmit={({ username, password }) => {
        console.log(username, password, 'submit');
        // setSubmitting(false);
      }}
    >
      {() => (
        <div className='row justify-content-center align-content-center h-100'>
          <div className='col-12 col-md-8 rounded border border-dark p-4 mb-3'>
            <Form>
              <h3 className='text-center mb-3'>Логин</h3>
              <div className='form-group row mb-3'>
                <label htmlFor="username" className="col-md-2 col-form-label">Email</label>
                <div className="col-md-10">
                  <Field type="username" name="username" placeholder="Enter email" className="form-control" />
                </div>
              </div>
              <div className='form-group row mb-3'>
                <label htmlFor="password" className="col-md-2 col-form-label">Password</label>
                <div className="col-md-10">
                  <Field type="password" name="password" placeholder="Password" className="form-control" />
                </div>
              </div>
              <button type="submit" className="btn btn-primary col-12 col-md-12">Submit</button>
            </Form>
          </div>
          <div className='col-12 col-md-8 rounded border border-dark p-4 text-center'>
            <span>Нет аккаунта? </span>
            <a href='/signup'>Регистрируйтесь</a>
          </div>
        </div>
      )}
    </Formik>
  );
};