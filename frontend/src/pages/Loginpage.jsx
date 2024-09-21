import { RegistrationFooter } from '../UI';
import { LoginForm } from '../modules/LoginForm';

const Loginpage = () => (
  <div className="row justify-content-center align-content-center">
    <LoginForm />
    <RegistrationFooter />
  </div>
);

export { loginActions } from '../modules/LoginForm';
export default Loginpage;
