const express = require('express')

const PORT = process.env.PORT || 3050;

const app = express();


//get routes

const auth = require('./routes/auth')


//usamos las rutas
app.use(express.json());

app.use('/api/auth', auth)


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));