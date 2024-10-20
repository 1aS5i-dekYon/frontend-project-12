import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { Form, Modal } from 'react-bootstrap';

import { FormBtnGroup } from '../../../UI';
import { selectors as modalSelectors } from '../modalSlice.js';

const RemoveChannel = ({ handleClose, handleAction }) => {
  const { t } = useTranslation();

  const { channelId } = useSelector(modalSelectors.getModalContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      handleAction(channelId);
      handleClose();
    } catch (error) {
      console.log('error.message', error.message);
    }
  };

  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title>{t('modals.title.remove')}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <div>
          <p>{t('modals.warning.remove')}</p>
        </div>
        <Form onSubmit={handleSubmit}>
          <FormBtnGroup
            handleClose={handleClose}
            textCloseBtn="close"
            textActionBtn="remove"
          />
        </Form>
      </Modal.Body>
    </>
  );
};
export default RemoveChannel;
