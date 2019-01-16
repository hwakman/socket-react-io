const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send({respond:"Here i'am"}).status(200);
});

module.exports = router;