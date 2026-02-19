# Bowhle — React Web Application

A complete, mobile-first React application built for the Bowhle creative studio brand. The project includes a public-facing marketing site and two role-based dashboards (Client and Employee), built entirely with React and plain CSS — no external UI libraries.

This is an actively evolving project. It was built while learning React and frontend development, and is being extended with a backend as those skills develop. The frontend is structured to make that integration straightforward.

---

## Tech Stack

- React 18 with React Router v6
- Plain CSS with custom properties (no UI frameworks)
- Lucide React for iconography
- Mobile-first responsive design

---

## Getting Started

```bash
npm install
npm start
```

Runs on **http://localhost:3000**

---

## Project Structure

```
src/
├── App.js                              # Root routing and layout switch logic
├── App.css                             # Global CSS variables, resets, utilities
│
├── components/
│   ├── shared/
│   │   ├── Header.js / .css            # Public site navigation with mobile slide menu
│   │   ├── Footer.js / .css            # Public site footer
│   │   └── ServiceIcons.js             # Lucide icon wrappers for service tiles
│   │
│   └── dashboard/
│       ├── DashboardLayout.js / .css   # Shared sidebar and header shell
│       ├── client/
│       │   ├── ClientDashboard.js / .css    # Project progress, file list, stats
│       │   └── ClientAccount.js / .css      # Profile editing and notification settings
│       └── employee/
│           └── EmployeeDashboard.js / .css  # File upload and link sharing
│
└── pages/
    ├── Home.js / .css          # Landing page with animated hero
    ├── About.js / .css         # Brand story, timeline, and values
    ├── Services.js / .css      # Service offerings detail page
    ├── Portfolio.js / .css     # Filterable portfolio grid with lightbox
    ├── Contact.js / .css       # Contact form with validation
    ├── Login.js                # Authentication placeholder
    └── Signup.js               # Registration placeholder
```

---

## Routes

| Route | Page |
|---|---|
| `/` or `/home` | Home |
| `/about` | About |
| `/services` | Services |
| `/portfolio` | Portfolio |
| `/connect` | Contact |
| `/login` | Login |
| `/signup` | Sign Up |
| `/client-dashboard` | Client Dashboard |
| `/client-dashboard/account` | Client Account Settings |
| `/employee-dashboard` | Employee Dashboard |

---

## Backend Integration Guide

The frontend is built with a clear separation between UI and data. All the places that currently use hardcoded state or local data are documented below, ready for a backend developer to wire up.

### Authentication

**Files:** `src/pages/Login.js`, `src/pages/Signup.js`

Currently placeholder pages with form UI only. To integrate:

- Connect form submit handlers to `POST /api/auth/login` and `POST /api/auth/register`
- On success, store the returned JWT token (recommended: `httpOnly` cookie or `localStorage`)
- Pass the token as `Authorization: Bearer <token>` on all protected requests
- Add a React context (e.g. `AuthContext`) to share auth state and protect dashboard routes

Expected login response shape:
```json
{
  "token": "eyJ...",
  "user": {
    "id": "123",
    "name": "Thandi M.",
    "email": "thandi@example.com",
    "role": "client"
  }
}
```

The `role` field drives routing — `client` goes to `/client-dashboard`, `employee` goes to `/employee-dashboard`.

---

### Client Dashboard

**File:** `src/components/dashboard/client/ClientDashboard.js`

Currently uses hardcoded project data and a static file list. To integrate:

- `GET /api/projects?clientId=123` — returns active and past projects
- `GET /api/files?clientId=123` — returns shared files list

Expected project shape:
```json
{
  "id": "proj_1",
  "title": "Brand Identity",
  "status": "in_progress",
  "currentStep": 2,
  "steps": ["Brief Received", "Design Started", "Design In Review", "Design Completed"]
}
```

Expected file shape:
```json
{
  "id": "file_1",
  "name": "BrandKit_v2.pdf",
  "size": "4.2 MB",
  "type": "pdf",
  "uploadedAt": "2025-02-10T10:00:00Z",
  "url": "https://your-storage.com/files/brandkit_v2.pdf"
}
```

---

### Client Account

**File:** `src/components/dashboard/client/ClientAccount.js`

Profile form and notification toggles are managed in local component state. To integrate:

- `GET /api/user/:id` — pre-fill the profile form on load
- `PUT /api/user/:id` — submit profile updates
- `PUT /api/user/:id/notifications` — submit notification preference changes

---

### Employee Dashboard

**File:** `src/components/dashboard/employee/EmployeeDashboard.js`

File uploads and link sharing are frontend-only and reset on refresh. To integrate:

- `POST /api/files/upload` with `multipart/form-data` — upload to cloud storage (AWS S3, Cloudinary, or Supabase Storage recommended)
- `POST /api/links` — save a shared link record to the database
- `GET /api/submissions?employeeId=123` — load the submissions table on mount
- `DELETE /api/submissions/:id` — handle the remove action

---

### Contact Form

**File:** `src/pages/Contact.js`

Form has client-side validation and a success state UI. To integrate:

- `POST /api/contact` with `{ name, email, service, message }`
- Recommended: trigger an email notification via SendGrid or Resend on the backend

---

### Portfolio

**File:** `src/pages/Portfolio.js`

Project data is currently a hardcoded array. To integrate:

- `GET /api/portfolio` — returns all projects, optionally filtered by `?category=Campaign+Design`
- Each project object should include an `imageUrl` field — the card already accepts an `image` prop that takes a URL string

---

## Key Features

**Public Site**
- Animated rotating headline hero section
- Filterable portfolio grid with category pills and lightbox preview
- Loading skeleton animations on filter change
- Contact form with client-side validation and success state
- Social media marquee with infinite scroll animation
- Sticky header with scroll-aware transparency and mobile hamburger slide menu

**Client Dashboard**
- Project progress tracker with step indicators
- Past projects gallery
- Shared files list with download action
- Account page with profile editing and notification preference toggles

**Employee Dashboard**
- Drag-and-drop file upload with client selector
- External link sharing for WeTransfer, Google Drive, etc.
- Submissions table with file and link type indicators

**General**
- Fully responsive at 600px, 768px, 900px, and 1100px breakpoints
- Accessible — semantic HTML, ARIA labels, focus states, keyboard navigation
- CSS custom properties for consistent design tokens throughout

---

## Design System

| Token | Value |
|---|---|
| Primary colour | `#7f2cdd` |
| Hover colour | `#641eb4` |
| Display font | Bebas Neue (Google Fonts) |
| Body font | Montserrat (Google Fonts) |
| Border radius | 16px — 24px |

---

## About This Project

This project was built while actively learning React and frontend development. It sits at the intersection of my background in graphic design and my growing technical skills — and reflects how much ground I have covered in a short time.

**What I learned building this:**

- Component architecture — breaking a large UI into reusable, single-responsibility components and understanding when to lift state up vs keep it local
- React Router — nested routes, URL parameters, and navigating between pages with state
- CSS custom properties — building a consistent design system with variables rather than hardcoded values across dozens of files
- Responsive design — mobile-first layouts, fluid typography with `clamp()`, and managing complex grids across breakpoints without a framework
- Accessibility — semantic HTML, ARIA roles and labels, keyboard navigation, and focus management
- Git workflow — version control, writing meaningful commit messages, and maintaining a clean project history
- Developer tooling — npm, understanding the build process, reading error messages, and debugging in the browser

**What comes next:**

- Connecting the frontend to a real backend (Node/Express or Supabase)
- Implementing real authentication with JWT and protected routes
- Cloud file storage integration for the Employee Dashboard
- Deploying the full application

This project is an honest snapshot of where I am in my learning — built with care, structured deliberately, and designed to grow.