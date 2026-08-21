import { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import { emailConfig } from "../constants";

const SUCCESS_MSG = "Thank you! Your message has been sent successfully. I will get back to you shortly.";
const ERROR_MSG = "Unable to send message right now. Please email me directly at rahulbatham767@gmail.com.";

export default function EmailForm() {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null); // null | 'sending' | 'success' | 'error'

  useEffect(() => {
    if (emailConfig.publicKey) {
      emailjs.init(emailConfig.publicKey);
    }
  }, []);

  const isValid = form.name.trim() && form.email.trim() && form.message.trim();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValid) return;
    setStatus("sending");

    const serviceId = emailConfig.serviceId || "service_cosxsx4";
    const templateId = emailConfig.templateId || "template_fo2luuo";
    const publicKey = emailConfig.publicKey || "FehavTGoX1bQo8fW_";

    emailjs
      .send(
        serviceId,
        templateId,
        {
          from_name: form.name,
          to_name: emailConfig.receiverName,
          from_email: form.email,
          to_email: emailConfig.receiverEmail,
          message: form.message,
        },
        publicKey,
      )
      .then(() => {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
        setTimeout(() => setStatus(null), 5000);
      })
      .catch((err) => {
        console.error("EmailJS error response:", err);
        setStatus("error");
        setTimeout(() => setStatus(null), 6000);
      });
  };

  return (
    <section className="contact-form">
      <h3 className="h3 form-title">Send a Direct Message</h3>

      <form ref={formRef} onSubmit={handleSubmit} className="form" noValidate>
        <div className="input-wrapper">
          <input
            type="text"
            name="name"
            className="form-input"
            placeholder="Your Full Name *"
            required
            value={form.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            className="form-input"
            placeholder="Your Email Address *"
            required
            value={form.email}
            onChange={handleChange}
          />
        </div>

        <textarea
          name="message"
          className="form-input"
          placeholder="Tell me about your project, team, or opportunity... *"
          rows={5}
          required
          value={form.message}
          onChange={handleChange}
        />

        <button
          type="submit"
          className="form-btn"
          disabled={!isValid || status === "sending"}
        >
          <ion-icon name={status === "sending" ? "sync-outline" : "paper-plane"} className={status === "sending" ? "spin-icon" : ""}></ion-icon>
          <span>{status === "sending" ? "Transmitting…" : "Send Message"}</span>
        </button>

        {status === "success" && (
          <div className="form-alert-box success">
            <ion-icon name="checkmark-circle-outline"></ion-icon>
            <span>{SUCCESS_MSG}</span>
          </div>
        )}
        {status === "error" && (
          <div className="form-alert-box error">
            <ion-icon name="alert-circle-outline"></ion-icon>
            <span>{ERROR_MSG}</span>
          </div>
        )}
      </form>
    </section>
  );
}
