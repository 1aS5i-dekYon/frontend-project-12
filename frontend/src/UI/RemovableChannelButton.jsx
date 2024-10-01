export default ({
  buttonName, buttonId, handleRemove, handleRename,
}) => (
  <div key={buttonId} className="btn-group w-100" role="group">
    <button type="button" className="btn dropdown-toggle text-start rounded border border-dark" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      <strong className="h4"># </strong>
      <span>{buttonName}</span>
    </button>
    <div className="dropdown-menu" aria-labelledby={buttonId}>
      <button type="button" className="dropdown-item" onClick={handleRemove}>Удалить</button>
      <button type="button" className="dropdown-item" onClick={handleRename}>Переименовать</button>
    </div>
  </div>
);
