# JB TECH CONSULTANTS — Premium Engineering Consultancy Website

A high-performance, industry-leading website for **JB TECH CONSULTANTS** (Chittorgarh, Rajasthan), specialized in geotechnical investigations, mineral testing, diamond core drilling, soil mechanics, and civil engineering consultancy.

Lead Consultant & Technical Director: **Niranjan Suthar**  
Telephone / WhatsApp: **+91 7728053323**  
Official Office: **MP Setu Marg, Basant Nagar, Krishna Nagar, Chittorgarh, Rajasthan – 312001**  
Google Maps Listing: [https://maps.app.goo.gl/EpYLHGk3XWV8uBSZ7?g_st=ac](https://maps.app.goo.gl/EpYLHGk3XWV8uBSZ7?g_st=ac)

---

## 1. Core Features & Architecture

- **Next.js 14 App Router + React 18 + TypeScript** with clean static generation (SSG) for all 11 service routes.
- **Industrial Corporate Visual Identity**: Deep navy (`#081220`), architectural gold (`#d97706`), clean slate, and technical blueprint aesthetics.
- **Cinematic Hero**: Real on-site drilling rig backdrop, coordinates (`24°53'N 74°38'E • Chittorgarh`), technical credential badges, and dual conversion CTAs.
- **11 Core Services**:
  1. Mining Exploration (`/services/mining-exploration`)
  2. Mineral Testing (`/services/mineral-testing`)
  3. Geotechnical Surveys (`/services/geotechnical-surveys`)
  4. Soil Testing (`/services/soil-testing`)
  5. Infrastructure & Agriculture (`/services/infrastructure-agriculture`)
  6. Food Testing (`/services/food-testing`)
  7. Raw Material Testing (`/services/raw-material-testing`)
  8. Land Surveys (`/services/land-surveys`)
  9. Ground Water Surveys (`/services/ground-water-surveys`)
  10. Structural Consultancy (`/services/structural-consultancy`)
  11. Diamond Core Drilling Services (`/services/diamond-core-drilling-services`)
- **Dedicated Service Pages (`/services/[slug]`)**: Deep technical specifications, testing parameters, Bureau of Indian Standards (BIS/IS/ASTM) methodologies, equipment utilized, and deliverables.
- **Interactive Photo Gallery**: Category filtering (All, Diamond Core Drilling, Mining & Geology, Site Surveys & Boreholes), click-to-enlarge lightbox with keyboard controls (Escape, Left, Right arrows) using local images (`public/images/jb-tech-01.jpg` to `11.jpg`).
- **Verified Client Feedback**: Displays authentic 5.0 Google Reviews with verified client badges (Kunal Gour, sonu Mistry, Ayush Jaiswal, akash garg, Santosh Suthar, Prakash Kumar Sen, Vishal Sharma, illusion BAISA_HKM, Abhishek Suthar, Devendra Singh Rao) and link to Google Maps.
- **Lead Generation RFQ System**: Validated quote request form that structures parameters into an official RFQ and dispatches directly to Mr. Niranjan Suthar via WhatsApp (+91 7728053323) or copies to clipboard with transparent status feedback.
- **SEO & Schema.org**: Fully structured `LocalBusiness`, `ProfessionalService`, `Service`, and `BreadcrumbList` JSON-LD schemas.

---

## 2. Running Locally

### Prerequisites
- Node.js (version 18.17 or higher)
- npm (version 9 or higher)

### Steps

```bash
# 1. Clone or navigate to the project directory
cd jb-tech-consultants

# 2. Install dependencies
npm install

# 3. Type check the TypeScript codebase
npx tsc --noEmit

# 4. Start the development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

---

## 3. Production Build Validation

To verify that all 15 static pages (home + 11 service pages + not-found) build cleanly:

```bash
# Build production bundle
npm run build

# Preview production build locally
npm run start
```

---

## 4. Deploying to Vercel

### Method A: Deploy via Vercel CLI

```bash
# 1. Install Vercel CLI (if not installed)
npm install -g vercel

# 2. Login to Vercel
vercel login

# 3. Deploy
vercel

# 4. Deploy to production
vercel --prod
```

### Method B: Deploy via GitHub / GitLab / Bitbucket
1. Push this repository to GitHub:
   ```bash
   git add .
   git commit -m "Upgrade JB Tech Consultants website to premium corporate standard"
   git push origin main
   ```
2. Log into [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Import the repository.
4. Framework Preset: **Next.js** (automatically detected).
5. Build Command: `npm run build` (default).
6. Output Directory: `.next` (default).
7. Click **Deploy**. Zero environment variables or paid APIs required.

---

## 5. Contact & Support
- **Company**: JB Tech Consultants
- **Lead Person**: Niranjan Suthar
- **Phone**: +91 7728053323
- **Address**: MP Setu Marg, Basant Nagar, Krishna Nagar, Chittorgarh, Rajasthan – 312001
