import Form from 'react-bootstrap/Form';

export default ({
  handleChange,
  fieldName,
  fieldValue,
  isTouched,
  errorText = null,
  styles = null,
}) => (
  <Form.Group className={styles}>
    <Form.Control
      controlid={fieldName}
      name={fieldName}
      type="text"
      placeholder={`Введите ${fieldName.toLowerCase()}`}
      onChange={handleChange}
      value={fieldValue}
      isInvalid={errorText && isTouched}
    />
  </Form.Group>
);

// сделать этот код в папке компонентов ChatArea и подключить к нему нужные танки
// отдельно сделать форму с с кнопкой svg в UI/
