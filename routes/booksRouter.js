const express = require('express')
const router = express.Router()
const booksController = require('../controller/booksController')
//get

router.post('/books',booksController.CreateBooks)

router.get('/books',booksController.GetAllBooks)

router.get('/books/:id',booksController.GetBookById)

router.delete('/books/:id',booksController.DeleteById)

router.put('/books/:id',booksController.EditBook)
module.exports = router