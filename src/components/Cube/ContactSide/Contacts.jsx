import './index.scss';
import {type} from '../../../utils';
import {content} from '../../../data';
import emailjs from 'emailjs-com';

export const ContactSide = () => {

    const sendEmail = (e) => {
        e.preventDefault();
        document.getElementById('box').classList.value = '';
        document.getElementById('box').classList.add('rotate');
        emailjs.sendForm(
            'service_yx4jqaf',
            'template_1u82alm',
            e.target,
            'user_3hIFmLZWQw8fFEPF6xpY0').then(() => {
            setTimeout(() => {
                type(content.message, 'message-side');
            }, 5000);
            document.querySelector('form').reset();
        }, () => {
            setTimeout(() => {
                type(content.error, 'message-side');
            }, 5000);
        });
    };

    return (
        <div className='contact-side'>
            <h2>Get in touch</h2>
            <form onSubmit={sendEmail}>

                <label htmlFor="">Enter your e-mail</label>
                <input
                    required
                    name="email"
                    type="email"
                />

                <label htmlFor="">Enter your message</label>
                <textarea
                    required
                    name="message"
                    minLength='10'
                    cols="30"
                    rows="10">
                </textarea>
                <button type="submit">Send</button>
            </form>
        </div>
    );
};