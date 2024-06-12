const express = require('express');
const cors = require ('cors');
const connectDB = require('./db');
const userRoutes = require('./routes/userRoutes');


const app = express();
const port = process.env.PORT || 5000;


app.use(express.json());
app.use(cors());

connectDB();


app.use('/api/users', userRoutes);



app.listen(port, () => console.log(`server listening on port ${port}`));