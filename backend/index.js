import express from 'express';  
import dotenv from 'dotenv';
import connectDb from './db/index.js';

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome the back, back the welcome!');
});


connectDb()
.then(() => {
    app.listen(PORT, () => {
        console.log(`Server is Successfully running on ${PORT} ✅;`);
    })
})
.catch((error) => {
    console.error('Failed to connect to the database', error);
});