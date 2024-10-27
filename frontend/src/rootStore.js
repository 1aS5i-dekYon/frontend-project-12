import { configureStore } from '@reduxjs/toolkit';
import { loginFormReducer } from './modules/LoginForm';
import { registrationFormReducer } from './modules/RegistrationForm';
import { channelsReducer } from './modules/ChannelsList';
import { messagesReducer } from './modules/ChatArea';
import { modalReducer } from './modules/Modals';

export default configureStore({
  reducer: {
    loginData: loginFormReducer,
    registrationData: registrationFormReducer,
    messages: messagesReducer,
    channels: channelsReducer,
    modal: modalReducer,
  },
});
