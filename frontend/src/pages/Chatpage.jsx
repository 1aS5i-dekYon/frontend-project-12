import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

import { ChannelsList, channelsSelector, channelsThunks } from '../modules/ChannelsList';
import { ChatArea } from '../modules/ChatArea';
import { ChannelModal, modalActions } from '../modules/Modals';

const Chatpage = () => {  
  const dispatch = useDispatch();

  const addChannel = () => {
    dispatch(modalActions.open({ type: 'add' }));
  };

  const renameChannel = (id, name) => () => {
    const context = {
      channelId: id,
      channelName: name,
    };
    dispatch(modalActions.open({ type: 'rename', context }));
  };

  const removeChannel = (id, name) => () => {
    const context = {
      channelId: id,
      channelName: name,
    };
    dispatch(modalActions.open({ type: 'remove', context }));
  };

  const handles = { addChannel, renameChannel, removeChannel };

  const existingChannelNames = useSelector((state) => channelsSelector.selectAll(state)
    .map(({ name }) => name));

  const [{ activeChannelName, activeChannelId }, setActiveChannel] = useState({ activeChannelName: 'general', activeChannelId: 1 });

  return (
    <div className="container h-100">
      <div className="row h-100 justify-content-center align-content-center">
        <ChannelsList
          actions={handles}
          activeChannelId={activeChannelId}
          handleClick={setActiveChannel}
        />
        <ChatArea
          activeChannelName={activeChannelName}
          activeChannelId={activeChannelId}
        />
        <ChannelModal
          actions={channelsThunks}
          existingChannelNames={existingChannelNames}
        />
      </div>
    </div>
  );
};

export default Chatpage;
