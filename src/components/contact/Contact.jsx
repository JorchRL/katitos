import { useState } from "react";
import "./contact.scss";

const Contact = () => {
  const [message, setMessage] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setMessage(true);
  };
  return (
    <div className='contact' id='contact'>
      <div className='left'>
        <img src='imgs/shake.svg' alt='' />
      </div>
      <div className='right'>
        <h2>Contact</h2>
        <form onSubmit={handleSubmit}>
          <input type='text' placeholder='Email' />
          <textarea placeholder='Message'></textarea>
          <button type='submit'>Send</button>
          {message && <span>Thank you! I'll get back to you ASAP :)</span>}
        </form>
      </div>
    </div>
  );
};

export default Contact;
