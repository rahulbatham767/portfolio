import { useState, useEffect, useRef } from 'react'
import emailjs from '@emailjs/browser'
import { emailConfig } from '../constants'

const SUCCESS_MSG = 'Thank you for your message 😃'
const ERROR_MSG   = "I didn't receive your message 😢"

export default function EmailForm() {
  const formRef = useRef()
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null) // null | 'sending' | 'success' | 'error'

  const isValid = form.name.trim() && form.email.trim() && form.message.trim()

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!isValid) return
    setStatus('sending')

    emailjs.send(
      emailConfig.serviceId,
      emailConfig.templateId,
      {
        from_name:  form.name,
        to_name:    emailConfig.receiverName,
        from_email: form.email,
        to_email:   emailConfig.receiverEmail,
        message:    form.message,
      },
      emailConfig.publicKey
    )
    .then(() => {
      setStatus('success')
      setForm({ name: '', email: '', message: '' })
      setTimeout(() => setStatus(null), 4000)
    })
    .catch((err) => {
      console.error('EmailJS error:', err)
      setStatus('error')
      setTimeout(() => setStatus(null), 5000)
    })
  }

  return (
    <section className="contact-form">
      <h3 className="h3 form-title">Contact Form</h3>

      <form ref={formRef} onSubmit={handleSubmit} className="form" noValidate>
        <div className="input-wrapper">
          <input
            type="text"
            name="name"
            className="form-input"
            placeholder="Your Name"
            required
            value={form.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            className="form-input"
            placeholder="Your Email"
            required
            value={form.email}
            onChange={handleChange}
          />
        </div>

        <textarea
          name="message"
          className="form-input"
          placeholder="Write your thoughts here..."
          rows={4}
          required
          value={form.message}
          onChange={handleChange}
        />

        <button
          type="submit"
          className="form-btn"
          disabled={!isValid || status === 'sending'}
        >
          <ion-icon name="paper-plane"></ion-icon>
          <span>
            {status === 'sending' ? 'Sending…' : 'Send Message'}
          </span>
        </button>

        {status === 'success' && (
          <div
            className="form-response-msg"
            style={{ display: 'block', color: 'var(--orange-yellow-crayola)' }}
          >
            {SUCCESS_MSG}
          </div>
        )}
        {status === 'error' && (
          <div
            className="form-response-msg"
            style={{ display: 'block', color: '#ff4c4c' }}
          >
            {ERROR_MSG}
          </div>
        )}
      </form>
    </section>
  )
}
