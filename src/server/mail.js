const axios = require("axios").default;
const nodemailer = require("nodemailer");

const transport = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

const validateHuman = async (token) => {
  const { data } = await axios.post(
    `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
  );
  return data?.success;
};

exports.sendMessage = async (req, res) => {
  const isHuman = await validateHuman(req.body.token);

  if (!isHuman) {
    return res.status(400).send({
      kind: "error",
      text: "You're not allowed to submit, bot",
    });
  }

  if (!req.body.name || !req.body.email || !req.body.message) {
    return res.status(400).send({
      kind: "error",
      text: "Name, email and message are required.",
    });
  }

  // Honeypot
  if (req.body.address) {
    return res.status(401).send({
      kind: "error",
      text: "You must be a robot.",
    });
  }

  const sender = {
    name: req.body.name,
    email: req.body.email,
    msg: req.body.message,
  };

  const mailOptions = {
    from: `Daisho <noreply@${process.env}>`,
    to: process.env.MAIL_DESTINATION,
    subject: req.body.requestCopy
      ? `Copy: Message from ${sender.name} via portfolio`
      : `Message from ${sender.name} via portfolio`,
    text: `Name: ${sender.name}. Content: ${sender.msg} Email: ${sender.email}`,
    html: `<p>Name: ${sender.name}</p><br><p>Message: ${sender.msg}</p><br><p>Email: ${sender.email}</p>`,
  };

  return transport.sendMail(mailOptions, (err) => {
    if (err) {
      console.error(err);
      res.status(500).send({
        kind: "error",
        text: "Umm.. something went wrong on our side. Not you.",
      });
    } else {
      res.status(200).send({
        kind: "success",
        text: `Thank you ${sender.name}, I will get back to you soon!`,
      });
    }
  });
};
