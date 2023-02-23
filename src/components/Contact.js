import './styles/Contact.css';
import emailjs from 'emailjs-com';

function Contact() {
  const { 
    REACT_APP_SERVICE_ID: serviceID,
    REACT_APP_TEMPLATE_ID: templateID,
    REACT_APP_USER_ID: userID,
  } = process.env

  function sendEmail(e) {
    e.preventDefault();
    
    const templateParams =  e.target;

    emailjs.sendForm(serviceID, templateID, templateParams, userID)
      .then((result) => {
          // console.log(result.text);
      }, (error) => {
          // console.log(error.text);
      });    
    e.target.reset();
  }

  return (
    <div className="Contact" id="contact"> 
      <div className="contact-title">Contact me</div>
      <form className="form" onSubmit={sendEmail}>
        <input type="hidden" name="contact_number" />
        <label>Name</label>
        <input className="name" type="text" name="name" />
        <label > Email </label>
        <input className="email" type="email" name="email" />
        <label>Message</label>
        <textarea className="message" name="message"/>
        <input className="send-button" type="submit" value="Send" />
      </form>
    </div>
  );
}

export default Contact;