import mysql from 'mysql2';
import express from 'express'
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();

app.use(express.json())

app.use(cors());

const db = await mysql.createConnection({
    host: 'localhost',
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
})

console.log("Database connection Successful");


// await db.execute(`
//     CREATE TABLE  signup (
//     id INT AUTO_INCREMENT PRIMARY KEY,
//     name VARCHAR(255) NOT NULL,
//     email VARCHAR(255) NOT NULL UNIQUE,
//     password VARCHAR(255) NOT NULL
// )
//     `
// )

// await db.execute(`
//     CREATE TABLE login (
//     id INT AUTO_INCREMENT PRIMARY KEY,
//     email VARCHAR(255) NOT NULL UNIQUE,
//     password VARCHAR(255) NOT NULL
//     )
// `);

app.post('/signup',async(req,res)=>{
    const {name,email,password} = req.body;

    console.log("Data : ", name,email,password);
    
    const sql = "INSERT INTO signup (name,email,password) VALUES (? , ? , ?)"

    try{
        const [result] = await db.execute(sql,[name,email,password]);
        console.log("Insert Successfull",result);
        return res.status(200).json({message:"Success"});
    }
    catch(err){
        console.error("Database Error:", err);
        return res.status(500).json({ error: err.message });
    }
})


app.post('/login',async(req,res)=>{
    const {email,password} = req.body;

    console.log("Data : ", email,password);
    
    const sql = "INSERT INTO login (email,password) VALUES (? , ?)"

    try{
        const [result] = await db.execute(sql,[email,password]);
        console.log("Insert Successfull",result);
        return res.status(200).json({message:"Success"});
    }
    catch(err){
        console.error("Database Error:", err);
        return res.status(500).json({ error: err.message });
    }
})

const PORT = process.env.PORT || 4002;


app.use('/', (req, res) => {
    res.send('Home Page');
})

app.listen(PORT, () => {
    console.log("Server running on port : ", PORT);
})