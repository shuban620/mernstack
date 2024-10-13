import Register from "../Model/register.js";

const registeruser = async (req, res) => {
  const { name, email, password, confirmPassword, role } = req.body;

  // Validate the input fields
  if (!name || !email || !password || !confirmPassword || !role) {
    return res.json({ message: "Please provide all the required fields" });
  }

  if (password !== confirmPassword) {
    return res.json({ message: "Passwords do not match" });
  }

  try {
    const existingUser = await Register.findOne({ email });
    if (existingUser) {
      return res.json({ message: "Email is already registered" });
    }

    const user = new Register({ name, email, password, role });

    await user.save();

    return res.json({ message: "User registered successfully" });

  } catch (error) {
    console.error("Error details:", error);

    return res.json({ message: "Error while registering user", error: error.message });
  }
};

export default registeruser;
