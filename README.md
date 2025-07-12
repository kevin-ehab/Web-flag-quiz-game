# 🌍 Flag Quiz Game

An interactive web-based game where users test their knowledge by guessing the country name from a displayed flag. Built using **Python (Flask)** for the backend and **HTML/CSS/JavaScript** for the frontend.

![Flag Quiz Banner](static/LOGO.png)

---

## 🚀 Features

- Dynamically displays a random flag and four country name options.
- Tracks score and rounds using `localStorage`.
- End screen summarizes your performance and allows resetting the game.
- Clean and responsive UI design.
- Uses Flask to serve flag data and handle game logic.

---

## 🧠 How It Works

### 🗂 Backend (Python + Flask)

- Uses `glob` to list all flag image files in `static/flags`.
- Cleans file names into readable country names.
- Stores paths and country names in a dictionary.
- `/next` route randomly selects 4 country choices and one correct answer, and sends the flag image and data as JSON.

### 📄 Frontend

- `home.html`: Welcome page with a Play Now button.
- `index.html`: Main quiz interface.
- `end.html`: Final results screen with feedback based on score.
- `script.js`: Handles flag loading, answer checking, scoring, and routing.
- `stylesheet.css`: Styles all pages and elements.

---

## 📁 File Structure
📦flag-quiz-game  
 ┣ 📂static  
 ┃ ┣ 📂flags          # All flag images  
 ┃ ┣ 📄stylesheet.css  
 ┃ ┣ 📄script.js  
 ┃ ┗ 📄LOGO.png  
 ┣ 📂templates  
 ┃ ┣ 📄home.html  
 ┃ ┣ 📄index.html  
 ┃ ┗ 📄end.html  
 ┣ 📄main.py          # Flask server logic  
 ┗ 📄README.md

---

## 📦 Dependencies
- Python 3

- Flask

---

## 🎮 How It Works
- When you open the game, it shows a flag image and 4 country options.

- You select one, and the correct one is highlighted.

- Your score and round count update after each guess.

- At the end, a summary message shows your performance based on accuracy.

---

## 💡 Tips
- Make sure the /static/flags/ folder contains at least 4 valid flag images.

- You can add more flags by placing .png files inside that folder.

---
## 📃 License
This project is open-source and free to use.

