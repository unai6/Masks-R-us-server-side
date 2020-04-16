const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        name: String,
        email: { type: String, require: true, unique: true },
        password: { type: String, require : true },
        shippingAddress: String,
        cartList: [{
            productId: {type: Schema.Types.ObjectId, ref: 'Product'},
            quantity: {type: Number, default: 1}
        }],
        wishList: [{ type: Schema.Types.ObjectId, ref: 'Product' }]
    },
    {
        timestamps: true
    }
);

const User = mongoose.model('User', userSchema);

module.exports = User;


