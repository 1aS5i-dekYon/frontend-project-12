import { Button, ButtonGroup, Dropdown } from 'react-bootstrap';

export default ({
  buttonName,
  isActive,
  variant,
  handleSelect,
  handleRemoveChannel,
  handleRenameChannel,
}) => (
  <Dropdown as={ButtonGroup} className="w-100 rounded border border-dark">
    <Button
      active={isActive}
      variant={variant}
      className="text-start text-truncate me-auto"
      onClick={handleSelect}
    >
      <strong className="h4"># </strong>
      <span>{buttonName}</span>
    </Button>

    <Dropdown.Toggle
      active={isActive}
      split
      variant={variant}
      className="border-0 flex-grow-0"
    >
      <span className="visually-hidden">Действия над каналом</span>
    </Dropdown.Toggle>
    <Dropdown.Menu>
      <Dropdown.Item onClick={handleRenameChannel}>Переименовать</Dropdown.Item>
      <Dropdown.Item onClick={handleRemoveChannel}>Удалить</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
);
