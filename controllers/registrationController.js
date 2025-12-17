const Registration = require("../models/Registration");

exports.registerEvent = async (req, res) => {
  try {
    const registration = await Registration.create(req.body);
    res.status(201).json(registration);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
