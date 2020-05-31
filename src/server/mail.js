const nodemailer = require("nodemailer");

const transport = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS
    }
});

const myEmail = process.env.MAIL_DESTINATION;

exports.sendMessage = (req, res) => {
    let dest = "";
    let bcc = "";

    // Honeypot
    if (req.body.address) {
        console.error("honeypot");
        res.send({ success: false, type: "robot" });
        return false;
    }

    if (req.body.requestCopy) {
        // By using bcc my personal email won't be exposed to email sender
        dest = req.body.email;
        bcc = myEmail;
    } else {
        dest = myEmail;
    }

    const sender = {
        name: req.body.name,
        email: req.body.email,
        msg: req.body.message
    };

    mailOptions = {
        from: `Daisho <noreply@${process.env}>`,
        to: dest,
        bcc,
        subject: req.body.requestCopy
            ? `Copy: Message from ${sender.name}`
            : `Message from ${sender.name}`,
        text: `Name: ${sender.name}. Content: ${sender.msg} Email: ${sender.email}`,
        html: `<p>Name: ${sender.name}</p><br><p>Message: ${sender.msg}</p><br><p>Email: ${sender.email}</p>`
    };

    return transport.sendMail(mailOptions, (err) => {
        if (err) {
            console.error(err);
        } else {
            res.send({ success: true, type: "human" });
        }
    });
};
