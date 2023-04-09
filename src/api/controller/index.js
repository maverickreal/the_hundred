const Handler = require('../handler/'),
    router = require('express').Router();

router.get('/api/check/', Handler.check);

module.exports = router;