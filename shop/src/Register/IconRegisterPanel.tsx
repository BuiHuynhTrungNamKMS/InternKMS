import { LoginIconData } from '../constants';
import LoginIcon from './RegisterIcon';

const IconRegisterPanel: React.FC = () => {
  return (
    <div className="flex flex-row items-center justify-center lg:justify-start">
      <p className="text-lg mb-0 mr-4">Sign in with</p>
      {LoginIconData.map((item) => (
        <LoginIcon viewBox={item.viewBox} path={item.path} key={item.id} />
      ))}
    </div>
  );
};
export default IconRegisterPanel;
