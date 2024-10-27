import { createContext, useContext, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { io } from 'socket.io-client';

import { channelsActions } from '../modules/ChannelsList';
import { messagesActions } from '../modules/ChatArea';

const SocketContext = createContext({});

const socket = io('/', { autoConnect: false });

const SocketProvider = ({ children }) => {
  const dispatch = useDispatch();

  const context = useMemo(() => {
    const connectSocket = () => {
      socket.connect();
      socket.on('newMessage', (message) => {
        dispatch(messagesActions.addMessage(message));
      });
      socket.on('newChannel', (channel) => {
        dispatch(channelsActions.addChannel(channel));
      });
      socket.on('renameChannel', (channel) => {
        dispatch(channelsActions.addChannel(channel));
      });
      socket.on('removeChannel', ({ id }) => {
        dispatch(channelsActions.removeChannel(id));
      });
    };

    const disconnectSocket = () => {
      socket.off();
      socket.disconnect();
    };

    return ({
      connectSocket,
      disconnectSocket,
    });
  }, []);

  return (
    <SocketContext.Provider value={context}>
      {children}
    </SocketContext.Provider>
  );
};

const useSocket = () => useContext(SocketContext);
export { SocketContext, useSocket };
export default SocketProvider;