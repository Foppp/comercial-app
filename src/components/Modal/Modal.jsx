import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setModalClose } from '../../redux/modalReducer/modal';
import { Modal } from 'react-bootstrap';
import CartQuickView from '../../pages/Cart/components/CartViewModal';
import SearchModal from '../Search/SearchModal';

const ModalWindow = () => {
  const dispatch = useDispatch();
  const isOpened = useSelector((state) => state.modalInfoReducer.isOpened);
  const type = useSelector((state) => state.modalInfoReducer.type);

  const modals = {
    cart: CartQuickView,
    search: SearchModal,
  };

  const ModalComponent = modals[type];
  
  return (
    <Modal show={isOpened} onHide={() => dispatch(setModalClose())} >
      <Modal.Body>{type && <ModalComponent />}</Modal.Body>
    </Modal>
  );
};

export default ModalWindow;
