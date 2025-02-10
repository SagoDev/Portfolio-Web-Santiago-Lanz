require('dotenv').config();

const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: 587,
    secure: false,
    auth: {
        user: process.env.SMTP_USERNAME,
        pass: process.env.SMTP_PASSWORD
    }
});

app.post("/send-email", async (req, res) => {
    try {

        let transporter = nodemailer.createTransport({
            host: "smtp.elasticemail.com",
            port: 587,
            secure: false,  
            auth: {
                user: process.env.EMAIL_USER, 
                pass: process.env.EMAIL_PASS,
            },
        });

        let info = await transporter.sendMail({
            from: `"Portafolio Web" <${process.env.EMAIL_USER}>`,
            to: "portfolioweb019@gmail.com",
            subject: req.body.subject,
            html: `<p>Nombre: ${req.body.name}</p>
                   <p>Email: ${req.body.email}</p>
                   <p>Mensaje: ${req.body.message}</p>`,
        });

        console.log("Correo enviado:", info);
        res.json({ success: true, message: "Correo enviado" });

    } catch (error) {
        console.error("Error enviando correo:", error); 
        res.status(500).json({ success: false, error: error.message });
    }
});


app.listen(3000, () => console.log('Servidor corriendo en el puerto 3000'));
