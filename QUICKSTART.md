# ⚡ QUICK START - 5 Steps to Live

## 1️⃣ Get the code into GitHub
```bash
cd ~/Desktop
git clone https://github.com/manoaindustries/manoaindustries.git
cd manoaindustries
# Copy all project files here
git add .
git commit -m "Initial commit"
git push origin main
```

## 2️⃣ Deploy to Vercel
- Go to [vercel.com](https://vercel.com)
- Sign in with GitHub
- Click "Add New Project"
- Select `manoaindustries/manoaindustries`
- Click "Deploy"
- ✅ Live in 60 seconds at `manoaindustries.vercel.app`

## 3️⃣ Connect custom domain in Vercel
- Settings → Domains
- Add `manoaindustries.com`
- Note the DNS records shown

## 4️⃣ Update Squarespace DNS
Add these records:
```
Type: A
Host: @
Value: 76.76.21.21

Type: CNAME
Host: www
Value: cname.vercel-dns.com
```

## 5️⃣ Wait & verify
- DNS propagation: 10-30 mins
- SSL auto-provisions: 5-10 mins
- ✅ Live at `https://manoaindustries.com`

---

## 🔄 Future updates
```bash
# Make changes
npm run dev  # test locally

# Push to GitHub
git add .
git commit -m "Update content"
git push

# Vercel auto-deploys! ✨
```

---

## 📁 Project files included:
- `package.json` - Dependencies
- `next.config.js` - Next.js config
- `app/page.js` - Main website
- `app/layout.js` - Root layout
- `app/globals.css` - Global styles
- `.gitignore` - Git ignore rules
- `tailwind.config.js` - Tailwind config
- `postcss.config.js` - PostCSS config
- `README.md` - Full documentation
- `DEPLOYMENT.md` - Detailed deployment guide

---

## 🆘 Need help?
Check `DEPLOYMENT.md` for detailed step-by-step instructions!

---

**Built for MĀNOA INDUSTRIES**
*Engineering Innovation Through Research and Design*
