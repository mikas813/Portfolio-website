import './index.scss';
import {content} from '../../data';

export const Navigation = () => {

    const type = () => {
        const textWrapper = document.getElementById('about-side');
        const arr = content.aboutText.split('');
        if (textWrapper.classList.value !== 'not-empty') {
            for (let i = 0; i < arr.length; i++) {
                (() => {
                    setTimeout(() => {
                        textWrapper.innerHTML += arr[i];
                    }, i * 50);
                })();
            }
        }
        textWrapper.classList.add('not-empty');
    };

    const rotateBox = (e) => {
        const box = document.querySelector('#box');
        box.classList.value = '';
        box.classList.add(e.target.dataset.side);
        if (e.target.dataset.side === 'show-front') {
            type();
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

