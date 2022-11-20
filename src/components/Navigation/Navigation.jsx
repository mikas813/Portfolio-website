import './navigation.scss'
import {getNode} from '../../utils'

export const Navigation = () => {  

    const rotateBox = (e) => {
        e.preventDefault()
        getNode('#box').classList.value = '';
        getNode('#message-side').innerHTML = '';
        getNode('#box').classList.add(e.target.dataset.side);
        if (e.target.dataset.side === 'show-front' &&
            getNode('.about-side').classList.contains('empty')) {
            getNode('.about-side').classList.remove('empty');
        }
    };
    return (
        <nav>
            <ul>
                <li>
                    <a  href='/'
                        data-side='show-top'
                        onClick={(e) => rotateBox(e)}
                    >home
                    </a>
                </li>
                <li>
                    <a href='/'
                        data-side='show-front'
                        onClick={(e) => rotateBox(e)}
                    >about
                    </a>
                </li>
                <li>
                    <a href='/'
                        data-side='show-bottom'
                        onClick={(e) => rotateBox(e)}
                    >contacts
                    </a>
                </li> 
            </ul>
        </nav>
    );
};

