import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { getMessages } from './messagesThunks.js';
import { selectors } from './messagesSlice.js';
// import { ChatHeader } from '../../UI';

export default ({ activeChannelName, activeChannelId }) => {
  const dispatch = useDispatch();
  
  const activeChannelMessages = useSelector(selectors.selectAll)
    .filter(({ channelId }) => channelId === activeChannelId);
  
  console.log(activeChannelMessages);

  useEffect(() => {
    dispatch(getMessages());
  }, []);

  return (
    <div>
      {/* <ChatHeader channelName={activeChannelName} messagesCount={0} /> */}
      <div className="col-10 col-md-6 border border-dark">
        {activeChannelName}
        chat:
        {activeChannelMessages}
        end
      </div>
    </div>
  );
};
