import express from 'express'; // Import express framework
import cors from 'cors'; // Import CORS middleware
import path from 'path'; // For file and folder path handling
import { fileURLToPath } from 'url'; // To get the current file's URL
import { dirname } from 'path'; // To extract the directory name from the file URL

const app = express(); // Create an Express application

// Get the current directory name, useful for serving static files
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Allow CORS to be used in the app (needed for cross-origin requests)
app.use(cors());

// Serve static files (like HTML, CSS, JS) from the "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// Route to handle GET requests to /post
app.get('/post', (req, res) => {
    fetch('https://jsonplaceholder.typicode.com/posts') // Fetch posts from an external API
        .then(response => response.json()) // Parse the response as JSON
        .then(data => {
            res.json(data); // Send the fetched data back to the client
        })
        .catch(error => {
            res.status(500).json({ error: 'Failed to fetch data' }); // Handle errors if the API request fails
        });
});

// Start the server on port 3000
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
