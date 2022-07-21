import { SocialIconProps } from '../Model/Module';

const SocialIcon = ({ content, title, path }: SocialIconProps) => {
  return (
          <a className="link" href="#" data-tippy-content={content}><svg className="h-6 fill-current text-gray-600 hover:text-green-700" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <title>{title}</title>
              <path d={path} />
              </svg>
          </a>
  );
}
export default SocialIcon;