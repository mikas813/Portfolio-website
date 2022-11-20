import {ContactSide} from './ContactSide/Contacts';
import './cube.scss'
import { TextWrapper } from '../TextWrapper'
import useContent from '../../hooks/useContent'

export const Cube = () => {
    const [content, isLoading] = useContent();
    return (
        <div className="scene">
            <div id="box" className="show-top">
                <div className="box__face box__face--front">
                    <div className='about-side empty'> 
                        <TextWrapper props={{ content, isLoading, type: 2 }} />
                    </div>
                </div>
                <div className="box__face box__face--top">
                    <div className='home-side'>
                        <h1 id='home-side_title'>Hello!</h1>
                        <TextWrapper props={{content, isLoading, type: 1}}/>
                    </div>
                </div>
                <div className="box__face box__face--bottom">
                    <ContactSide/>
                </div>
                <div className="box__face box__face--back">
                    <p id="message-side">
                    </p>
                </div>
            </div>
        </div>

    );
};