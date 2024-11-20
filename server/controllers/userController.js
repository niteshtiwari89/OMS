// // const User = require('../models/userModel');
// // const bcrypt = require('bcryptjs');

// // // Signup Controller
// // const registerUser = async (req, res) => {
// //     const { name, email, password, role } = req.body;

// //     // Check if all fields are provided
// //     if (!name || !email || !password) {
// //         return res.status(400).json({ msg: 'Please enter all fields' });
// //     }

// //     try {
// //         // Check if the user already exists
// //         let user = await User.findOne({ email });
// //         if (user) {
// //             return res.status(400).json({ msg: 'User already exists' });
// //         }

// //         // Create new user
// //         user = new User({
// //             name,
// //             email,
// //             password,
// //             role: role || 'user',
// //         });

// //         // Hash the password
// //         const salt = await bcrypt.genSalt(10);
// //         user.password = await bcrypt.hash(password, salt);

// //         // Generate a 4-digit random ID
// //         user.userId = Math.floor(1000 + Math.random() * 9000);  // Generates a random 4-digit number

// //         // Save user to DB
// //         await user.save();

// //         res.status(201).json({ msg: 'User registered successfully', userId: user.userId, role: user.role, });

// //     } catch (error) {
// //         console.error(error.message);
// //         res.status(500).send('Server error');
// //     }
// // };

// // // Login Controller
// // const loginUser = async (req, res) => {
// //     const { email, password } = req.body;

// //     // Check if all fields are provided
// //     if (!email || !password) {
// //         return res.status(400).json({ msg: 'Please enter all fields' });
// //     }

// //     try {
// //         // Check if user exists
// //         const user = await User.findOne({ email });
// //         if (!user) {
// //             return res.status(400).json({ msg: 'Invalid credentials' });
// //         }

// //         // Check if password matches
// //         const isMatch = await bcrypt.compare(password, user.password);
// //         if (!isMatch) {
// //             return res.status(400).json({ msg: 'Invalid credentials' });
// //         }

// //         res.status(200).json({
// //             msg: 'Login successful', userId: user.userId,
// //             email: user.email,
// //             role: user.role,
// //         });

// //     } catch (error) {
// //         console.error(error.message);
// //         res.status(500).send('Server error');
// //     }
// // };

// // module.exports = {
// //     registerUser,
// //     loginUser
// // };



// const User = require('../models/userModel');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');

// // Secret key for JWT (use an environment variable for security)
// const JWT_SECRET = process.env.JWT_SECRET || 'yourSuperSecretKey';  // Make sure to store this securely in .env



// // Signup Controller
// const registerUser = async (req, res) => {
//     const { name, email, password, role } = req.body;

//     // Check if all fields are provided
//     if (!name || !email || !password) {
//         return res.status(400).json({ msg: 'Please enter all fields' });
//     }

//     try {
//         // Check if the user already exists
//         let user = await User.findOne({ email });
//         if (user) {
//             return res.status(400).json({ msg: 'User already exists' });
//         }

//         // Create new user
//         user = new User({
//             name,
//             email,
//             password,
//             role: role || 'user',
//         });

//         // Hash the password
//         const salt = await bcrypt.genSalt(10);
//         user.password = await bcrypt.hash(password, salt);

//         // Generate a 4-digit random ID
//         user.userId = Math.floor(1000 + Math.random() * 9000);  // Generates a random 4-digit number

//         // Save user to DB
//         await user.save();

//         // Generate JWT token
//         const payload = {
//             userId: user.userId,
//             email: user.email,
//             role: user.role,
//         };

//         // Create a token that expires in 1 hour
//         const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' });

//         res.status(201).json({
//             msg: 'User registered successfully',
//             userId: user.userId,
//             role: user.role,
//             token,  // Include token in the response
//         });

//     } catch (error) {
//         console.error(error.message);
//         res.status(500).send('Server error');
//     }
// };

// // Login Controller
// const loginUser = async (req, res) => {
//     const { email, password } = req.body;

//     // Check if all fields are provided
//     if (!email || !password) {
//         return res.status(400).json({ msg: 'Please enter all fields' });
//     }

//     try {
//         // Check if user exists
//         const user = await User.findOne({ email });
//         if (!user) {
//             return res.status(400).json({ msg: 'Invalid credentials' });
//         }

//         // Check if password matches
//         const isMatch = await bcrypt.compare(password, user.password);
//         if (!isMatch) {
//             return res.status(400).json({ msg: 'Invalid credentials' });
//         }

//         // Generate JWT token
//         const payload = {
//             userId: user.userId,
//             email: user.email,
//             role: user.role,
//         };

//         // Create a token that expires in 1 hour
//         const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' });

//         res.status(200).json({
//             msg: 'Login successful',
//             userId: user.userId,
//             email: user.email,
//             role: user.role,
//             token,  // Include token in the response
//         });

//     } catch (error) {
//         console.error(error.message);
//         res.status(500).send('Server error');
//     }
// };

// module.exports = {
//     registerUser,
//     loginUser,
// };


const User = require('../models/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Secret key for JWT (use an environment variable for security)
const JWT_SECRET = process.env.JWT_SECRET || 'yourSuperSecretKey';  // Make sure to store this securely in .env

// Valid roles for users
const validRoles = ['user', 'admin'];

// Signup Controller
const registerUser = async (req, res) => {
    const { name, email, password, role } = req.body;

    // Check if all fields are provided
    if (!name || !email || !password) {
        return res.status(400).json({ msg: 'Please enter all fields' });
    }

    // Validate role if provided
    if (role && !validRoles.includes(role)) {
        return res.status(400).json({ msg: 'Invalid role provided. Allowed roles: user, admin' });
    }

    try {
        // Check if the user already exists
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ msg: 'User already exists' });
        }

        // Create new user with default role as 'user' if no role provided
        user = new User({
            name,
            email,
            password,
            role: role || 'user',
        });

        // Hash the password
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);

        // Generate a 4-digit random ID (or use Mongo's default _id)
        user.userId = Math.floor(1000 + Math.random() * 9000);  // Generates a random 4-digit number

        // Save user to DB
        await user.save();

        // Generate JWT token
        const payload = {
            userId: user.userId,
            email: user.email,
            role: user.role,
        };

        // Create a token that expires in 1 hour
        const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' });

        res.status(201).json({
            msg: 'User registered successfully',
            userId: user.userId,
            role: user.role,
            token,  // Include token in the response
        });

    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server error');
    }
};
const getUser = async (req, res) => {
    try {
      const users = await User.find();  // Fetch all users
      res.status(200).json(users);
    } catch (err) {
      res.status(500).send('Error retrieving users');
    }
  };

// Login Controller
const loginUser = async (req, res) => {
    const { email, password } = req.body;

    // Check if all fields are provided
    if (!email || !password) {
        return res.status(400).json({ msg: 'Please enter all fields' });
    }

    try {
        // Check if user exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ msg: 'Invalid credentials' });
        }

        // Check if password matches
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ msg: 'Invalid credentials' });
        }

        // Generate JWT token
        const payload = {
            userId: user.userId,
            email: user.email,
            role: user.role,
        };

        // Create a token that expires in 1 hour
        const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' });

        res.status(200).json({
            msg: 'Login successful',
            userId: user._id,
            email: user.email,
            role: user.role,
            token,  // Include token in the response
        });

    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server error');
    }
};

module.exports = {
    registerUser,
    loginUser,
    getUser
};
