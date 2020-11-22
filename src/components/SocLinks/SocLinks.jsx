import {GitHub, LinkedIn} from '../../svg/icons';
import './index.scss'
export const SocLinks = () => (
    <div className="soc">
        <ul>
            <li>
                <a target='_blank'
                   href="https://www.linkedin.com/in/mikael-lasichuk-a1308611b/"
                ><LinkedIn/></a>
            </li>
            <li>
                <a target='_blank'
                   href="https://github.com/mikas813"><GitHub/></a>
            </li>
        </ul>
    </div>
);