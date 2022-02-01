// declare dependencies
const fs = require("fs");

// router
const router = require("express").Router()

    
        // GETs /notes
        router.get("/notes", function (req, res){
            fs.readFile ("db/db.json", (err, data) => {
                if (err) throw err;
                var notes = JSON.parse(data);
            res.json(notes);
        });
        });
        // POSTs to /notes to receive new note
        router.post("/notes", function (req, res){
            let newNotes = req.body;
            notes.push(newNotes);
            updateData();
            return console.log("New note added");
        });
        // GETs note with particular id
        router.get("/notes/:id", function (req,res) {
            res.json(notes[req.params.id]);
        });
        // bonus using splice to remove note with particular id
        router.delete("/notes/:id", function(req, res) {
            notes.splice(req.params.id, 1);
            updateData();
            console.log("Deleted note with id "+req.params.id);
        });
        // GET notes to return to the notes.html file
       
        // function to JSONify the user notes
        function updateData () {
            fs.writeFile("db.db.json",JSON.stringify(notes), err => {
                if (err) throw err;
                return true;
            });
        };
    
 module.exports = router