import { useState } from 'react';

// import { RegistrationFooter } from '../UI';
import { ChannelsList } from '../modules/ChannelsList';
import { ChatArea } from '../modules/ChatArea';

const Chatpage = () => {
  const [{ activeChannelName, activeChannelId }, setActiveChannel] = useState({ activeChannelName: 'general', activeChannelId: 1 });

  return (
    <div className="row justify-content-center align-content-center">
      <ChannelsList
        activeChannelId={activeChannelName}
        handleClick={setActiveChannel}
      />
      <div className="col-10 col-md-6 border border-dark">
        <ChatArea
          activeChannelName={activeChannelName}
          activeChannelId={activeChannelId}
        />
      </div>
    </div>
  );
};

export default Chatpage;

// работаем через ВСЕ сокеты ТУТ и все работает заебато!!! )) я рад
// значения состояния прокидваются во все нужные компоненты и все рады
