# Kidrove Workshop Landing Page

A responsive workshop landing page for the **AI & Robotics Summer Workshop** created as part of the Kidrove internship assignment.

## Project Overview

Kidrove regularly organizes workshops, camps, and courses for children. This project presents a user-friendly landing page for an AI & Robotics Summer Workshop for children aged 8–14 years.

The page includes a hero section, workshop details, learning outcomes, FAQ accordion, and a registration form connected to an Express.js API.

## Workshop Details

- Workshop: AI & Robotics Summer Workshop
- Age Group: 8–14 Years
- Duration: 4 Weeks
- Mode: Online
- Fee: ₹2,999
- Start Date: 15 July 2026

## Tech Stack

### Frontend

- React.js
- TypeScript
- Tailwind CSS
- React Hook Form
- Zod
- Lucide React Icons

### Backend

- Node.js
- Express.js
- TypeScript
- MongoDB Atlas
- Mongoose
- Zod
- CORS
- Dotenv

## Features

- Responsive design for mobile, tablet, laptop, desktop, and large screens
- Clean React component structure
- Workshop details section
- Learning outcomes section
- FAQ accordion
- Registration form
- Frontend form validation
- Backend API validation
- Loading state during form submission
- Success and error messages
- MongoDB Atlas integration for storing enquiries

## API Endpoint

### POST `/api/enquiry`

Accepts registration form data.

Request body:

```json
{
  "name": "Wasi Khan",
  "email": "test@example.com",
  "phone": "9876543210"
}

