const express = require("express");
const dotenv = require("dotenv");
const {chats} = require("./data/data");


const app = express();
dotenv.config();

app.get('/', (req, res) =>{
    res.send("API is running succefully");
})

app.get('/api/chat', (req, res) =>{
    res.send(chats);
});

app.get('/api/chat/:id', (req, res) =>{
    //console.log(req.params.id);
    const singleChat = chats.find((c) => c._id === req.params.id);
    res.send(singleChat)
})

const PORT = process.env.PORT || 80
app.listen(80, console.log(`Server started on port ${PORT}`));