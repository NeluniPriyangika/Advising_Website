const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
//const morgan = require('morgan');
//const cors = require('cors');


 
//console.log ("hi neluni")

dotenv.config();
const app = express();





// Database Connection
mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.log(err));

// Routes
//app.use('/api/googleauth', googleAuthRoutes);


// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
