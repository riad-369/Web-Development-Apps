const router = require("express").Router();

// Import dependency for encrypting user info
const bcrypt = require("bcrypt");

// User models
const User = require("../models/users");

router.post("/sign-up",async (req, res) => {
	// finds the one user with those details
	const existingUser = await User.findOne({email: req.body.email});
	
	// Checks if that user preexist before completing the registration
	if (!existingUser) {
		await bcrypt.hash(req.body.password[0], 10, (err, hash) => {
			if (err) {
				console.error(err);
				return res.json({message: "could not complete the registration"});
			}
			else {
				const user = new User ( {
					ft_name: req.body.ft_name[0],
					lt_name: req.body.lt_name[0],
					email: req.body.email[0],
					password: hash,
				});
				
				// Saves the user info into the database
				user.save((error, result) => {
					// Returns a message stating there was an error signing up
					if (err) {
						console.log(err);
						return res.json({message: "Error with signing up, please try again later"});
					}
					
					// Returns a messages stating the account was made
					return res.json({message: "user created"});
				})
			}
		})
	}
	else {
		return res.json({message: "Email already in use"});
	}
});

module.exports = router;