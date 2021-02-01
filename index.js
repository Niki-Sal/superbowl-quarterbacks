const express = require ("express")
const app = express()

app.get('/',(req, res) =>{
    res.sendFile(__dirname+'/views/index.html')
})

app.get('/tom',(req, res) =>{
    res.sendFile(__dirname+'/views/tom.html')
})

app.get('/patrick',(req,res) =>{
    res.sendFile(__dirname+'/views/patrick.html')
})
const PORT = process.env.PORT || 8000;
app.listen(PORT, () =>{
    console.log ("Server listening on port:" , PORT);
})