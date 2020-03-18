const express = require('express')
const fs = require('fs')
const router = express.Router()
const notes = require ("../db/db.json")

router.get('/api/notes', function(req,res){
  res.json(notes);
  req.json(true); //just to have a req response

})

router.post("/api/notes", function(req, res){
  if(notes.length < 1){
      req.body.id = 1
  } else {
      let lastID = notes[notes.length -1].id
      req.body.id = lastID + 1
  }
  console.log(req.body);
  notes.push(req.body);
  fs.writeFileSync('./db/db.json', JSON.stringify(notes))
  //path/name of file db.json
  //content notes (stringify)
  res.json(true);
})
