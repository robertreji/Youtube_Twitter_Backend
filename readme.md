# 📚 Project: Data Modeling Practice

This project is a learning environment for practicing **data modeling** using **MongoDB** and **Mongoose**. It includes real-world system examples such as **Hotel Management**, **To-Do Lists**, and more.

---

## 🔧 Tech Stack

| Technology | Purpose |
|------------|---------|
| **MongoDB** | NoSQL database for storing application data |
| **Mongoose** | ODM (Object Data Modeling) for MongoDB – defines schemas & models |
| **Node.js** | JavaScript runtime for building the backend |
| **Eraser** | Visual tool for planning database schemas |
| **nodemon** | Automatically restarts the server on code changes |
| **bcryptjs** | Password hashing for secure storage |
| **jsonwebtoken** | Token generation for user authentication (Bearer tokens) |
| **mongoose-aggregate-paginate-v2** | Pagination plugin for Mongoose `.aggregate()` queries |
| **multer** | Middleware for handling file uploads (required for `multipart/form-data`) |
| **cloudinary** | Cloud service for securely storing uploaded user files |

> ⚠️ Without **`multer`**, Express **cannot handle file uploads**.

---

## 📦 Installed Packages (Dependencies)

| Package | Purpose |
|--------|---------|
| **express** | Web framework for Node.js |
| **mongoose** | ODM library for MongoDB |
| **dotenv** | Loads environment variables from `.env` |
| **cookie-parser** | Middleware for parsing cookies in requests |
| **cors** | Enables Cross-Origin Resource Sharing |

---

## 🧠 Data Modeling Process

1. **Design your schema visually** using [Eraser](https://eraser.io/) or another schema design tool.  
2. **Convert designs into code** using Mongoose models.  
3. Apply appropriate **relationships**:
   - One-to-One
   - One-to-Many
   - Many-to-Many

---

## 🗂️ Project Structure

Backend/
├── node_modules/ # Installed packages
├── public/ # Public/config files
├── src/ # Main application code
│ ├── controllers/ # Route logic
│ ├── db/ # MongoDB connection setup
│ ├── middlewares/ # Express middlewares
│ ├── models/ # Mongoose models
│ ├── routes/ # API route definitions
│ ├── utils/ # Helper utilities (e.g., cloudinary config)
│ ├── constants.js # Global constants
│ ├── app.js # Express app configuration
│ └── index.js # Server entry point
├── .env # Environment variables
├── .gitignore # Files/folders to ignore in Git
├── package.json # Project metadata and scripts
├── package-lock.json # Dependency lock file
└── README.md # Project documentation




---

## ⚙️ Development Scripts

Add the following to your `package.json` to use `nodemon`:

```json
"scripts": {
  "dev": "nodemon src/index.js"
}


🍪 Cookie Handling
To handle cookies in your Express application, ensure cookie-parser is installed and configured: