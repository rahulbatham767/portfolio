# Rahul Batham — Personal Portfolio & Engineering Suite

Welcome to the personal portfolio repository of **Rahul Batham** — Full-Stack Developer & Blockchain Engineer based in Gwalior, India.

🚀 **Live Demo:** [ipodify.tech](https://ipodify.tech)

---

## 🌟 Tech Stack & Architecture

- **Core Framework:** React 18 + Vite 5
- **Styling:** Modern CSS3 with custom design tokens, dark mode palette, dynamic gradients, and micro-animations
- **Form Delivery:** EmailJS Integration (`@emailjs/browser`)
- **Iconography:** Ionicons Web Components
- **Deployment:** Production static bundle via Vite build (`dist/`)

---

## ✨ Features & UI Interactivity

- **Reactive Sidebar:** Expandable contact information on mobile with animated toggle states.
- **Highlights & Key Experience:** Interactive achievement cards showcasing engineering work (CDAC SSI platform, real-time MERN dashboards, native Android biometric modules, REST microservices).
- **Detail Modal System:** Click any highlight card to launch a full-screen backdrop modal displaying complete technical architecture, project dates, and tech stack tags (`Esc` key and backdrop click supported).
- **Dynamic Projects Grid:** Filter projects by category (*Web development*, *Applications*, *Blockchain & SSI*).
- **Animated Skill Progress Bars:** Skill percentages animate when scrolling into view using `IntersectionObserver`.
- **Contact Form:** Integrated EmailJS pipeline with reactive submit buttons (**Sending...** → **Thank you for your message 😃**).

---

## 📁 Project Structure

```
vcard-personal-portfolio/
├── index.html                  # Vite entry point
├── vite.config.js              # Vite configuration & plugins
├── .env.example                # Environment variable template
├── public/
│   └── images/                 # Static assets, logos, and avatars
└── src/
    ├── main.jsx                # React root mount
    ├── App.jsx                 # Main application shell & page state router
    ├── index.css               # Design system tokens, utilities & animations
    ├── constants/
    │   └── index.js            # Portfolio data (experience, education, projects, skills)
    ├── components/
    │   ├── Sidebar.jsx         # Contact sidebar component
    │   ├── Navbar.jsx          # Top/bottom tab navigation bar
    │   ├── HighlightModal.jsx  # Interactive pop-up modal
    │   └── EmailForm.jsx       # EmailJS contact form component
    └── pages/
        ├── About.jsx           # Bio, services, and Highlights section
        ├── Resume.jsx          # Experience timeline, education & skills
        ├── Projects.jsx        # Filterable project portfolio grid
        ├── Blog.jsx            # Engineering blog articles
        └── Contact.jsx         # Map embed and EmailJS form
```

---

## 🛠️ Getting Started Locally

### Prerequisites
- Node.js (v18+ recommended)
- npm

### Installation & Run

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd vcard-personal-portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   Copy `.env.example` to `.env` and fill in your keys:
   ```bash
   cp .env.example .env
   ```
   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

4. **Run Development Server:**
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser.

5. **Build for Production:**
   ```bash
   npm run build
   ```
   The production-ready bundle will be generated in `dist/`.

---

## 👤 Profile & Links

- **Name:** Rahul Batham
- **Location:** Gwalior, India 🇮🇳
- **Portfolio:** [ipodify.tech](https://ipodify.tech)
- **LinkedIn:** [linkedin.com/in/rahul-batham767](https://linkedin.com/in/rahul-batham767)
