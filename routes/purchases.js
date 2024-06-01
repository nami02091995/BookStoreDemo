const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const auth = require('../../middleware/auth');
const Purchase = require('../../models/Purchase');
const Book = require('../../models/Book');
const User = require('../../models/User');





// @router  POST api/purchases
// @desc    Add to cart
// @access  Private
router.post(
  '/',
  auth,
  [check('bookId', 'The id provided is not a valid id').isMongoId()],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // Check if user exists
    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(400).json({
        errors: [{ message: 'This user does not exists' }]
      });
    }

    const bookId = req.body.bookId;

    try {
      let book = await Book.findById(bookId);

      if (!book) {
        return res.status(400).json({
          errors: [{ message: 'Could not find any book with this id' }]
        });
      }

      // check if book is in stock or not
      const stock = book.stock;
      if (stock < 1) {
        return res.status(400).json({
          errors: [{ message: 'Sorry, the book is out of stock' }]
        });
      }

      const newPurchase = new Purchase({
        user: req.user.id,
        book: bookId
      });

      // Decrease book stock by 1
      await book.updateOne({
        $set: {
          stock: stock - 1
        }
      });
      await newPurchase.save();

      res.status(200).json({
        newPurchase
      });
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);


module.exports = router;
