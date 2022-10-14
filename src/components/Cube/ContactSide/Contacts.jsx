import {type} from '../../../utils';
import {content} from '../../../data'; 
import './contacts.scss' 
const { validate } = require('email-validator');
const emailHost = 'https://mikas.dev/prj/send/send.php';
const to = 'mishalas@icloud.com'
export const ContactSide = () => {
  
    const sendEmail = async (e) => {
        e.preventDefault(); 
        const box = document.getElementById('box');
        const form = document.querySelector('form');
        const email = e.target.email.value;
        const message = e.target.message.value;
        const emailValid = validate(email);
        box.classList.value = '';
        box.classList.add('rotate'); 
        try {
            if (email === '') {
                type(content.noEmail, 'message-side');
            }
            else if (!emailValid) {
                type(content.wrongEmail, 'message-side');
            }
            else {
                const res = await fetch(
                    `${emailHost}?email=${to}&subject=Message%20from%20your%20site&message=${message}.Submiter%20email:%20${email}`
                );
                if(res.status === 200) {
                    setTimeout(() => {
                        box.classList.value = '';
                        box.classList.add('show-bottom');
                        document.querySelector('#message-side').innerHTML = 'Message sent!';
                        form.reset()
                    }, 2500)
                }
            }
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