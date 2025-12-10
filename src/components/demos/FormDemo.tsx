import React, { useState, type FormEvent } from 'react';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

function validateEmail(email: string): boolean {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  return emailRegex.test(email);
}

const FormDemo: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData: any) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);

      const errors: string[] = [];
      
      if (!validateEmail(formData.email)) {
      errors.push("Please enter a valid email");
    }

      if (errors.length > 0) {      
      alert(errors.join(". "));      
    } else {
      alert("Thank you for your message! (This is a demo form)");
      setFormData({ name: '', email: '', subject: '', message: '' }); // Clear form
    }
    
  };

  return (
    <form className="card-item" onSubmit={handleSubmit} >
      <div >
        <label className="label" htmlFor="name">Name:</label>
        <input className="input"
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label className="label" htmlFor="email">Email:</label>
        <input className="input"
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label className="label" htmlFor="subject">Subject:</label>
        <input className="input"
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label className="label" htmlFor="message">Message:</label>
        <textarea className="input"
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          required
        />
      </div>
      <button className="roundedButton" type="submit">Send Message</button>
    </form>
  );
};

export default FormDemo;