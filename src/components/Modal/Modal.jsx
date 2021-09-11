import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setModalOpen, setModalClose } from '../../redux/modal/modal';
import { Modal, Button } from 'react-bootstrap';
import CartQuickView from '../Cart/CartQuickView';

const ModalWindow = () => {
  const dispatch = useDispatch();
  const isOpened = useSelector(state => state.modalInfoReducer.isOpened);

  return (
    <>
      <Modal show={isOpened} onHide={() => dispatch(setModalClose())} size="lg">
        <Modal.Body>
          <CartQuickView />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalWindow;
