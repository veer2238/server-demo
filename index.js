import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";

import dotenv from "dotenv";
import nodemailer from 'nodemailer';

import schedule from 'node-schedule'



dotenv.config();



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
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER1,
      subject: `V-Ex Tech Solution! - 🎉 Happy Birthday 🎂`,
      html: `
      <img src="https://i.ibb.co/xYYx4KL/Untitled-13.png" alt="Untitled-13" border="0" style="width:100%;">
      `,
    };
  
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.response);
    console.log('Birthday emails sent successfully');
  } catch (err) {
    console.error('Error sending email:', err);
  }
});

   
  

 







app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
