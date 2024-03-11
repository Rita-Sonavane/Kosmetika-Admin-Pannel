import dotenv from 'dotenv';
dotenv.config();
import express from "express";
import cors from "cors";
import { Router } from "express";
import { dbConnect } from './configs/database.config';
import skin_care_product from './routers/skin_care_product.router';
import hair_care_product from './routers/hair_care_product.router';
dbConnect();


const app = express();
app.use(express.json());
app.use(cors({
    credentials:true,
    origin:["http://localhost:4200"]
  
}));


//skin_care
app.use("/api/skin_care",skin_care_product);

/////////////////////////////////////////////////////

//Hair_Care

app.use("/api/hair_care",hair_care_product);




  
//Port 
const port= 4000;

app.listen(port, () => {
    console.log("Website served on http://localhost:" + port);
})