import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.post("/contact", async (req, res) => {
    const { name, phone, email, purpose } = req.body;

    if (!name || !phone || !email || !purpose) {
        return res.status(400).json({ error: "All fields are required." });
    }

    try {
        const transporter = nodemailer.createTransport({
            service: "gmail", // or your SMTP provider
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        await transporter.sendMail({
            from: `"Church Website" <${process.env.EMAIL_USER}>`,
            to: process.env.TO_EMAIL,
            subject: "New Contact Form Submission",
            text: `\nName: ${name}\nPhone: ${phone}\nEmail: ${email}\nPurpose: ${purpose}\n`,
            html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Purpose:</strong> ${purpose}</p>
      `,
        });

        res.json({ success: true });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Failed to send email." });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
