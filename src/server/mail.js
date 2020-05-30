const nodemailer = require("nodemailer");
// require("dotenv").config({
//     path: "variables.env"
// });
console.log("1:::", process.env.MAIL_HOST);
console.log("2:::", process.env.MAIL_PORT);
console.log("3:::", process.env.MAIL_USER);
console.log("4:::", process.env.MAIL_PASS);

const transport = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS
    }
});

exports.sendMessage = (req, res) => {
    console.log("SEND MESSAGE::::");

    // Honeypot
    // if (req.body.address) {
    //     console.error("honeypot");
    //     res.redirect("/");
    //     return false;
    // }

    const sender = {
        // name: req.body.name,
        name: "tester text",
        email: "emaile@fdsf.ca",
        msg: "testing"
    };

    mailOptions = {
        from: "Daisho <noreply@daishokomiyama@gmail.com>",
        to: "daishokomiyama@gmail.com",
        subject: `Message from ${sender.name}`,
        text: `Name: ${sender.name}. Content: ${sender.msg} Email: ${sender.email}`,
        html: `<p>Name: ${sender.name}</p><br><p>Message: ${sender.msg}</p><br><p>Email: ${sender.email}</p>`
    };

    return transport.sendMail(mailOptions, (err, info) => {
        if (err) {
            console.error(err);
        } else {
            res.send({ success: true });
        }
    });
};
