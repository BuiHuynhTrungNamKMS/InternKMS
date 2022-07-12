import { SocialIconProps } from "../Model/Module";

const SocialIcon: React.FC<SocialIconProps> = (props) => {
    return (
            <a className="link" href="#" data-tippy-content={props.content}><svg className="h-6 fill-current text-gray-600 hover:text-green-700" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <title>{props.title}</title>
                <path d={props.path} />
                </svg>
            </a>
    );
}
export default SocialIcon;