import React from 'react';

const ContactPage = () => {
    return (
        <div style={{ padding: '20px' }}>
            <div className="font-bold text-black text-center mb-5 bg-blue-100 w-full rounded-lg h-full">
                <div className="py-2"/>
                <h1>Contact Us</h1>
                <form>
                    
                    <div style={{ marginBottom: '10px' }}>
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" required />
                    </div>
                    <div style={{ marginBottom: '10px' }}>
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div style={{ marginBottom: '10px' }}>
                        <label htmlFor="message">Message:</label>
                        <textarea id="message" name="message" required></textarea>
                    </div>
                    <button className="bg-blue-500 text-white mt-2 p-2 rounded shadow-xl" type="submit">Submit</button>
                    <div className="py-2"/>
                </form>
            </div>
        </div>
    );
};

export default ContactPage;