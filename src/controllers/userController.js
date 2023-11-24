import user from "../models/User.js";

class UserController {
  static async list (req, res) {
    try {
      const listUser = await user.find({});
      res.status(200).json(listUser);
    } catch (erro) {
      res.status(500).json({ message: `${erro.message} - error to list` });
    }
  };

  static async register(req, res) {
    try {
      const newRegister = await user.create(req.body)
      res.status(201).json({message: 'success',  newRegister: newRegister});
    } catch (err) {
      res.status(500).json({message: `${err.message} - error to register user!`});
    }
  };
};

export default UserController;