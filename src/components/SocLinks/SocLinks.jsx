import { GitHub, LinkedIn } from '../../svg/icons';
import './socLinks.scss'; 
import useContent from '../../hooks/useContent'

export const SocLinks = () => {
    const [content, isLoading] = useContent(); 
    return (
        <div className="soc">
            <ul>
                <li>
                    <a
                        target='_blank'
                        href="https://www.linkedin.com/in/mykhailo-lasiichuk-a1308611b/"
                        rel="noreferrer"
                    >
                        <LinkedIn />
                    </a>
                </li>
                <li>
                    <a
                        rel="noreferrer"
                        target='_blank'
                        href="https://github.com/mikas813">
                        <GitHub />
                    </a>
                </li>
                {!isLoading && content[0].fields.salesforceCertificationImages.map(el => (
                        <li key={el.sys.id} className="certificate">
                        <a rel="noreferrer"
                            target='_blank'
                                href={el.fields.title}>
                            <img src={el.fields.file.url} alt="Salesforce Marketing Cloud Email Specialist certificate" />
                        </a>
                    </li>
                ))} 
            </ul>
        </div>
    )
}