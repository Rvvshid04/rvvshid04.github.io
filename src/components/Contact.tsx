import { useState } from 'react';
import { FaEnvelope, FaLinkedin } from 'react-icons/fa';
import emailjs from 'emailjs-com';

const socials = [
  { name: 'Email', url: 'mailto:raashid.arq@gmail.com', icon: <FaEnvelope /> },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/raashid-arquil', icon: <FaLinkedin /> },
];

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [charCount, setCharCount] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (name === 'message') setCharCount(value.length);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await emailjs.send(
        'service_64d1pa6',     
        'template_m7idkak',      
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        'RJS2kL5nX98Pfy_qo'       
      );
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setCharCount(0);
    } catch (error) {
      console.error(error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleNewMessage = () => setSubmitStatus('idle');

  return (
    <section id="contact" className="py-20 bg-white font-sans" aria-labelledby="contact-heading">
      <div className="max-w-4xl mx-auto px-4">
        <h2 id="contact-heading" className="text-4xl md:text-5xl font-extrabold mb-4 text-text">
          Contact me<span className="text-primary">.</span>
        </h2>
        <p className="text-xl text-text-light mb-8">
          I'm always eager to explore new opportunities and take on exciting projects. If you have a project in mind, or just want to say hi, feel free to send me a message.
        </p>

        {submitStatus === 'success' ? (
          <div className="space-y-4">
            <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg" role="alert">
              <p className="font-medium">Thank you for your message! </p>
            </div>
            <button
              onClick={handleNewMessage}
              className="btn-primary w-full flex items-center justify-center gap-2 text-lg bg-primary text-white hover:bg-primary/90"
              aria-label="Send another message"
            >
              Send another message
            </button>
          </div>
        ) : (
          <form className="bg-background-light rounded-xl p-8 shadow-lg mb-8" onSubmit={handleSubmit}>
            {submitStatus === 'error' && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6" role="alert">
                <p>Sorry, there was an error sending your message. Please try again later.</p>
              </div>
            )}

            <div className="flex flex-col md:flex-row gap-6 mb-6">
              <div className="flex-1">
                <label htmlFor="name" className="block font-bold mb-2 text-text">
                  Name<span className="text-primary">*</span>
                  <span className="sr-only">(required)</span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="input-field w-full bg-white text-text border border-primary/10"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  disabled={isSubmitting}
                />
              </div>
              <div className="flex-1">
                <label htmlFor="email" className="block font-bold mb-2 text-text">
                  Email<span className="text-primary">*</span>
                  <span className="sr-only">(required)</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="input-field w-full bg-white text-text border border-primary/10"
                  placeholder="john@doe.com"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={isSubmitting}
                />
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block font-bold mb-2 text-text">
                Message<span className="text-primary">*</span>
                <span className="sr-only">(required)</span>
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                maxLength={500}
                className="input-field w-full bg-white text-text border border-primary/10"
                placeholder="Hello there, I would like to ask you about..."
                value={formData.message}
                onChange={handleChange}
                disabled={isSubmitting}
                aria-describedby="message-counter"
              />
              <div id="message-counter" className="text-right text-text-light text-xs mt-1" aria-live="polite">
                {charCount}/500 characters
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary w-full flex items-center justify-center gap-2 text-lg bg-primary text-white hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span>{isSubmitting ? 'Sending...' : 'Send'}</span>
              {!isSubmitting && <span className="text-xl" aria-hidden="true">→</span>}
            </button>
          </form>
        )}

        <div className="mt-8">
          <p className="text-text-light mb-4">Or contact me with...</p>
          <div className="flex flex-wrap gap-4" role="list" aria-label="Social media links">
            {socials.map((social, i) => (
              <a
                key={i}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-background-light px-6 py-4 rounded-lg flex items-center gap-3 text-lg text-text border border-primary/10 hover:bg-primary/10 transition-all"
                role="listitem"
                aria-label={`Contact via ${social.name}`}
              >
                <span aria-hidden="true">{social.icon}</span> {social.name} <span className="text-xl" aria-hidden="true">→</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
