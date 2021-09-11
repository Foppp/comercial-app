import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import CartQuickView from '../Cart/CartQuickView';

const ModalWindow = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant='primary' onClick={handleShow}>
        Launch demo modal
      </Button>
      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Body>
          <CartQuickView onClose={handleClose}/>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalWindow;
