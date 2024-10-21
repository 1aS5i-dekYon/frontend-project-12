import { Button } from 'react-bootstrap';

export default ({
  buttonName,
  isActive,
  variant,
  handleSelect,
}) => (
  <Button
    active={isActive}
    variant={variant}
    className="btn w-100 text-start rounded border border-dark"
    onClick={handleSelect}
  >
    <strong className="h4"># </strong>
    <span>{buttonName}</span>
  </Button>
);
