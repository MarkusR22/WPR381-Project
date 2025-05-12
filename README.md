# 🎮 Gaming Club Portal Website 🎮

## 💡 What This Project Does 💡
This project is a dynamic community portal website built for [Your Club Name Here]. It allows users to learn more about the club, browse upcoming events, and get in touch through a contact form. It is built using Node.js, Express, and EJS templating.

## 🚀 Technologies Used 🚀
- Node.js
- Express.js
- EJS
- CSS / Bootstrap (if used)
- Git + GitHub
- Nodemon

## 👥 Team Members & Roles 👥
- TEAM 6 – Team Lead
- Markus Reblin(578083) – Backend Developer
- Markus Du Plessis(600611) – Frontend Developer
- Barend Blom(600228) – Data Manager
- Iwan – Documentation Manager

## Setup Instructions
1. Clone the repo
2. Run `npm install` to install dependencies
3. Run `npm run dev` to start the server with nodemon
4. Visit `http://localhost:3000` in your browser

## 📂 Folder Structure 📂

 * [Public](https://github.com/MarkusR22/WPR381-Project/tree/main/public)
   * [css](https://github.com/MarkusR22/WPR381-Project/tree/main/public/css)
   * [images](https://github.com/MarkusR22/WPR381-Project/tree/main/public/images)
 * [routes](https://github.com/MarkusR22/WPR381-Project/tree/main/routes)
   * [pageRoutes.js](https://github.com/MarkusR22/WPR381-Project/blob/main/routes/pageRoutes.js)
 * [Units](https://github.com/MarkusR22/WPR381-Project/tree/main/utils)
   * [eventUtils.js](https://github.com/MarkusR22/WPR381-Project/blob/main/utils/eventUtils.js)
 * [views](https://github.com/MarkusR22/WPR381-Project/tree/main/views)
   * [errors](https://github.com/MarkusR22/WPR381-Project/tree/main/views/errors)
   * [pages](https://github.com/MarkusR22/WPR381-Project/tree/main/views/pages)
   * [partials](https://github.com/MarkusR22/WPR381-Project/tree/main/views/partials)
 * ([./README.md](https://github.com/MarkusR22/WPR381-Project/blob/main/README.md))
 * [dir3](./dir3)

## 🖼 Pages 🖼
- **Home:** Welcome message + upcoming events
- **About:** Info about the team/club
- **Events:** List of club events (from array in backend)
- **Contact:** Contact form (name, email, message)
- **Thank You:** Confirmation page after submitting form

## 🧠 How It Works 🧠
- Events and About info are pulled from arrays in the backend
- Contact form uses POST method and stores data in a temp array
- EJS is used to dynamically render data into templates
- Header and footer are reused across all pages using partials

## ✅ Features ✅
- Dynamic content rendering
- Form submission with validation
- Clean, modular routing
- Git version control for collaboration

## 🙌 Reflection 
This project helped us understand routing, templating, and real-world collaboration using Git. We learned how to work as a team and build a complete web app from scratch.
