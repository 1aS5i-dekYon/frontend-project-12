// import { RegistrationFooter } from '../UI';
import { ChannelsList } from '../modules/ChannelsList';
import { ChatArea } from '../modules/ChatArea';

const Chatpage = () => (
  <div className="row container h-100 col-12 col-md-8">
    <ChannelsList />
    <ChatArea />
  </div>
);

export default Chatpage;

// работаем чеез сокеты в отдельных модулях и все работает заебато!!! )) я рад
