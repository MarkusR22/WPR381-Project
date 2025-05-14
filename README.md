![image](https://github.com/user-attachments/assets/86f5a030-0875-4c39-907f-2851cb60aa6f)<body style="font-family:'Roboto';">
<h1 align="center">🎮 Belgium Campus Events & Clubs Portal 🎮</h1> 
 
<h2>💡 What This Project Does 💡</h2>
This project is a dynamic community portal website built for Belgium Campus Students!
It allows users to learn more about the club, browse upcoming events, and get in touch through a contact form. It is built using Node.js, Express, and EJS templating.
 
<h2 align="center">🚀 Technologies Used 🚀</h2> 
<p>
 <ul>
  <li> Node.js</li>
  <li>Express.js</li>
  <li>EJS</li>
  <li>Git + GitHub</li>
 </ul>
</p>
 
<h2 align="center">👥 Team Members & Roles 👥</h2> 
<p>
 <ul>
  <li>TEAM 6 – Team Leader</li>
  <li>Markus Reblin(578083) – Backend Developer</li>
  <li>Markus Du Plessis(600611) – Frontend Developer</li>
  <li>Barend Blom(600228) – Data Manager</li>
  <li>Iwan Groenewald(600166) – Documentation Manager</li>
 </ul>
</p>
 
<h2 align="center">Setup Instructions</h2> 
<p>
 <ol>
  <li>Clone the repo</li>
  <li>Run <code>npm install</code> to install dependencies</li>
  <li>Run <code>npm run dev</code> to start the server with nodemon</li>
  <li>Visit <code>http://localhost:3000</code> in the terminal</li>
 </ol>
</p>
 
<h2 align="center">📂 Folder Structure 📂</h2> 
 
* ↓[Public](https://github.com/MarkusR22/WPR381-Project/tree/main/public)
   * ↳[css](https://github.com/MarkusR22/WPR381-Project/tree/main/public/css)
   * ↳[images](https://github.com/MarkusR22/WPR381-Project/tree/main/public/images)
* ↓[routes](https://github.com/MarkusR22/WPR381-Project/tree/main/routes)
   * ↳[Data](https://github.com/MarkusR22/WPR381-Project/tree/main/routes/Data)
   * ↳[pageRoutes.js](https://github.com/MarkusR22/WPR381-Project/blob/main/routes/pageRoutes.js)
* ↓[Units](https://github.com/MarkusR22/WPR381-Project/tree/main/utils)
   * ↳[eventUtils.js](https://github.com/MarkusR22/WPR381-Project/blob/main/utils/eventUtils.js)
* ↓[views](https://github.com/MarkusR22/WPR381-Project/tree/main/views)
   * ↳[errors](https://github.com/MarkusR22/WPR381-Project/tree/main/views/errors)
   * ↳[pages](https://github.com/MarkusR22/WPR381-Project/tree/main/views/pages)
   * ↳[partials](https://github.com/MarkusR22/WPR381-Project/tree/main/views/partials)
* ➜[README.md](https://github.com/MarkusR22/WPR381-Project/blob/main/README.md)
* ➜[app.js](https://github.com/MarkusR22/WPR381-Project/blob/main/app.js)
* ➜[package-lock.json](https://github.com/MarkusR22/WPR381-Project/blob/main/package-lock.json)
* ➜[package.json](https://github.com/MarkusR22/WPR381-Project/blob/main/package.json)
 
 <h2 align="center">🖼 Pages 🖼</h2>

<div align="center">
  <h3>Home: Welcome message + upcoming events</h3>
  <img src="https://github.com/user-attachments/assets/cfc996f1-b309-4d55-999d-f5b0771dcaf7" alt="Home 2" />

  <h3>About: Info about the team/club</h3>
  <img src="https://github.com/user-attachments/assets/9cddd90f-fd89-4089-89a8-23ea694c5484" alt="About 1" />
  <img src="https://github.com/user-attachments/assets/303097ce-317b-4e4a-9b38-3315f61a55a1" alt="About 2" />

  <h3>Events: List of club events (from array in backend)</h3>
  <img src="https://github.com/user-attachments/assets/975c326f-6688-46b6-bef1-543d09b2bbb1" alt="Events" />

  <h3>Contact: Contact form (name, email, message)</h3>
  <img src="https://github.com/user-attachments/assets/02309320-630b-43bc-8839-495856358115" alt="Contact" />

  <h3>Thank You: Confirmation page after submitting form</h3>
  <img src="https://github.com/user-attachments/assets/24f57d34-a60b-4979-9961-1134919f8c04" alt="Thank You" />
</div>


 
<h2 align="center">🧠 How It Works 🧠</h2> 
 <ul>
  <li>Events and About info are pulled from arrays in the backend</li>
  <li>Contact form uses POST method and stores data in a temp array</li>
  <li>EJS is used to dynamically render data into templates</li>
  <li>Header and footer are reused across all pages using partials</li>
 </ul>

 <h2 align="center">✅ Features ✅</h2> 
  <ul>
  <li>Dynamic content rendering</li>
  <li>Form submission with validation</li>
  <li>Clean, modular routing</li>
  <li>Git version control for collaboration</li>
 </ul>
 
<h2 align="center">🙌 Reflection 🙌</h2>
This project helped us understand routing, templating, and real-world collaboration using Git. We learned how to work as a team and build a complete web app from scratch.
</body>
