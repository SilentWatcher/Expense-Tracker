import express from "express";
// import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from "./db/db.js";
import fs from 'fs'; // to read files from folder route


// dotenv.config()

const app = express();

// we want to give access of server so 
//cors=> crosss origin resource sharing | it help to access info from 3rd party website  
//cors is middleware 

//middleware 
app.use(express.json()) //application needs data to json 
app.use(cors()) // run in problems while accessing our server 

// fs.readdirSync('./routes') //arrary of files 
// const read_file = fs.readdirSync('./routes')
// read_file.map((route)=> app.use('api/v1', import('./routes/' + route)))
// fs.readdirSync('./routes').map( async (route)=>app.use('api/v1',await import(`./routes/${route}` )))
// console.log(read_file)

const routes = fs.readdirSync('./routes');
routes.map(route => {
    import(`./routes/${route}`).then(routeModule => {
        app.use('/api/v1', routeModule.default);
    }).catch(error => {
        console.error(`Error loading route ${route}:`, error);
    });
});
// console.log(routes)



// app.get('/',(req, res)=>{
//     res.send(`<h1>Hello there </h1>`)
// })//middleware  

const PORT = process.env.PORT ||3000; //PORT= 4000
// console.log(PORT)

const server = ()=>{
    connectDB()
    app.listen(PORT, ()=>{
        console.log(`server is launching on port ${PORT}`)
        
    })
}
server()