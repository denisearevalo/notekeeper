//  Declare dependencies
const express = require('express');

// Create an express server
const app = express();
const router = express.Router()

// Declare PORT
const PORT = process.env.PORT || 3001;

// Implement middleware/parsing
router.use(express.json());
router.use(express.urlencoded({ extended: true }));
// router.use(express.static(__dirname));
router.use(express.static('public'));


// Listener
app.listen(PORT, () => 
    console.log(`App listening at http://localhost:${PORT}`)
);