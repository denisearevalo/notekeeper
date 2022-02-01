// declare dependencies
const fs = require("fs");
const path = require("path");

// router
module.exports = app => {
    fs.readFile ("db/db.json", (err, data) => {
        if (err) throw err;
        var notes = JSON.parse(data);
        // GETs /api/notes
        app.get("/api/notes", function (req, res){
            res.json(notes);
        });
        // POSTs to /api/notes to receive new note
        app.post("/api/notes", function (req, res){
            let newNotes = req.body;
            notes.push(newNotes);
            updateData();
            return console.log("New note added");
        });
        // GETs note with particular id
        app.get("/api/notes/:id", function (req,res) {
            res.json(notes[req.params.id]);
        });
        // bonus using splice to remove note with particular id
        app.delete("/api/notes/:id", function(req, res) {
            notes.splice(req.params.id, 1);
            updateData();
            console.log("Deleted note with id "+req.params.id);
        });
        // GET notes to return to the notes.html file
        app.get("/notes", function(req,res){
            res.sendFile (path.join(__dirname, "/public/notes.html"));
        });
        // GET * to return to the index.html file
        app.get("*", function(req,res){
            res.sendFile (path.join(__dirname,"/public/index.html"));
        });
        // function to JSONify the user notes
        function updateData () {
            fs.writeFile("db.db.json",JSON.stringify(notes), err => {
                if (err) throw err;
                return true;
            });
        };
    });
};