import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { getChannels } from './channelsThunks.js';
import { selectors } from './channelsSlice.js';

// import { RemovableChannelButton, ConstChannelButton } from '../../UI';

export default ({ activeChannelId, handleClick }) => {
  const dispatch = useDispatch();
  
  const channels = useSelector(selectors.selectAll);
  // .filter(({ channelId }) => channelId === activeChannelId);
  
  console.log(channels, activeChannelId, handleClick);

  useEffect(() => {
    dispatch(getChannels());
  }, []);

  return (
  <div className="col-4 col-md-2 text-start border border-dark" role="group" aria-label="Button group with nested dropdown">
    <div className="d-flex mt-1 justify-content-between mb-2 ps-4 pe-2 p-4">
      <b>Каналы</b>
      <button type="button" className="p-0 text-primary btn btn-group-vertical">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="20" height="20" fill="currentColor" />
        <span className="visually-hidden">+</span>
      </button>
    </div>
    <button type="button" className="btn text-start w-100 rounded border border-dark"># general</button>
    <button type="button" className="btn w-100 text-start rounded border border-dark">
      <strong className="h4"># </strong>
      random
    </button>
    <div className="btn-group w-100" role="group">
      <button id="btnGroupDrop1" type="button" className="btn dropdown-toggle text-start rounded border border-dark" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <strong className="h4"># </strong>
        dropdown
      </button>
      <div className="dropdown-menu" aria-labelledby="btnGroupDrop1">
        <button type="button" className="dropdown-item">Dropdown links</button>
        <button type="button" className="dropdown-item">Dropdown link</button>
      </div>
    </div>
  </div>)
};
