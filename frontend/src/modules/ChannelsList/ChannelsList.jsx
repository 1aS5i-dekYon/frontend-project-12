import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { getChannels, removeChannel, editChannel } from './channelsThunks.js';
import { selectors } from './channelsSlice.js';

import { RemovableChannelButton, ConstChannelButton } from '../../UI';

export default ({ activeChannelId, handleClick }) => {
  const dispatch = useDispatch();
  
  const channels = useSelector(selectors.selectAll);
  
  console.log('Channelslist:', channels, activeChannelId, handleClick);

  useEffect(() => {
    dispatch(getChannels());
  }, []);

  return (
    <section className="col-4 col-md-2 text-start border border-dark" role="group" aria-label="Button group with nested dropdown">
      <div className="d-flex mt-1 justify-content-between mb-2 ps-4 pe-2 p-4">
        <b>Каналы</b>
        <button type="button" className="p-0 text-primary btn btn-group-vertical">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="20" height="20" fill="currentColor" />
          <span className="visually-hidden">+</span>
        </button>
      </div>
      { 
        channels.map(({ name, id, removable }) => {
          const channel = { activeChannelId: id, activeChannelName: name };

          const handleRemoveChannel = () => dispatch(removeChannel(id));

          const handleRenameChannel = () => dispatch(editChannel(id));

          if (removable === true) {
            return (
              <RemovableChannelButton
                buttonName={name}
                buttonId={id}
                onRemove={handleRemoveChannel}
                onRename={handleRenameChannel}
                onClick={() => handleClick(channel)}
              />
            );
          };
          return (
            <ConstChannelButton
              buttonName={name}
              buttonId={id}
              onClick={() => handleClick(channel)}
            />
          );
        })
      }
    </section>
  );
};