const express = require('express');
const router = express.Router();
const Book = require('../../models/Book');
const { check, validationResult } = require('express-validator');
const auth = require('../../middleware/auth');
const User = require('../../models/User');

// @route  GET api/books
// @desc   Get all book list
// @access Public
router.get('/', async (req, res) => {
  try {
    const books = await Book.find({ stock: { $gt: 0 } });
    res.status(200).json(books);
  } catch (err) {
    console.log(err.message);
    res.status(500).send('Server Error');
  }
});

// @route  GET api/books/:bookId
// @desc   Get a book
// @access Public
router.get('/:bookId', async (req, res) => {
    try {
      let bookId = req.params.bookId;
      const book = await Book.findById(bookId);
      if (!book) {
        return res
          .status(400)
          .json({ errors: [{ message: 'Could not find a book by this id' }] });
      }
      res.status(200).json(book);
    } catch (err) {
      console.log(err.message);
      res.status(500).send('Server Error');
    }
  });
  





module.exports = router;
