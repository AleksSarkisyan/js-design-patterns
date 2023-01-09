import express from 'express';
import hbs from 'hbs';
import router from './routes/routes.js';
import path from 'path';
import * as url from 'url';

const app = express()
const PORT = 3000
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

app.set('view engine', hbs)
app.use('/', router)
app.use(express.static(path.join(__dirname, '/public')))

app.listen(PORT, () => {
  console.log(`app is running on PORT ${PORT}`)
})

export default app;