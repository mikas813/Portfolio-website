import './index.scss'
import emailjs from 'emailjs-com';

export const ContactSide = () => {
    const sendEmail = (e) => {
        e.preventDefault();
        document.getElementById('box').classList.value = '';
        document.getElementById('box').classList.add('rotate');
        // emailjs.sendForm('service_yx4jqaf', 'template_1u82alm', e.target, 'user_3hIFmLZWQw8fFEPF6xpY0')
        //     .then((response) => {
        //         console.log('SUCCESS!', response.status, response.text, e.target);
        //     }, (error) => {
        //         console.log('FAILED...', error);
        //     });
    };

    return (
        <div className='contact-side'>
            <h2>Get in touch</h2>
            <form onSubmit={sendEmail}>

                <label htmlFor="">Enter your e-mail</label>
                <input
                    name="email"
                    type="text"
                    />

                <label htmlFor="">Enter your message</label>
                <textarea
                    name="message"
                    cols="30"
                    rows="10">
                </textarea>
                <button type="submit">Send</button>
            </form>
        </div>
    )
};