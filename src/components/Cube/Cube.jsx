import './index.scss'
import {content} from '../../data';
import {ContactSide} from './ContactSide/Contacts';
import {type} from '../../utils'


export const Cube = () => {

    window.addEventListener(
        'DOMContentLoaded',
        type(content.mainText, 'home-side')
    );

    return (
        <div className="scene">
            <div id="box" className="show-top">
                <div className="box__face box__face--front">
                    <div className='about-side'>
                        <h2>About me</h2>
                        <p id='about-side'>
                        </p>
                    </div>
                </div>
                <div className="box__face box__face--top">
                    <div className='home-side'>
                        <p id='home-side'>
                        </p>
                    </div>
                </div>
                <div className="box__face box__face--bottom">
                    <ContactSide/>
                </div>
                <div className="box__face box__face--back">
                    <div id="messageWrapper"></div>
                </div>
            </div>
        </div>

    );
};