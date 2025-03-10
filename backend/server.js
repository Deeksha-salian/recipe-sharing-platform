const express=require('express')
const mongoose=require('mongoose')
require('dotenv').config()
const User=require('./models/User')
const bcrypt=require('bcryptjs')
const app=express()
const PORT=3000
app.use(express.json());
app.get('/',(req,res)=>{
    res.send("<h1 align=center>Welcome to MERN stack</h1>")
})
app.post('/register',async(req,res)=>{
    const {username,email,password}=req.body
    try{
         const hashedPassword=await bcrypt.hash(password,10)
         const user=new User ({username,email,password:hashedPassword})
         await user.save()
         res.json({message:"User registered..."})
         console.log("User Registration completed")
    }
    catch(err){
        console.log(err)
    }
})
app.post('/login',async(req,res)=>{
    const {email,password}=req.body
    try{
        const user = await User.findOne({ email });
        if (!user || !(await bcrypt.compare(password, user.password))) 
            {
             return res.status(400).json({ message: "Invalid Credentials" });
            }
          res.json({ message: "Login Successful", username: user.username });
    }
    catch(err)
    {
        console.log(err)
    }
})
const Recipe = require('./models/recipe');

app.post('/recipe', async (req, res) => {
  const { name, image, description, ingredients, instructions } = req.body;

  if (!name || !ingredients || !instructions) {
    return res.status(400).json({ message: "Name, ingredients, and instructions are required" });
  }

  try {
    const newRecipe = new Recipe({ name, image, description, ingredients: ingredients.split(','), instructions });
    await newRecipe.save();
    res.status(201).json({ message: "Recipe added successfully", recipe: newRecipe });
  } catch (err) {
    res.status(500).json({ error: "Failed to add recipe", details: err.message });
  }
});

mongoose.connect(process.env.MONGO_URL).then(
    ()=>console.log("Database connected succesfully")
).catch(
    (err)=>console.log(err)
)

app.listen(PORT,(err)=>{
    if(err)
    {
        console.log(err)
    }
    console.log("server is running on the port:"+PORT)
})