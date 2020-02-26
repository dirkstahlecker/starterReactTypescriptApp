import { Router } from 'express';
const fetch = require("node-fetch");
const nodemailer = require("nodemailer");

// Init router and path
const router = Router();

// Add sub-routes
// router.use('/users', UserRouter);


router.get('/getWeather', async (req, res) => {
	console.log("in index.ts /getWeather");

	const url = "https://api.darksky.net/forecast/0ef0604893d974aa6996fba8f2805901/42.373611,-71.110558";
  const response_raw = await fetch(url);
  const response = await response_raw.json();

  const currentTemp = response["currently"]["temperature"];




let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    requireTLS: true,
    auth: {
        user: 'sendmailprogrammatically@gmail.com',
        pass: 'rockswitchjar'
    }
});

	var mailOptions = {
	  from: 'dirkstahlecker24@gmail.com',
	  to: 'dirkstahlecker24@gmail.com',
	  subject: 'Sending Email using Node.js',
	  text: 'That was easy!'
	};

	transporter.sendMail(mailOptions, (error: any, info: any) => {
	  if (error) {
	    console.log(error);
	  } else {
	    console.log('Email sent: ' + info.response);
	  }
	});







  return res.json({"currentTemp": currentTemp});
});

// Export the base-router
export default router;
