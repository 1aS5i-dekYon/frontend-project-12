import Form from 'react-bootstrap/Form';
import { useTranslation } from 'react-i18next';

export default ({
  handleChange,
  type,
  fieldName,
  fieldValue,
  errorText = null,
  isTouched,
}) => {
  const { t } = useTranslation();

  const labelName = t(`field.label.${fieldName}`);
  const placeholder = t(`field.enter.${fieldName}`);
  const error = errorText && t(`errors.${errorText}`);

  return (
    <Form.Group className="mb-3">
      <Form.Label className="col-md-2">{labelName}</Form.Label>
      <Form.Control
        controlid={fieldName}
        name={fieldName}
        className="col-12 col-md-10"
        type={type}
        placeholder={placeholder}
        onChange={handleChange}
        value={fieldValue}
        isInvalid={errorText && isTouched}
      />
      <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>
    </Form.Group>
  );
};
