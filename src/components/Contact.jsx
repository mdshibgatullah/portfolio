import React from 'react';

function Contact() {
  const contactDetails = [
    { label: "PHONE", val: "+880 1880-960014", href: "tel:+8801880960014" },
    { label: "WHATSAPP", val: "01880-960014", href: "#" },
    { label: "TELEGRAM", val: "01880-960014", href: "#" },
    { label: "EMAIL", val: "mdshibgatullah94@gmail.com", href: "mailto:mdshibgatullah94@gmail.com" }
  ];

  return (
    <section className="bg-raised" id="contact">
      <div className="container">
        <div className="section-head reveal">
          <div className="eyebrow">Get in touch</div>
          <h2>Contact <span className="accent">Me</span></h2>
          <p>Have a project in mind? I'd love to hear about it.</p>
        </div>
        
        <div className="contact-card reveal mb-5">
          <div className="row g-0">
            <div className="col-md-7 contact-info">
              {contactDetails.map((item, idx) => (
                <div key={idx} className="contact-row">
                  <span className="label">{item.label}</span>
                  <a href={item.href} className="value">{item.val}</a>
                </div>
              ))}
              <div className="social-row">
                <a href="#" className="social-icon" aria-label="LinkedIn"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.5 2h-17A1.5 1.5 0 0 0 2 3.5v17A1.5 1.5 0 0 0 3.5 22h17a1.5 1.5 0 0 0 1.5-1.5v-17A1.5 1.5 0 0 0 20.5 2ZM8 19H5v-9h3ZM6.5 8.25A1.75 1.75 0 1 1 8.3 6.5a1.78 1.78 0 0 1-1.8 1.75ZM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0 0 13 14.19a.66.66 0 0 0 0 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 0 1 2.7-1.4c1.55 0 3.36.86 3.36 3.66Z"/></svg></a>
                <a href="#" className="social-icon" aria-label="GitHub"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-3.16 19.5c.5.1.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34a2.65 2.65 0 0 0-1.1-1.46c-.9-.62.07-.6.07-.6a2.1 2.1 0 0 1 1.53 1.03 2.13 2.13 0 0 0 2.91.83 2.14 2.14 0 0 1 .63-1.34c-2.22-.25-4.56-1.11-4.56-4.94a3.87 3.87 0 0 1 1.03-2.69 3.6 3.6 0 0 1 .1-2.65s.84-.27 2.75 1.02a9.48 9.48 0 0 1 5 0c1.91-1.3 2.75-1.02 2.75-1.02a3.6 3.6 0 0 1 .1 2.65 3.87 3.87 0 0 1 1.03 2.69c0 3.84-2.34 4.68-4.57 4.93a2.39 2.39 0 0 1 .69 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2Z"/></svg></a>
                <a href="#" className="social-icon" aria-label="Facebook"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12Z"/></svg></a>
              </div>
            </div>
            <div className="col-md-5 contact-qr">
              <div className="qr-frame">
                <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://wa.me/8801880960014" alt="WhatsApp QR code" />
              </div>
              <div className="name">Md. Shibgatullah Sifat</div>
              <div className="role">Scan to WhatsApp</div>
            </div>
          </div>
        </div>

        <div className="cta-band reveal mt-5">
          <h2>Let's build something together</h2>
          <p>Currently open to freelance projects and full-time roles.</p>
          <a href="mailto:mdshibgatullah94@gmail.com" className="btn-portfolio btn-portfolio-primary">Start a conversation →</a>
        </div>
      </div>
    </section>
  );
}

export default Contact;