import { Form, Button } from 'react-bootstrap';

export default ({
  handleClose,
  actionBtnStyle = 'primary',
  textCloseBtn,
  textActionBtn,
}) => (
  <Form.Group className="d-flex gap-2 col-12 justify-content-end">
    <Button variant="outline-primary" onClick={handleClose}>
      {textCloseBtn}
    </Button>
    <Button variant={actionBtnStyle} type="submit">
      {textActionBtn}
    </Button>
  </Form.Group>
);
