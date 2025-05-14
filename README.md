# 🎮 Belgium Campus Events & Clubs Portal 🎮
 
## 💡 What This Project Does 💡
This project is a dynamic community portal website built for Belgium Campus Students!
It allows users to learn more about the club, browse upcoming events, and get in touch through a contact form. It is built using Node.js, Express, and EJS templating.
 
## 🚀 Technologies Used 🚀
- Node.js
- Express.js
- EJS
- Git + GitHub
 
## 👥 Team Members & Roles 👥
- TEAM 6 – Team Leader
- Markus Reblin(578083) – Backend Developer
- Markus Du Plessis(600611) – Frontend Developer
- Barend Blom(600228) – Data Manager
- Iwan Groenewald(600166) – Documentation Manager
 
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
* [README.md](https://github.com/MarkusR22/WPR381-Project/blob/main/README.md)
* [app.js](https://github.com/MarkusR22/WPR381-Project/blob/main/app.js)
* [package-lock.json](https://github.com/MarkusR22/WPR381-Project/blob/main/package-lock.json)\
* [package.json](https://github.com/MarkusR22/WPR381-Project/blob/main/package.json)
 
## 🖼 Pages 🖼
- **Home:** Welcome message + upcoming events
 ![image](https://github.com/user-attachments/assets/7719215f-a055-4fde-9fbe-01782da93c03)

- **About:** Info about the team/club
 ![image](https://github.com/user-attachments/assets/9cddd90f-fd89-4089-89a8-23ea694c5484)
 ![image](https://github.com/user-attachments/assets/303097ce-317b-4e4a-9b38-3315f61a55a1)


- **Events:** List of club events (from array in backend)
 ![image](https://github.com/user-attachments/assets/975c326f-6688-46b6-bef1-543d09b2bbb1)

- **Contact:** Contact form (name, email, message)
 ![image](https://github.com/user-attachments/assets/02309320-630b-43bc-8839-495856358115)

- **Thank You:** Confirmation page after submitting form
 ![image](https://github.com/user-attachments/assets/24f57d34-a60b-4979-9961-1134919f8c04)

 
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
 
## 🙌 Reflection 🙌
This project helped us understand routing, templating, and real-world collaboration using Git. We learned how to work as a team and build a complete web app from scratch.
