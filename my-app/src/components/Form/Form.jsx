// Form.jsx
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Form.scss';

const Form = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_6krahor', 'template_0luic7k', e.target, '5Ys9iuvvGJuA0qfxT')
            .then((result) => {
                console.log(result.text);
                alert('Message Sent Successfully!');
            }, (error) => {
                console.log(error.text);
                alert('Failed to Send Message');
            });

        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            subject: '',
            message: ''
        });
    };

    return (
        <div className='form-container'>

            <form onSubmit={handleSubmit}>

                <div className='first-last-name-container'>

                    <div className='first-name-container'>
                        <label className='first-name-label'>First Name</label>
                        <input className='first-name-input' type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
                    </div>

                    <div className='last-name-container'>
                        <label className='last-name-label'>Last Name</label>
                        <input className='last-name-input' type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
                    </div>

                </div>

                <div className='email-subject-container'>

                    <div className='email-container'>
                        <label className='email-label'>Email</label>
                        <input className='email-input' type="email" name="email" value={formData.email} onChange={handleChange} required />
                    </div>

                    <div className='subject-container'>
                        <label className='subject-label'>Subject</label>
                        <input className='subject-input' type="text" name="subject" value={formData.subject} onChange={handleChange} required />
                    </div>

                </div>

                <div className='message-container'>
                    <label className='message-label'>Message</label>
                    <textarea className='message-textarea' name="message" value={formData.message} onChange={handleChange} required></textarea>
                </div>
                <div className='button-container'>
                    <button type="submit">SEND</button>
                </div>
            </form>

        </div>
    );
};

export default Form;
