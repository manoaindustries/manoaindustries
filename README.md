# MĀNOA INDUSTRIES Website

Official website for MĀNOA INDUSTRIES - Multidisciplinary engineering at the intersection of Research and Development and Creative Engineering.

Founded by Jonavan Kaaiwela Gonzalez.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- Git installed

### Local Development

1. **Clone the repository**
```bash
git clone https://github.com/manoaindustries/manoaindustries.git
cd manoaindustries
```

2. **Install dependencies**
```bash
npm install
```

3. **Run development server**
```bash
npm run dev
```

4. **Open in browser**
Navigate to [http://localhost:3000](http://localhost:3000)

## 📦 Build for Production

```bash
npm run build
npm start
```

## 🚢 Deploy to Vercel

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click "Add New Project"
4. Import your `manoaindustries` repository
5. Vercel auto-detects Next.js - just click "Deploy"
6. Done! Your site is live in ~60 seconds

### Option 2: Deploy via Vercel CLI

```bash
npm i -g vercel
vercel
```

## 🌐 Custom Domain Setup (Squarespace Domain)

Once deployed on Vercel:

1. **In Vercel Dashboard:**
   - Go to your project → Settings → Domains
   - Add your custom domain (e.g., `manoaindustries.com`)
   - Vercel will provide DNS records

2. **In Squarespace:**
   - Go to Settings → Domains → DNS Settings
   - Add the DNS records Vercel provided:
     - Type: `A` Record, Host: `@`, Value: `76.76.21.21`
     - Type: `CNAME` Record, Host: `www`, Value: `cname.vercel-dns.com`
   
3. **Wait for DNS propagation** (5 minutes to 48 hours, usually ~10 minutes)

4. **SSL Certificate** - Automatically provisioned by Vercel (free, auto-renewing)

## 📧 Email Setup (Google Workspace)

Your Squarespace domain can work with Google Workspace:

1. In Google Workspace Admin, verify domain ownership
2. Add MX records to Squarespace DNS
3. Emails will work at `name@manoaindustries.com`

## 🛠 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Deployment:** Vercel
- **Domain:** Squarespace (DNS only)

## 📁 Project Structure

```
manoaindustries/
├── app/
│   ├── layout.js       # Root layout with metadata
│   ├── page.js         # Main homepage
│   └── globals.css     # Global styles + Tailwind
├── public/             # Static assets (add images here)
├── package.json        # Dependencies
├── next.config.js      # Next.js configuration
└── tailwind.config.js  # Tailwind configuration
```

## 🎨 Customization

### Update Content
Edit `app/page.js` to modify:
- Hero text
- About section
- Capabilities
- Contact information

### Add Logo
1. Add logo file to `/public` folder (e.g., `logo.png`)
2. Update navigation in `app/page.js`:
```jsx
<div className="flex items-center gap-3">
  <img src="/logo.png" alt="Mānoa Industries" className="h-8" />
  <div className="text-2xl font-light tracking-widest">
    MĀNOA INDUSTRIES
  </div>
</div>
```

### Update Colors
Modify Tailwind classes in `app/page.js` or extend theme in `tailwind.config.js`

## 📊 Analytics Setup

### Google Analytics
1. Get tracking ID from Google Analytics
2. Add to `app/layout.js`:
```jsx
import Script from 'next/script'

// In <head>:
<Script
  src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`}
  strategy="afterInteractive"
/>
```

## 🔒 Environment Variables

For future needs (API keys, etc.), create `.env.local`:
```
NEXT_PUBLIC_API_KEY=your_key_here
```

Add `.env.local` to `.gitignore` (already included)

## 📝 License

All rights reserved © 2024 MĀNOA INDUSTRIES

## 🤝 Contact

For inquiries: info@manoaindustries.com

---

**Built with innovation. Engineered with precision.**
