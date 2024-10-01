export default ({ buttonName, buttonId }) => (
  <button id={buttonId} type="button" className="btn w-100 text-start rounded border border-dark">
    <strong className="h4"># </strong>
    <span>{buttonName}</span>
  </button>
);
