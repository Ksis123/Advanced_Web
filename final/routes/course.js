var expressFunction = require("express");
const router = expressFunction.Router();

let courses = require("../data/course_data");
const authorization = require('../config/authorize')

router.route('/courses')
    .get(authorization, (req, res) => {
        res.status(200).json(courses);
        console.log(courses)
    })

module.exports = router