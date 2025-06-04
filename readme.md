# 📚 Project: Data Modeling Practice

This project is a practice environment for learning **data modeling** using **MongoDB + Mongoose**. Examples include systems like **Hotel Management**, **To-Do List**, and more.

---

## 🔧 Tech Stack

- **MongoDB** for database
- **Mongoose** for schema modeling
- **Node.js** (with `type: module` in `package.json`)
- **Eraser** tool for visual data modeling
- **NodeMon** tool that automatically restarts  Node.js server whenever we make       changes to your source files.(install it )

use it like this (
  in package.json
  "scripts": {
    "dev":"nodemon src/index.js"
  },
)

 # Package (dependencies)	installed:
  - **express**:	Web framework for Node.js
  - **mongoose**: ODM for MongoDB, handles data modeling
  - **dotenv** :	Loads environment variables from .env


---

## ✍️ Data Modeling Process

. **Plan your schema visually** using [Eraser](https://eraser.io/) or any other modeling tool.
2. Translate the schema into **Mongoose models** in code.
3. Use proper relationships (One-to-Many, Many-to-Many) as required.

---

## 📁 File Structure

Backend/
├── node_modules/              # Installed dependencies
├── public/                    # Public/config files
│                     # Environment variables
│             # Files to ignore in Git
├── src/                       # Main source code
│   ├── controllers/           # Route logic/controllers
│   ├── db/                    # Database connection setup
│   ├── middlewares/           # Express middlewares
│   ├── models/                # Mongoose data models
│   ├── routes/                # Route definitions
│   ├── utils/                 # Utility/helper functions
│   ├── app.js                 # Express app configuration
│   ├── constants.js           # Global constants
│   └── index.js 
|── .env 
└── .gitignore                # Entry point of the application
├── package.json               # Project metadata and scripts
├── package-lock.json          # Dependency lock file
└── Readme.md                  # Project documentation
