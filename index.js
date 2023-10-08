import express from "express";
import bodyParser from "body-parser";

const app=express();
const port=3000;
const tasks=[];
const tasks1=[];

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/",(req,res)=>{
    res.render("index.ejs",{
    });
});

app.get("/next",(req,res)=>{
    res.render("next.ejs",{
    });
});



app.post("/",(req,res)=>{
     const task=req.body.newItem;
    tasks.push(task);
    var tablelength=tasks.length;
    res.render("index.ejs",{
        length:tablelength,
        add:tasks,
    });
    });

app.post("/next",(req,res)=>{
    const task1=req.body.newItem;
     tasks1.push(task1);
     var tablelength1=tasks1.length;
   res.render("next.ejs",{
    length1:tablelength1,
    add1:tasks1,
});
});


app.listen(port,()=>{
    console.log(`Server successfully running on port ${port}`);
});
