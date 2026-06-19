# Kidrove Workshop Landing Page

A full-stack responsive workshop landing page for the **AI & Robotics Summer Workshop**, built as part of the Kidrove internship assignment.

## Live Links

Frontend Live Demo: `PASTE_YOUR_VERCEL_FRONTEND_URL_HERE`
Backend API: `PASTE_YOUR_RENDER_BACKEND_URL_HERE`
GitHub Repository: `https://github.com/amaan9291/kidrove-workshop`

## Project Overview

Kidrove regularly organizes workshops, camps, and courses for children. This project is a responsive landing page for an **AI & Robotics Summer Workshop** designed for children aged **8–14 years**.

The page includes a modern hero section, workshop details, learning outcomes, FAQ accordion, and a registration form. The form is connected to an Express.js backend API, validates user input, and stores enquiry data in MongoDB Atlas.

## Workshop Details

* **Workshop Name:** AI & Robotics Summer Workshop
* **Age Group:** 8–14 Years
* **Duration:** 4 Weeks
* **Mode:** Online
* **Fee:** ₹2,999
* **Start Date:** 15 July 2026

## Tech Stack

### Frontend

* React.js
* TypeScript
* Tailwind CSS
* React Hook Form
* Zod Validation
* Lucide React Icons
* Vite

### Backend

* Node.js
* Express.js
* TypeScript
* MongoDB Atlas
* Mongoose
* Zod
* CORS
* Dotenv

### Deployment

* Frontend deployed on Vercel
* Backend deployed on Render
* Database hosted on MongoDB Atlas

## Features

* Fully responsive design for mobile, tablet, desktop, and large screens
* Clean and reusable React component structure
* Mobile and tablet navigation menu
* Hero section with clear call-to-action
* Workshop details displayed in responsive cards
* Learning outcomes section
* FAQ accordion
* Registration form with frontend validation
* Loading, success, and error states
* Express.js API endpoint for enquiries
* Backend validation using Zod
* MongoDB Atlas integration for storing enquiries
* CORS configuration for local and deployed frontend
* Environment variable based configuration

## API Endpoint

### POST `/api/enquiry`

Accepts registration form data and stores it in MongoDB.

### Request Body

```json
{
  "name": "Test User",
  "email": "test@example.com",
  "phone": "9876543210"
}
```

### Success Response

```json
{
  "success": true,
  "message": "Enquiry submitted successfully.",
  "data": {
    "id": "mongodb_document_id",
    "name": "Test User",
    "email": "test@example.com",
    "phone": "9876543210",
    "workshopTitle": "AI & Robotics Summer Workshop"
  }
}
```

### Health Check

```txt
GET /api/health
```

Response:

```json
{
  "success": true,
  "message": "Server is healthy."
}
```

## Folder Structure

```txt
kidrove-workshop/
  client/
    src/
      components/
        FAQ.tsx
        Footer.tsx
        Hero.tsx
        LearningOutcomes.tsx
        Navbar.tsx
        RegistrationForm.tsx
        WhyChooseUs.tsx
        WorkshopDetails.tsx
      data/
        workshopData.ts
      types/
        enquiry.ts
      App.tsx
      main.tsx
      index.css

  server/
    src/
      controllers/
        enquiryController.ts
      models/
        Enquiry.ts
      routes/
        enquiryRoutes.ts
      server.ts
```

## Local Setup

### 1. Clone the repository

```bash
git clone https://github.com/amaan9291/kidrove-workshop.git
cd kidrove-workshop
```

### 2. Setup frontend

```bash
cd client
npm install
npm run dev
```

Create a `client/.env` file:

```env
VITE_API_URL=http://localhost:5000
```

Frontend will run on:

```txt
http://localhost:5173
```

### 3. Setup backend

```bash
cd server
npm install
npm run dev
```

Create a `server/.env` file:

```env
PORT=5000
MONGO_URI=your_mongodb_atlas_connection_string
CLIENT_URL=http://localhost:5173
```

Backend will run on:

```txt
http://localhost:5000
```

## Environment Variables

### Frontend

| Variable       | Description          |
| -------------- | -------------------- |
| `VITE_API_URL` | Backend API base URL |

### Backend

| Variable     | Description                     |
| ------------ | ------------------------------- |
| `PORT`       | Backend server port             |
| `MONGO_URI`  | MongoDB Atlas connection string |
| `CLIENT_URL` | Allowed frontend URL for CORS   |

## Build Commands

### Frontend Build

```bash
cd client
npm run build
```

### Backend Build

```bash
cd server
npm run build
```

## Deployment Notes

### Vercel Frontend Settings

* **Root Directory:** `client`
* **Framework Preset:** Vite
* **Install Command:** `npm install`
* **Build Command:** `npm run build`
* **Output Directory:** `dist`

Frontend environment variable:

```env
VITE_API_URL=https://your-render-backend-url.onrender.com
```

### Render Backend Settings

* **Root Directory:** `server`
* **Build Command:** `npm install && npm run build`
* **Start Command:** `npm start`

Backend environment variables:

```env
MONGO_URI=your_mongodb_atlas_connection_string
CLIENT_URL=https://your-vercel-frontend-url.vercel.app
```

## Future Improvements

Given more time, I would add an admin dashboard to view enquiries, email confirmation after registration, advanced animations, enquiry export functionality, and authentication for admin users.

## Assignment Note

I built a responsive workshop landing page for the AI & Robotics Summer Workshop using React, TypeScript, and Tailwind CSS. The page is structured into reusable components including Navbar, Hero, Workshop Details, Learning Outcomes, FAQ, Registration Form, and Footer. I focused on a clean, parent-friendly UI with strong responsiveness across mobile, tablet, desktop, and large screens. The registration form uses React Hook Form and Zod for validation, with loading, success, and error states. The backend is built with Express.js and TypeScript, exposes a POST `/api/enquiry` endpoint, validates incoming form data, and stores enquiries in MongoDB Atlas using Mongoose.
