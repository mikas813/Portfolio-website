import {type} from '../../../utils';
import {content} from '../../../data';
import emailjs from 'emailjs-com';
import './contacts.scss'
import config from '../../../config';
import{ init } from 'emailjs-com';
const { validate } = require('email-validator');

export const ContactSide = () => {
  
  
    const sendEmail = async (e) => {
        e.preventDefault();
        init("user_3hIFmLZWQw8fFEPF6xpY0");

        const box = document.getElementById('box');
        const form = document.querySelector('form');
        
        const email = e.target.email.value;
        const emailValid = validate(email);
        box.classList.value = '';
        box.classList.add('rotate');
        let canRotate = false;
        try {
            if (email === '') {
                type(content.noEmail, 'message-side');
            }
            else if (!emailValid) {
                type(content.wrongEmail, 'message-side');
            }
            else {
                await emailjs.sendForm(
                    'service_yx4jqaf',
                    'template_1u82alm',
                    e.target,
                    config.emailJsApiKey);
                type(content.message, 'message-side');
            }
            canRotate = true;
        } catch (e) {
          type(content.error, 'message-side');
          canRotate = true;
          console.warn(e.message)
        }

        if (canRotate) {
            setTimeout(() => {
              box.classList.value = '';
              box.classList.add('show-bottom');
              document.querySelector('#message-side').innerHTML = '';
              form.reset()
            }, 2500)
        }
    };

    return (
        <div className='contact-side'>
            <h2>Get in touch</h2>
            <form onSubmit={sendEmail}>

                <label htmlFor="">E-mail</label>
                <input
                    name="email"
                    type="text"
                />

                <label htmlFor="">Message</label>
                <textarea
                    name="message"
                    cols="30"
                    rows="10">
                </textarea>
                <button type="submit">Send</button>
            </form>
        </div>
    );
};