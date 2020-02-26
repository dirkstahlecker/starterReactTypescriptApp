import { Router } from 'express';
const fetch = require("node-fetch");

// Init router and path
const router = Router();

// Add sub-routes
// router.use('/users', UserRouter);

router.get('/getWeather', async (req, res) => {
	console.log("in index.ts /getWeather");

	const url = "https://api.darksky.net/forecast/0ef0604893d974aa6996fba8f2805901/42.373611,-71.110558";
  const response_raw = await fetch(url);
  const response = await response_raw.json();

  console.log(response);
  console.log(response["currently"]["temperature"]);

  return res.json({"response": response});
});

// Export the base-router
export default router;
