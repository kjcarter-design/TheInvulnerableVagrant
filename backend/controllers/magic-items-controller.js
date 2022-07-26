const MagicItem = require('../model/MagicItem');

const getAllMagicItems = async (req, res, next) => {
     let magicItems;
    try {
        magicItems = await MagicItem.find();
    } catch (err) {
        console.log(err);
    }
    if (!magicItems) {
        return res.status(404).json({message: 'No products found...'})
    }
    return res.status(200).json({magicItems})
}

const addMagicItem = async (req, res, next) => {
    const { name, author, description, price, available, image } = req.body
    let magicItem;
    try {
        magicItem = new MagicItem({
            name,
            author,
            description,
            price,
            available,
            image
        });
        await magicItem.save();
    } catch (err) {
        console.log(err)
    }

    if (!magicItem) {
        return res.status(500).json({ message: 'Unable to add Item...' })
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
    if (!book) {
        return res.status(404).json({ message: 'No book found...' })
    }
    return res.status(200).json({ book })
}
const updateBook = async (req, res, next) => {
    const id = req.params.id;
    const { name, author, description, price, available, image } = req.body
    let book;
    try {
        book = await Book.findByIdAndUpdate(id, {
            name,
            author,
            description,
            price,
            available,
            image
        });
        await book.save();
    } catch (err) {
        console.log(err)
    }

    if (!book) {
        return res.status(500).json({ message: 'Unable to update book...' })
    }
    return res.status(200).json({ book });
}

const deleteBook = async (req, res, next) => {
    const id = req.params.id;
    let book;
    try {
        book = await Book.findByIdAndRemove(id);
    } catch (err) {
        console.log(err);
    }
    if (!book) {
        return res.status(404).json({ message: 'Cannot delete book...' })
    }
    return res.status(200).json({ message: 'product successfully deleted!' });
}

exports.getAllMagicItems = getAllMagicItems;
exports.addMagicItem = addMagicItem;
exports.getById = getById;
exports.updateMagicItem = updateMagicItem;
exports.deleteMagicItem = deleteMagicItem;