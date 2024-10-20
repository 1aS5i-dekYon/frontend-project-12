import { useDispatch, useSelector } from 'react-redux';

import Modal from 'react-bootstrap/Modal';

import { selectors as modalSelectors, actions as modalActions } from './modalSlice.js';
import { AddModal, RenameModal, RemoveModal } from './components';

const ChannelModal = ({ actions, existingChannelNames }) => {
  const dispatch = useDispatch();

  const actionMap = {
    add: (name) => dispatch(actions.addChannel(name)),
    rename: (id, name) => dispatch(actions.editChannel({ id, name })),
    remove: (id) => dispatch(actions.removeChannel(id)), 
  };

  const modalMap = {
    add: AddModal,
    rename: RenameModal,
    remove: RemoveModal,
  };

  const handleClose = () => dispatch(modalActions.close());
  const isOpen = useSelector(modalSelectors.isModalOpen);
  const modalType = useSelector(modalSelectors.getModalType);

  const CurrentModal = modalMap[modalType];
  const currentAction = actionMap[modalType];

  return (
    <Modal
      show={isOpen}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
    >
      { CurrentModal
        ? (
          <CurrentModal
            handleClose={handleClose}
            handleAction={currentAction}
            existingChannelNames={existingChannelNames}
          />
        )
        : null }
    </Modal>
  );
};

export default ChannelModal;
