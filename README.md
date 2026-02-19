# Bowhle — Full React Web App

A complete, mobile-first React application for the Bowhle brand. Includes a public marketing site and two dashboards (Client + Employee).

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm start
```

Runs on **http://localhost:3000**

---

## 📁 Project Structure

```
src/
├── App.js                         # Root — routing + layout switch logic
├── App.css                        # Global CSS variables, resets, utilities
│
├── components/
│   ├── shared/
│   │   ├── Header.js / .css       # Public site navigation
│   │   └── Footer.js / .css       # Public site footer
│   │
│   └── dashboard/
│       ├── DashboardLayout.js / .css  # Shared sidebar + header shell
│       ├── client/
│       │   ├── ClientDashboard.js / .css   # Client home — progress, files, stats
│       │   └── ClientAccount.js / .css     # Client account — profile + settings tabs
│       └── employee/
│           └── EmployeeDashboard.js / .css # Employee — file upload + link sharing
│
└── pages/
    ├── Home.js / .css             # Public home page
    ├── About.js / .css            # About page with timeline
    ├── Services.js / .css         # Services detail page
    ├── Portfolio.js / .css        # Portfolio with filters + lightbox
    ├── Contact.js / .css          # Contact form page
    ├── Login.js                   # Login placeholder
    └── Signup.js                  # Signup placeholder
```

---

## 🗺 Routes

| Route | Page |
|---|---|
| `/` or `/home` | Home |
| `/about` | About |
| `/services` | Services |
| `/portfolio` | Portfolio |
| `/connect` | Contact |
| `/login` | Login |
| `/signup` | Signup |
| `/client-dashboard` | Client Dashboard |
| `/client-dashboard/account` | Client Account |
| `/employee-dashboard` | Employee Dashboard |

---

## 🎨 Branding

- **Primary:** `#7f2cdd` (accent purple)
- **Hover:** `#641eb4`
- **Fonts:** Bebas Neue (display) + Montserrat (body) via Google Fonts
- **Radius:** 16–24px cards
- **Shadows:** Soft, layered

---

## 📝 Customisation

### Swap placeholder images
Search for `style={{ background: '` in portfolio and work card components. Replace colour values with `background-image: url(...)`.

### Add real logo
Place your logo at `src/assets/Bowhle-WHITE.png` and update the `Header.js` logo markup.

### Enable real auth
The Login/Signup pages are placeholders. Hook up Firebase, Supabase, or your own backend to the form submit handlers.

### Real file upload
The Employee Dashboard uses frontend-only state. Integrate with AWS S3, Cloudinary, or Supabase Storage by replacing the `handleFileSelect` function.

---

## ✅ Features

- ✅ Mobile-first responsive design
- ✅ Animated rotating headline hero
- ✅ Scroll-aware transparent → opaque header
- ✅ Portfolio filter pills + lightbox
- ✅ Animated loading skeletons
- ✅ Social media marquee with phone mockup
- ✅ Contact form with validation + success state
- ✅ Client dashboard: project progress steps, past projects, file list
- ✅ Client account: profile edit + notification toggles
- ✅ Employee dashboard: file drag & drop upload, link sharing, submissions table
- ✅ Accessible: semantic HTML, aria labels, focus states
- ✅ No external UI libraries — plain React + CSS
