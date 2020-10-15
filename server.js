const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');

const app=express();

connectDB();
//middleware
app.use(express.json({extended:false}));
app.use(express.urlencoded());
app.use(cors({ origin: true }));

//define routes
app.use('/api/users',require('./config/routes/api/users'));
app.use('/api/auth',require('./config/routes/api/auth'));
app.use('/api/profile',require('./config/routes/api/profile'));
app.get('/',(req,res)=>res.send('API Running'));



const PORT=process.env.PORT || 5000;
app.listen(PORT,()=>console.log(`Server started on port ${PORT}`));