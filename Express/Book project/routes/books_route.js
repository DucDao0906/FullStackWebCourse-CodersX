const express = require('express');
const router = express.Router();
const multer  = require('multer');
const upload = multer({ dest: './public/uploads/' });
// controller
const booksController=require('../controller/books_controller');

// show list books
router.get('/', booksController.home);
// add books
router.post('/add', upload.single('bookImg'), booksController.add);
// edit books
router.get('/:id/edit', booksController.editHome);
router.post('/save',  booksController.editSave);
// delete books
router.get('/:id/delete', booksController.delete);

module.exports=router;
