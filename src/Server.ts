import cookieParser from 'cookie-parser';
import express from 'express';
import { Request, Response } from 'express';
import logger from 'morgan';
import path from 'path';
const cors = require('cors')
import BaseRouter from './routes';

// Init express
const app = express();

// Add middleware/settings/routes to express.
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
app.use('/api', BaseRouter);

const staticDir = path.join(__dirname, 'public');
app.use(express.static(staticDir));
app.get('*', (req: Request, res: Response) => {
    res.sendFile('index.html', {root: staticDir});
});

app.post('/getWeather', cors(), async (req, res, next) => {
	console.log("IN getWeather");

	res.json({"response": "got a response!"});
  // let YOUR_TEAM_ID = req.params.teamID;
  // const date = req.params.date;
  // const body = req.body;

  // try 
  // {
  //   url = "https://statsapi.web.nhl.com/api/v1/schedule?teamId=" + YOUR_TEAM_ID + "&date=" + date;
  //   const response = await fetch(url);
    
  //   res.json({"worthWatching": worthWatching, "error": error});
  // } 
})

//fetch("https://api.darksky.net/forecast/0ef0604893d974aa6996fba8f2805901/37.8267,-122.4233")

// Export express instance
export default app;
