const express = require("express"); //adds express
const app = express(); //easier than typing express lol 
const PORT = process.env.PORT || 4040; //adds a port for the connection to the server
const fs = require('fs'); //allows access to the files, deleting, adding, moving, creating 
const path = require('path'); //allows an easier way to get to files 
let noteData = require('./develop/db/db.json') //easier than jumping around the files

app.use(express.static('develop/public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req,res)=>{
  res.sendFile(path.join(__dirname, './develop/public/index.html'))
}) //sends the index file 

app.get('/notes', (req,res)=>{
  res.sendFile(path.join(__dirname, './develop/public/notes.html'))
}) //sends the notes file 

app.get('/api/notes', (req, res)=>{
  res.json(noteData)
}) //sends the note data response from the db file 

app.post('/api/notes',(req,res)=>{
  noteData.push(req.body):
  noteData.forEach((note,i)=>{
    note.id = i +1
  });
  let newNote = JSON.stringify(noteData);
  fs.writeFileSync('./develop/db/db.json', newNote);

  res.json(noteData);
})

app.delete('/api/notes:id', (req,res)=>{
  let filtered= noteData.filter(note=>note.id !==parseInt(req.params.id));

  fs.writeFileSync('./develop/db/db.json', JSON.stringify(filtered))

  res.json(filtered)
})


app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });