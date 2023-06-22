const express = require('express');
const app = express();
const cors = require('cors');

app.listen(3000, ()=>{
    console.log('The Server is On');
});



//Use required express middlewares for incoming requests
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));
app.use(cors());

//Create Get route that sends welcome message in response to incoming requests
app.get('/',(req,res)=>{
    res.send("Hello World");
});


//Create Employer ojbect array
const Data1 = [
{ title: "visiting the family", description: "summer vacation", date: "July 1, 2023", time: "12:00pm", priority_level: "low", category: "spare time", progress_level: "complete"},
{ title: "science homework", description: "first week homework", date: "Sept 1, 2023", time: "8:00am", priority_level: "high", category: "homework", progress_level: "not started"}
];


//Create Get method to send data when visiting localhost:000
app.get('/tasks/get_all',(req, res)=>{
    res.send(Data1);
});

// Create POST method to add a task
app.post('/tasks/add_task', (req, res) => {
    const newTask = req.body;
    Data1.push(newTask);
    console.log(Data1); // Log the updated array
    res.status(200).json({ message: 'Task added successfully' });
  });