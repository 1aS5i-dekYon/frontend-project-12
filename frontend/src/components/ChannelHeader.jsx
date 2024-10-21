import { AddChannelButton } from '../UI';

export default ({ handleAddChannel }) => (
  <div className="d-flex mt-1 justify-content-between mb-2 ps-4 pe-2 p-4">
    <b>Каналы</b>
    <AddChannelButton handleClick={handleAddChannel} />
  </div>
);
