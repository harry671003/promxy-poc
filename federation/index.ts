
import express from 'express';
import axios, { Method } from 'axios';
import process from 'process';
import config from './config';

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('*', async (req, res) => {
  const results: any = {}

  for (let backend of config.backends) {
    const result = await axios({
      method: req.method as Method,
      url: backend + req.path,
      params: req.query,
    }).catch(function (error) {
      console.log("Error: ", error)
    });
    
    results[backend] = result?.data;
  }

  res.send(results);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);

process.on('SIGINT', () => {
  console.info("Exiting")
  process.exit(0)
})
