import styles from './ContactForm.module.css'
import Button from '../Button/Button';
import {MdMessage,MdCall,MdEmail} from 'react-icons/md';
import { useState } from 'react';

const ContactForm =()=>{
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [text,setText] = useState("");

    const onViaCallSubmit = () =>{
        console.log("Via Call");

    }

    const onSubmit = () =>{
        event.preventDefault();
        setName(event.target[0].value);
        setEmail(event.target[1].value);
        setText(event.target[2].value);
    }


    return <section className={styles.container}>
        <div className={styles.contactForm}>
            <div className={styles.top_btn}>
                <Button text="VIA SUPPORT CHAT" icon={<MdMessage fontSize="24px"/>}/>
                <Button onClick={onViaCallSubmit} text="VIA CALL" icon={<MdCall fontSize="24px"/>}/>
            </div>
            <div className={styles.email_btn}>
            <Button isOutline = {true} text="VIA EMAIL FORM" icon={<MdEmail fontSize="24px"/>}/>
            </div>
            <form onSubmit={onSubmit}>
                <div className={styles.form_control}>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" />
                </div>
                <div className={styles.form_control}>
                    <label htmlFor="email">Email</label>
                    <input type="text" id="email" name="email" />
                </div>
                <div className={styles.form_control}>
                    <label htmlFor="text">Text</label>
                    <textarea type="text" id="text" name="text" rows="8"/>
                </div>
                <div style={{display:"flex",justifyContent:"end"}}>
                    <Button text="SUBMIT BUTTON"/>
                </div>
                <div>{name+" "+email+" "+text}</div>
            </form>
        </div>
        <div className={styles.contactImage}>
            <img src="/images/contact.svg" alt="contact image"/>
        </div>
    </section>
}

export default ContactForm;