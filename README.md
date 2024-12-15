
# Basic Web Terminology

This project demonstrates a simple web application that fetches and displays data from an external API using **Node.js** and **Express** on the backend, and vanilla **HTML**, **CSS**, and **JavaScript** on the frontend. The goal is to provide a functional example of building a server, fetching external data, and displaying it dynamically on a webpage.

---

## Features

- **Backend**:
  - Built using **Node.js** and **Express**.
  - Fetches data from [JSONPlaceholder](https://jsonplaceholder.typicode.com/) API.
  - Handles API requests and serves responses in JSON format.
  - Configured to allow CORS (Cross-Origin Resource Sharing) for frontend interaction.

- **Frontend**:
  - Simple HTML page styled with CSS.
  - Dynamically fetches and displays posts from the backend using the **Fetch API**.
  - Responsive layout using CSS for a clean user interface.

- **Development Workflow**:
  - File changes are reflected automatically using `nodemon`.
  - Proper `.gitignore` configuration to avoid committing unnecessary files like `node_modules`.

---

## Folder Structure

```plaintext
Basic Web Terminology/
├── public/
│   ├── ApiData.html         # Frontend HTML file
│   ├── style.css            # CSS file for styling
├── .gitignore               # Ignored files/folders configuration
├── package.json             # Node.js project metadata
├── package-lock.json        # Dependency tree
├── server.js                # Main server file
├── test.json                # Example JSON data file
```

---

## Getting Started

### Prerequisites
- Install [Node.js](https://nodejs.org/).
- A basic understanding of backend and frontend development.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/Basic-Web-Terminology.git
   ```
2. Navigate into the project directory:
   ```bash
   cd Basic-Web-Terminology
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```

---

## Usage

1. Start the server:
   ```bash
   nodemon server.js
   ```
   The server will start at [http://localhost:3000](http://localhost:3000).

2. Open the `public/ApiData.html` file in your browser to view the fetched API data.

---

## Technologies Used

- **Node.js**: Backend runtime environment.
- **Express**: Server framework for Node.js.
- **HTML & CSS**: Structure and styling of the frontend.
- **JavaScript**: Dynamic data fetching and rendering on the client side.
- **JSONPlaceholder**: Free API for testing and prototyping.

---


