import { useTranslation } from 'react-i18next';
import { Button, ButtonGroup, Dropdown } from 'react-bootstrap';

export default ({
  buttonName,
  isActive,
  variant,
  handleSelect,
  handleRemoveChannel,
  handleRenameChannel,
}) => {
  const { t } = useTranslation();

  return (
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
        <span className="visually-hidden">{t('channels.actions')}</span>
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item onClick={handleRenameChannel}>{t('channels.rename')}</Dropdown.Item>
        <Dropdown.Item onClick={handleRemoveChannel}>{t('channels.remove')}</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
