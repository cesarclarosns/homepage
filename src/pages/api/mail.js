const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default (req, res) => {
  const body = JSON.parse(req.body);

  const message = `
    Name: ${body.name}\r\n
    Email: ${body.email}\r\n
    Subject: ${body.subject}\r\n
    Body: ${body.message}\r\n
  `;

  const msg = {
    to: "cesarclarosns@aol.com",
    from: "cesarclarosns@gmail.com",
    subject: "MyHomepage form message!",
    text: message,
    html: message.replace(/\r\n/g, "<br>"),
  };

  sgMail.send(msg);

  res.status(200).json({ status: "Ok" });
};
