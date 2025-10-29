# 🚀 DEPLOYMENT GUIDE - Step by Step

## Part 1: Push to GitHub

### If you haven't cloned the repo yet:

1. **Download all the project files** from this conversation

2. **Open Terminal** and navigate to where you want the project:
```bash
cd ~/Desktop  # or wherever you want it
```

3. **Clone your GitHub repo:**
```bash
git clone https://github.com/manoaindustries/manoaindustries.git
cd manoaindustries
```

4. **Copy all the project files into this folder**
   - Copy everything EXCEPT `.git` folder
   - Your folder should have: `app/`, `public/`, `package.json`, etc.

5. **Add and commit files:**
```bash
git add .
git commit -m "Initial website commit - Next.js site"
git push origin main
```

### If GitHub Desktop is easier:
1. Use GitHub Desktop to clone the repo
2. Copy files into that folder
3. Use GitHub Desktop to commit and push

---

## Part 2: Deploy to Vercel

### Method A: Vercel Dashboard (Easiest - 2 minutes)

1. **Go to [vercel.com](https://vercel.com)**

2. **Click "Sign Up"** and choose **"Continue with GitHub"**

3. **Authorize Vercel** to access your GitHub

4. **Click "Add New..." → "Project"**

5. **Import your repository:**
   - Find `manoaindustries/manoaindustries`
   - Click "Import"

6. **Configure Project:**
   - Framework Preset: **Next.js** (auto-detected)
   - Root Directory: `./` (default)
   - Build Command: `npm run build` (default)
   - Output Directory: `.next` (default)
   - Install Command: `npm install` (default)

7. **Click "Deploy"**

8. **Wait ~60 seconds** ⏱️

9. **Done!** 🎉
   - You'll get a URL like: `manoaindustries.vercel.app`
   - Click "Visit" to see your live site

### Method B: Vercel CLI (For developers)

```bash
# Install Vercel CLI
npm i -g vercel

# Navigate to project
cd manoaindustries

# Login
vercel login

# Deploy
vercel

# Follow prompts, then deploy to production
vercel --prod
```

---

## Part 3: Connect Your Custom Domain

### In Vercel:

1. **Go to your project** in Vercel Dashboard

2. **Click "Settings" → "Domains"**

3. **Add domain:**
   - Enter: `manoaindustries.com`
   - Enter: `www.manoaindustries.com`
   - Click "Add"

4. **Vercel will show DNS records needed:**
   ```
   Type: A
   Name: @
   Value: 76.76.21.21
   
   Type: CNAME  
   Name: www
   Value: cname.vercel-dns.com
   ```

### In Squarespace:

1. **Login to Squarespace**

2. **Go to:** Settings → Domains → [Your Domain] → DNS Settings

3. **Delete any conflicting records:**
   - Remove existing `A` record for `@` if present
   - Remove existing `CNAME` for `www` if present

4. **Add Vercel's DNS records:**
   - Click "Add Record"
   - Type: `A`, Host: `@`, Value: `76.76.21.21`
   - Click "Add Record" again
   - Type: `CNAME`, Host: `www`, Value: `cname.vercel-dns.com`

5. **Save changes**

### Wait for DNS Propagation:
- Usually takes **10-30 minutes**
- Can take up to 48 hours (rare)
- Check status: [dnschecker.org](https://dnschecker.org)

### SSL Certificate:
- Vercel automatically provisions SSL
- Usually ready in 5-10 minutes after DNS propagates
- Your site will be `https://manoaindustries.com` 🔒

---

## Part 4: Verify Everything Works

### ✅ Checklist:

- [ ] Site loads at `manoaindustries.vercel.app`
- [ ] Site loads at `manoaindustries.com`
- [ ] Site loads at `www.manoaindustries.com`
- [ ] HTTPS (lock icon) shows in browser
- [ ] All navigation links work
- [ ] Mobile responsive (test on phone)
- [ ] Contact email link works

---

## Part 5: Future Updates

### To update the site:

1. **Edit files locally**

2. **Test locally:**
```bash
npm run dev
# Check http://localhost:3000
```

3. **Push to GitHub:**
```bash
git add .
git commit -m "Updated homepage copy"
git push
```

4. **Automatic deployment:**
   - Vercel automatically detects the push
   - Rebuilds and deploys in ~60 seconds
   - No additional action needed! 🎉

---

## Troubleshooting

### "npm: command not found"
- Install Node.js from [nodejs.org](https://nodejs.org)

### DNS not propagating
- Wait longer (up to 24 hours)
- Clear browser cache
- Try incognito mode
- Check [dnschecker.org](https://dnschecker.org)

### Build failing on Vercel
- Check build logs in Vercel dashboard
- Verify `package.json` dependencies
- Try building locally: `npm run build`

### Domain not connecting
- Verify DNS records exactly match Vercel's
- Remove ALL conflicting DNS records in Squarespace
- Wait for propagation

---

## 🎯 Summary: From Zero to Live

1. ✅ Push code to GitHub
2. ✅ Connect GitHub to Vercel  
3. ✅ Click "Deploy" in Vercel
4. ✅ Add DNS records to Squarespace
5. ✅ Wait for DNS propagation
6. ✅ Site is live! 🚀

**Estimated total time: 30 minutes** (plus DNS wait time)

---

Need help? Check the main README.md or reach out!
