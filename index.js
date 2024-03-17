import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";


import nodemailer from 'nodemailer';

import schedule from 'node-schedule'






const app = express();
const port = 2238;

// Connect to MongoDB
mongoose
  .connect(
    "mongodb+srv://veer2238rajput:STrgrNlEXyfMZHBs@cluster0.3chkue4.mongodb.net/Contact?retryWrites=true&w=majority"
  )
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));
  app.use(cors());

  app.use(bodyParser.json());


app.get("/", async (req, res) => {
 
   res.send("hi")
});


















schedule.scheduleJob('* * * * *', async () => {
 

  

        const transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: 'veer2238rajput@gmail.com',
            pass: 'ngpb hgqv hztj cuuc'
          },
        });

        const mailOptions = {
          from: 'veer2238rajput@gmail.com',
          to:'himanshu0409agraval@gmail.com',
          subject: `V-Ex Tech Solution! - 🎉 Happy Birthday 🎂`,
          html: `
          <img src="https://i.ibb.co/xYYx4KL/Untitled-13.png" alt="Untitled-13" border="0" style="width:100%;">
          `,
        };
      
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent:', info.response);
        console.log('Birthday emails sent successfully');
      
    })

   
  

 







app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
