import { useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';

import { object, string } from 'yup';
import { Form, Modal } from 'react-bootstrap';

import { selectors as modalSelectors } from '../modalSlice.js';
import { AuthFormField, FormBtnGroup } from '../../../UI';

const RenameChannel = ({ handleClose, handleAction, existingChannelNames }) => {
  const { t } = useTranslation();

  const { channelId, channelName } = useSelector(modalSelectors.getModalContext);

  const otherChannelNames = existingChannelNames
    .filter((name) => name !== channelName);

  const validationSchema = object({
    name: string()
      .trim()
      .required('errors.required')
      .notOneOf(otherChannelNames, 'errors.notUniqueChannel')
      .min(3, 'errors.outOfLenght')
      .max(20, 'errors.outOfLenght'),
  });

  const formik = useFormik({
    initialValues: { name: '' },
    validationSchema,
    onSubmit: async ({ name }) => {
      try {
        handleAction(channelId, name);
        handleClose();
      } catch (error) {
        console.log('error.message', error.message);
      }
    },
    validateOnChange: false,
    validateOnBlur: false,
  });

  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title>{t('modals.title.rename')}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form onSubmit={formik.handleSubmit} autoComplete="off">
          <AuthFormField
            type="text"
            fieldName="name"
            handleChange={formik.handleChange}
            fieldValue={formik.values.name}
            errorText={t(formik.errors.name)}
            isTouched={formik.touched.name}
          />
          <FormBtnGroup
            handleClose={handleClose}
            textCloseBtn={t('modals.btnText.cancel')}
            textActionBtn={t('modals.btnText.rename')}
          />
        </Form>
      </Modal.Body>
    </>
  );
};

export default RenameChannel;
