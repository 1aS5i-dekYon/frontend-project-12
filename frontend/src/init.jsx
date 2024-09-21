import { Provider } from 'react-redux';
// import './index.css';
// import './styles.scss';
// import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.jsx';
import store from './rootStore.js';

const init = async () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default init;
