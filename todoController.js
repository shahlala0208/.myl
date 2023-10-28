// todoController.js
const Todo = require('../models').Todo;

const listTodos = async (req, res) => {
  try {
    const todos = await Todo.findAll();
    return res.status(200).json(todos);
  } catch (error) {
    return res.status(500).json({ error: 'Error fetching todos' });
  }
};

module.exports = {
  listTodos,
  // ...other CRUD operations
  // Import model ToDo
const ToDo = require('../models/todoModel');

// Operasi untuk mengambil semua tugas
exports.getAllTodos = (req, res) => {
  ToDo.find({}, (err, todos) => {
    if (err) {
      res.status(500).json({ error: 'Gagal mengambil tugas' });
    } else {
      res.json(todos);
    }
  });
};

// Operasi untuk membuat tugas baru
exports.createTodo = (req, res) => {
  const newTodo = new ToDo(req.body);
  newTodo.save((err, todo) => {
    if (err) {
      res.status(500).json({ error: 'Gagal membuat tugas' });
    } else {
      res.json(todo);
    }
  });
};

// Operasi untuk mengambil tugas berdasarkan ID
exports.getTodoById = (req, res) => {
  ToDo.findById(req.params.id, (err, todo) => {
    if (err) {
      res.status(500).json({ error: 'Gagal mengambil tugas' });
    } else {
      if (todo) {
        res.json(todo);
      } else {
        res.status(404).json({ error: 'Tugas tidak ditemukan' });
      }
    }
  });
};

// Operasi untuk mengupdate tugas berdasarkan ID
exports.updateTodo = (req, res) => {
  ToDo.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, todo) => {
    if (err) {
      res.status(500).json({ error: 'Gagal mengupdate tugas' });
    } else {
      if (todo) {
        res.json(todo);
      } else {
        res.status(404).json({ error: 'Tugas tidak ditemukan' });
      }
    }
  });
};

// Operasi untuk menghapus tugas berdasarkan ID
exports.deleteTodo = (req, res) => {
  ToDo.findByIdAndRemove(req.params.id, (err, todo) => {
    if (err) {
      res.status(500).json({ error: 'Gagal menghapus tugas' });
    } else {
      if (todo) {
        res.json({ message: 'Tugas berhasil dihapus' });
      } else {
        res.status(404).json({ error: 'Tugas tidak ditemukan' });
      }
    }
  });
};

};
