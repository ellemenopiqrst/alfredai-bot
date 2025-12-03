**AlfredAI.bot Landing Page**

A clean, modern, and responsive one-page landing page for AlfredAI.bot's AI Fee Proposal Generator. Built as part of a test task for the Website, Funnel & Email Automation Specialist role at Offshore Talent.

**Features:**

**Hero Section:** Eye-catching headline, subtext, and call-to-action (CTA) with soft fade-in animation.

**Features Section:** Three feature cards with icons, titles, and descriptions, including hover effects.

**Testimonials Section:** Sample user quotes in a clean grid layout.

**Contact Form:** Form with fields for Name, Email, Company, and Message, ready for backend integration.

**Responsive Design:** Optimized for desktop and mobile using TailwindCSS.

**Animations:** Subtle transitions and hover effects using Framer Motion.

**Tech Stack**
- Frontend: React, Next.js (App Router), TailwindCSS
- Icons: Lucide React
- Animations: Framer Motion
- Deployment: Vercel
- Backend Integration: Ready for API (e.g., Supabase + Resend for email capture)

**Getting Started**
**Prerequisites**
- Node.js (version 18+ recommended)
- npm or yarn
- Git

  
**Installation**

1. Clone the repository:
```
git clone https://github.com/ellemenopiqrst/alfredai-bot.git
cd alfredai-bot
```
2. Install dependencies:
```
npm install
```
3. Run the development server:
```
npm run dev

```
4. Open http://localhost:3000 in your browser to view the landing page.
**Building for Production**
npm run build
npm run start

**Deployment**
The project is deployed on Vercel for easy hosting:

1. Push your code to GitHub (as per the setup steps).
2. Import the repo on vercel.com.
3.Deploy automatically – Vercel detects Next.js and handles the build.

Live demo: https://alfredai-bot.vercel.app (replace with your actual Vercel URL).

**Project Structure**
```
alfredai-bot/

├── .env.local
├── .gitignore
├── next.config.js
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── README.md
├── app/
│   ├── layout.js
│   ├── page.js
│   ├── globals.css
│   └── api/
│       └── contact/
│           └── route.js
├── components/
│   ├── Header.js
│   ├── Hero.js
│   ├── Features.js
│   ├── Testimonials.js
│   ├── ContactForm.js
│   ├── Footer.js
│   └── FadeInSection.js
├── lib/
│   ├── supabase.js
│   └── resend.js
└── public/
    └── images/
```
**Contributing**
This is a test project, but feel free to fork and improve! For changes:

1. Fork the repo.
2. Create a feature branch: git checkout -b feature/your-feature.
3. Commit changes: git commit -m 'Add your feature'.
4. Push and open a pull request.

**License**
This project is for demonstration purposes. No specific license applied.

**Contact**
For questions about this test task, reach out to me directly.
