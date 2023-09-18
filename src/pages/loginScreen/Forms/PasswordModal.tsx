import Modal from 'react-bootstrap/Modal';

function PasswordModal(props: { show: boolean, handleClose: () => void }) {
  const { show, handleClose } = props;
  return (
    <Modal
      size="sm"
      show={show}
      onHide={handleClose}
      aria-labelledby="example-modal-sizes-title-sm"
    >
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-sm">
          Erro!
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>Email ou senha incorreto</Modal.Body>
    </Modal>
  );
}

export default PasswordModal;
