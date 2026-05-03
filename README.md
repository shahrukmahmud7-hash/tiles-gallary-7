## Tiles Gallery Purpose 

Tiles Gallery is a modern web application designed to showcase a beautiful collection of decorative tiles.
Users can browse tiles, search items, view detailed information, and manage their profile through a secure authentication system.
The goal of this project is to create a responsive, user-friendly gallery platform with authentication and dynamic data handling.

# Live URL

here : https://tiles-gallary-7.vercel.app


## Key Features

# Home Page
Hero banner with “Discover Your Perfect Aesthetic”
Marquee announcement section
Featured tiles (top 6 from server)
Navigation to All Tiles page

## All Tiles Page

Search functionality by tile title
Clean card layout with image and details button
 Tile Details Page
High-quality tile preview
Full details: title, description, material, dimensions, category
Tags for better classification

## Authentication System
Email & Password Login
User Registration (Name, Email, Password)
Google Social Login
Redirect handling after login/register
Error handling with toast messages

## My Profile (Private Route)
View logged-in user data
Update name and profile image
Secure update functionality using BetterAuth

## Protected Routes
Private pages: Tile details & My Profile
Public pages: Home, Login, Register, All Tiles

## Extra Features
Loading spinner during data fetch
404 Not Found page
Fully responsive design (mobile, tablet, desktop) 