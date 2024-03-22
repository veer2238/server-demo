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
      port: 2238,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      },
    });

    const mailOptions = {
      from:process.env.EMAIL_USER,
      to: 'himanshu0409@gmail.com',
      subject: `Receipt for Your Registration`,
      html: `
      <div style="background-color: #f3f3f3; padding: 20px;">
          <div style="background-color: #ffffff; border-radius: 10px; padding: 20px;">
              <p style="color: #333; font-size: 18px;">Dear Zankhna,</p>
              <p style="color: #333; font-size: 16px;">Thank you for registering with us!</p>
              <p style="color: #333; font-size: 16px;">Below is your receipt:</p>
              <hr style="border: 1px solid #ccc;">
              <div style="margin-top: 20px;">
                  <p style="color: #333; font-size: 16px;"><strong>Registration Details:</strong></p>
                  <ul style="list-style-type: none; padding-left: 0;">
                      <li><strong>Product:</strong> React.js + Backend</li>
                      <li><strong>Amount:</strong> Paid</li>
                      <li><strong>Date:</strong> March 18, 2024</li>
                  </ul>
              </div>
              <hr style="border: 1px solid #ccc;">
              <p style="color: #333; font-size: 16px;">If you have any questions or concerns, feel free to contact us.</p>
              <p style="color: #666; font-size: 16px;">Best regards,</p>
              <p style="color: #666; font-size: 16px;">V-Ex Tech Solution Team</p>
              <div style="margin-top: 20px;">
                  <a href="https://v-extechsolution.in" style="color: #3498db; font-size: 16px;">v-extechsolution.in</a><br>
                  <a href="mailto:veeragraval@v-extechsolution.in" style="color: #3498db; font-size: 16px;">veeragraval@v-extechsolution.in</a><br>
                  <a href="tel:9664768292" style="color: #3498db; font-size: 16px;">+91 9664768292</a>
              </div>
              <div style="margin-top: 20px;">
                  <a href="https://www.linkedin.com/company/v-ex-tech-software-company-in-vadodara/mycompany/" style="text-decoration: none; color: #333; padding:0 14px;"><img src="https://i.ibb.co/1MpdrG8/download-1.png" alt="LinkedIn" style="width: 15%;"></a>
                  <a href="https://www.youtube.com/@Veer_Agraval" style="text-decoration: none; color: #333; padding:0 14px;"><img src="https://i.ibb.co/b60S7TZ/download.png" alt="YouTube" style="width: 15%;"></a>
                  <a href="https://www.instagram.com/v_extech/?igshid=Zjc2ZTc4Nzk%3D" style="text-decoration: none; color: #333; padding:0 14px;"><img src="https://i.ibb.co/xYLHv49/download.jpg" alt="Instagram" style="width: 15%;"></a>
              </div>
              <p style="color: #666; font-size: 16px; margin-top: 20px;">Dhun Complex-301, Above Riya Bridal, near Amritsari Kulcha, opp. Pavan Park Society, Nizampura, Vadodara, Gujarat 390002</p>
          </div>
      </div>
      `,
      attachments: [
          {
              filename: 'Receipt.pdf',
              path: 'zakhna.pdf' // provide the path to your PDF file
          }
      ]
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
