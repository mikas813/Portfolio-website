import {GitHub, LinkedIn} from '../../svg/icons';
import './socLinks.scss';
import sfmca from '../../img/sfmca.png'
import sfmces from '../../img/sfmces.png'
import sfmcpac from '../../img/sfmcpap.png' 
export const SocLinks = () => (
    <div className="soc">
        <ul>
            <li>
                <a
                    target='_blank'
                    href="https://www.linkedin.com/in/mykhailo-lasiichuk-a1308611b/"
                    rel="noreferrer"
                >
                    <LinkedIn/>
                </a>
            </li>
            <li>
                <a
                    rel="noreferrer"
                    target='_blank'
                    href="https://github.com/mikas813">
                    <GitHub/>
                </a>
            </li>
            <li class="certificate">
                <a
                    rel="noreferrer"
                    target='_blank'
                    href="https://trailhead.salesforce.com/de/credentials/certification-detail-print/?searchString=xg2TNSZ14sqp46mSAdgpc0vj2ttVhuwK/OghcTDNgGy3KRkIcbWFGWgnh0GqdUrm">
                    <img src={sfmces} alt="Salesforce Marketing Cloud Email Specialist certificate" />
                </a>
            </li>
            <li class="certificate">
                <a
                    rel="noreferrer"
                    target='_blank'
                    href="https://trailhead.salesforce.com/de/credentials/certification-detail-print/?searchString=xg2TNSZ14sqp46mSAdgpc0vj2ttVhuwK/OghcTDNgGy3KRkIcbWFGWgnh0GqdUrm">
                    <img src={sfmca} alt="Salesforce Marketing Cloud Administrator certificate" />
                </a>
            </li>
            <li class="certificate">
                <a
                    rel="noreferrer"
                    target='_blank'
                    href="https://www.credly.com/badges/7d9c093e-e00c-43d1-badd-b36c33b3b498/linked_in_profile">
                    <img src={sfmcpac} alt="Salesforce Marketing Cloud Personalization Acredited Professional certificate" />
                </a>
            </li>
        </ul>
    </div>
);