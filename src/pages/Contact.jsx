import EmailForm from '../components/EmailForm'

export default function Contact() {
  return (
    <article className="contact active" data-page="contact">
      <header>
        <h2 className="h2 article-title">Get in Touch</h2>
      </header>

      <section className="about-text" style={{ marginBottom: 25 }}>
        <p>
          Looking for a Blockchain Developer or Full-Stack Engineer? Let's build something impactful together.
        </p>
      </section>

      <section className="mapbox" data-mapbox>
        <figure>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14316.586237276332!2d78.17720455!3d26.2182873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3976c5d1792d91a3%3A0x180edc565e098495!2sGwalior%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1650000000000!5m2!1sen!2sin"
            width="400"
            height="300"
            loading="lazy"
            title="Gwalior, India"
          />
        </figure>
      </section>

      <EmailForm />
    </article>
  )
}
