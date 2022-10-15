import {type} from '../../../utils';
import {content} from '../../../data'; 
import './contacts.scss' 
const { validate } = require('email-validator');

export const ContactSide = () => {
    const showForm = (el) => {
        el.classList.value = '';
        el.classList.add('show-bottom');
        document.querySelector('#message-side').innerHTML = '';
    }
    const emailHost = 'https://mikas.dev/prj/send/send.php';
    const to = 'mishalas@icloud.com'
    const sendEmail = async (e) => {
        const box = document.getElementById('box');
        const form = document.querySelector('form');
        e.preventDefault(); 
        const { email, message } = e.target;
        box.classList.value = '';
        box.classList.add('rotate'); 
        try {
            if (email.value === '') {
                type(content.noEmail, 'message-side');
                setTimeout(() => showForm(box), 2500)
                return false
            }
            if (!validate(email.value)) {
                type(content.wrongEmail, 'message-side');
                setTimeout(() => showForm(box), 2500)
                return false
            } 
            if (message.value === '') {
                type(content.noMessage, 'message-side');
                setTimeout(() => showForm(box), 2500)
                return false
            }
            fetch(`${emailHost}?email=${to}&subject=Message%20from%20your%20site&message=Message%20${message.value
                }.Submiter%20email:%20${email.value}`); 
            box.classList.value = '';
            box.classList.add('rotate'); 
            type(content.message, 'message-side');
            form.reset()  
            setTimeout(() => {
                box.classList.value = 'show-bottom';
                document.querySelector('#message-side').innerHTML = '';

            }, 2500)
        } catch (e) {
            type(content.error, 'message-side');
            setTimeout(() => {
                box.classList.value = '';
                box.classList.add('show-bottom');
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