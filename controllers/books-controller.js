const Book = require('../model/Book');

const getAllBooks = async (req, res, next) => {
     let books;
    try {
        books = await Book.find();
    } catch (err) {
        console.log(err);
    }
    if (!books) {
        return res.status(404).json({message: 'No products found...'})
    }
    return res.status(200).json({books})
}

const addBook = async (req, res, next) => {
    const { name, author, description, price, available } = req.body
    let book;
    try {
        book = new Book({
            name,
            author,
            description,
            price,
            available
        });
        await book.save();
    } catch (err) {
        console.log(err)
    }

    if (!book) {
        return res.status(500).json({ message: 'Unable to add book...' })
    }
    return res.status(201).json({ book });
}

const getById = async (req, res, next) => {
    const id = req.params.id;
    let book;
    try {
        book = await Book.findById(id);
    } catch (err) {
        console.log(err);
    }
}

exports.getAllBooks = getAllBooks;
exports.addBook = addBook;
exports.getById = getById;