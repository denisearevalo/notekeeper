//  Declare dependencies
const express = require('express');
const path = require("path");
const api = require("./route");
// Create an express server
const app = express();


// Declare PORT
const PORT = process.env.PORT || 3001;

// Implement middleware/parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// router.use(express.static(__dirname));
app.use(express.static('public'));

app.use("/api", api)

app.get("/notes", function(req,res){
    res.sendFile (path.join(__dirname, "/public/notes.html"));
});
// GET * to return to the index.html file
app.get("*", function(req,res){
    res.sendFile (path.join(__dirname,"/public/index.html"));
});

// Listener
app.listen(PORT, () => 
    console.log(`App listening at http://localhost:${PORT}`)
);