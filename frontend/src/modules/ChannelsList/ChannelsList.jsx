import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { getChannels } from './channelsThunks.js';
import { selectors } from './channelsSlice.js';

import { ChannelHeader } from '../../components';
import { ConstChannelButton, RemovableChannelButton } from '../../UI';

export default ({ actions, handleClick, activeChannelId}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getChannels());
  }, [activeChannelId]);
  
  const channels = useSelector(selectors.selectAll);
  // console.log('Channelslist:', channels, 'activeChannelId:', activeChannelId, 'handleClick:', handleClick);

  return (
    <section
      className="col-4 col-md-2 h-100 text-start rounded-3 me-3 bg-khaki shadow"
      aria-label="Button group with nested dropdown"
      role="group"
    >
      <ChannelHeader handleAddChannel={actions.addChannel} />
      { 
        channels.map(({ name, id, removable }) => {
          const channel = { activeChannelId: id, activeChannelName: name };
          const isActive = id === activeChannelId;
          const variant = isActive ? 'secondary' : null;
          const ChannelButton = removable ? RemovableChannelButton : ConstChannelButton;
          
          return (
            <ChannelButton
              buttonName={name}
              isActive={isActive}
              variant={variant}
              handleRemoveChannel={actions.removeChannel(id, name)}
              handleRenameChannel={actions.renameChannel(id, name)}
              handleSelect={() => handleClick(channel)}
            />
          );
        })
      }
    </section>
  );
};