const express = require('express')

const config=require('./config')

const app = express();


//get routes

const auth = require('./routes/auth')


//usamos las rutas
app.use(express.json());

app.use('/api/auth', auth)



app.listen(config.api.port, () => console.log(`Server running on port ${config.api.port}`));