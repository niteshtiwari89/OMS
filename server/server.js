const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const calenderRoutes = require('./routes/calenderRoutes')
const cors = require('cors');

// Initialize Express
const app = express();
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
connectDB();

// Middleware
app.use(bodyParser.json());

// app.get('/users', async (req, res) => {
//     try {
//       const users = await User.find();  // Fetch all users
//       res.status(200).json(users);
//     } catch (err) {
//       res.status(500).send('Error retrieving users');
//     }
//   });
// Routes
app.use('/users', userRoutes);
app.use('/', calenderRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
