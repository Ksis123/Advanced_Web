var expressFunction = require("express");
const shoe = expressFunction.Router();
var expressFunction = require("express");
const router = expressFunction.Router();
const auth = require("../config/authorize");

const products = [
    {
        id: 'cpu',
        type: '100001',
        name: 'AMD Ryzen 7000 series',
        price: 10,
        quantity: 10
    }
];

router.route('/products').get(auth, (req, res) => {
    res.status(200).json(products);
})

module.exports = router