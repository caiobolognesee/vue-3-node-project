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

  static async listById(req, res) {
    try {
      const id = req.params.id;
      const listUserById = await user.findById(id);
      res.status(200).json({ message: 'success', listUserById });
    } catch (erro) {
      res.status(500).json({ message: `${erro.message} - error to list by id` });
    }
  };

  static async register(req, res) {
    try {
      const newRegister = await user.create(req.body)
      res.status(201).json({message: 'success',  newRegister});
    } catch (err) {
      res.status(500).json({message: `${err.message} - error to register user!`});
    }
  };

  static async login(req, res) {
    try {
      const body = req.body
      res.status(201).json({ message: 'success', body });
    } catch (err) {
      res.status(500).json({ message: `${err.message} - error to login!` });
    }
  };

  static async updateById(req, res) {
    try {
      const id = req.params.id;
      await user.findByIdAndUpdate(id, req.body);
      const listUser = await user.find({});
      res.status(200).json(listUser);
    } catch (erro) {
      res.status(500).json({ message: `${erro.message} - error to update by id` });
    }
  };

  static async deleteById(req, res) {
    try {
      const id = req.params.id;
      await user.findByIdAndDelete(id, req.body);
      const listUser = await user.find({});
      res.status(200).json(listUser);
    } catch (erro) {
      res.status(500).json({ message: `${erro.message} - error to delete by id` });
    }
  };
};

export default UserController;