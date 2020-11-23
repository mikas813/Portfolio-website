import './index.scss';
import {content} from '../../data';
import {type} from '../../utils';

export const Navigation = () => {

    const rotateBox = (e) => {
        const box = document.querySelector('#box');
        box.classList.value = '';

        const contMsg = document.querySelector('#messageWrapper');
        contMsg.innerHTML = '';

        box.classList.add(e.target.dataset.side);
        if (e.target.dataset.side === 'show-front') {
            type(content.aboutText, 'about-side');
        }
    };
    return (
        <nav>
            <ul>
                <li>
                    <a
                       data-side='show-top'
                       onClick={(e) => rotateBox(e)}
                    >home
                    </a>
                </li>
                <li>
                    <a
                       data-side='show-front'
                       onClick={(e) => rotateBox(e)}
                    >about
                    </a>
                </li>
                <li>
                    <a
                       data-side='show-bottom'
                       onClick={(e) => rotateBox(e)}
                    >contacts
                    </a>
                </li>
            </ul>
        </nav>
    );
};

