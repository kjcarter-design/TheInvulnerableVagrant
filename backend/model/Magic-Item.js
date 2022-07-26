const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const magicItemSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    rarity: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
    },
    effects: {
        type: String,
    },
    price: {
        type: Number,
        required: true,
    },
    available: {
        type: Boolean,
    },
    image: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('MagicItem', magicItemSchema);