const express = require('express')
const fs = require('fs')
const router = express.Router()
const notes = require ("../db/db.json")
const path = require('path')

router.get("/notes", function(req,res){
  res.sendFile(path.join(__dirname, "../public/notes.html"))
});

router.get('*', function (req,res){
  res.sendFile(path.join(__dirname, "../publix/index.html"))
})

module.exports = router;