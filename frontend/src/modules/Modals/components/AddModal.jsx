import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';

import { object, string } from 'yup';
import { Form, Modal } from 'react-bootstrap';

import { AuthFormField, FormBtnGroup } from '../../../UI';

const AddModal = ({ handleClose, handleAction, existingChannelNames }) => {
  const { t } = useTranslation();

  const validationSchema = object({
    name: string()
      .trim()
      .required('required')
      .notOneOf(existingChannelNames, 'notUniqueChannel')
      .min(3, 'min3chars')
      .max(20, 'max20chars'),
  });

  const formik = useFormik({
    initialValues: { name: '' },
    validationSchema,
    onSubmit: async ({ name }) => {
      try {
        handleAction(name);
        handleClose();
      } catch (error) {
        console.log('error.message:', error.message);
      }
    },
    validateOnChange: false,
    validateOnBlur: false,
  });

  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title>{t('modals.title.add')}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form onSubmit={formik.handleSubmit} autoComplete="off">
          <AuthFormField
            type="text"
            fieldName="name"
            handleChange={formik.handleChange}
            fieldValue={formik.values.name}
            errorText={formik.errors.name}
            isTouched={formik.touched.name}
          />
          <FormBtnGroup
            handleClose={handleClose}
            textCloseBtn={t('modals.btnText.cancel')}
            textActionBtn={t('modals.btnText.add')}
          />
        </Form>
      </Modal.Body>
    </>
  );
};

export default AddModal;
