import { useFormik } from 'formik';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';

import { ChatFormField, ChatFormButton } from '../UI';

export default ({ addMessage, channelId, username = 'abobab' }) => {
  const dispatch = useDispatch();
  // console.log('channelId in ChatForm:', channelId)
  const formik = useFormik({
    initialValues: { body: '' },
    onSubmit: ({ body }) => {
      const message = { body, channelId, username };
      console.log(JSON.stringify(message), 'submit');
      alert(JSON.stringify(message, null, 2));
      try {
        dispatch(addMessage(message));
      } catch (e) {
        formik.setSubmitting(false);
        console.log(e.message);
      }
    },
  });

  return (
    <Form
      onSubmit={formik.handleSubmit}
      className="row rounded border border-dark"
    >
      <ChatFormField
        fieldName="body"
        styles="col-7 col-md-11"
        handleChange={formik.handleChange}
        fieldValue={formik.values.body}
        errorText={formik.errors.body}
        isTouched={formik.touched.body}
      />
      <ChatFormButton styles="col-1 col-md-1 btn btn-group-vertical" />
    </Form>
  );
};
