import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { getMessages, addMessage } from './messagesThunks.js';
import { selectors } from './messagesSlice.js';

import { ChatForm } from '../../components';
import { ChatHeader, Message } from '../../UI';

export default ({ activeChannelName, activeChannelId }) => {
  const dispatch = useDispatch();
  
  const activeChannelMessages = useSelector(selectors.selectAll)
    .filter(({ channelId }) => Number(channelId) === Number(activeChannelId));

  console.log('activeChannelMessages:', activeChannelMessages);
  // console.log('curentChannelMessages:', currentChannelMessages);

  useEffect(() => {
    dispatch(getMessages());
  }, [activeChannelId]);

  return (
    <section className="col d-flex flex-column h-100 rounded bg-light-blue shadow">
      <ChatHeader channelName={activeChannelName} messagesCount={activeChannelMessages.length} />
      <div className="overflow-auto m-3">
        {
          activeChannelMessages.map(({ username, body }) => (
            <Message 
              authUserName={username}
              username={username}
              messageText={body}
            />
          ))
        }
      </div>
      <div className="mt-auto p-0 mb-3 mx-3">
        <ChatForm addMessage={addMessage} channelId={activeChannelId} />
      </div>
    </section>
  );
};

// getUserName() cделать для получения имени авторизованного пользователя из localStorage,
// которое мы потом прокидываем в <Message />
