const express = require('express');
const router = express.Router();
const Book = require('../model/Book');
const MagicItem = require('../model/MagicItem');
const booksController = require('../controllers/books-controller');
const magicItemController = require('../controllers/magic-items-controller')

// books
router.get("/", booksController.getAllBooks); 
router.post("/", booksController.addBook);
router.get("/:id", booksController.getById);
router.put("/:id", booksController.updateBook);
router.delete("/:id", booksController.deleteBook);

// magic items
router.get("/", magicItemController.getAllItems); 
router.post("/", magicItemController.addItem);
router.get("/:id", magicItemController.getById);
router.put("/:id", magicItemController.updateItem);
router.delete("/:id", magicItemController.deleteItem);

module.exports = router;