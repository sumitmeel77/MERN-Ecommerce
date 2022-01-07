const nodeMailer = require("nodemailer");

// for this functionality refer gfg blog 

const sendEmail = async (data) => {
    const transporter = nodeMailer.createTransport({
        service: process.env.Email_SERVICE,
        auth: {
            user: process.env.Email_MAIL,
            pass: process.env.Email_PASSWORD,
        },
    });

    const mailOptions = {
        from: process.env.Email_MAIL,
        to: data.email,
        subject: data.subject,
        text: data.message,
    };

    await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;