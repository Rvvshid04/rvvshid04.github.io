import { useState } from 'react'
import { FaEnvelope, FaLinkedin } from 'react-icons/fa'

const socials = [
  { name: 'Email', url: 'mailto:raashid.arq@gmail.com', icon: <FaEnvelope /> },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/raashid-arquil', icon: <FaLinkedin /> }
]

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [charCount, setCharCount] = useState(0)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))

    if (name === 'message') {
      setCharCount(value.length)
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('https://formsubmit.co/efd389f8a135523feba425e2a29197ba', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: 'New Contact Form Submission',
          _template: 'table'
        })
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', message: '' })
        setCharCount(0)
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleNewMessage = () => {
    setSubmitStatus('idle')
  }

  return (
    <section id="contact" className="py-20 bg-white font-sans" aria-labelledby="contact-heading">
      <div className="max-w-4xl mx-auto px-4">
        <h2 id="contact-heading" className="text-4xl md:text-5xl font-extrabold mb-4 text-text">Contact me<span className="text-primary">.</span></h2>
        <p className="text-xl text-text-light mb-8">I'm always eager to explore new opportunities and take on exciting projects. If you have a project in mind, or just want to say hi, feel free to send me a message.</p>
        
        {submitStatus === 'success' ? (
          <div className="space-y-4">
            <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg" role="alert">
              <p className="font-medium">Thank you for your message! Do note that this form functionality is developed using FormSubmit, and may have some issues, so if you don't receive a response, please contact me via email.</p>
            </div>
            <button
              onClick={handleNewMessage}
              className="btn-primary w-full flex items-center justify-center gap-2 text-lg bg-primary text-white hover:bg-primary/90"
              aria-label="Send another message"
            >
              Send another message.
            </button>
          </div>
        ) : (
          <form 
            className="bg-background-light rounded-xl p-8 shadow-lg mb-8" 
            aria-label="Contact form"
            onSubmit={handleSubmit}
          >
            {submitStatus === 'error' && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6" role="alert">
                <p>Sorry, there was an error sending your message. Please try again later.</p>
              </div>
            )}
            
            <div className="flex flex-col md:flex-row gap-6 mb-6">
              <div className="flex-1">
                <label className="block font-bold mb-2 text-text" htmlFor="name">Name<span className="text-primary" aria-hidden="true">*</span><span className="sr-only">(required)</span></label>
                <input 
                  id="name" 
                  name="name" 
                  type="text" 
                  required 
                  className="input-field w-full bg-white text-text border border-primary/10" 
                  placeholder="Your Name"
                  aria-required="true"
                  value={formData.name}
                  onChange={handleChange}
                  disabled={isSubmitting}
                />
              </div>
              <div className="flex-1">
                <label className="block font-bold mb-2 text-text" htmlFor="email">Email<span className="text-primary" aria-hidden="true">*</span><span className="sr-only">(required)</span></label>
                <input 
                  id="email" 
                  name="email" 
                  type="email" 
                  required 
                  className="input-field w-full bg-white text-text border border-primary/10" 
                  placeholder="john@doe.com"
                  aria-required="true"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={isSubmitting}
                />
              </div>
            </div>
            <div className="mb-6">
              <label className="block font-bold mb-2 text-text" htmlFor="message">Message<span className="text-primary" aria-hidden="true">*</span><span className="sr-only">(required)</span></label>
              <textarea 
                id="message" 
                name="message" 
                required 
                rows={5} 
                maxLength={500} 
                className="input-field w-full bg-white text-text border border-primary/10" 
                placeholder="Hello there, I would like to ask you about..."
                aria-required="true"
                aria-describedby="message-counter"
                value={formData.message}
                onChange={handleChange}
                disabled={isSubmitting}
              />
              <div id="message-counter" className="text-right text-text-light text-xs mt-1" aria-live="polite">
                {charCount}/500 characters
              </div>
            </div>
            <button 
              type="submit" 
              className="btn-primary w-full flex items-center justify-center gap-2 text-lg bg-primary text-white hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Send message"
              disabled={isSubmitting}
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
  )
}

export default Contact 