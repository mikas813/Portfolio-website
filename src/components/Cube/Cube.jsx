import './index.scss'
import {content} from '../../data';
import {ContactSide} from './ContactSide/Contacts';


export const Cube = () => {

    const type = () => {
        const arr = content.mainText.split('');
        for (let i = 0; i < arr.length; i++) {
            (() => { setTimeout(() => {
                document.getElementById('home-side').innerHTML += arr[i]
            }, i * 50)
            })()
        }
    };
    window.addEventListener('DOMContentLoaded', type());

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
                </div>
            </div>
        </div>

    );
};