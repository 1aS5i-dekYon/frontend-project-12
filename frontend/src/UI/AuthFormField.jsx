import Form from 'react-bootstrap/Form';

export default ({
  handleChange,
  type,
  fieldName,
  fieldValue,
  errorText = null,
  isTouched,
}) => (
  <Form.Group className="mb-3">
    <Form.Label className="col-md-2">{fieldName}</Form.Label>
    <Form.Control
      controlid={fieldName}
      name={fieldName}
      className="col-12 col-md-10"
      type={type}
      placeholder={`Введите ${fieldName.toLowerCase()}`}
      onChange={handleChange}
      value={fieldValue}
      isInvalid={errorText && isTouched}
    />
    <Form.Control.Feedback type="invalid">{errorText}</Form.Control.Feedback>
  </Form.Group>
);
