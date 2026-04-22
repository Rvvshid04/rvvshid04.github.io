import { useEffect, useRef, useState } from 'react';
import { FaEnvelope, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import emailjs from 'emailjs-com';

const socials = [
  { name: 'Email', url: 'mailto:raashid.arq@gmail.com', icon: <FaEnvelope /> },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/raashid-arquil', icon: <FaLinkedin /> },
  { name: 'GitHub', url: 'https://github.com/Rvvshid04', icon: <FaGithub /> },
  { name: 'Twitter/X', url: 'https://x.com/rvvshid_arq', icon: <FaTwitter /> },
];

const Contact = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
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
    } catch (error) {
      console.error(error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleNewMessage = () => setSubmitStatus('idle');

  return (
    <section ref={sectionRef} id="contact" className="py-20 bg-white font-sans" aria-labelledby="contact-heading">
      <div className="w-full lg:w-[60%] mx-auto px-6 md:px-0">
        <h2
          id="contact-heading"
          className={`text-4xl md:text-5xl font-extrabold mb-4 text-text transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
        >
          Get in touch<span className="text-primary">.</span>
        </h2>
        <p
          className={`text-xl text-text-light mb-8 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
        >
          I'm currently looking for new opportunities to build exciting projects. Whether you have a question, a project in mind, or just want to say hi, feel free to send me a message.
        </p>

        {submitStatus === 'success' ? (
          <div className={`space-y-4 transition-all duration-700 delay-150 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
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
          <form
            className={`bg-background-light rounded-xl p-8 shadow-lg mb-8 transition-all duration-700 delay-150 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            onSubmit={handleSubmit}
          >
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
                className="input-field w-full bg-white text-text border border-primary/10"
                placeholder="Hello there, I would like to ask you about..."
                value={formData.message}
                onChange={handleChange}
                disabled={isSubmitting}
              />
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

        <div className={`mt-8 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex flex-wrap gap-4" role="list" aria-label="Social media links">
            {socials.map((social, i) => (
              <a
                key={i}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`bg-background-light px-6 py-4 rounded-lg flex items-center gap-3 text-lg text-text border border-primary/10 hover:bg-primary/10 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                style={{ transitionDelay: `${320 + i * 90}ms` }}
                role="listitem"
                aria-label={`Contact via ${social.name}`}
              >
                <span aria-hidden="true">{social.icon}</span> {social.name} <span className="text-xl" aria-hidden="true"></span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
